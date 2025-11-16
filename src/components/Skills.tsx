import { motion } from 'framer-motion'
import { Camera, Music, Bike, Coffee, BookOpen, Trophy } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SpotlightCard from './ui/SpotlightCard'
import GlassCard from './ui/GlassCard'
import GradientText from './ui/GradientText'
// @ts-expect-error - GridScan is a JSX component without TypeScript definitions
import { GridScan } from './GridScan'
import { isMobileOrTablet } from '@/lib/utils'

export default function Skills() {
  const { t } = useTranslation()
  const isMobile = isMobileOrTablet()
  
  const hobbies = [
    { icon: <Camera className="w-6 h-6" />, text: t('skills.hobby1'), color: 'from-purple-500 to-pink-500' },
    { icon: <Coffee className="w-6 h-6" />, text: t('skills.hobby2'), color: 'from-orange-500 to-red-500' },
    { icon: <Bike className="w-6 h-6" />, text: t('skills.hobby3'), color: 'from-blue-500 to-cyan-500' },
    { icon: <Music className="w-6 h-6" />, text: t('skills.hobby4'), color: 'from-green-500 to-emerald-500' },
    { icon: <BookOpen className="w-6 h-6" />, text: t('skills.hobby5'), color: 'from-indigo-500 to-purple-500' },
    { icon: <Trophy className="w-6 h-6" />, text: t('skills.hobby6'), color: 'from-yellow-500 to-amber-500' }
  ]

  const pursuits = [
    {
      title: t('skills.pursuit1Title'),
      description: t('skills.pursuit1Desc'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: t('skills.pursuit2Title'),
      description: t('skills.pursuit2Desc'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: t('skills.pursuit3Title'),
      description: t('skills.pursuit3Desc'),
      color: 'from-green-500 to-teal-500'
    }
  ]

  const milestones2025 = [
    t('skills.milestone1'),
    t('skills.milestone2'),
    t('skills.milestone3'),
    t('skills.milestone4'),
    t('skills.milestone5'),
    t('skills.milestone6'),
    t('skills.milestone7'),
    t('skills.milestone8')
  ]

  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden">
      {/* GridScan Background */}
      <div className="absolute inset-0 z-0">
        <GridScan 
          enablePost={isMobile ? false : true}
          bloomIntensity={isMobile ? 0 : undefined}
          bloomThreshold={isMobile ? 0 : undefined}
          bloomSmoothing={isMobile ? 0 : undefined}
          chromaticAberration={isMobile ? 0 : undefined}
          enableGyro={isMobile ? false : undefined}
          scanOpacity={isMobile ? 0.25 : 0.4}
          className={isMobile ? 'pointer-events-none' : ''}
        />
      </div>
      
      {/* Gradient Overlay - pointer-events-none to allow mouse interaction with background */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/50 via-gray-50/50 to-white/50 dark:from-gray-900/50 dark:via-gray-950/50 dark:to-gray-900/50 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto z-10 pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          🤩 <GradientText colors={['#ec4899', '#8b5cf6', '#3b82f6']}>{t('skills.title')}</GradientText>
        </motion.h2>

        {/* Hobbies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SpotlightCard className="p-8 pointer-events-auto" spotlightColor="rgba(168, 85, 247, 0.15)" allowBackgroundInteraction={true}>
            <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-8 text-center">
              {t('skills.hobbiesTitle')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${hobby.color} text-white`}>
                    {hobby.icon}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 flex-1">{hobby.text}</span>
                </motion.div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Life Pursuits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pursuits.map((pursuit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <GlassCard className="h-full pointer-events-auto" allowBackgroundInteraction={true}>
                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${pursuit.color} mb-4`} />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {pursuit.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {pursuit.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* 2025 Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SpotlightCard className="p-8 pointer-events-auto" spotlightColor="rgba(234, 179, 8, 0.15)" allowBackgroundInteraction={true}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Trophy className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              <h3 className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                🌟 {t('skills.milestonesTitle')}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {milestones2025.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-yellow-50 dark:bg-yellow-500/5 border border-yellow-200 dark:border-yellow-500/20"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 flex-1 pt-1">{milestone}</span>
                </motion.div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}
