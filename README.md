# Force Download of External Files

The goal is to develop an endpoint that will force download any file requested on an external server.

## Start Server
```
node server.js
```

## Download File
After starting the server, open your browser and enter:
`http://localhost:3000/?download=EXTERNAL_FILE_REFERENCE`