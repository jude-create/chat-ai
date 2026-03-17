import { useRef, useState } from "react";


interface TypingProps {
  sendMessage: (msg: string) => void;
  loading: boolean;
}

function Typing({ sendMessage, loading }: TypingProps) {
  
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (!text.trim()) return;

    sendMessage(text);
    setText("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="px-4 pb-6 mt-12 border-t border-zinc-800 ">
      {loading && (
  <p className="text-center text-zinc-400 text-sm mt-2 mb-9">
    AI dropping bars 🎤...
  </p>
)}
      <div className="max-w-2xl mx-auto">
        <div className="flex items-end gap-3 bg-zinc-900 border border-zinc-700 focus-within:border-amber-300 rounded-2xl px-4 py-3 transition-colors duration-200">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What are you thinking?"
            className="flex-1 bg-transparent resize-none outline-none text-zinc-200 text-[14px] leading-relaxed placeholder-zinc-600 max-h-36 overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          />

          <button
            onClick={handleSend}
            disabled={loading || !text.trim()}
            className="w-9 h-9 rounded-xl bg-linear-to-br from-amber-400 to-cyan-600 flex items-center justify-center shrink-0 shadow-md disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-85 transition-opacity"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>

        <p className="text-center text-zinc-700 text-[11px] mt-2.5">
          Enter to send · Shift+Enter for new line
        </p>
      </div>
    
    </div>
  );
}

export default Typing;