"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterCard from "@/components/sections/footer/FooterCard";
import Link from "next/link";
import { Linkedin, Twitter, Globe } from "lucide-react";

export default function ContactPage() {
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
            text: "Get Free Valuation",
            href: "contact",
          }}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Let's Talk"
          title="Ready to Maximize Your Exit Value?"
          description="Schedule your confidential consultation with our advisors today. No obligation. We'll discuss your business, timeline, and exit goals to determine if we're the right partner for your journey."
          tagAnimation="slide-up"
          background={{
            variant: "sparkles-gradient",
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/colleagues-working-together-project_23-2149286113.jpg?_wi=2"
          imageAlt="one-on-one business consultation meeting"
          mediaAnimation="opacity"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Get Free Valuation"
          termsText="We respect your privacy. Your consultation request is completely confidential. Unsubscribe anytime."
          onSubmit={(email) => console.log("Newsletter signup:", email)}
        />
      </div>

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