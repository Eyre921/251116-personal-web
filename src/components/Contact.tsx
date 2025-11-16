import { motion } from 'framer-motion'
import { Mail, MessageSquare, Github, Youtube, Globe, QrCode } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import GlassCard from './ui/GlassCard'
import SpotlightCard from './ui/SpotlightCard'
import GradientText from './ui/GradientText'
import { useTheme } from '../contexts/ThemeContext'
// @ts-expect-error - Hyperspeed is a JSX component without TypeScript definitions
import Hyperspeed from './Hyperspeed'

export default function Contact() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const contacts = [
    {
      icon: <MessageSquare className="w-7 h-7" />,
      label: t('contact.wechat'),
      value: "Eyre2025",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <QrCode className="w-7 h-7" />,
      label: t('contact.qq'),
      value: "1607558792",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Mail className="w-7 h-7" />,
      label: t('contact.email'),
      value: "eyre@hnu.edu.cn",
      link: "mailto:eyre@hnu.edu.cn",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Github className="w-7 h-7" />,
      label: t('contact.github'),
      value: "Eyre921",
      link: "https://github.com/Eyre921",
      color: "from-gray-500 to-gray-700"
    },
    {
      icon: <Youtube className="w-7 h-7" />,
      label: t('contact.bilibili'),
      value: "87851447",
      link: "https://space.bilibili.com/87851447",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      label: t('contact.website'),
      value: "NFEyre.top",
      link: "https://nfeyre.top/",
      color: "from-orange-500 to-red-500"
    }
  ]

  const workTips = [
    t('contact.workTip1'),
    t('contact.workTip2'),
    t('contact.workTip3'),
    t('contact.workTip4')
  ]

  const lifeTips = [
    t('contact.life1'),
    t('contact.life2'),
    t('contact.life3')
  ]

  // Hyperspeed 完整配置：亮色模式只改变背景为浅色
  const hyperspeedOptions = theme === 'light' 
    ? {
        onSpeedUp: () => {},
        onSlowDown: () => {},
        distortion: 'turbulentDistortion',
        length: 400,
        roadWidth: 10,
        islandWidth: 2,
        lanesPerRoad: 4,
        fov: 90,
        fovSpeedUp: 150,
        speedUp: 2,
        carLightsFade: 0.4,
        totalSideLightSticks: 20,
        lightPairsPerRoadWay: 40,
        shoulderLinesWidthPercentage: 0.05,
        brokenLinesWidthPercentage: 0.1,
        brokenLinesLengthPercentage: 0.5,
        lightStickWidth: [0.12, 0.5],
        lightStickHeight: [1.3, 1.7],
        movingAwaySpeed: [60, 80],
        movingCloserSpeed: [-120, -160],
        carLightsLength: [400 * 0.03, 400 * 0.2],
        carLightsRadius: [0.05, 0.14],
        carWidthPercentage: [0.3, 0.5],
        carShiftX: [-0.8, 0.8],
        carFloorSeparation: [0, 5],
        colors: {
          roadColor: 0xf7f7f7,
          islandColor: 0xf5f5f5,
          background: 0xe0e0e8,
          shoulderLines: 0x404040,
          brokenLines: 0x606060,
          leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
          rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
          sticks: 0x03b3c3
        }
      }
    : undefined; // 暗色模式使用默认配置

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>
      
      {/* Gradient Overlay - pointer-events-none to allow mouse interaction with background */}
      <div className={`absolute inset-0 z-[1] pointer-events-none ${
        theme === 'light' 
          ? 'bg-gradient-to-b from-gray-50/30 via-white/20 to-gray-50/30' 
          : 'bg-gradient-to-b from-gray-950/60 via-gray-900/60 to-gray-950/60'
      }`} />
      
      <div className="relative max-w-7xl mx-auto z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            🔍 <GradientText colors={['#06b6d4', '#8b5cf6', '#ec4899']}>{t('contact.title')}</GradientText>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Cards with Bounce Effect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.08,
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 10 
                }
              }}
              className="pointer-events-auto"
            >
              <div className="relative h-full group cursor-pointer">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl`} />
                
                <GlassCard className="h-full relative overflow-hidden pointer-events-auto">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className="flex flex-col items-center text-center relative z-10">
                    <motion.div
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: [0, -10, 10, -5, 5, 0],
                        transition: { duration: 0.5 }
                      }}
                      className={`p-5 rounded-2xl bg-gradient-to-br ${contact.color} text-white mb-4 shadow-lg group-hover:shadow-2xl transition-shadow`}
                    >
                      {contact.icon}
                    </motion.div>
                    
                    <p className="font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform">
                      {contact.label}
                    </p>
                    
                    {contact.link ? (
                      <motion.a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${contact.color} font-medium hover:opacity-80 transition-opacity`}
                      >
                        {contact.value}
                      </motion.a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{contact.value}</p>
                    )}
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Communication Tips */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-8 h-full pointer-events-auto" spotlightColor="rgba(59, 130, 246, 0.15)" allowBackgroundInteraction={true}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 mb-6"
              >
                💼 {t('contact.workCommunication')}
              </motion.h3>
              <div className="space-y-3">
                {workTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
                    whileHover={{ 
                      x: 10, 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors cursor-default group"
                  >
                    <motion.span 
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center text-sm font-bold shadow-lg group-hover:shadow-blue-500/50"
                    >
                      {index + 1}
                    </motion.span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 flex-1 leading-relaxed">
                      {tip}
                    </span>
                  </motion.div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-8 h-full pointer-events-auto" spotlightColor="rgba(168, 85, 247, 0.15)" allowBackgroundInteraction={true}>
              <motion.h3 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400 mb-6"
              >
                🤞 {t('contact.lifeCommunication')}
              </motion.h3>
              
              {/* Life communication tips - 3 independent points */}
              <div className="space-y-3">
                {lifeTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
                    whileHover={{ 
                      x: -10, 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-colors cursor-default group"
                  >
                    <motion.span
                      whileHover={{ 
                        scale: 1.3,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                      className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2 group-hover:shadow-lg group-hover:shadow-purple-500/50"

                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 flex-1 leading-relaxed">
                      {tip}
                    </span>
                  </motion.div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* QR Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <GlassCard className="inline-block pointer-events-auto">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://eyre-halo.oss-cn-hangzhou.aliyuncs.com/image-rp2a.png"
              alt="WeChat QR Code"
              className="w-56 h-56 rounded-lg"
            />
            <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium">
              {t('contact.wechat')} QR Code
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
