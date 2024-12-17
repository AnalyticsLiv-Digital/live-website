import YtPlaylist from "../../../../models/YtPlaylist";
import connectDb from "../../../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { _id, title, ids, active } = req.body;

        if (!_id) {
            return res.status(400).json({ error: "Playlist ID (_id) is required" });
        }

        try {
            const updatedPlaylist = await YtPlaylist.findByIdAndUpdate(
                _id,
                { title, ids, active },
                { new: true }
            );

            if (!updatedPlaylist) {
                return res.status(404).json({ error: "Playlist not found" });
            }

            res.status(200).json({ message: "Playlist updated successfully", ytPlaylist: updatedPlaylist });
        } catch (error) {
            console.error("Error updating playlist:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(400).json({ error: "Bad Request. Only POST method is allowed." });
    }
};

export default connectDb(handler);
