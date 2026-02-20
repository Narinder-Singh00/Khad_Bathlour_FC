import express from "express";
import Tournament from "../models/tournament.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const data = new Tournament(req.body);
    await data.save();
    res.json({ message: "Registered Successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const data = await Tournament.find();
  res.json(data);
});

export default router;