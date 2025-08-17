const express = require("express");
const app = express();
const PORT = 3000;
 
app.use(express.json());
 
app.get("/api/profile", (req, res) => {
  res.json({
    name: "Rahul Deokate",
    role: "DevOps Enthusiast 🚀"
  });
});
 
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running ✅" });
});
 
app.listen(PORT, () => {
  console.log(`Backend service running on port ${PORT}`);
});
