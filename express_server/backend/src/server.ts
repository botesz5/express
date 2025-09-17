import express from "express";
import cors from "cors";
import {json} from "stream/consumers";
import * as path from "node:path";
import * as url from "node:url";

const PORT = 8000;
const HOST = "127.0.0.1";

const server = express();
// const __filename = url.fileURLToPath(import.meta.dirname);
// console.log(__filename);
// console.log(path.dirname(__filename));
const __dirname = import.meta.dirname;
const staticFilesDir = path.join(__dirname, "..", "dist");

server.use(cors());
//server.use(express.json());
server.use(express.static(staticFilesDir));




server.listen(PORT, () => console.log(`server is running at htttp://${HOST}:${PORT}`));