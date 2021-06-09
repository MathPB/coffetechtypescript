import express from "express";

import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000 || process.env.PORT, () => {
  console.log("Server is listening on port 3000");
});