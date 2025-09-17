import React from 'react'
import ScrollStack, { ScrollStackItem } from '../ScrollStack'
import { Card, CardContent } from '../ui/card'
import { Tektur, Syncopate, Afacad } from 'next/font/google'

const tektur = Tektur({ weight: ['400', '700'], variable: '--font-tektur', subsets: ['latin'] })
const syncopate = Syncopate({ weight: ['400', '700'], variable: '--font-syncopate', subsets: ['latin'] })
const afacad = Afacad({ weight: ['400', '700'], variable: '--font-afacad', subsets: ['latin'] })

export default function InfoCards() {
  const cards = [
    {
      title: "Innovation First",
      description: "We pioneer cutting-edge solutions that push the boundaries of technology and creativity.",
      features: ["AI Integration", "Cloud Native", "Scalable Architecture"],
      icon: "🚀"
    },
    {
      title: "Design Excellence",
      description: "Our design philosophy centers on user experience, aesthetics, and functional perfection.",
      features: ["UI/UX Design", "Responsive Layouts", "Brand Identity"],
      icon: "🎨"
    },
    {
      title: "Technical Mastery",
      description: "We leverage the latest technologies and best practices to deliver robust, high-performance solutions.",
      features: ["Full Stack Development", "DevOps", "Performance Optimization"],
      icon: "⚡"
    }
  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="w-fit h-fit p-2 bg-zinc-200 rounded-full px-4 mb-6">
          <h2 className={`${tektur.className} tracking-widest relative text-left z-10 text-md sm:text-sm text-black`}>
            Our Approach
          </h2>
        </div>
        <h1 className={`${syncopate.className} tracking-widest relative text-center w-full z-10 text-3xl md:text-4xl font-bold text-black mb-4`}>
          Transforming Ideas Into Digital Reality
        </h1>
        <p className={`${afacad.className} text-lg text-gray-600 text-center max-w-3xl mx-auto`}>
          We combine innovation, design excellence, and technical expertise to create digital experiences that inspire and engage.
        </p>
      </div>
      
      <ScrollStack className="w-full h-full">
        {cards.map((card, index) => (
          <ScrollStackItem key={index} index={index}>
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl">{card.icon}</div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className={`${syncopate.className} text-2xl md:text-3xl font-bold text-gray-900 mb-4`}>
                  {card.title}
                </h3>
                <p className={`${afacad.className} text-lg text-gray-600 mb-6 leading-relaxed`}>
                  {card.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className={`${tektur.className} text-sm font-semibold text-gray-700 uppercase tracking-wider`}>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {card.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-3 text-center"
                      >
                        <span className={`${afacad.className} text-sm font-medium text-gray-700`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  )
}
