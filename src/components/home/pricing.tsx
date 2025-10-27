'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Crown, 
  Rocket,
  ArrowRight,
  Shield,
  MessageCircle,
  Target,
  TrendingUp
} from 'lucide-react';
import { Afacad, Syncopate, Tektur } from 'next/font/google';
import { BackgroundBeams } from '@/components/ui/background-beams';

const afacad = Afacad({
  weight: ['400', '500', '600', '700' ],
  variable: '--font-afacad',
  subsets: ['latin']
})

const syncopate = Syncopate({ 
  weight: ['400', '700'], 
  variable: '--font-syncopate', 
  subsets: ['latin'] 
});

const tektur = Tektur({ 
  weight: ['400', '500', '600', '700'], 
  variable: '--font-tektur', 
  subsets: ['latin'] 
});

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingTiers = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$2,999' : '$2,499',
      period: billingCycle === 'monthly' ? '/month' : '/month',
      description: 'Perfect for startups and small businesses',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Custom Website Design',
        'Responsive Development',
        'Basic SEO Optimization',
        '5 Pages Maximum',
        'Contact Form Integration',
        '3 Months Support',
        'Basic Analytics Setup',
        'Mobile Optimization'
      ],
      notIncluded: [
        'Advanced SEO',
        'E-commerce Functionality',
        'Custom CMS',
        'API Integration',
        'Advanced Analytics'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: billingCycle === 'monthly' ? '$5,999' : '$4,999',
      period: billingCycle === 'monthly' ? '/month' : '/month',
      description: 'Ideal for growing businesses',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Custom Website Design',
        'Responsive Development',
        'Advanced SEO Optimization',
        'Unlimited Pages',
        'Contact Form Integration',
        '6 Months Support',
        'Advanced Analytics',
        'Mobile Optimization',
        'Basic E-commerce',
        'Custom CMS',
        'API Integration'
      ],
      notIncluded: [
        'Enterprise Security',
        'Dedicated Server',
        '24/7 Support',
        'Custom CRM Integration'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: billingCycle === 'monthly' ? '$9,999' : '$8,499',
      period: billingCycle === 'monthly' ? '/month' : '/month',
      description: 'For large organizations and enterprises',
      icon: Star,
      color: 'from-orange-500 to-red-500',
      features: [
        'Custom Website Design',
        'Responsive Development',
        'Enterprise SEO',
        'Unlimited Pages',
        'Advanced Forms',
        '12 Months Support',
        'Enterprise Analytics',
        'Mobile Optimization',
        'Advanced E-commerce',
        'Custom CMS',
        'API Integration',
        'Enterprise Security',
        'Dedicated Server',
        '24/7 Support',
        'Custom CRM Integration',
        'Priority Development'
      ],
      notIncluded: [],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const competitorComparison = [
    {
      feature: 'Custom Design',
      overture: '✓ Fully Custom',
      competitorA: '✓ Template-based',
      competitorB: '✗ Limited',
      competitorC: '✓ Semi-custom'
    },
    {
      feature: 'Responsive Design',
      overture: '✓ All Devices',
      competitorA: '✓ Basic',
      competitorB: '✓ Mobile Only',
      competitorC: '✓ All Devices'
    },
    {
      feature: 'SEO Optimization',
      overture: '✓ Advanced',
      competitorA: '✓ Basic',
      competitorB: '✗ None',
      competitorC: '✓ Standard'
    },
    {
      feature: 'E-commerce',
      overture: '✓ Advanced',
      competitorA: '✓ Basic',
      competitorB: '✓ Standard',
      competitorC: '✓ Advanced'
    },
    {
      feature: 'Custom CMS',
      overture: '✓ Tailored',
      competitorA: '✗ WordPress Only',
      competitorB: '✗ Limited',
      competitorC: '✓ WordPress'
    },
    {
      feature: 'API Integration',
      overture: '✓ Unlimited',
      competitorA: '✓ Limited',
      competitorB: '✗ None',
      competitorC: '✓ Standard'
    },
    {
      feature: 'Support',
      overture: '✓ 24/7 Enterprise',
      competitorA: '✓ Business Hours',
      competitorB: '✓ Email Only',
      competitorC: '✓ Business Hours'
    },
    {
      feature: 'Security',
      overture: '✓ Enterprise Grade',
      competitorA: '✓ Standard',
      competitorB: '✓ Basic',
      competitorC: '✓ Standard'
    },
    {
      feature: 'Performance',
      overture: '✓ Optimized',
      competitorA: '✓ Good',
      competitorB: '✓ Average',
      competitorC: '✓ Good'
    },
    {
      feature: 'Analytics',
      overture: '✓ Advanced',
      competitorA: '✓ Basic',
      competitorB: '✓ Standard',
      competitorC: '✓ Standard'
    }
  ];

  const additionalServices = [
    {
      title: 'SEO Optimization',
      price: '$999/month',
      description: 'Advanced SEO strategies to boost your online presence',
      icon: Target,
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Content Strategy', 'Monthly Reports']
    },
    {
      title: 'Content Creation',
      price: '$1,499/month',
      description: 'Professional content creation for your website',
      icon: MessageCircle,
      features: ['Blog Posts', 'Product Descriptions', 'Landing Pages', 'Social Media Content', 'Email Campaigns']
    },
    {
      title: 'Maintenance & Support',
      price: '$499/month',
      description: 'Ongoing maintenance and technical support',
      icon: Shield,
      features: ['Regular Updates', 'Security Monitoring', 'Backup Services', 'Performance Optimization', 'Technical Support']
    },
    {
      title: 'Digital Marketing',
      price: '$2,499/month',
      description: 'Comprehensive digital marketing solutions',
      icon: TrendingUp,
      features: ['PPC Campaigns', 'Social Media Marketing', 'Email Marketing', 'Analytics & Reporting', 'Strategy Consulting']
    }
  ];

  return (
    <section className="relative overflow-hidden bg-transparent text-black dark:text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-fit h-fit p-1.5 sm:p-2 bg-zinc-200 rounded-full px-3 sm:px-4 mx-auto mb-4 sm:mb-5 md:mb-6">
            <h2 className={`${tektur.className} 
                tracking-widest relative text-left z-10 text-xs sm:text-sm md:text-md text-black`}>
                Pricing  
            </h2>
          </div>
          <h1 className={`${syncopate.className} 
              tracking-widest relative text-center w-full max-w-4xl px-4 z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-5 md:mb-6`}>
              Transparent Pricing for Exceptional Results
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto px-4 sm:px-6 md:px-8">
            Choose the perfect plan for your business. No hidden fees, just transparent pricing for world-class web development services.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-6 sm:mt-7 md:mt-8 space-x-2 sm:space-x-3 md:space-x-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm md:text-base ${
                billingCycle === 'monthly' 
                  ? 'bg-blue-500 text-white dark:bg-blue-600 dark:text-white' 
                  : 'bg-black/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg transition-all duration-300 text-xs sm:text-sm md:text-base ${
                billingCycle === 'yearly' 
                  ? 'bg-blue-500 text-white dark:bg-blue-600 dark:text-white' 
                  : 'bg-zinc-400/10 text-gray-500 hover:bg-white/20'
              }`}
            >
              Yearly <span className="text-green-400 ml-1">(Save 17%)</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${tier.popular ? 'scale-105' : ''}`}
              >
                <Card className={`relative overflow-hidden backdrop-blur-sm border-0 h-full ${
                  tier.popular 
                    ? '' 
                    : 'bg-white/5 border-white/10 '
                }`}>
                  {tier.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-blue-500 text-white px-4 py-1 rounded-bl-lg">
                      <Badge className="bg-transparent border-0 text-white font-semibold">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center`}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className={`${syncopate.className} text-lg sm:text-xl md:text-2xl font-bold text-black`}>
                      {tier.name}
                    </CardTitle>
                    <p className={`${afacad.className} text-gray-500 text-sm sm:text-base md:text-lg mt-1 sm:mt-2 px-2 sm:px-0`}>{tier.description}</p>
                    <div className="mt-3 sm:mt-4">
                      <span className={`${afacad.className} text-3xl sm:text-4xl md:text-5xl font-bold text-black`}>{tier.price}</span>
                      <span className={`${afacad.className} text-gray-400 text-sm sm:text-base md:text-lg`}>{tier.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-2 sm:space-y-3 md:space-y-4 px-4 sm:px-6">
                    <div className="space-y-2 sm:space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                          <span className={`${afacad.className} text-gray-500 text-sm sm:text-base md:text-lg`}>{feature}</span>
                        </div>
                      ))}
                      
                      {tier.notIncluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 sm:space-x-3 opacity-60">
                          <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                          <span className={`${afacad.className} text-gray-400 line-through text-sm sm:text-base md:text-lg`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-2.5 ${
                        tier.popular 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                          : 'bg-white/10 hover:bg-white/20'
                      } ${afacad.className} text-white font-semibold transition-all duration-300`}
                    >
                      {tier.cta}
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Competitor Comparison */}
        <motion.div 
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className={`${syncopate.className} text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4 px-4`}>
              Why Choose Overture?
            </h2>
            <p className={`${afacad.className} text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-2xl mx-auto px-4 sm:px-6 md:px-8`}>
              See how we compare to other web development agencies. We believe in transparency and delivering superior value.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="min-w-[800px] inline-block">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
                <div className="grid grid-cols-5 gap-0">
                  {/* Header Row */}
                  <div className="p-2 sm:p-3 md:p-4 bg-zinc-500/20 border-r border-white/10">
                    <h3 className="font-semibold text-white text-xs sm:text-sm md:text-base">Features</h3>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-r from-blue-500/20 to-blue-500/20 border-r border-white/10">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      <h3 className="font-semibold text-white text-xs sm:text-sm md:text-base">Overture</h3>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 bg-white/5 border-r border-white/10">
                    <h3 className="font-semibold text-gray-300 text-xs sm:text-sm md:text-base">Competitor A</h3>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 bg-white/5 border-r border-white/10">
                    <h3 className="font-semibold text-gray-300 text-xs sm:text-sm md:text-base">Competitor B</h3>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 bg-white/5">
                    <h3 className="font-semibold text-gray-300 text-xs sm:text-sm md:text-base">Competitor C</h3>
                  </div>
                  
                  {/* Feature Rows */}
                  {competitorComparison.map((row, index) => (
                    <React.Fragment key={index}>
                      <div className={`p-2 sm:p-3 md:p-4 border-r border-white/10 ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}`}>
                        <span className="text-gray-300 text-xs sm:text-sm">{row.feature}</span>
                      </div>
                      <div className={`p-2 sm:p-3 md:p-4 border-r border-white/10 ${index % 2 === 0 ? 'bg-purple-500/10' : 'bg-transparent'}`}>
                        <span className="text-green-400 font-medium text-xs sm:text-sm">{row.overture}</span>
                      </div>
                      <div className={`p-2 sm:p-3 md:p-4 border-r border-white/10 ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}`}>
                        <span className="text-gray-300 text-xs sm:text-sm">{row.competitorA}</span>
                      </div>
                      <div className={`p-2 sm:p-3 md:p-4 border-r border-white/10 ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}`}>
                        <span className="text-gray-300 text-xs sm:text-sm">{row.competitorB}</span>
                      </div>
                      <div className={`p-2 sm:p-3 md:p-4 ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}`}>
                        <span className="text-gray-300 text-xs sm:text-sm">{row.competitorC}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Services */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className={`${syncopate.className} text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 px-4`}>
              Additional Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-6 md:px-8">
              Enhance your project with our premium add-on services designed to maximize your online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                        </div>
                        <div>
                          <CardTitle className="text-sm sm:text-base md:text-lg font-semibold text-white">
                            {service.title}
                          </CardTitle>
                          <p className="text-purple-400 font-medium text-xs sm:text-sm">{service.price}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant="outline" 
                        className="w-full mt-3 sm:mt-4 border-purple-500/50 text-purple-400 hover:bg-purple-500/20 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-500/30">
            <h2 className={`${syncopate.className} text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 px-4`}>
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-6 md:px-8">
              Let&rsquo;s discuss your project and create a custom solution that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-2.5"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/20 text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-2.5"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
