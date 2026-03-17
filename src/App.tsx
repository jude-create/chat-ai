import ChatMessages from "./ChatMessages";
import useChatBot from "./hooks/ChatBot";
import StatusBadge from "./StatusBadge";
import Suggest from "./Suggest";
import Typing from "./Typing"

import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function App() {
   const { messages, sendMessage, loading } = useChatBot();

  return (
    <>
     <div className="bg-gray-900 min-h-screen w-full ">
      <div className="flex justify-between pt-5 px-3">
      <div className="flex items-center ">
       <div className="w-18">
         <DotLottieReact
            src="/images/Brain Network.lottie"
            loop
            autoplay
             className='w-24'
           />
       </div>
       <div>
          <h1 className="text-xl text-cyan-50">AI Chatbot</h1>
       </div>
      </div>
        <StatusBadge />
      </div>
      <Suggest />
        <ChatMessages messages={messages} />
        <Typing sendMessage={sendMessage} loading={loading} />
     </div>
    </>
  )
}

export default App
