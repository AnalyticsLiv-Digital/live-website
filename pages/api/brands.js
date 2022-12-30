// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Brand from "../../models/Brand";
import connectDb from "../../middleware/mongoose";


const handler = async (req, res) => {
    let brand = await Brand.find();
    res.status(200).json({ brand });
}


export default connectDb(handler);
