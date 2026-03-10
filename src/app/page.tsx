"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogoBillboard from "@/components/sections/hero/HeroLogoBillboard";
import SplitAbout from "@/components/sections/about/SplitAbout";
import FeatureHoverPattern from "@/components/sections/feature/featureHoverPattern/FeatureHoverPattern";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import MetricCardTen from "@/components/sections/metrics/MetricCardTen";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import ContactSplit from "@/components/sections/contact/ContactSplit";
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

export default function HomePage() {
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

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="IndiaBusinessSale"
          description="Sell Your Business Confidentially & Profitably. Get expert tax, legal, and advisory support to maximize your exit value. Connect with India's trusted business sale advisors in minutes."
          buttons={[
            {
              text: "Get Free Valuation",
              href: "contact",
            },
            {
              text: "Learn More",
              href: "about",
            },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          imageSrc="http://img.b2bpic.net/free-photo/business-partners-meeting-breakfast_74855-1160.jpg"
          imageAlt="Professional business consulting office"
          mediaAnimation="slide-up"
          frameStyle="card"
          ariaLabel="Hero section - Sell Your Business Confidentially"
        />
      </div>

      {/* About Section */}
      <div id="about" data-section="about">
        <SplitAbout
          title="Why Entrepreneurs Trust IndiaBusinessSale"
          description="With over two decades of experience in confidential business transactions, we've helped hundreds of Indian entrepreneurs successfully exit their ventures with maximum value and minimal complexity."
          tag="Our Expertise"
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Schedule Consultation",
              href: "about",
            },
          ]}
          buttonAnimation="slide-up"
          bulletPoints={[
            {
              title: "Confidentiality First",
              description:
                "We maintain strict confidentiality protocols throughout the entire transaction process, protecting your business reputation and employee morale.",
              icon: Shield,
            },
            {
              title: "Tax & Legal Expertise",
              description:
                "Our team includes experienced tax consultants and legal advisors who optimize your exit structure for maximum post-tax returns.",
              icon: CheckCircle,
            },
            {
              title: "Proven Track Record",
              description:
                "Successfully facilitated over 500+ business sales ranging from ₹5 crore to ₹500+ crore valuations across diverse sectors.",
              icon: Award,
            },
            {
              title: "End-to-End Support",
              description:
                "From valuation and buyer identification through closing and transition planning, we manage every critical step of your exit journey.",
            },
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/multinational-business-colleagues-working-together_1163-5308.jpg?_wi=1"
          imageAlt="Team of business advisors in consultation"
          mediaAnimation="opacity"
          imagePosition="right"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      {/* Features Section - Process */}
      <div id="features" data-section="features">
        <FeatureHoverPattern
          title="Our Structured Exit Process"
          description="A transparent, systematic approach to maximizing your business value and ensuring a smooth transition."
          tag="Strategic Process"
          tagAnimation="slide-up"
          features={[
            {
              icon: DollarSign,
              title: "Business Valuation",
              description:
                "Comprehensive valuation using multiple methodologies to establish realistic market value and identify value-enhancement opportunities.",
            },
            {
              icon: Users,
              title: "Buyer Identification",
              description:
                "Access to our extensive network of qualified buyers including strategic acquirers, financial investors, and seasoned entrepreneurs.",
            },
            {
              icon: FileText,
              title: "Documentation & Due Diligence",
              description:
                "Professional data room management and comprehensive due diligence support to accelerate the buying process and close deals faster.",
            },
            {
              icon: Handshake,
              title: "Negotiation & Structuring",
              description:
                "Expert negotiation to secure optimal deal terms, earnouts, and payment structures that maximize your returns and minimize tax liability.",
            },
            {
              icon: ClipboardCheck,
              title: "Regulatory & Compliance",
              description:
                "Full compliance with FDI regulations, MCA requirements, and industry-specific rules ensuring seamless transaction execution.",
            },
            {
              icon: TrendingUp,
              title: "Transition Planning",
              description:
                "Smooth handover management and post-sale planning to ensure business continuity and your successful exit from operations.",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      {/* Services Section */}
      <div id="services" data-section="services">
        <ProductCardFour
          title="Comprehensive Advisory Services"
          description="We offer specialized consulting services tailored to every stage of your business lifecycle and exit planning."
          tag="Full-Spectrum Solutions"
          tagAnimation="slide-up"
          products={[
            {
              id: "valuation",
              name: "Business Valuation & Analysis",
              price: "Starting ₹50,000",
              variant: "Strategic Planning",
              imageSrc: "http://img.b2bpic.net/free-photo/whiteboard-success-research-adult-human-office_1418-529.jpg?_wi=1",
              imageAlt: "Business valuation financial analysis documents",
            },
            {
              id: "exit-planning",
              name: "Exit Strategy Development",
              price: "Starting ₹1,00,000",
              variant: "Multi-Year Planning",
              imageSrc: "http://img.b2bpic.net/free-photo/positive-worker-dancing-having-fun-startup-office-enjoying-listening-music-work-break-african-american-executive-manager-doing-dance-moves-after-finishing-company-investment-strategy_482257-74335.jpg?_wi=1",
              imageAlt: "Exit strategy consulting",
            },
            {
              id: "buyer-sourcing",
              name: "Buyer Identification & Sourcing",
              price: "Commission-based",
              variant: "Success-Driven",
              imageSrc: "http://img.b2bpic.net/free-photo/african-man-guy-black-suit-students-with-talet-girl-white-blouse_1157-41615.jpg?_wi=1",
              imageAlt: "Buyer network identification",
            },
            {
              id: "tax-optimization",
              name: "Tax & Structure Optimization",
              price: "Starting ₹75,000",
              variant: "Post-Tax Maximization",
              imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-credit-assessment-concept_23-2149167956.jpg?_wi=1",
              imageAlt: "Tax optimization strategy",
            },
            {
              id: "legal-compliance",
              name: "Legal & Regulatory Compliance",
              price: "Starting ₹1,00,000",
              variant: "Full Documentation",
              imageSrc: "http://img.b2bpic.net/free-photo/still-life-world-intellectual-property-day_23-2151325873.jpg?_wi=1",
              imageAlt: "Legal compliance management",
            },
            {
              id: "due-diligence",
              name: "Due Diligence Management",
              price: "Starting ₹2,00,000",
              variant: "Professional Support",
              imageSrc: "http://img.b2bpic.net/free-photo/analyzing-lifestyle-female-marketing-tech-high_1421-249.jpg?_wi=1",
              imageAlt: "Due diligence support",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      {/* Why Us Section - Metrics */}
      <div id="why-us" data-section="why-us">
        <MetricCardTen
          title="Why Business Owners Choose Us"
          description="Proven results backed by experience, expertise, and an unwavering commitment to maximizing your success."
          tag="Track Record"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",
              title: "500+ Successful Exits",
              subtitle:
                "Facilitated business sales across India with average 6-12 month timelines",
              category: "Experience",
              value: "₹2000+ Cr",
            },
            {
              id: "2",
              title: "Expert Team of 25+",
              subtitle:
                "Seasoned advisors with 15+ years average experience in M&A and exit planning",
              category: "Expertise",
              value: "100% Qualified",
            },
            {
              id: "3",
              title: "98% Client Satisfaction",
              subtitle:
                "Consistently rated highly for professionalism, confidentiality, and results delivery",
              category: "Quality",
              value: "Industry Leading",
            },
            {
              id: "4",
              title: "Strategic Network",
              subtitle:
                "Connected with 200+ pre-qualified buyers including PE firms, strategic investors, and entrepreneurs",
              category: "Network",
              value: "Exclusive Access",
            },
            {
              id: "5",
              title: "Zero Conflicts",
              subtitle:
                "Independent advisory with no competing interests - your success is our only agenda",
              category: "Integrity",
              value: "Fully Aligned",
            },
            {
              id: "6",
              title: "Confidentiality Guaranteed",
              subtitle:
                "Multi-layer security protocols and NDA compliance with zero data breaches in 20+ years",
              category: "Trust",
              value: "Bank-Grade Security",
            },
          ]}
          animationType="slide-up"
          textboxLayout="centered"
          useInvertedBackground={true}
        />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Success Stories from Our Clients"
          description="Hear directly from business owners who successfully exited their ventures with maximum value and minimal hassle."
          tag="Client Testimonials"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          showRating={true}
          testimonials={[
            {
              id: "1",
              name: "Rajesh Kumar",
              handle: "Founder, TechSoft Solutions",
              testimonial:
                "IndiaBusinessSale made my exit seamless and confidential. They maximized my valuation by 35% through smart structuring. The entire team was professional, transparent, and truly understood my concerns about employee welfare during the transition.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-business-leader-window_1262-5674.jpg",
              imageAlt: "professional tech entrepreneur portrait",
            },
            {
              id: "2",
              name: "Priya Sharma",
              handle: "CEO, Fashion & Home Co.",
              testimonial:
                "After 15 years building my brand, I needed the right partner for exit. Their buyer network was impressive, and they secured an offer 40% above my initial expectations. Tax optimization alone saved me over ₹3 crores. Highly recommended!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/full-body-woman-standing_1149-1823.jpg",
              imageAlt: "professional female CEO business portrait",
            },
            {
              id: "3",
              name: "Amit Patel",
              handle: "Managing Partner, Manufacturing House",
              testimonial:
                "The confidentiality they maintained was exceptional - not even our employees knew we were in exit discussions. Their legal and tax teams ensured zero compliance issues. The entire process took just 9 months from valuation to closing.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/businessman-looking-camera-with-arms-crossed_23-2148308598.jpg",
              imageAlt: "manufacturing industry professional portrait",
            },
            {
              id: "4",
              name: "Sneha Desai",
              handle: "Founder, Digital Marketing Agency",
              testimonial:
                "I was uncertain about exit timings and terms. IndiaBusinessSale provided realistic counseling and didn't pressure me. When I was ready, they moved fast - finding the perfect strategic buyer who valued our culture and team.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/woman-posing-with-cup-coffee_23-2149330971.jpg",
              imageAlt: "digital marketing founder woman portrait",
            },
            {
              id: "5",
              name: "Vikram Singh",
              handle: "Director, Healthcare Services Ltd",
              testimonial:
                "Their regulatory expertise in healthcare compliance was crucial. They navigated MCA and industry-specific FDI rules perfectly. I closed successfully with a foreign strategic investor without any compliance delays.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-doctor-with-stethoscope-lights_181624-15323.jpg",
              imageAlt: "healthcare executive professional portrait",
            },
            {
              id: "6",
              name: "Meera Nair",
              handle: "Co-founder, E-commerce Platform",
              testimonial:
                "From first call to final closing in 8 months. They handled everything - valuation, buyer vetting, due diligence coordination, and post-sale transition planning. Truly a one-stop solution for business exit.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-people-office_23-2149173784.jpg",
              imageAlt: "e-commerce founder woman entrepreneur portrait",
            },
          ]}
          animationType="slide-up"
        />
      </div>

      {/* Contact Section */}
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Let's Talk"
          title="Ready to Maximize Your Exit Value?"
          description="Schedule your confidential consultation with our advisors today. No obligation. We'll discuss your business, timeline, and exit goals to determine if we're the right partner for your journey."
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/colleagues-working-together-project_23-2149286113.jpg?_wi=1"
          imageAlt="Business consultation meeting"
          mediaAnimation="opacity"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Get Free Valuation"
          termsText="We respect your privacy. Your consultation request is completely confidential. Unsubscribe anytime."
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