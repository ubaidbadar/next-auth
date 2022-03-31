import NextAuth from 'next-auth';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from '../../../lib/mongodb';
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import { compare, hash } from 'bcryptjs';


import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from 'next-auth/providers/linkedin';
import EmailProvider from 'next-auth/providers/email';


export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials, _req) => {
        await dbConnect();
        const { email, password } = { ...credentials, ..._req.body };
        console.log(email, password);
        if (!email || !password) return null;

        let user = await User.findOne({ email });

        if (!user) {
          const hashPassword = await hash(password, 12);
          user = await User.create({ email, password: hashPassword });
        }
        else if(!user.password) throw Error("Please logged in with OAuth provider");
        else if(!(await compare(password, user.password))) return null;


        const data = user._doc;
        delete data.password;

        return { ...data };
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    LinkedinProvider({
      clientId: process.env.LINKDIN_ID,
      clientSecret: process.env.LINKDIN_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        },
      },
      from: process.env.SMTP_FROM
    })
  ],
  secret: 'MY_Secrete_Custom',
  session: {
    maxAge: 24 * 60 * 60, // 1 day
    strategy: 'jwt',
  },
  pages: {
    signIn: "/signin",
  },
})
