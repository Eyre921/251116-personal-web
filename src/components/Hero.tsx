import { motion } from 'framer-motion'
import { Github, Mail, MapPin, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import GradientText from './ui/GradientText'
import GlassCard from './ui/GlassCard'
// @ts-expect-error - LiquidEther is a JSX component without TypeScript definitions
import LiquidEther from './LiquidEther'
// @ts-expect-error - ProfileCard is a JSX component without TypeScript definitions
import ProfileCard from './ProfileCard'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>
      
      {/* Gradient Overlay - pointer-events-none to allow mouse interaction with background */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-blue-50/30 via-white/20 to-purple-50/30 dark:from-gray-900/30 dark:via-blue-900/20 dark:to-purple-900/30 pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-6xl w-full z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
            className="flex justify-center md:justify-end"
          >
            <ProfileCard
              avatarUrl="/imgs/profile/profile.png"
              name="符航康 (Eyre)"
              title={t('hero.subtitle')}
              handle="Eyre921"
              status="在线"
              contactText={t('hero.contact')}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              behindGlowEnabled={true}
              behindGlowColor="rgba(99, 102, 241, 0.5)"
              innerGradient="linear-gradient(145deg, #6366f180 0%, #8b5cf680 50%, #ec489980 100%)"
              onContactClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            />
          </motion.div>

          {/* Right: Text Content */}
          <div className="text-center md:text-left space-y-6">{/* Title with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="inline-flex items-center gap-3 flex-wrap justify-center md:justify-start">
                <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-yellow-500 dark:text-yellow-400 animate-pulse" />
                <GradientText>{t('hero.greeting')}</GradientText>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center md:justify-start gap-2 text-gray-600 dark:text-gray-400"
          >
            <MapPin className="w-5 h-5" />
            <span>{t('hero.university')}</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <motion.a
              href="https://github.com/Eyre921"
              target="_blank"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-shadow"
            >
              <Github className="w-5 h-5" />
              {t('hero.github')}
            </motion.a>
            <motion.a
              href="mailto:eyre@hnu.edu.cn"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-shadow"
            >
              <Mail className="w-5 h-5" />
              {t('hero.contact')}
            </motion.a>
          </motion.div>
        </div>
        </div>

        {/* Glass Card - Below */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <GlassCard className="max-w-4xl mx-auto">
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
      </div>
    </section>
  )
}
