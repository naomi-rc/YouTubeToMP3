const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log("Server works!");
});

app.get('/download', (req, resp) => {
    var URL = req.query.URL;
    //resp.json({url: URL});

    resp.header('Content-Disposition', 'attachment; filename="video.mp4');

    ytdl(URL, {format: 'mp4'}).pipe(resp);
});