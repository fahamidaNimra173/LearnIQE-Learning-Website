import React from "react";
import { Shield, Lock, Eye, Users, FileText, Mail, CheckCircle } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Information We Collect",
      content: "When you use LearnIQ to discover and access educational courses, we collect:",
      points: [
        "Account information (name, email address)",
        "Course browsing and search history",
        "Learning preferences and interests",
        "Basic device and browser information"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: "We use your data to provide you with a better learning experience:",
      points: [
        "Show personalized course recommendations",
        "Track your enrolled courses and learning progress",
        "Send course updates and notifications",
        "Improve our platform and features",
        "Provide customer support"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: "We take reasonable measures to protect your information:",
      points: [
        "Secure storage of your personal data",
        "Password protection for your account",
        "Limited access to user information",
        "However, no online platform is 100% secure"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Information Sharing",
      content: "We respect your privacy and limit information sharing:",
      points: [
        "We do not sell your personal data",
        "Course enrollment information shared with course platforms",
        "Data may be shared when required by law",
        "Anonymous usage data for platform improvements"
      ]
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Your Rights",
      content: "You have control over your personal information:",
      points: [
        "Access and view your data",
        "Update your profile information",
        "Delete your account",
        "Opt-out of email notifications"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Third-Party Platforms",
      content: "LearnIQ displays courses from various educational platforms:",
      points: [
        "Each platform has its own privacy policy",
        "Please review their policies before enrolling",
        "We are not responsible for third-party platform practices",
        "Your enrollment is subject to their terms and conditions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <div className="relative border-b-2 border-blue-500/30 py-20">
        <div className="lg:px-25 px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="border-2 border-blue-500 p-4 rounded-2xl">
              <Shield className="w-16 h-16 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy matters. Learn how LearnIQ protects and uses your information.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-full text-gray-300">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Last Updated: January 2025</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:px-25 px-6 py-16 max-w-7xl mx-auto">
        {/* Introduction */}
        <div className="border-2 border-gray-700 rounded-3xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Welcome to LearnIQ's Privacy Policy
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            At <strong className="text-blue-400">LearnIQ</strong>, we value your privacy and are committed to being transparent about how we handle your information. As an educational platform that curates and displays courses from various learning platforms, we collect and use minimal data necessary to provide you with the best learning experience.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data. By using LearnIQ, you agree to the practices described in this policy.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="border-2 border-gray-700 rounded-2xl hover:border-blue-500 transition-all duration-300 overflow-hidden"
            >
              <div className="border-b-2 border-gray-700 p-6">
                <div className="flex items-center gap-4">
                  <div className="border-2 border-blue-500 p-3 rounded-xl text-blue-400">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {index + 1}. {section.title}
                  </h2>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {section.content}
                </p>
                <ul className="space-y-3">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400">
                      <div className="mt-1.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-base leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Cookies Section */}
        <div className="border-2 border-orange-600 rounded-2xl p-8 md:p-12 mt-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span>🍪</span> Cookies & Tracking
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            LearnIQ uses cookies to remember your preferences and improve your experience on our platform.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="border border-gray-700 p-4 rounded-xl">
              <h3 className="font-semibold text-white mb-2">Essential Cookies</h3>
              <p className="text-gray-400 text-sm">Required for login and basic platform functions</p>
            </div>
            <div className="border border-gray-700 p-4 rounded-xl">
              <h3 className="font-semibold text-white mb-2">Preference Cookies</h3>
              <p className="text-gray-400 text-sm">Remember your settings and choices</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-2 border-blue-500 rounded-3xl p-8 md:p-12 mt-12 text-center">
          <Mail className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Privacy?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            If you have any questions or concerns regarding this Privacy Policy or how we handle your data, please contact us.
          </p>
          <a 
            href="mailto:support@learniq.com" 
            className="inline-flex items-center gap-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            fahmidanimra@gmail.com
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center border-t-2 border-gray-800 pt-8">
          <p className="text-gray-400">
            By continuing to use LearnIQ, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;