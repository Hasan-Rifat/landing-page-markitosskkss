"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

const teamContent = [
  {
    icon: "🔮",
    title:
      "Unlock Hidden Community Magic with the World's #1 Data Analyst Team",
    description:
      "Your audience isn't a mystery, it's a goldmine. The 3 and a half Data Wizards, are the world's #1 data architects, pioneering insights, they redefine how brands see communities, fans, and consumers. Our elite team, honed at EY, Nikon, and Sony, cracks the code of human behavior, unearthing desires even your audience can't articulate. We don't just analyze trends; we architect them, leveraging predictive analytics to craft loyalty, spark movements, and future-proof your strategy.",
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    icon: "🌟",
    title:
      "#1 Career Wizard Program: Elite Mentorship, Industry Titans & Your Dream Role Blueprint",
    description:
      "Your career isn't just a climb, it's a revolution. At 3AH Mentorship, we're the world's #1 career architects, blending explosive content, battle-tested resources, and direct access to Fortune 500 disruptors to future-proof your professional journey. Our Wizards, recruited from Silicon Valley's elite and trained to transform ambition into action, don't just mentor; they orchestrate breakthroughs. This isn't networking, it's net-dominating.",
    gradient: "from-purple-400 to-pink-600",
  },
  {
    icon: "🤖",
    title: "#1 AI Software Wizards, Crack Any Code, Crush Any Challenge",
    description:
      "The AI revolution isn't coming, it's here, and our Wizards are the world's #1 AI Software Enchanters, armed with algorithms sharp enough to slice through impossible challenges and rebuild them into breakthroughs. Our elite team, battle-tested at giants like Santander, Vodafone, some of the brightest disruptors, we don't just solve problems, we obliterate them. From legacy system overhauls to AI-driven moonshots, we inject raw innovation into every line of code. Think faster. Build smarter. Outthink everyone.",
    gradient: "from-green-400 to-teal-600",
  },
  {
    icon: "🚀",
    title:
      "#1 Social Media Alchemists—Turn Chaos into Conversion with Battle-Tested Wizards",
    description:
      "Social media isn't just posting, it's what we love. At 3AH, we're the world's #1 social media alchemists, forged in the fires of startups. Our Marketing Wizards don't guess, crafting unbreakable strategies that turn hashtags into hype, followers into fanatics, and chaos into ROI. We've survived algorithm avalanches, engagement droughts, and viral meltdowns, so you don't have to. With AI-powered analytics, guerrilla creativity, and many years in the field.",
    gradient: "from-orange-400 to-red-600",
  },
];

function FloatingParticle({ delay, color }: { delay: number; color: string }) {
  return (
    <motion.div
      className={`absolute w-1 h-1 ${color} rounded-full`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [-20, -40],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      }}
    />
  );
}

function TeamCard({
  content,
  index,
}: {
  content: (typeof teamContent)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="relative overflow-hidden bg-white/10 backdrop-blur-md border-none shadow-lg hover:shadow-2xl transition-all duration-500">
        <motion.div
          className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${content.gradient}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        />

        <div className="relative p-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.1,
            }}
            className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm"
          >
            <span className="text-4xl">{content.icon}</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${content.gradient} mb-4`}
          >
            {content.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="text-gray-300 leading-relaxed"
          >
            {content.description}
          </motion.p>

          {[...Array(5)].map((_, i) => (
            <FloatingParticle
              key={i}
              delay={i * 0.5 + index}
              color={`bg-gradient-to-r ${content.gradient}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600 via-gray-800 to-black"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Our Wizard&apos;s Team Thrives on Challenges
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {teamContent.map((content, index) => (
            <TeamCard key={index} content={content} index={index} />
          ))}
        </div>
      </div>

      {/* Interactive background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
