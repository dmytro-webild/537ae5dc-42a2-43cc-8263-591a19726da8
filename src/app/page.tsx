"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Code } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="layered-gradient"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "About", id: "about" },
        { name: "Features", id: "features" },
        { name: "Pricing", id: "pricing" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="CarterDesigner"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      title="CarterDesigner"
      description="Crafting high-conversion digital experiences for forward-thinking brands. Expert web design and development that translates vision into growth."
      background={{ variant: "sparkles-gradient" }}
      buttons={[
        { text: "View My Work", href: "#features" },
        { text: "Start a Project", href: "#contact" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/still-life-graphic-design-studio_23-2151320704.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Me"
      title="Your Vision, My Code."
      description="I focus on blending aesthetic design with robust development, creating portfolios and landing pages that convert visitors into loyal clients."
      subdescription="I bring over 5 years of experience to every project, ensuring modern, responsive, and performance-optimized solutions."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B55aNX7QkTWF45mtrLiKakdOk5/uploaded-1776441857018-76vi3zs6.jpg"
      mediaAnimation="blur-reveal"
      icon={Code}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Portfolio Sites",          description: "High-impact visual showcases designed to represent your unique brand and expertise with elegance.",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345421.jpg"
        },
        {
          title: "Landing Pages",          description: "Conversion-focused landing pages engineered to turn traffic into leads and clients with speed and precision.",          imageSrc: "http://img.b2bpic.net/free-photo/inspired-youth_53876-176745.jpg"
        },
        {
          title: "Full-Stack Dev",          description: "Custom development solutions using cutting-edge tech stacks that are scalable, secure, and lightning-fast.",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-day_52683-160828.jpg"
        },
      ]}
      title="What I Do Best"
      description="Premium services tailored to boost your digital presence and drive conversions effectively."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      animationType="slide-up"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "150+", description: "Projects Delivered" },
        { id: "m2", value: "99.9%", description: "Client Satisfaction" },
        { id: "m3", value: "2x", description: "Avg Conversion Lift" },
      ]}
      title="Proven Impact"
      description="Quantifiable results that demonstrate the effectiveness of my designs and development practices."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          role: "Creative Lead",          company: "DesignCo",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg"
        },
        {
          id: "2",          name: "Michael C.",          role: "Founder",          company: "TechLabs",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/technician-making-sure-high-tech-facility-data-center-is-appropriately-equipped_482257-94430.jpg"
        },
        {
          id: "3",          name: "Emily R.",          role: "Director",          company: "Innovate",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-man-art-studio_23-2149705900.jpg"
        },
      ]}
      title="Loved by Clients"
      description="Client success stories showcasing how my work elevated their businesses and digital presence."
    />
  </div>

  <div id="socialproof" data-section="socialproof">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={false}
      names={["Microsoft", "Google", "Apple", "Airbnb", "Amazon", "Shopify", "Stripe"]}
      title="Trusted By Industry Leaders"
      description="Collaborating with elite teams and world-class organizations to build digital products that scale."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "How long does a project take?", content: "Most landing page projects are completed within 2-3 weeks depending on the complexity of your requirements." },
        { id: "q2", title: "What is your design process?", content: "We start with a discovery phase, move to design mockups, and end with development and launch, keeping you informed at every step." },
        { id: "q3", title: "Can you handle maintenance?", content: "Yes, I offer ongoing maintenance and support packages to ensure your site remains secure and updated." },
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Everything you need to know about working with CarterDesigner."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      text="Ready to launch your next big project? Let's build something extraordinary together."
      buttons={[{ text: "Contact Me Now", href: "mailto:hello@carterdesigner.com" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="CarterDesigner"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "© 2024 CarterDesigner. All rights reserved.", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
