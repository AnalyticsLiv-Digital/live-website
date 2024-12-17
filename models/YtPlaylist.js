const mongoose = require("mongoose");

const YtPlaylistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ids: { type: [String], required: true },
  active: { type: String, required: true },
});

module.exports = mongoose.models.YtPlaylist || mongoose.model("YtPlaylist", YtPlaylistSchema);