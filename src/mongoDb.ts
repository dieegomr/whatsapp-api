import { MongoClient } from 'mongodb';

async function getAllMessages(phoneNumber: string) {
  const uri = process.env.MONGO_URI;

  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db(process.env.MONGO_DB_NAME);

    const collection = db.collection(process.env.MONGO_COLLECTION_NAME);

    const documents = await collection.find({}).toArray();

    const filtredDocumets = documents.filter((doc) => {
      return doc.key.remoteJid.split('@')[0] === phoneNumber;
    });

    return filtredDocumets;
  } catch (error) {
    console.log('Error getting messages from mongodb', error);
  }
}

const mongoDb = {
  getAllMessages,
};

export default mongoDb;
