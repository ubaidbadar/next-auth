import dbConnect from "./dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";


type cb = (req: NextApiRequest, res: NextApiResponse) => any;

const handler = (cb: cb, method: string) => async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await dbConnect();
        if (req.method !== method) throw Error('Method not allowed!');
        return await cb(req, res);
    }
    catch (e: any) {
        if (e.name === 'MongoServerError' && e.code === 11000) e.status = 422;
        res.status(+e.status || +e.statusCode || +e.code || 500).send(e);
    }
}


const app = {
    get: (cb: cb) => handler(cb, 'GET'),
    post: (cb: cb) => handler(cb, 'POST')
}

export default app;