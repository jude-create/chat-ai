
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
function Suggest() {
  return (
    
        <div className="flex flex-col items-center justify-center pt-16 gap-8 animate-[fadeUp_0.5s_ease_both]">
      <div >
      <DotLottieReact
            src="/images/Brain Network.lottie"
            loop
            autoplay
             className='w-56'
           />
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight mb-2">What's on your mind?</h2>
        <p className="text-zinc-500 text-sm">Ask anything — code, ideas, facts, you name it.</p>
      </div>
    </div>
  )
}

export default Suggest