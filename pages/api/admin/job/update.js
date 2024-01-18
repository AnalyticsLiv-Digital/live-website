// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from 'mongodb';
import fetch from 'node-fetch';

// Replace with your MongoDB connection string and database details
const uri = "mongodb+srv://anshuldhurandhar:Admin123@cluster0.b45r7wt.mongodb.net/?retryWrites=true&w=majority";
const dbName = "blogsdb";
const collectionName = "blogs";

async function updateDatabaseItem(item,title,description,slug,coverphoto,thumbnail,document_id,author, duration,date, active,sequence) {
   const client = new MongoClient(uri);
   try {
     await client.connect();
     const db = client.db(dbName);
     const collection = db.collection(collectionName);
 
     // Update a single item in the database
     // Replace 'itemIdentifier' with the appropriate field you're matching against
     const filter = { slug: 'blog-testing' };
     const updateDoc = { $set: {
      'content':item,
      'title' : title,
      'description' : description,
      'coverphoto' : coverphoto,
      'thumbnail' : thumbnail,
      'document_id' : document_id,
      'author' : author,
      'duration' : duration,
      'date' : date,
      'active' : active,
      'sequence' : sequence
   
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
      const response = await fetch('https://script.google.com/macros/s/AKfycbxidlMSRADTNk4kjam5Lf58cESQwxrntzlvO_kvcxx2dmSxdbD2NjxAbecDTyrFJNPs_w/exec?1zZa8YVH0_Mrwrc8MVGwGnuzGsalMQInWvF7o0VnplzA');
      const blogcontent = await response.text();

      console.log(blogcontent);
      var title = req.body.title;
      var description = req.body.description;
      var slug = req.body.slug;
      var coverphoto = req.body.coverphoto;
      var thumbnail = req.body.coverphoto;
      var document_id = req.body.document_id;
      var author = req.body.author;
      var duration = req.body.duration;
      var date = req.body.date;
      var active = req.body.active;
      var sequence = req.body.sequence;
      // Update the MongoDB database with this data
      await updateDatabaseItem(blogcontent,title,description,slug,coverphoto,thumbnail,document_id,author, duration,date, active,sequence);

      res.status(200).json({ message: 'Database updated successfully!' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error updating database' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
