import { motion } from 'framer-motion'
import { Brain, Briefcase, Heart, Globe, Sparkles, Code, TrendingUp, GraduationCap } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import GlassCard from './ui/GlassCard'
import GradientText from './ui/GradientText'
import { useTheme } from '../contexts/ThemeContext'
import { isMobileOrTablet } from '@/lib/utils'
// @ts-expect-error - Particles is a JSX component without TypeScript definitions
import Particles from './Particles'

export default function Knowledge() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const isMobile = isMobileOrTablet()
  
  const knowledgeAreas = [
    { icon: <Brain className="w-8 h-8" />, title: t('knowledge.ai'), description: t('knowledge.aiDesc'), color: 'from-blue-500 to-cyan-500', link: "https://l6ncjsjwvj.feishu.cn/wiki/JVZ0wnP56ikEMKkXPqAc4m1Inze" },
    { icon: <Briefcase className="w-8 h-8" />, title: t('knowledge.work'), description: t('knowledge.workDesc'), color: 'from-purple-500 to-pink-500', link: "https://l6ncjsjwvj.feishu.cn/wiki/HNDpwjikZiwqupkmyylcLM2ln1g" },
    { icon: <Heart className="w-8 h-8" />, title: t('knowledge.life'), description: t('knowledge.lifeDesc'), color: 'from-red-500 to-orange-500', link: "https://l6ncjsjwvj.feishu.cn/wiki/JmF2w6bdSivsKXkYx0dcagH9nKT" },
    { icon: <Globe className="w-8 h-8" />, title: t('knowledge.world'), description: t('knowledge.worldDesc'), color: 'from-green-500 to-teal-500', link: "https://l6ncjsjwvj.feishu.cn/wiki/DvsIwFrVCiktTMkJoNHcbsxonfg" },
    { icon: <Sparkles className="w-8 h-8" />, title: t('knowledge.psychology'), description: t('knowledge.psychologyDesc'), color: 'from-yellow-500 to-amber-500', link: "https://l6ncjsjwvj.feishu.cn/wiki/PRywwYIr5iOhPvkb8nJcGMLanAe" },
    { icon: <Code className="w-8 h-8" />, title: t('knowledge.coding'), description: t('knowledge.codingDesc'), color: 'from-indigo-500 to-purple-500', link: "https://l6ncjsjwvj.feishu.cn/wiki/NfHfwwdBFi1U6AkJR3QcptknnLB" },
    { icon: <TrendingUp className="w-8 h-8" />, title: t('knowledge.business'), description: t('knowledge.businessDesc'), color: 'from-emerald-500 to-green-500', link: "https://l6ncjsjwvj.feishu.cn/wiki/PDhywedGQiSh3xkDjnJcCA0MnUe" },
    { icon: <GraduationCap className="w-8 h-8" />, title: t('knowledge.student'), description: t('knowledge.studentDesc'), color: 'from-rose-500 to-pink-500', link: "https://l6ncjsjwvj.feishu.cn/wiki/TSk3wriGiiBkAakVVCSccRJ0ndc" }
  ]

  // Particles 粒子颜色配置：浅色模式使用深色粒子，暗色模式使用亮色粒子
  const particleColors = theme === 'light'
    ? ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7'] // 深蓝紫色粒子
    : ['#60a5fa', '#818cf8', '#a78bfa', '#c084fc'] // 亮蓝紫色粒子

  return (
    <section id="knowledge" className="relative py-20 px-4 overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles 
          particleColors={particleColors}
          particleCount={isMobile ? 40 : 150}
          particleSpread={10}
          speed={isMobile ? 0.06 : 0.15}
          moveParticlesOnHover={isMobile ? false : true}
          particleHoverFactor={isMobile ? 1.0 : 1.5}
        />
      </div>
      
      {/* Light Gradient Overlay - pointer-events-none to allow mouse interaction with background */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-gray-50/20 to-transparent dark:from-transparent dark:via-gray-900/20 dark:to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ⛳️ <GradientText colors={['#4ade80', '#3b82f6', '#a855f7']}>{t('knowledge.title')}</GradientText>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4">{t('knowledge.subtitle')}</p>
          <p className="text-gray-500 dark:text-gray-500">{t('knowledge.note')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {knowledgeAreas.map((area, index) => (
            <motion.a
              key={index}
              href={area.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <GlassCard className="h-full group cursor-pointer pointer-events-auto">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${area.color} text-white mb-4 inline-block`}>
                  {area.icon}
                </div>
                <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-3 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${area.color}`}>
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{area.description}</p>
              </GlassCard>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <GlassCard className="text-center pointer-events-auto" allowBackgroundInteraction={true}>
            <p className="text-gray-700 dark:text-gray-300">{t('knowledge.tip')}</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
