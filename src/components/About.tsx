import { motion } from 'framer-motion'
import { Heart, Eye, Target, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SpotlightCard from './ui/SpotlightCard'
import GradientText from './ui/GradientText'

export default function About() {
  const { t } = useTranslation()
  
  const traits = [
    { icon: <Heart className="w-6 h-6" />, text: t('about.trait1'), color: 'from-red-500 to-pink-500' },
    { icon: <Eye className="w-6 h-6" />, text: t('about.trait2'), color: 'from-blue-500 to-cyan-500' },
    { icon: <Target className="w-6 h-6" />, text: t('about.trait3'), color: 'from-green-500 to-emerald-500' },
    { icon: <Sparkles className="w-6 h-6" />, text: t('about.trait4'), color: 'from-purple-500 to-pink-500' }
  ]

  const doing = [t('about.doing1'), t('about.doing2'), t('about.doing3'), t('about.doing4'), t('about.doing5')]
  const goodAt = [t('about.goodAt1'), t('about.goodAt2'), t('about.goodAt3'), t('about.goodAt4'), t('about.goodAt5')]

  return (
    <section id="about" className="relative py-20 px-4 bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900" />
      
      <div className="relative max-w-7xl mx-auto z-10">
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
              <SpotlightCard className="p-6 h-full">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${trait.color}`}>
                    {trait.icon}
                  </div>
                  <p className="text-gray-200 flex-1">{trait.text}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <SpotlightCard className="p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6">🤯 {t('about.doingTitle')}</h3>
            <div className="space-y-3">
              {doing.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">😴 {t('about.goodAtTitle')}</h3>
            <div className="space-y-3">
              {goodAt.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{item}</span>
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
          <SpotlightCard className="p-8 text-center" spotlightColor="rgba(168, 85, 247, 0.2)">
            <h3 className="text-3xl font-bold text-purple-400 mb-6">💫 {t('about.dreamTitle')}</h3>
            <p className="text-xl text-gray-200 leading-relaxed">
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {t('about.dream1')}
              </strong>
              <br />
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                {t('about.dream2')}
              </strong>
            </p>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}
