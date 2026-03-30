/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Users, 
  Heart, 
  ShieldCheck, 
  Megaphone, 
  Users2, 
  ArrowRight, 
  Home, 
  CheckCircle2, 
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const whatsappGroupLink = import.meta.env.VITE_WHATSAPP_GROUP_LINK ?? '#';

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
        <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Users className="text-primary w-6 h-6" />
            <div className="flex flex-col">
              <span className="text-lg font-extrabold text-primary leading-tight font-headline tracking-tight">
                Srijan Optima
              </span>
              <span className="text-[10px] font-bold text-secondary-accent uppercase tracking-widest leading-none">
                Owners Community
              </span>
            </div>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <div className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
              Unofficial Initiative
            </div>
            <a href="#" className="text-primary font-bold border-b-2 border-primary font-headline text-sm">Home</a>
            <a href="#" className="text-slate-600 hover:text-primary transition-colors font-headline text-sm">Verification</a>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden px-6 py-12">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKR17AlauGB-mZmDQ5V366cGTmb9dNkd6jI_jT800MNYfw3j3JVr8oEbaf010jee3YswBVuFJIaRBEjAI37JbLI77IP16cx4i5WN86MwI35btsjMuuTfERYjFQmfoxA6ERzGsNpBAUNqjWlRWOPzoWezMLXJFGK55_rswr3iyCdKiOgvhc-K7mU6WNQMxnxWjdnjCGPXt3CbnufIDCDJ8bbDdv8fsKUEXqH8u1YiFaEKMycEnQAw0LODshFCsI73-fhilkV82hMA" 
              alt="Srijan Optima Architecture" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.div 
              {...fadeIn}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-accent/90 backdrop-blur-md text-white font-headline text-xs font-bold tracking-wider uppercase mb-6 mx-auto shadow-lg"
            >
              <Heart className="w-3.5 h-3.5" />
              For Owners, By Owners
            </motion.div>
            
            <motion.h1 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="font-headline font-extrabold text-4xl md:text-6xl text-on-surface leading-[1.1] tracking-tight mb-6"
            >
              The Srijan Optima <br />
              <span className="text-primary italic">Owners Community</span>
            </motion.h1>
            
            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="font-body text-lg text-on-surface-variant leading-relaxed mb-4 max-w-md mx-auto"
            >
              An independent, resident-run platform for collaboration, news, and real-time updates.
            </motion.p>
            
            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="text-sm font-bold text-secondary-accent mb-8 uppercase tracking-widest"
            >
              Unofficial Community Hub
            </motion.p>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <a 
                href={whatsappGroupLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto hero-gradient text-white px-8 py-4 rounded-full font-headline font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                Join Resident WhatsApp
              </a>
              <p className="text-xs text-on-surface-variant font-medium italic">
                Note: This is a private, resident-managed group. Verification is mandatory.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Verification Notice */}
        <section className="px-6 -mt-16 relative z-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto bg-surface-container-lowest p-6 rounded-2xl shadow-xl shadow-on-surface/5 flex flex-col items-center text-center gap-4 border border-outline-variant/10"
          >
            <div className="w-12 h-12 rounded-full bg-secondary-accent/10 flex items-center justify-center text-secondary-accent">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <p className="font-body text-sm text-on-surface-variant font-medium">
              This community initiative is exclusively for <span className="text-primary font-bold">verified Srijan Optima unit owners</span>. Proof of ownership will be requested by the volunteer moderators.
            </p>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="font-headline font-bold text-3xl text-on-surface mb-4">Independent Owner Benefits</h2>
              <div className="h-1.5 w-12 bg-secondary-accent rounded-full"></div>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Megaphone,
                  title: "Unfiltered Updates",
                  desc: "Get the real picture with ground-level reports from fellow owners on construction and site progress."
                },
                {
                  icon: Users,
                  title: "Owner Advocacy",
                  desc: "A united platform to discuss common concerns and coordinate collective representation for better results."
                },
                {
                  icon: Users2,
                  title: "Neighbor Network",
                  desc: "Start building relationships with your future neighbors today in a space free from builder marketing."
                }
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="bg-surface-container-low p-8 rounded-3xl group hover:bg-surface-container-lowest transition-all duration-300 border border-transparent hover:border-outline-variant/15 hover:shadow-2xl hover:shadow-on-surface/5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-4">{benefit.title}</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Immersive View */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden relative min-h-[450px] flex items-end">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE05q_9OrasOHePhg-uFB7KOPs8GXprLd0JYF1ovapOylgDY66HNcyH8vAHOKKXuSTwc-npcit-GsNEHfWajjox-O2BDmvew4NStklMmGi9LF-wnhJAkjTNXi33NaVAVvX4bdkD7SEQOuE49-IRj8dsrl8Zo7B2YQqICaSnbBM8QtgQbQABMXyEuzC-GQqn1D4_6T-YqT-RAOmy1SJNz0GKspp2-sKtWKyzm_cP-IXhl5cBQ3R2ff9stTvr1gaq6VhR2pybWIDZw" 
              alt="Srijan Optima Community Space" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative w-full p-8 md:p-12 glass-panel m-4 rounded-2xl">
              <div className="max-w-xl">
                <span className="text-xs font-bold text-secondary-accent uppercase tracking-widest mb-2 block">Resident Initiative</span>
                <h3 className="font-headline font-extrabold text-2xl text-primary mb-2">The Heart of Our Community</h3>
                <p className="font-body text-slate-700">Join a thriving ecosystem of homeowners dedicated to transparency, excellence and harmony.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 text-center bg-surface-container-low">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-headline font-bold text-3xl text-on-surface mb-6">Ready to join your neighbors?</h2>
            <p className="font-body text-on-surface-variant mb-10">Don't miss out on important resident-led discussions. Click below to start the verification process for our private group.</p>
            <a 
              href={whatsappGroupLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-5 rounded-full font-headline font-extrabold text-xl shadow-lg shadow-primary/30 hover:shadow-2xl transition-all active:scale-95 group"
            >
              Join the Circle
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 py-12 px-6 mt-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4 max-w-lg">
              <div className="flex items-center gap-2">
                <Users className="text-primary w-5 h-5" />
                <p className="font-headline font-bold text-primary">Srijan Optima Owners Community</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed italic border-l-2 border-secondary-accent pl-4">
                DISCLAIMER: This is an independent community website and is not affiliated with, authorized, or endorsed by Srijan Realty. All trademarks and project names belong to their respective owners. This page is run by and for the residents of Srijan Optima.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <a href="#" className="text-slate-500 hover:text-primary font-body text-sm transition-colors">Owner Verification</a>
              <a href="#" className="text-slate-500 hover:text-primary font-body text-sm transition-colors">Community Rules</a>
              <a href="#" className="text-slate-500 hover:text-primary font-body text-sm transition-colors">Contact Volunteers</a>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 text-center md:text-left">
            <p className="font-body text-xs text-slate-400">
              © 2025 Srijan Optima Independent Owners Group. Resident-Managed.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs">
        <div className="glass-panel rounded-full shadow-2xl flex justify-around p-4 items-center">
          <button className="flex flex-col items-center gap-1 text-primary">
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-500">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Verify</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-500">
            <HelpCircle className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Help</span>
          </button>
        </div>
      </div>
    </div>
  );
}
