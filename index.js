import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { exec } from "child_process";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("AI Avatar Backend is Running!"));

app.post("/chat", (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });
    res.json({ reply: `You said: ${message}` });
});

app.post("/stt", async (req, res) => {
    const { audioPath } = req.body;
    if (!audioPath) return res.status(400).json({ error: "Audio path is required" });

    exec(`python whisper_transcribe.py "${audioPath}"`, (err, stdout, stderr) => {
        if (err) return res.status(500).json({ error: "Speech-to-Text failed" });
        res.json({ text: stdout.trim() });
    });
});

app.post("/tts", async (req, res) => {
    const text = req.body.text;
    exec(`python tts_generate.py "${text}"`, (err) => {
        if (err) return res.status(500).json({ error: "TTS Error" });
        res.json({ audio: "output.wav" });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
