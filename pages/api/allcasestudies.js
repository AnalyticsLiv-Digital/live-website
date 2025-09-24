// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Casestudy from "../../models/Casestudy";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    let casestudy = await Casestudy.find({active:true}, { title: 1, description: 2,coverimage:3, slug:4, thumb:5, id:6 }).sort({ id: -1 });
    res.status(200).json({ casestudy });
}


export default connectDb(handler);
