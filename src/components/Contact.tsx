import { motion } from 'framer-motion'
import { Mail, MessageSquare, Github, Youtube, Globe, QrCode } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import GlassCard from './ui/GlassCard'
import SpotlightCard from './ui/SpotlightCard'
import GradientText from './ui/GradientText'

export default function Contact() {
  const { t } = useTranslation()

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

  return (
    <section id="contact" className="relative py-20 px-4 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      
      <div className="relative max-w-7xl mx-auto z-10">
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

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full group cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-5 rounded-2xl bg-gradient-to-br ${contact.color} text-white mb-4`}
                  >
                    {contact.icon}
                  </motion.div>
                  <p className="font-bold text-xl text-gray-900 dark:text-white mb-2">{contact.label}</p>
                  {contact.link ? (
                    <motion.a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      {contact.value}
                    </motion.a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">{contact.value}</p>
                  )}
                </div>
              </GlassCard>
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
            <SpotlightCard className="p-8 h-full" spotlightColor="rgba(59, 130, 246, 0.15)">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">💼 {t('contact.workCommunication')}</h3>
              <div className="space-y-4">
                {workTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{tip}</span>
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
            <SpotlightCard className="p-8 h-full" spotlightColor="rgba(168, 85, 247, 0.15)">
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6">🤞 {t('contact.lifeCommunication')}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('contact.lifeTip')}
              </p>
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
          <GlassCard className="inline-block">
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
