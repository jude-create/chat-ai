import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; 

interface Message {
  text: string;
  sender: "user" | "bot";
}

function ChatMessages({ messages }: { messages: Message[] }) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col gap-3 max-w-3xl mx-auto p-4">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`px-4 py-2 rounded-xl max-w-full wrap-break-word ${
            msg.sender === "user"
              ? "bg-amber-400 text-black self-end"
              : "bg-zinc-800 text-zinc-200 self-start"
          }`}
        >
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {msg.text}
          </ReactMarkdown>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatMessages;