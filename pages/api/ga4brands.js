// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Ga4brand from "../../models/Ga4brand";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    let brand = await Ga4brand.find({active:true});
    res.status(200).json({ brand });
  
}


export default connectDb(handler);
