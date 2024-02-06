// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from 'mongodb';

// Replace with your MongoDB connection string and database details
const uri = "mongodb+srv://anshuldhurandhar:Admin123@cluster0.b45r7wt.mongodb.net/?retryWrites=true&w=majority";
const dbName = "blogsdb";
const collectionName = "casestudies";

async function updateDatabaseItem(id,title,description,slug,opendownload,coverimage,filename,author, publishdate, active,sequence, content) {
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
      'description' : description,
      'coveriamge' : coverimage,
      'filename':filename,
      'author' : author,
      'publishdate' : publishdate,
      'content':content,
      'active' : active,
      'sequence' : sequence,
      'open': opendownload
   
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
      var description=req.body.description;
      var coverimage=req.body.coverimage;
      var filename=req.body.filename;
      var author=req.body.author;
      var publishdate=req.body.publishdate;
      var content=[];
      var active=req.body.active;
      var sequence=req.body.sequence;
      var opendownload=req.body.open;
      if(req.body.heading1  && req.body.content1)
        content.push({
            heading:req.body.heading1,
            description:req.body.content1
        });

        if(req.body.heading2 && req.body.content2 )
        content.push({
            heading:req.body.heading2,
            description:req.body.content2
        });

        if(req.body.heading3 && req.body.content3 )
        content.push({
            heading:req.body.heading3,
            description:req.body.content3
        });

        if(req.body.heading4  && req.body.content4 )
        content.push({
            heading:req.body.heading4,
            description:req.body.content4
        });

        if(req.body.heading5  && req.body.content5 )
        content.push({
            heading:req.body.heading5,
            description:req.body.content5
        });
      // Update the MongoDB database with this data
      await updateDatabaseItem(id,title,description,slug,opendownload,coverimage,filename,author, publishdate, active,sequence, content);

      res.status(200).json({ message: 'Database updated successfully!' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error updating database' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
