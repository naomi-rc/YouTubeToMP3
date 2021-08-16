const port = process.env.PORT || 8000

const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../client')));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

app.get('/download', (req, resp) => {
    var URL = req.query.URL;

    resp.header('Content-Disposition', 'attachment; filename="audio_file.mp3"');

    ytdl(URL, {format: 'mp3'}).pipe(resp);
});