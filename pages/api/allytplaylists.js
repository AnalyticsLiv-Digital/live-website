// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import YtPlaylist from "../../models/YtPlaylist";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  let ytPlaylist = await YtPlaylist.find({}, { title: 1, ids: 2, active: 3 }).sort({ sequence: -1 });
  res.status(200).json({ ytPlaylist });
};

export default connectDb(handler);