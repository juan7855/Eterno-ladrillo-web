export default function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-forest-800/30" />
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-forest-600/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-forest-500/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-forest-600/40" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-forest-800/30" />
      </div>
    </div>
  );
}
