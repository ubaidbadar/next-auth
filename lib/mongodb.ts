import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  const _mongoClientPromise = global._mongoClientPromise;
  if (!_mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = _mongoClientPromise;
} else {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}


export default clientPromise;