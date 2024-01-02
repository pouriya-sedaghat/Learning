import { MongoClient } from 'mongodb';

export async function dbClient() {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017/shop');
    return client.db();
}