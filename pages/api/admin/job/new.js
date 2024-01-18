// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Blog from "../../../../models/Blog"
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxidlMSRADTNk4kjam5Lf58cESQwxrntzlvO_kvcxx2dmSxdbD2NjxAbecDTyrFJNPs_w/exec?'+req.body.document_id);
      const blogcontent = await response.text();

            let b = new Blog({
                title : req.body.title,
                description : req.body.description,
                slug : req.body.slug,
                coverphoto : req.body.coverphoto,
                thumbnail : req.body.coverphoto,
                document_id : req.body.document_id,
                author : req.body.author,
                duration : req.body.duration,
                date : req.body.date,
                active : req.body.active,
                content : blogcontent,
                sequence : req.body.sequence
        });
        await b.save();
       

    } else {
        res.status(400).json({ error: "Bad Request" });
    }
    let blog = await Blog.find();
    res.status(200).json({ blog });
}


export default connectDb(handler);
