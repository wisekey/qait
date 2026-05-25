interface HorizontalCardProps {
  label: string
  title: string
  description: string
}

export function HorizontalCard({ label, title, description }: HorizontalCardProps) {
  return (
    <div className="flex flex-col gap-3 p-6 border-l-2 border-wk-red bg-wk-white">
      <span className="text-xs font-medium text-wk-red uppercase tracking-wider">
        {label}
      </span>
      <h3 className="text-h4 font-medium text-wk-black">{title}</h3>
      <p className="text-sm text-wk-n700 leading-relaxed">{description}</p>
    </div>
  )
}
