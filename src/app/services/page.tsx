"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FeatureHoverPattern from "@/components/sections/feature/featureHoverPattern/FeatureHoverPattern";
import MetricCardTen from "@/components/sections/metrics/MetricCardTen";
import FooterCard from "@/components/sections/footer/FooterCard";
import Link from "next/link";
import { Linkedin, Twitter, Globe, DollarSign, Users, FileText, Handshake, ClipboardCheck, TrendingUp } from "lucide-react";

export default function ServicesPage() {
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
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="IndiaBusinessSale"
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Why Us", id: "features" },
            { name: "Contact", id: "contact" },
          ]}
          button={{
            text: "Get Free Valuation",            href: "contact"}}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureHoverPattern
          title="Our Structured Exit Process"
          description="A transparent, systematic approach to maximizing your business value and ensuring a smooth transition."
          tag="Strategic Process"
          tagAnimation="slide-up"
          features={[
            {
              icon: DollarSign,
              title: "Business Valuation",              description: "Comprehensive valuation using multiple methodologies to establish realistic market value and identify value-enhancement opportunities."},
            {
              icon: Users,
              title: "Buyer Identification",              description: "Access to our extensive network of qualified buyers including strategic acquirers, financial investors, and seasoned entrepreneurs."},
            {
              icon: FileText,
              title: "Documentation & Due Diligence",              description: "Professional data room management and comprehensive due diligence support to accelerate the buying process and close deals faster."},
            {
              icon: Handshake,
              title: "Negotiation & Structuring",              description: "Expert negotiation to secure optimal deal terms, earnouts, and payment structures that maximize your returns and minimize tax liability."},
            {
              icon: ClipboardCheck,
              title: "Regulatory & Compliance",              description: "Full compliance with FDI regulations, MCA requirements, and industry-specific rules ensuring seamless transaction execution."},
            {
              icon: TrendingUp,
              title: "Transition Planning",              description: "Smooth handover management and post-sale planning to ensure business continuity and your successful exit from operations."},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="services" data-section="services">
        <ProductCardFour
          title="Comprehensive Advisory Services"
          description="We offer specialized consulting services tailored to every stage of your business lifecycle and exit planning."
          tag="Full-Spectrum Solutions"
          tagAnimation="slide-up"
          products={[
            {
              id: "valuation",              name: "Business Valuation & Analysis",              price: "Starting ₹50,000",              variant: "Strategic Planning",              imageSrc: "http://img.b2bpic.net/free-photo/whiteboard-success-research-adult-human-office_1418-529.jpg",              imageAlt: "Business valuation financial analysis documents"},
            {
              id: "exit-planning",              name: "Exit Strategy Development",              price: "Starting ₹1,00,000",              variant: "Multi-Year Planning",              imageSrc: "http://img.b2bpic.net/free-photo/positive-worker-dancing-having-fun-startup-office-enjoying-listening-music-work-break-african-american-executive-manager-doing-dance-moves-after-finishing-company-investment-strategy_482257-74335.jpg",              imageAlt: "strategic exit planning business roadmap"},
            {
              id: "buyer-sourcing",              name: "Buyer Identification & Sourcing",              price: "Commission-based",              variant: "Success-Driven",              imageSrc: "http://img.b2bpic.net/free-photo/african-man-guy-black-suit-students-with-talet-girl-white-blouse_1157-41615.jpg",              imageAlt: "business buyer network meeting handshake"},
            {
              id: "tax-optimization",              name: "Tax & Structure Optimization",              price: "Starting ₹75,000",              variant: "Post-Tax Maximization",              imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-credit-assessment-concept_23-2149167956.jpg",              imageAlt: "tax planning financial strategy consultation"},
            {
              id: "legal-compliance",              name: "Legal & Regulatory Compliance",              price: "Starting ₹1,00,000",              variant: "Full Documentation",              imageSrc: "http://img.b2bpic.net/free-photo/still-life-world-intellectual-property-day_23-2151325873.jpg",              imageAlt: "legal compliance documents contract review"},
            {
              id: "due-diligence",              name: "Due Diligence Management",              price: "Starting ₹2,00,000",              variant: "Professional Support",              imageSrc: "http://img.b2bpic.net/free-photo/analyzing-lifestyle-female-marketing-tech-high_1421-249.jpg",              imageAlt: "due diligence document review process"},
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="why-us" data-section="why-us">
        <MetricCardTen
          title="Why Business Owners Choose Us"
          description="Proven results backed by experience, expertise, and an unwavering commitment to maximizing your success."
          tag="Track Record"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              title: "500+ Successful Exits",              subtitle: "Facilitated business sales across India with average 6-12 month timelines",              category: "Experience",              value: "₹2000+ Cr"},
            {
              id: "2",              title: "Expert Team of 25+",              subtitle: "Seasoned advisors with 15+ years average experience in M&A and exit planning",              category: "Expertise",              value: "100% Qualified"},
            {
              id: "3",              title: "98% Client Satisfaction",              subtitle: "Consistently rated highly for professionalism, confidentiality, and results delivery",              category: "Quality",              value: "Industry Leading"},
            {
              id: "4",              title: "Strategic Network",              subtitle: "Connected with 200+ pre-qualified buyers including PE firms, strategic investors, and entrepreneurs",              category: "Network",              value: "Exclusive Access"},
            {
              id: "5",              title: "Zero Conflicts",              subtitle: "Independent advisory with no competing interests - your success is our only agenda",              category: "Integrity",              value: "Fully Aligned"},
            {
              id: "6",              title: "Confidentiality Guaranteed",              subtitle: "Multi-layer security protocols and NDA compliance with zero data breaches in 20+ years",              category: "Trust",              value: "Bank-Grade Security"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="IndiaBusinessSale"
          copyrightText="© 2024 IndiaBusinessSale. All rights reserved. | Your Trusted Exit Partner."
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/company/indiabusinesssale",              ariaLabel: "LinkedIn"},
            {
              icon: Twitter,
              href: "https://twitter.com/indiabusinesssale",              ariaLabel: "Twitter"},
            {
              icon: Globe,
              href: "https://www.indiabusinesssale.com",              ariaLabel: "Website"},
          ]}
        />
      </div>
    </ThemeProvider>
  );
}