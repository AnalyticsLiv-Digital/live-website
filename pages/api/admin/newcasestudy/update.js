// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from 'mongodb';

// Replace with your MongoDB connection string and database details
const uri = "mongodb+srv://anshuldhurandhar:Admin123@cluster0.b45r7wt.mongodb.net/?retryWrites=true&w=majority";
const dbName = "blogsdb";
const collectionName = "newcasestudies";

async function updateDatabaseItem(id,cstitle,title,description,slug,opendownload,coverimage,file, active,sequence, kpis, challenge, approach, results, categories) {
   const client = new MongoClient(uri);
   try {
     await client.connect();
     const db = client.db(dbName);
     const collection = db.collection(collectionName);
 
     // Update a single item in the database
     // Replace 'itemIdentifier' with the appropriate field you're matching against
     const filter = { id: id };
     const updateDoc = { $set: {
      'slug':slug,
      'title' : title,
      'cstitle' : cstitle,
      'description' : description,
      'thumb' : coverimage,
      'coverimage' : coverimage,
      'file':file,
      'active' : active,
      'sequence' : sequence,
      'open': opendownload,
      'categories' : categories,
      'kpis':kpis,
      'challenge':challenge,
      'approach':approach,
      'results':results
   
   } };
     const result = await collection.updateOne(filter, updateDoc);
 
     return result;
   } finally {
     await client.close();
   }
 }

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Fetch data from an external API
      console.log(req.body);
      var id = req.body.id;
      var slug = req.body.slug;
      var title=req.body.title;
      var cstitle = req.body.cstitle;
      var description=req.body.description;
      var coverimage=req.body.coverimage;
      var file=req.body.file;
      var active=req.body.active;
      var sequence=req.body.sequence;
      var opendownload=req.body.open;
      var kpis=req.body.kpis;
      var challenge=req.body.challenge;
      var approach=req.body.approach;
      var results=req.body.results;
      var categories = req.body.categories;
      
      // Update the MongoDB database with this data
      await updateDatabaseItem(id,cstitle,title,description,slug,opendownload,coverimage,file, active,sequence, kpis, challenge, approach, results, categories);

      res.status(200).json({ message: 'Database updated successfully!' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error updating database' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
