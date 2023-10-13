// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Blog from "../../models/Blog";
import Casestudy from "../../models/Casestudy";
import Job from "../../models/Job";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    var sitemap = [];
    let blog = await Blog.find({active:true}, {slug:1});
    let casestudy = await Casestudy.find({active:true}, { slug:1});

    let jobs = await Job.find({active:true});
    
    for(var i=0; i<blog.length; i++){
        
        sitemap.push({'url':'https://analyticsliv.com/blogs/'+blog[i].slug});
    }
    for(var i=0; i<casestudy.length; i++){
        sitemap.push({'url':'https://analyticsliv.com/case-studies/'+casestudy[i].slug});
    }

    for(var i=0; i<jobs.length; i++){
        sitemap.push({'url':'https://analyticsliv.com/careers/'+jobs[i].id});
    }

    res.status(200).json({ sitemap });
}


export default connectDb(handler);
