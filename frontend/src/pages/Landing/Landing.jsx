import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  BrainCircuit,
  Banknote,
  TrendingUp,
  Users,
  Zap,
  Star,
  MessageSquare,
  Calculator,
  Clock,
} from 'lucide-react'
import Button from '../../components/ui/premium/Button'
import { Card, Badge, Divider } from '../../components/ui/premium/index'

const Landing = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
              E
            </div>
            <span className="text-lg font-bold text-slate-900">EduPath</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Features</a>
            <a href="#tools" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Tools</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Success Stories</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge variant="slate" className="mb-6">
              🎓 The Future of Student Success
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Empower Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">Student Journey</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              An intelligent ecosystem designed to guide students from university discovery through successful loan conversion. AI-powered insights, real-time financing options, and personalized recommendations.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/register">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                Start Your Journey
              </Button>
            </Link>
            <a href="#demo">
              <Button variant="secondary" size="lg">
                Watch Demo
              </Button>
            </a>
          </motion.div>

          {/* Hero Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-b from-primary-50 to-slate-100 rounded-2xl p-1 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop"
                alt="Students collaborating"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-4 bottom-10 bg-white rounded-xl shadow-lg p-4 max-w-xs border border-slate-100"
            >
              <p className="text-xs font-semibold text-slate-600 mb-2">AI MATCH SCORE</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-900">94%</span>
                <span className="text-xs text-emerald-600 font-semibold">↑ 12% this month</span>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -right-4 top-20 bg-white rounded-xl shadow-lg p-4 max-w-xs border border-slate-100"
            >
              <p className="text-xs font-semibold text-slate-600 mb-2">LOAN OPTIONS</p>
              <p className="text-xl font-bold text-slate-900">₹52L Available</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-around gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">50,000+</p>
              <p className="text-slate-600">Students Helped</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">200+</p>
              <p className="text-slate-600">Partner Universities</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">₹500Cr+</p>
              <p className="text-slate-600">Financing Facilitated</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">4.9★</p>
              <p className="text-slate-600">Rating on TrustPilot</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive tools and insights designed for every stage of your educational journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BrainCircuit,
                title: 'AI Career Navigator',
                description: 'Discover career paths aligned with your strengths and ambitions through intelligent analysis',
              },
              {
                icon: TrendingUp,
                title: 'Admission Predictor',
                description: 'Get real-time admission probability scores with detailed insights and recommendations',
              },
              {
                icon: Calculator,
                title: 'ROI Calculator',
                description: 'Analyze the financial return on your education investment with precision',
              },
              {
                icon: Clock,
                title: 'Timeline Generator',
                description: 'Automated application timelines keeping you on track with important deadlines',
              },
              {
                icon: Banknote,
                title: 'Smart Financing',
                description: 'Compare loan offers and find the best financing options tailored to you',
              },
              {
                icon: MessageSquare,
                title: 'AI Mentor Chat',
                description: '24/7 AI guidance answering all your questions about education and financing',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <Card className="h-full p-6 hover:shadow-lg transition-all">
                  <div className="mb-4 p-3 bg-primary-50 rounded-lg w-fit group-hover:bg-primary-100 transition-colors">
                    <feature.icon className="text-primary-600" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Educational Journey?</h2>
          <p className="text-lg text-primary-50 mb-8">Join thousands of students succeeding with EduPath. Start your journey to your dream university today.</p>
          <Link to="/register">
            <Button variant="secondary" size="lg" icon={ArrowRight} iconPosition="right">
              Get Started Free
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How accurate is your admission prediction?',
                a: 'Our AI model has 89% accuracy based on historical data from 500+ universities. Individual results may vary based on profile strength.',
              },
              {
                q: 'Is there a cost to use EduPath?',
                a: 'Basic features are free forever. Premium features start at ₹999/month with 7-day free trial.',
              },
              {
                q: 'Which universities do you cover?',
                a: 'We cover 200+ universities across UK, USA, Canada, Australia, and other countries.',
              },
              {
                q: 'How do loan offers work?',
                a: 'We connect you with verified lenders. Compare offers and apply directly through our platform.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
                  E
                </div>
                <span className="text-lg font-bold text-white">EduPath</span>
              </Link>
              <p className="text-sm">Empowering students to reach their educational dreams.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <Divider className="bg-slate-700 mb-8" />
          <p className="text-center text-sm">© 2024 EduPath. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
