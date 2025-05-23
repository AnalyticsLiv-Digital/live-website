// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Casestudy from "../../../../models/Casestudy"
import connectDb from "../../../../middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {

        let content = [];

        if (req.body.heading1 && req.body.content1)
            content.push({
                heading: req.body.heading1,
                description: req.body.content1
            });

        if (req.body.heading2 && req.body.content2)
            content.push({
                heading: req.body.heading2,
                description: req.body.content2
            });

        if (req.body.heading3 && req.body.content3)
            content.push({
                heading: req.body.heading3,
                description: req.body.content3
            });

        if (req.body.heading4 && req.body.content4)
            content.push({
                heading: req.body.heading4,
                description: req.body.content4
            });

        if (req.body.heading5 && req.body.content5)
            content.push({
                heading: req.body.heading5,
                description: req.body.content5
            });

        let b = new Casestudy({
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            slug: req.body.slug,
            coverimage: req.body.coverimage,
            filename: req.body.filename,
            author: req.body.author,
            publishdate: req.body.date,
            active: req.body.active,
            content: content,
            sequence: req.body.sequence,
            open: req.body.open,
            percentageBanner: req.body.percentageBanner,
            clientLogo: req.body.clientLogo,
            clientTestimonial: req.body.clientTestimonial,
            testimonialVedioUrl: req.body.testimonialVedioUrl,
            mainImage: req.body.mainImage,
            metatitle: req.body.metatitle,
            metadescription: req.body.metadescription,
        });
        await b.save();


    } else {
        res.status(400).json({ error: "Bad Request" });
    }
    let casestudy = await Casestudy.find();
    res.status(200).json({ casestudy });
}


export default connectDb(handler);
