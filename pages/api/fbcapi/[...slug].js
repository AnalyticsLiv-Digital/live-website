import { useContext } from "react";
import connectDb from "../../../middleware/mongoose";
import { useRouter } from 'next/router';

const handler = async (req, res) => {
    const { slug } = req.query.v;
    console.log(slug);
    res.status(200).json({ slug });
}


export default connectDb(handler);
