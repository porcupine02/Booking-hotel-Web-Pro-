//import express
import express from "express";

//import cors
import cors from "cors";

//import routes
import Router from "./routes/routes.js";
import Admin from "./routes/create.js"

//init express
const app = express();

//use express json
app.use(express.json());

//use cors
app.use(cors());

//use router
app.use(Router);
app.use(Admin);

//PORT
app.listen(5000, () => {
  console.log("Server running successfully");
});
