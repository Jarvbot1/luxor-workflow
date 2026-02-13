'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WorkflowAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const steps = [
    {
      number: 1,
      icon: '📝',
      title: 'Fill Out Account Request',
      description: 'Complete the simple form with your details',
      details: [
        'Enter your name, email, and phone',
        'Provide date of birth (18+ required)',
        'Select your state',
        'Takes less than 2 minutes'
      ],
      color: 'from-purple-500 to-pink-500',
      delay: 0
    },
    {
      number: 2,
      icon: '📱',
      title: 'Receive Your Login',
      description: 'Get your credentials via text message',
      details: [
        'Unique Member ID generated',
        'Temporary password created',
        'Payment link included',
        'Delivered within 10 minutes'
      ],
      color: 'from-blue-500 to-cyan-500',
      delay: 0.3
    },
    {
      number: 3,
      icon: '💳',
      title: 'Fund Account & Play',
      description: 'Make your first deposit and start winning',
      details: [
        'Click the payment link',
        'Choose Cash App, PayPal, or Venmo',
        'Deposit $20, $50, or $100',
        'Start playing immediately!'
      ],
      color: 'from-green-500 to-emerald-500',
      delay: 0.6
    }
  ];

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-8xl mb-6 inline-block"
          >
            ⚡
          </motion.div>
          <h2 className="text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FF1493] bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-2xl text-gray-300">Get started in 3 simple steps</p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '200px' } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] mx-auto mt-8"
          />
        </motion.div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: step.delay }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Step Number & Icon (alternates sides on mobile) */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.8, delay: step.delay + 0.2 }}
                  className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <div className="relative">
                    {/* Glowing background */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${step.color} blur-3xl rounded-full`}
                    />
                    
                    {/* Main circle */}
                    <div className="relative bg-gradient-to-br from-black to-gray-900 rounded-full w-80 h-80 mx-auto flex items-center justify-center border-4 border-[#D4AF37]/30">
                      <div className="text-center">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                          className="text-9xl mb-4"
                        >
                          {step.icon}
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: step.delay + 0.5 }}
                          className={`text-8xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                        >
                          {step.number}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Step Content */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: step.delay + 0.4 }}
                  className={index % 2 === 1 ? 'md:order-1' : ''}
                >
                  <h3 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.title}
                  </h3>
                  <p className="text-2xl text-gray-300 mb-8">{step.description}</p>
                  
                  {/* Detail bullets */}
                  <div className="space-y-4">
                    {step.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: step.delay + 0.6 + (i * 0.1) }}
                        className="flex items-start space-x-4"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                          className="text-2xl"
                        >
                          ✓
                        </motion.div>
                        <span className="text-xl text-gray-200">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Connecting arrow (not on last step) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                  transition={{ duration: 0.8, delay: step.delay + 1 }}
                  className="hidden md:flex justify-center my-8"
                >
                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="text-6xl text-[#D4AF37]"
                  >
                    ⬇️
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-24"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 0 20px rgba(212, 175, 55, 0.5)',
                '0 0 40px rgba(255, 215, 0, 0.8)',
                '0 0 20px rgba(212, 175, 55, 0.5)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="inline-block"
          >
            <a
              href="#join"
              className="px-16 py-6 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] text-black text-3xl font-black rounded-2xl inline-block"
              style={{ backgroundSize: '200% 100%' }}
            >
              Start Playing Now 🎰
            </a>
          </motion.div>
          <p className="text-xl text-gray-400 mt-6">Join thousands of winners today • 18+</p>
        </motion.div>
      </div>
    </div>
  );
}
