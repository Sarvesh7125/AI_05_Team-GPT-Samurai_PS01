const axios = require("axios");

app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText",
            {
                prompt: { text: userMessage },
            },
            { headers: { "Content-Type": "application/json", "Authorization": `Bearer ${process.env.GEMINI_API_KEY}` } }
        );

        res.json({ reply: response.data.text || "Mujhe samajh nahi aaya!" });
    } catch (error) {
        res.status(500).json({ error: "AI Response Error" });
    }
});
