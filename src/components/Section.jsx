import useInView from '../hooks/useInView'

export default function Section({ id, icon: Icon, title, subtitle, children }) {
  const [ref, visible] = useInView(0.1)

  return (
    <section
      id={id}
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-16 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mb-10">
        <div className="flex items-center gap-3.5">
          {Icon && (
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-accent dark:text-accent-dark">
              {typeof Icon === 'function' || typeof Icon === 'object' ? (
                <Icon className="w-5 h-5" />
              ) : (
                <span className="text-xl">{Icon}</span>
              )}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-200 via-slate-200/50 to-transparent dark:from-slate-800 dark:via-slate-800/50 dark:to-transparent" />
        </div>
        {subtitle && (
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 ml-12">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}
