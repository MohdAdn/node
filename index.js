/* const EventEmitter = require("events");
console.log("Hii");
const emitter = new EventEmitter();
emitter.on("order-pizza", (size, toppinn) => {
  console.log("Order received backing the pizza" + size + " " + toppinn);
});

emitter.on("order-pizza", (size) => {
  if (size === "large") console.log("Give him a drink");
});

//Buffers

const buffer = new Buffer.from("AdnanKhan");
buffer.write("MrMohd");
console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());


emitter.emit("order-pizza", "large", "mushroom"); */

//Streams reading and writing data in chunks
/*
const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();
const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf8",
  highWaterMark: 10,
});
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
const writableStream = fs.createWriteStream("./file2.txt");

//you can do all of this in one line with help of the pipe

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writableStream.write(chunk);
}); 

readableStream.pipe(writableStream);
*/
/*
const hero = {
  firstName: "Adnan",
  lstname: "Ali",
};
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    res.writeHead(200), { "Content-type": "text/html" };
    res.end("<h1>hello from html</h1>");
  } else if (req.url === "/api") {
    res.writeHead(200), { "Content-type": "text/plain" };
    res.end("Hello from api route");
  } else {
    res.writeHead(200), { "Content-type": "text/plain" };
    res.end("page not found");
  }

  //const html = fs.readFileSync("./index.html", "utf8");
  //res.end(html);
  //more efficent way of reading the file using the stream
  //fs.createReadStream("./index.html").pipe(res);
});

server.listen(3000, () => {
  console.log("server is listening on 3000");
});
*/

//LibUv is used for performing the cpu itensive task async way as it has aconcept of thread pool
const crypto = require("crypto");
process.env.UV_THREADPOOL_SIZE = 4;
const MAX_CALLS = 4;
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}
