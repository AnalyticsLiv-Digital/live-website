// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Job from "../../../../models/Job"
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {

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
      var notice_period=Boolean(req.body.notice_period);
      if(req.body.heading1 !== '' && req.body.content1 !== '')
      details.push({
            heading:req.body.heading1,
            points:req.body.content1.toString().split(';')
        });

            let b = new Job({
                id : id ,
                brief : brief,
                title : title,
                our_description : our_description,
                job_short_description : job_short_description,
                location : location,
                postingdate : postingdate,
                experience : experience,
                active : active,
                notice_period : notice_period,
                details : details
        });
        await b.save();
       

    } else {
        res.status(400).json({ error: "Bad Request" });
    }
    let job = await Job.find();
    res.status(200).json({ job });
}


export default connectDb(handler);
