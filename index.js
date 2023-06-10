const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleWares = jsonServer.defaults();
const port = process.env.PORT || 3500;
server.use(middleWares);
server.use(router);
server.listen(port, () => {
  console.log(`server is running on ${port}`);
});
