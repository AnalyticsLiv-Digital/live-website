// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Casestudy from "../../models/Casestudy";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    var keyword = req.query.search || "";
    var regex = new RegExp(".*" + keyword + ".*", "i");
    let casestudy = await Casestudy.find(
        {
            active: true,
            $or: [
                { title: regex },
                { content: { $elemMatch: { heading: regex } } },
                { content: { $elemMatch: { description: regex } } }
            ]
        },
        { title: 1, description: 2, coverimage: 3, slug: 4, thumb: 5 }
    ).sort({ id: -1 });

    res.status(200).json({ casestudy });
};

// const handler = async (req, res) => {
//     var keyword = req.query.search; 
//     var regex = RegExp(".*" + keyword + ".*", "i");
//     let casestudy = await Casestudy.find({content: regex,active:true}, { title: 1, description: 2,coverimage:3, slug:4, thumb:5 }).sort({ id: -1 });
//     res.status(200).json({ casestudy });
// }


export default connectDb(handler);
