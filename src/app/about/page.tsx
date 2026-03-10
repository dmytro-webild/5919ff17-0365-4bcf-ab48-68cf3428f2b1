"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureHoverPattern from "@/components/sections/feature/featureHoverPattern/FeatureHoverPattern";
import MetricCardTen from "@/components/sections/metrics/MetricCardTen";
import FooterCard from "@/components/sections/footer/FooterCard";
import {
  Shield,
  CheckCircle,
  Award,
  DollarSign,
  Users,
  FileText,
  Handshake,
  ClipboardCheck,
  TrendingUp,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSmallSizeLargeTitles"
      background="floatingGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="IndiaBusinessSale"
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Why Us", id: "features" },
            { name: "Contact", id: "contact" },
          ]}
          button={{
            text: "Get Free Valuation",
            href: "contact",
          }}
        />
      </div>

      {/* About Section - Deep Dive */}
      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story & Mission"
          description="Founded in 2004, IndiaBusinessSale has evolved from a boutique advisory firm into India's most trusted business exit partner. We work exclusively with entrepreneurs and business owners to facilitate confidential, profitable business sales across sectors including technology, manufacturing, retail, healthcare, and services."
          tag="Company History"
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Get In Touch",
              href: "contact",
            },
          ]}
          buttonAnimation="slide-up"
          bulletPoints={[
            {
              title: "Founded with Purpose",
              description:
                "Started by two successful entrepreneurs who understood the complexities and sensitivities of selling a business. We've grown into a team of 25+ advisors dedicated solely to business exits.",
              icon: Award,
            },
            {
              title: "Deep Industry Expertise",
              description:
                "Our team includes former business founders, investment bankers, tax consultants, legal experts, and operational professionals who understand every dimension of business transactions.",
              icon: CheckCircle,
            },
            {
              title: "Commitment to Confidentiality",
              description:
                "Confidentiality isn't just our policy—it's our culture. We've maintained zero data breaches in 20+ years through military-grade security protocols and absolute discretion.",
              icon: Shield,
            },
            {
              title: "Founder-Centric Approach",
              description:
                "We treat every founder's exit as if it were our own. Your goals, timeline, and concerns drive every decision we make in the process.",
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/multinational-business-colleagues-working-together_1163-5308.jpg?_wi=2"
          imageAlt="Team of business advisors in consultation"
          mediaAnimation="opacity"
          imagePosition="left"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      {/* Process Details */}
      <div id="features" data-section="features">
        <FeatureHoverPattern
          title="Our Comprehensive Exit Methodology"
          description="Each business is unique. Our structured yet flexible approach adapts to your specific circumstances, industry dynamics, and market conditions."
          tag="Proven Methodology"
          tagAnimation="slide-up"
          features={[
            {
              icon: DollarSign,
              title: "Holistic Valuation",
              description:
                "We employ DCF, comparable transactions, asset-based, and market approaches to establish a realistic valuation range and identify key value drivers for optimization.",
            },
            {
              icon: Users,
              title: "Strategic Buyer Identification",
              description:
                "Leveraging our network of 200+ pre-qualified buyers including PE firms, corporate acquirers, and strategic investors, we match your business with ideal buyers.",
            },
            {
              icon: FileText,
              title: "Professional Data Room Setup",
              description:
                "We organize and present your financial records, legal documents, operational metrics, and market position through a secure, efficient virtual data room.",
            },
            {
              icon: Handshake,
              title: "Expert Negotiation Support",
              description:
                "Our seasoned negotiators secure optimal terms—purchase price, payment structure, earnouts, warranties, and non-compete clauses.",
            },
            {
              icon: ClipboardCheck,
              title: "Legal & Compliance Excellence",
              description:
                "Full navigation of FDI regulations, MCA filings, tax structuring, and industry-specific compliance requirements ensures a smooth, compliant transaction.",
            },
            {
              icon: TrendingUp,
              title: "Seamless Post-Close Transition",
              description:
                "From handover coordination to knowledge transfer and post-sale support, we ensure business continuity and your successful exit from operations.",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      {/* Team Credentials & Metrics */}
      <div id="credentials" data-section="credentials">
        <MetricCardTen
          title="Our Team & Credentials"
          description="Our leadership combines business ownership experience, investment banking expertise, and deep domain knowledge across multiple sectors."
          tag="Expert Team"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",
              title: "Founder-Led Advisory",
              subtitle:
                "10+ senior advisors have successfully exited their own businesses, deeply understanding founder challenges and aspirations",
              category: "Founder Experience",
              value: "100% Relevant",
            },
            {
              id: "2",
              title: "Investment Banking Heritage",
              subtitle:
                "Team includes former partners from Goldman Sachs, Morgan Stanley, and leading boutique investment banks with M&A expertise",
              category: "Banking Background",
              value: "15+ Years Avg",
            },
            {
              id: "3",
              title: "Industry Specialists",
              subtitle:
                "Dedicated advisors covering technology, manufacturing, retail, healthcare, FMCG, and service sectors with sector-specific expertise",
              category: "Sector Coverage",
              value: "12+ Sectors",
            },
          ]}
          animationType="slide-up"
          textboxLayout="centered"
          useInvertedBackground={true}
        />
      </div>

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterCard
          logoText="IndiaBusinessSale"
          copyrightText="© 2024 IndiaBusinessSale. All rights reserved. | Your Trusted Exit Partner."
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/company/indiabusinesssale",
              ariaLabel: "LinkedIn",
            },
            {
              icon: Twitter,
              href: "https://twitter.com/indiabusinesssale",
              ariaLabel: "Twitter",
            },
            {
              icon: Globe,
              href: "https://www.indiabusinesssale.com",
              ariaLabel: "Website",
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}