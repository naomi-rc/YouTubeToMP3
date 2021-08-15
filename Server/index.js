const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

app.use(cors());

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log("Server listening at http://localhost:4000");
});

app.get('/download', (req, resp) => {
    var URL = req.query.URL;

    resp.header('Content-Disposition', 'attachment; filename="audio_file.mp3"');

    ytdl(URL, {format: 'mp3'}).pipe(resp);
});