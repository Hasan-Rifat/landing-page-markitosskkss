"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import FeatureCard from "./FeatureCard";
import AnalyticsWidget from "./AnalyticsWidget";
import EngagementWidget from "./EngagementWidget";
import SocialMediaWidget from "./SocialMediaWidget";
import Link from "next/link";

export default function FeaturesSection() {
  const features = [
    {
      title: "Data Wizards",
      features: [
        { icon: "✨", text: "Unlock Real-Time Community Pulse" },
        { icon: "🔍", text: "Decode Your Competitors' Audiences" },
        { icon: "📊", text: "Instant Survey Insights, Zero Wait" },
      ],
      description: "Lead with Data. Design with Confidence.",
    },
    {
      title: "Software Wizards",
      features: [
        { icon: "💎", text: "Bespoke Design, Unmatched Originality" },
        { icon: "🤖", text: "AI-Powered Innovation at Your Fingertips" },
        { icon: "🏆", text: "Dominate Search Rankings with #1 SEO Expertise" },
        { icon: "🛒", text: "E-Commerce Engineered to Convert" },
      ],
      description: "Transform Vision into Digital Reality",
    },
    {
      title: "Marketing Wizards",
      features: [
        { icon: "🔍", text: "Unlock Hyper-Targeted Insights" },
        { icon: "🌟", text: "Amplify Your Voice Through Elite Influence" },
        { icon: "🎨", text: "Craft Scroll-Stopping Content, On Demand" },
      ],
      description: "Dominate Feeds. Ignite Conversations. Own Your Audience.",
    },
  ];

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </motion.div>

      <div className="relative">
        <AnalyticsWidget className="hidden md:block top-40 left-[5%] transform -rotate-6 w-80 h-48" />

        <EngagementWidget className="hidden md:block bottom-40 right-[5%] transform rotate-6 w-80 h-48" />

        <SocialMediaWidget className="hidden md:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-48" />
      </div>
      <div>
        <Link href={"/book"}>
          <button className="">Book a Wizard</button>
        </Link>
      </div>
    </section>
  );
}
