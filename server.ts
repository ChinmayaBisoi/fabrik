const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8080;
app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

//joining path of directory
const directoryPath = path.join(__dirname, "/public/retail-3D-models");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err: any, files: any) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  console.log(files);
  //listing all files using forEach
  files.forEach(function (file: any) {
    // Do whatever you want to do with the file
    if (file !== ".DS_Store") {
      console.log(file);
    }
  });
});

app.get("/api", (req: any, res: any) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
