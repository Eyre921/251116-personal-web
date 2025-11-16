import { motion } from 'framer-motion'
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react'
import { Sun, Moon, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../contexts/ThemeContext'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HeroNavbar 
      isBordered 
      className="bg-gray-900/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-white/10"
      classNames={{
        wrapper: "max-w-7xl"
      }}
    >
      <NavbarBrand>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30" />
          <img
            src="https://eyre-halo.oss-cn-hangzhou.aliyuncs.com/logo2025-wk6w.png"
            alt="Eyre Logo"
            className="relative w-10 h-10 rounded-full border-2 border-white/20"
          />
        </motion.div>
        <motion.p 
          className="font-bold text-white ml-3 text-lg"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Eyre
          </span>
        </motion.p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-2" justify="center">
        {[
          { id: 'hero', label: t('nav.home') },
          { id: 'about', label: t('nav.about') },
          { id: 'knowledge', label: t('nav.knowledge') },
          { id: 'skills', label: t('nav.skills') },
          { id: 'contact', label: t('nav.contact') }
        ].map((item) => (
          <NavbarItem key={item.id}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="light"
                onPress={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              >
                {item.label}
              </Button>
            </motion.div>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown
            classNames={{
              content: "bg-gray-800/90 backdrop-blur-xl border border-white/10"
            }}
          >
            <DropdownTrigger>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="light"
                  isIconOnly
                  className="text-gray-300 hover:text-white hover:bg-white/10"
                >
                  <Languages className="w-5 h-5" />
                </Button>
              </motion.div>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language selection"
              onAction={(key) => changeLanguage(key as string)}
              classNames={{
                base: "text-white"
              }}
            >
              <DropdownItem 
                key="zh"
                className="hover:bg-white/10"
              >
                🇨🇳 中文
              </DropdownItem>
              <DropdownItem 
                key="en"
                className="hover:bg-white/10"
              >
                🇬🇧 English
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <motion.div whileHover={{ scale: 1.1, rotate: 180 }} whileTap={{ scale: 0.9 }}>
            <Button
              isIconOnly
              variant="light"
              onPress={toggleTheme}
              className="text-gray-300 hover:text-white hover:bg-white/10"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
          </motion.div>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  )
}
