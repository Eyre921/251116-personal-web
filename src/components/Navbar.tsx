import { motion } from 'framer-motion'
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react'
import { Sun, Moon, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../contexts/ThemeContext'
import { useScrollNavbar } from '../hooks/useScrollNavbar'
import './Navbar.css'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const isScrolled = useScrollNavbar(80)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo Brand */}
      <div className="navbar-brand">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-20 dark:opacity-30" />
          <img
            src="/imgs/logo2025-wk6w.png"
            alt="Eyre Logo"
            className="relative w-10 h-10 rounded-full border-2 border-blue-200 dark:border-white/20"
          />
        </motion.div>
        <motion.p 
          className="font-bold text-gray-900 dark:text-white ml-3 text-lg"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
            Eyre
          </span>
        </motion.p>
      </div>

      {/* Center Menu - Hidden on mobile */}
      <div className="navbar-menu">
        {[
          { id: 'hero', label: t('nav.home') },
          { id: 'about', label: t('nav.about') },
          { id: 'knowledge', label: t('nav.knowledge') },
          { id: 'skills', label: t('nav.skills') },
          { id: 'contact', label: t('nav.contact') }
        ].map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="light"
              onPress={() => scrollToSection(item.id)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
            >
              {item.label}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Right Actions */}
      <div className="navbar-actions">
        {/* Language Selector */}
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="light"
              isIconOnly
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <Languages className="w-5 h-5" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Language selection"
            onAction={(key) => changeLanguage(key as string)}
          >
            <DropdownItem key="zh">🇨🇳 中文（简体）</DropdownItem>
            <DropdownItem key="zh-TW">🇭🇰 中文（繁體）</DropdownItem>
            <DropdownItem key="en">🇬🇧 English</DropdownItem>
            <DropdownItem key="es">🇪🇸 Español</DropdownItem>
            <DropdownItem key="fr">🇫🇷 Français</DropdownItem>
            <DropdownItem key="ru">🇷🇺 Русский</DropdownItem>
            <DropdownItem key="ar">🇸🇦 العربية</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* Theme Toggle */}
        <motion.div whileHover={{ scale: 1.1, rotate: 180 }} whileTap={{ scale: 0.9 }}>
          <Button
            isIconOnly
            variant="light"
            onPress={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>
        </motion.div>
      </div>
    </nav>
  )
}
