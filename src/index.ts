import express from 'express';
import config from 'src/config';

require("dotenv").config({
  path: ".env.local",
}); 

const app = express();
const port = config.port;

app.get("/", async (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
