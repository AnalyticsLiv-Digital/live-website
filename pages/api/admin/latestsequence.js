import Blog from "../../../models/Blog";
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const num = (page - 1) * 12;

    try {
        let blog = await Blog.find({ sequence: { $exists: true } }).sort({ sequence: -1 }).skip(num).limit(1);
        if (blog.length > 0) {
            const latestBlog = blog[0];
            latestBlog.sequence = latestBlog.sequence.toString();
            res.status(200).json({ blog: latestBlog });
        } else {
            res.status(404).json({ message: "No blog found with the specified sequence." });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export default connectDb(handler);