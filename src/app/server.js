// Libery
import express from "express";
import { engine } from "express-handlebars";
import { Server as socketIOServer } from "socket.io";
import cors from "cors";
import cookieParser from "cookie-parser";

//root
import { apiRouter } from "../routers/api/router.api.js";
import { viewsRouter } from "../routers/web/router.views.js";

//config
import { PORT } from "../config/config.server.js";
import { COOKIE_KEY } from "../config/config.auth.js";

//mid
import { errorFn } from "../mid/error.js";
import { socketFn } from "../mid/soketio.rt.js";
//DDBB
import { conectar } from "../database/mongoose.js";

//Auth
import session from "../mid/session.js";
import { passportInitialize } from "../mid/authentication.js";

const app = express();

await conectar();

app.use(cors({ origin: "*" }));
app.use("/public", express.static("public"));
app.use(cookieParser(COOKIE_KEY));
app.use(session);
app.use(passportInitialize);

app.engine("handlebars", engine());
app.set("views", "./views");
app.set("view engine", "handlebars");

app.use("/api", apiRouter);
app.use("/", viewsRouter);
app.use(errorFn);

const httpServer = app.listen(PORT, () => {
  console.log('🌙 ', `App listening on port ${PORT}`);
  console.log('🌙 ',"Path to login view: ", "http://localhost:8080/");
  console.log('🌙 ',"Path to Regiter view: ", "http://localhost:8080/register");
  console.log('🌙 ',
    "Path to paginate product view: ",
    "http://localhost:8080/products?limit=10&page=1"
  );
  console.log('🌙 ', "Path to cart view: ", "http://localhost:8080/carts/:cid}");
  console.log('🌙 ', "Path to create products: ", "http://localhost:8080/newproducts");
  console.log('🌙 ', "Path to API-Products: ", "http://localhost:8080/api/products");
});

export const io = new socketIOServer(httpServer);

io.on("connection", async (clientSocket) => {
  console.log('🌙 ', `New connection: ${clientSocket.id}`);
  await socketFn();
});
