export function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  )
}

export function ReactIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    </svg>
  )
}

export function TailwindIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  )
}

export function JSIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm10.5 12.5c0 1.5.8 2.3 2.3 2.3 1.3 0 2.2-.6 2.2-1.8 0-2.8-4.2-1.6-4.2-4.5 0-1.8 1.4-3 3.5-3 1.9 0 3.2.9 3.5 2.5h-2c-.2-.7-.7-1.1-1.5-1.1-.8 0-1.3.4-1.3 1.1 0 2.6 4.2 1.5 4.2 4.5 0 2.2-1.7 3.3-4.2 3.3-2.6 0-4.1-1.3-4.4-3.3h1.9zm-5.7-.3c0 1.2.7 1.8 1.7 1.8.9 0 1.5-.5 1.5-1.8V9h2v6.4c0 2.4-1.5 3.4-3.5 3.4-2.1 0-3.4-1.1-3.6-2.9h1.9z" />
    </svg>
  )
}

export function SupabaseIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.35 2.036c-.49-.49-1.284-.49-1.774 0L2.17 11.44a1.255 1.255 0 0 0 .887 2.143h7.625l-2.03 8.381c-.244 1.008 1.05 1.637 1.758.854l9.406-9.404a1.255 1.255 0 0 0-.887-2.143h-7.625l2.05-8.235z" />
    </svg>
  )
}

export function PhpIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm-4.7 12H5.8V9h2.3c1.5 0 2.4.8 2.4 2s-.9 2-2.4 2H7.3v2zm1.5-3.3c.7 0 1.1-.3 1.1-.8 0-.5-.4-.8-1.1-.8H7.3v1.6h1.5zm8.4 3.3h-1.5V9h2.3c1.5 0 2.4.8 2.4 2s-.9 2-2.4 2h-1.3v2zm1.5-3.3c.7 0 1.1-.3 1.1-.8 0-.5-.4-.8-1.1-.8h-1.5v1.6h1.5zm-6.2 3.3h-1.5V9h1.5v2.2h1.6V9h1.5v6h-1.5v-2.3h-1.6v2.3z" />
    </svg>
  )
}

export function MysqlIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 14.5h-2v-5h2v5zm-1-6.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
    </svg>
  )
}

export function NextjsIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 14.5L10.5 8.7V16.5H9V7.5h1.7l5.8 7.8V7.5h1.5v9h-1.7z" />
    </svg>
  )
}

export function VercelIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L24 22H0L12 1Z" />
    </svg>
  )
}

export function Html5Icon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.565-2.438L1.5 0zm17.09 4.413H5.41l.317 3.542h11.536l-.37 4.134-4.918 1.332-4.917-1.332-.239-2.679H3.259l.477 5.342 8.234 2.288 8.235-2.288 1.134-12.709z" />
    </svg>
  )
}

export function Css3Icon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.565-2.438L1.5 0zm17.09 4.413H5.41l.317 3.542h11.536l-.74 8.268-4.547 1.23-4.547-1.23-.29-3.254H3.61l.542 6.07 7.818 2.172 7.818-2.172 1.302-14.556z" />
    </svg>
  )
}

export function GitIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.38.003 1.787.41.434.434.627 1.05.474 1.642l2.656 2.657c.592-.153 1.208.04 1.643.474.604.604.604 1.582 0 2.187-.604.604-1.582.604-2.187 0-.46-.46-.64-1.11-.47-1.73l-2.48-2.48v6.71c.21.08.41.2.58.37.604.604.604 1.582 0 2.188-.604.603-1.582.603-2.187 0-.604-.605-.604-1.583 0-2.188.22-.22.48-.36.76-.43V9.75c-.28-.07-.54-.21-.76-.43-.45-.45-.63-1.09-.48-1.71L7.73 4.96.452 12.238c-.603.604-.603 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.186 0l10.428-10.428c.604-.604.604-1.582 0-2.187z" />
    </svg>
  )
}

export function AhrefsIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.5 19.5h19v2h-19v-2zm1.5-3h3v-6h-3v6zm6 0h3v-11h-3v11zm6 0h3v-15h-3v15z" />
    </svg>
  )
}

/* Dedicated Google Search Console Icon (Magnifying glass + bar chart) */
export function GscIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
      <circle cx="19" cy="9" r="2" fill="currentColor" />
    </svg>
  )
}

/* Dedicated Google Business Profile Icon (Storefront / Location Pin) */
export function GbpIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  )
}

/* Dedicated Google Analytics GA4 Icon (Yellow/Orange bar graph curve) */
export function Ga4Icon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 20.5H2v-17h3v14h17v3zM7 16h3.5V9.5H7V16zm5.5 0H16V6h-3.5v10zm5.5 0h3.5V2.5H18V16z" />
    </svg>
  )
}
