import { motion } from 'framer-motion'
import { Github, Mail, MapPin, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import GradientText from './ui/GradientText'
import GlassCard from './ui/GlassCard'
// @ts-ignore
import LiquidEther from './LiquidEther'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl w-full z-10">
        <div className="text-center mb-12">
          {/* Avatar with glow */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1
            }}
            className="mb-8 inline-block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 dark:opacity-50 animate-pulse" />
            <img
              src="https://eyre-halo.oss-cn-hangzhou.aliyuncs.com/logo2025-wk6w.png"
              alt="Eyre Logo"
              className="relative w-32 h-32 rounded-full border-4 border-blue-200 dark:border-white/20 shadow-2xl"
            />
          </motion.div>

          {/* Title with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="inline-flex items-center gap-3">
                <Sparkles className="w-12 h-12 text-yellow-500 dark:text-yellow-400 animate-pulse" />
                <GradientText>{t('hero.greeting')}</GradientText>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-12"
          >
            <MapPin className="w-5 h-5" />
            <span>{t('hero.university')}</span>
          </motion.div>
        </div>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <GlassCard className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {t('hero.description')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('hero.intro')}
              </p>
              <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                <p className="text-lg italic text-blue-600 dark:text-blue-300 mb-3">
                  "{t('hero.quote')}"
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('hero.quoteDesc')}
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4 mt-12"
        >
          <motion.a
            href="https://github.com/Eyre921"
            target="_blank"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg"
          >
            <Github className="w-5 h-5" />
            {t('hero.github')}
          </motion.a>
          <motion.a
            href="mailto:eyre@hnu.edu.cn"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold shadow-lg"
          >
            <Mail className="w-5 h-5" />
            {t('hero.contact')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
