import { motion } from 'framer-motion'
import { Heart, Eye, Target, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SpotlightCard from './ui/SpotlightCard'
import GradientText from './ui/GradientText'
import { useTheme } from '../contexts/ThemeContext'
// @ts-expect-error - FloatingLines is a JSX component without TypeScript definitions
import FloatingLines from './FloatingLines'
import { isMobileOrTablet } from '@/lib/utils'

export default function About() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const isMobile = isMobileOrTablet()
  
  const traits = [
    { icon: <Heart className="w-6 h-6" />, text: t('about.trait1'), color: 'from-red-500 to-pink-500' },
    { icon: <Eye className="w-6 h-6" />, text: t('about.trait2'), color: 'from-blue-500 to-cyan-500' },
    { icon: <Target className="w-6 h-6" />, text: t('about.trait3'), color: 'from-green-500 to-emerald-500' },
    { icon: <Sparkles className="w-6 h-6" />, text: t('about.trait4'), color: 'from-purple-500 to-pink-500' }
  ]

  const doing = [t('about.doing1'), t('about.doing2'), t('about.doing3'), t('about.doing4'), t('about.doing5')]
  const goodAt = [t('about.goodAt1'), t('about.goodAt2'), t('about.goodAt3'), t('about.goodAt4'), t('about.goodAt5')]

  // Floating Lines 渐变色配置：浅色模式使用温暖紫粉色渐变，暗色模式使用冷艳蓝紫色渐变
  const linesGradient = theme === 'light' 
    ? ['#ec4899', '#d946ef', '#c084fc', '#a78bfa', '#818cf8'] // 粉紫色渐变
    : ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef'] // 蓝紫色渐变

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden bg-white dark:bg-gray-950">
      {/* Floating Lines Background */}
      <div className="absolute inset-0 z-0">
        <FloatingLines 
          linesGradient={linesGradient}
          lineCount={6}
          lineDistance={4}
          interactive={!isMobile}
          parallax={!isMobile}
          animationSpeed={isMobile ? 0.6 : 1}
          mixBlendMode="screen"
          maxPixelRatio={isMobile ? 1.2 : 2}
          staticMode={isMobile}
        />
      </div>
      
      {/* Light Gradient Overlay - pointer-events-none to allow mouse interaction with background */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-white/10 to-transparent dark:from-transparent dark:via-gray-900/20 dark:to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto z-10 pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          🖼️ <GradientText>{t('about.title')}</GradientText>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SpotlightCard className="p-6 h-full pointer-events-auto" allowBackgroundInteraction={true}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${trait.color} text-white`}>
                    {trait.icon}
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 flex-1">{trait.text}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <SpotlightCard className="p-8 pointer-events-auto" allowBackgroundInteraction={true}>
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">🤯 {t('about.doingTitle')}</h3>
            <div className="space-y-3">
              {doing.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors cursor-default group pointer-events-auto"
                >
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-600 dark:text-green-400 flex items-center justify-center text-sm font-bold group-hover:shadow-lg group-hover:shadow-green-500/50"
                  >
                    {index + 1}
                  </motion.span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-8 pointer-events-auto" allowBackgroundInteraction={true}>
            <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-6">😴 {t('about.goodAtTitle')}</h3>
            <div className="space-y-3">
              {goodAt.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: -10, scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50/50 dark:hover:bg-orange-900/10 transition-colors cursor-default group pointer-events-auto"
                >
                  <motion.span
                    whileHover={{ scale: 1.3, rotate: 360, transition: { duration: 0.5 } }}
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center text-sm font-bold group-hover:shadow-lg group-hover:shadow-orange-500/50"
                  >
                    {index + 1}
                  </motion.span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </SpotlightCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SpotlightCard className="p-8 text-center pointer-events-auto" spotlightColor="rgba(168, 85, 247, 0.2)" allowBackgroundInteraction={true}>
            <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6">💫 {t('about.dreamTitle')}</h3>
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                {t('about.dream1')}
              </strong>
              <br />
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400">
                {t('about.dream2')}
              </strong>
            </p>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}
