

export default function StatusBadge() {
  return (
     <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-[11px] text-zinc-400 font-medium">Online</span>
    </div>
  )
}
