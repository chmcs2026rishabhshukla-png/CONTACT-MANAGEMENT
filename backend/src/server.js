import express from "express";
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./Routes/contactRoutes.js";
import cors from "cors";

app.use(cors());
dotenv.config();
dns.setServers(['8.8.8.8', '1.1.1.1']);
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/contacts", contactRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/contacts`);
});
