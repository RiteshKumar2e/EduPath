import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import aiRoutes from "./routes/ai.js";
import authRoutes from "./routes/auth.js";
// import profileRoutes from "./routes/profile.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);
// app.use("/api/profile", profileRoutes);

app.get("/", (req, res) => {
  res.json({ message: "EduPath API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
