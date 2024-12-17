// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import YtPlaylist from "../../models/YtPlaylist";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    // console.log("query object find playlist : ",req.query);
    let ytPlaylist = await YtPlaylist.find({_id:req.query._id});
    // console.log("ytPlaylist object : ",ytPlaylist)
    res.status(200).json({ ytPlaylist });
}


export default connectDb(handler);
