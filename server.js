const express = require('express')
const request = require('request')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const download = req.query.download
    if (!download) {
        return res.end()
    }
    const externalFile = encodeURI(download)
    request(externalFile)
        .on('error', console.log.bind(console))
        .on('response', () => res.setHeader('Content-Disposition', 'attachment'))
        .pipe(res)
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))