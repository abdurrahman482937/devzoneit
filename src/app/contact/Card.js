import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Icon,
} from "lucide-react";

function SocialLink({ icon: Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#0F172A] border border-[#1E293B] flex items-center justify-center hover:border-[#00DC82] hover:text-[#00DC82] transition-all duration-300"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

function ContactCard() {
  const content = (
    <div className="bg-[#0F172A] rounded-xl p-8 border-2 border-[#1E293B] transition-all duration-500 hover:border-[#00DC82] hover:shadow-2xl hover:shadow-[#00DC82]/20 relative group overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00DC82]/0 via-[#00DC82]/5 to-[#00DC82]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />

      {/* Animated Corner Decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#00DC82] to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-[#00DC82] to-transparent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[#00DC82] to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
        <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[#00DC82] to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
      </div>

      {/* Contact Label with Glow Effect */}
      <div className="absolute -top-3 -left-3 bg-gradient-to-r from-[#00DC82] to-[#00DC82]/80 text-white px-6 py-2 rounded-md transform -rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg backdrop-blur-sm before:content-[''] before:absolute before:inset-0 before:bg-white/20 before:rounded-md before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500 after:content-[''] after:absolute after:inset-0 after:rounded-md after:shadow-[0_0_15px_rgba(0,220,130,0.5)] after:opacity-0 after:group-hover:opacity-100 after:transition-opacity after:duration-500">
        <span className="relative z-10 font-semibold tracking-wider text-sm uppercase">
          Contact Us!
        </span>
      </div>

      {/* Card Content */}
      <div className="text-center relative z-10">
        {/* Icon Container with Rotating Border */}
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24 animate-float">
            <div className="absolute inset-0 rounded-full border-2 border-[#00DC82]/30 animate-spin-slow" />
            <div
              className="absolute inset-0 rounded-full border-2 border-[#00DC82]/20 animate-spin-slow-reverse"
              style={{ animationDelay: "-2s" }}
            />
            <div className="w-20 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#00DC82] to-[#00DC82]/80 p-1 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center transform transition-transform duration-500 group-hover:-rotate-6">
                <Icon className="w-10 h-10 text-[#00DC82] transform transition-all duration-500 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content with Enhanced Animations */}
        <h3 className="text-white text-2xl font-bold mb-3 transform transition-all duration-500 group-hover:text-[#00DC82] group-hover:scale-105 relative">
          <span className="relative z-10">{title}</span>
          <div className="absolute inset-0 bg-[#00DC82]/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </h3>
        <p className="text-[#00DC82] text-lg mb-3 font-medium tracking-wide group-hover:animate-text-shimmer relative">
          <span className="relative z-10">{value}</span>
          <div className="absolute inset-0 bg-[#00DC82]/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </p>
        {subtitle && (
          <p className="text-gray-400 text-sm transform transition-all duration-500 group-hover:text-gray-300">
            {subtitle}
          </p>
        )}

        {/* Interactive Hover Line */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-transparent via-[#00DC82] to-transparent opacity-0 group-hover:opacity-100 group-hover:w-32 transition-all duration-700" />
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
    >
      {content}
    </a>
  ) : (
    content
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#1E293B] text-white">
      {/* Navigation Bar */}
      <nav className="bg-[#0F172A] py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#00DC82]">DevZone IT</div>
          <div className="flex gap-4">
            <SocialLink icon={Facebook} href="https://facebook.com" />
            <SocialLink icon={Twitter} href="https://twitter.com" />
            <SocialLink icon={Linkedin} href="https://linkedin.com" />
            <SocialLink icon={Instagram} href="https://instagram.com" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <h1 className="text-5xl font-bold mb-4">
            Contact <span className="text-[#00DC82]">Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get in touch with us for any questions about our services or to
            start your journey in tech
          </p>
          <div className="absolute -top-4 right-1/4 bg-[#00DC82] text-white px-3 py-1 text-sm rounded-sm transform rotate-12">
            Contact Us!
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ContactCard
            icon={Mail}
            title="Email Us"
            value="student@devzoneit.com"
            subtitle="We'll respond within 24 hours"
            href="mailto:student@devzoneit.com"
          />

          <ContactCard
            icon={Phone}
            title="Call Us"
            value="+880 1234-567890"
            subtitle="Available 9:00 AM - 6:00 PM"
            href="tel:+8801234567890"
          />

          <ContactCard
            icon={MapPin}
            title="Visit Us"
            value="Dhaka, Bangladesh"
            subtitle="Our Main Office"
          />

          <ContactCard
            icon={Globe}
            title="Website"
            value="www.devzoneit.com"
            subtitle="Learn More About Us"
            href="https://www.devzoneit.com"
          />
        </div>

        {/* Bengali Text Section */}
        <div className="text-center space-y-6 bg-[#0F172A] p-8 rounded-lg border border-[#1E293B]">
          <p className="text-2xl">
            আমাদের সাথে যোগাযোগ করতে চাইলে উপরের দেওয়া ইমেইলে যোগাযোগ করুন।
          </p>
          <div className="h-px bg-[#1E293B] max-w-md mx-auto"></div>
          <p className="text-[#00DC82] text-xl font-semibold">
            We're here to help you grow in the tech industry!
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0F172A] mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <SocialLink icon={Facebook} href="https://facebook.com" />
            <SocialLink icon={Twitter} href="https://twitter.com" />
            <SocialLink icon={Linkedin} href="https://linkedin.com" />
            <SocialLink icon={Instagram} href="https://instagram.com" />
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} DevZone IT. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
