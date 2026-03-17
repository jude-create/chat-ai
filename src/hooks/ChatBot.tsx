import { useState } from "react";
import axios from "axios";

interface Message {
  text: string;
  sender: "user" | "bot";
}

export default function useChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  
  const apiKey = import.meta.env.VITE_GROQ_KEY;

  // Typing animation for bot
  const typeMessage = async (fullText: string) => {
    let current = "";

    for (let char of fullText) {
      current += char;

      // small delay for typing effect
      await new Promise((r) => setTimeout(r, 15));

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { text: current, sender: "bot" };
        return updated;
      });
    }
  };

  const sendMessage = async (message: string) => {
    const userMessage = { text: message, sender: "user" as const };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "llama-3.1-8b-instant",
          temperature: 0.5,
          messages: [
            {
              role: "system",
              content:
                "You are a helpful Hip-hop AI assistant inspired by Kendrick Lamar and J. Cole. Use markdown, emojis, and keep it fun and concise.",
            },
            ...messages.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
            { role: "user", content: message },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const botReply = response.data.choices[0].message.content;

      // Add empty bot message for typing effect
      setMessages((prev) => [...prev, { text: "", sender: "bot" }]);
      await typeMessage(botReply);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { messages, sendMessage, loading };
}