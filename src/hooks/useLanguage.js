import { useState, useEffect } from 'react'

export default function useLanguage() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('app_lang') || 'id'
  })

  useEffect(() => {
    localStorage.setItem('app_lang', lang)
    const event = new CustomEvent('langchange', { detail: lang })
    window.dispatchEvent(event)
  }, [lang])

  useEffect(() => {
    const handleLangChange = (e) => {
      if (e.detail && e.detail !== lang) {
        setLang(e.detail)
      }
    }
    window.addEventListener('langchange', handleLangChange)
    return () => window.removeEventListener('langchange', handleLangChange)
  }, [lang])

  const toggleLanguage = () => {
    setLang(prev => (prev === 'id' ? 'en' : 'id'))
  }

  return [lang, toggleLanguage, setLang]
}
