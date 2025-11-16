import { motion } from 'framer-motion'
import { Github, Mail, MapPin, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import GradientText from './ui/GradientText'
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

      {/* Content - Flexible Layout with Photo and Text */}
      <div className="relative w-full h-full z-10 flex items-center justify-center pt-16 lg:pt-30 pointer-events-none">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 min-h-[600px] lg:min-h-screen">
            {/* Left: Profile Card - Responsive Size */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
              className="flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg pointer-events-auto"
            >
              <ProfileCard
                avatarUrl="/imgs/profile/profile.png"
                name={t('hero.name')}
                title={t('hero.role')}
                handle="Eyre921"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={true}
                behindGlowEnabled={true}
                behindGlowColor="rgba(99, 102, 241, 0.3)"
                behindGlowSize="40%"
                innerGradient="linear-gradient(145deg, #6366f180 0%, #8b5cf680 50%, #ec489980 100%)"
                className="w-full h-auto lg:h-full"
              />
            </motion.div>

            {/* Right: Text Content - Flexible Width */}
            <div className="flex flex-col justify-center space-y-6 lg:space-y-8 flex-1 min-w-0">{/* Title with gradient */}
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="inline-flex items-center gap-3 flex-wrap justify-center md:justify-start">
                    <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-yellow-500 dark:text-yellow-400 animate-pulse" />
                    <GradientText>{t('hero.greeting')}</GradientText>
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  {t('hero.description')}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t('hero.intro')}
                </p>
              </motion.div>

              {/* University */}
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
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-shadow pointer-events-auto"
                >
                  <Github className="w-5 h-5" />
                  {t('hero.github')}
                </motion.a>
                <motion.a
                  href="mailto:eyre@hnu.edu.cn"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-shadow pointer-events-auto"
                >
                  <Mail className="w-5 h-5" />
                  {t('hero.contact')}
                </motion.a>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-6 border-t border-gray-300 dark:border-gray-700"
              >
                <p className="text-lg italic text-blue-600 dark:text-blue-400 mb-2">
                  "{t('hero.quote')}"
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('hero.quoteDesc')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
