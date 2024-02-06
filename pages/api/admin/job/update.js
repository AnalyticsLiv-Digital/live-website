// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from 'mongodb';

// Replace with your MongoDB connection string and database details
const uri = "mongodb+srv://anshuldhurandhar:Admin123@cluster0.b45r7wt.mongodb.net/?retryWrites=true&w=majority";
const dbName = "blogsdb";
const collectionName = "jobs";

async function updateDatabaseItem(id,title,brief,our_description,job_short_description,location,experience, postingdate, active, details,notice_period) {
   const client = new MongoClient(uri);
   try {
     await client.connect();
     const db = client.db(dbName);
     const collection = db.collection(collectionName);
 
     // Update a single item in the database
     // Replace 'itemIdentifier' with the appropriate field you're matching against
     const filter = { id: id };
     const updateDoc = { $set: {
      'brief':brief,
      'title' : title,
      'our_description' : our_description,
      'job_short_description' : job_short_description,
      'location':location,
      'experience' : experience,
      'postingdate' : postingdate,
      'details':details,
      'active' : Boolean(active),
      'notice_period' : notice_period
   
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
      var brief = req.body.brief;
      var title=req.body.title;
      var our_description=req.body.our_description;
      var job_short_description=req.body.job_short_description;
      var location=req.body.location;
      var postingdate=req.body.postingdate;
      var experience=req.body.experience;
      var details=[];
      var active=req.body.active;
      var notice_period=req.body.notice_period;
      if(req.body.heading1 !== '' && req.body.content1 !== '')
      details.push({
            heading:req.body.heading1,
            points:req.body.content1.toString().split(';')
        });

        if(req.body.heading2  && req.body.content2  ){
          details.push({
                heading:req.body.heading2,
                points:req.body.content2.toString().split(';')
            });
        }
        if(req.body.heading3  && req.body.content3 ){
          details.push({
                heading:req.body.heading3,
                points:req.body.content3.toString().split(';')
            });
        }
        if(req.body.heading4  && req.body.content4 ){
          details.push({
                heading:req.body.heading4,
                points:req.body.content4.toString().split(';')
            });
        }
        if(req.body.heading5  && req.body.content5 ){
          details.push({
                heading:req.body.heading5,
                points:req.body.content5.toString().split(';')
            });
        }

        
      // Update the MongoDB database with this data
      await updateDatabaseItem(id,title,brief,our_description,job_short_description,location,experience, postingdate, active, details,notice_period);

      res.status(200).json({ message: 'Database updated successfully!' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error updating database' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
