import YtPlaylist from "../../../../models/YtPlaylist";
import connectDb from "../../../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {

        var title = req.body.title;
        var ids = req.body.ids;
        var active = req.body.active;

        let y = new YtPlaylist({
            title: title,
            ids: ids,
            active: active,
        });
        await y.save();

    } else {
        res.status(400).json({ error: "Bad Request" });
    }
    let ytPlaylist = await YtPlaylist.find();
    res.status(200).json({ ytPlaylist });
}

export default connectDb(handler);
