interface IconCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function IconCard({ icon, title, description }: IconCardProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-wk-white border border-wk-n200 hover:border-wk-n500 transition-colors duration-200">
      <div className="w-8 h-8 text-wk-black" aria-hidden="true">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-h4 font-medium text-wk-black">{title}</h3>
        <p className="text-sm text-wk-n700 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
