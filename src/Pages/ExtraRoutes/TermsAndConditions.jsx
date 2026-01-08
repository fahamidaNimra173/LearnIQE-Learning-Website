import React from "react";
import { FileText, UserCheck, AlertCircle, BookOpen, RefreshCw, Mail, Info } from "lucide-react";

const TermsAndConditions = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: "By accessing and using LearnIQ, you agree to these Terms and Conditions. If you do not agree with any part of these terms, please do not use our platform.",
      points: [
        "These terms apply to all visitors and users of the platform",
        "We may update these terms from time to time",
        "Continued use of the platform constitutes acceptance of updated terms"
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Platform Purpose & Course Information",
      content: "LearnIQ is a course discovery and aggregation platform that displays educational courses from various third-party platforms:",
      points: [
        "We curate and display courses from multiple educational platforms",
        "Course information (enrollments, ratings, pricing) is updated regularly but may not reflect real-time data",
        "We do not host or provide the courses directly - we connect you to course providers",
        "Not all available courses may be listed - explore platforms directly for comprehensive catalogs",
        "Course availability, pricing, and content are subject to change by the course providers",
        "We are not responsible for the quality, accuracy, or delivery of third-party courses"
      ]
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Dynamic Data & Information Updates",
      content: "Please note the following about course information displayed on our platform:",
      points: [
        "Total enrollments, ratings, and reviews are updated periodically and may not be real-time",
        "Course information is synced from third-party platforms and may have a delay",
        "Pricing and availability can change without notice",
        "We strive to keep information accurate but cannot guarantee 100% accuracy at all times",
        "For the most current information, please visit the course provider's website directly"
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "User Accounts & Responsibilities",
      content: "When creating an account on LearnIQ, you agree to:",
      points: [
        "Provide accurate and complete registration information",
        "Maintain the confidentiality of your account credentials",
        "Be responsible for all activities under your account",
        "Notify us immediately of any unauthorized access",
        "Use the platform for personal and educational purposes only",
        "Not share your account with others"
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Use of Platform",
      content: "You agree to use LearnIQ responsibly and lawfully:",
      points: [
        "Do not misuse or attempt to disrupt the platform",
        "Do not use automated tools to scrape or collect data",
        "Do not impersonate others or create fake accounts",
        "Do not post harmful, offensive, or illegal content",
        "Do not attempt to access restricted areas of the platform",
        "Respect intellectual property rights of all content"
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Third-Party Course Enrollment",
      content: "When you enroll in courses through our platform:",
      points: [
        "You will be redirected to the course provider's platform",
        "Enrollment is subject to the provider's terms and conditions",
        "Payments are processed by the course provider, not LearnIQ",
        "Course access, refunds, and certificates are managed by the provider",
        "We are not responsible for course delivery or quality",
        "Any disputes should be resolved with the course provider directly"
      ]
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "Intellectual Property",
      content: "Respect for intellectual property is important:",
      points: [
        "LearnIQ's platform design and content are our intellectual property",
        "Course content belongs to respective course providers and instructors",
        "You may not copy, redistribute, or resell any content",
        "Our logo, branding, and trademarks are protected",
        "Fair use for personal learning purposes only"
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Disclaimers & Limitations",
      content: "Important limitations and disclaimers:",
      points: [
        "LearnIQ is provided 'as is' without warranties of any kind",
        "We do not guarantee uninterrupted or error-free service",
        "Course information accuracy is not guaranteed",
        "We are not liable for any losses from using third-party courses",
        "We are not responsible for third-party platform issues",
        "Use of the platform is at your own risk"
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Account Termination",
      content: "We reserve the right to manage user accounts:",
      points: [
        "We may suspend or terminate accounts violating these terms",
        "Accounts may be terminated for harmful or illegal activities",
        "You may delete your account at any time",
        "Termination does not affect your enrollments on third-party platforms",
        "We reserve the right to refuse service to anyone"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <div className="relative border-b-2 border-purple-500/30 py-20">
        <div className="lg:px-25 px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="border-2 border-purple-500 p-4 rounded-2xl">
              <FileText className="w-16 h-16 text-purple-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using LearnIQ.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-full text-gray-300">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">Effective Date: January 2025</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:px-25 px-6 py-16 max-w-7xl mx-auto">
        {/* Introduction */}
        <div className="border-2 border-gray-700 rounded-3xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Welcome to LearnIQ
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Thank you for choosing <strong className="text-purple-400">LearnIQ</strong> as your educational course discovery platform. These Terms and Conditions govern your use of our platform and outline the relationship between you and LearnIQ.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            LearnIQ is a course aggregation platform that helps you discover and access educational courses from various third-party learning platforms. We do not create or host courses ourselves; instead, we provide a centralized place to explore learning opportunities.
          </p>
        </div>

        {/* Important Notice */}
        <div className="border-2 border-yellow-600 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Important Notice</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                <strong className="text-yellow-400">Course information displayed on LearnIQ</strong> (including enrollments, ratings, reviews, and pricing) is updated regularly but may not reflect real-time data. Information can change daily as it is synchronized from multiple third-party platforms.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We also <strong className="text-yellow-400">cannot display all available courses</strong> from every platform. For a complete and up-to-date catalog, please explore the course provider's website directly.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="border-2 border-gray-700 rounded-2xl hover:border-purple-500 transition-all duration-300 overflow-hidden"
            >
              <div className="border-b-2 border-gray-700 p-6">
                <div className="flex items-center gap-4">
                  <div className="border-2 border-purple-500 p-3 rounded-xl text-purple-400">
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
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <span className="text-base leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Changes to Terms */}
        <div className="border-2 border-blue-600 rounded-2xl p-8 md:p-12 mt-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <RefreshCw className="w-8 h-8 text-blue-400" />
            Changes to These Terms
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            We reserve the right to modify or update these Terms and Conditions at any time. When we make changes:
          </p>
          <ul className="space-y-2 text-gray-400 mb-4">
            <li className="flex items-start gap-3">
              <div className="mt-1.5 flex-shrink-0">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span>We will update the "Effective Date" at the top</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 flex-shrink-0">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span>Significant changes will be communicated via email or platform notification</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 flex-shrink-0">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <span>Your continued use after changes constitutes acceptance</span>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="border-2 border-purple-500 rounded-3xl p-8 md:p-12 mt-12 text-center">
          <Mail className="w-16 h-16 mx-auto mb-6 text-purple-400" />
          <h2 className="text-3xl font-bold text-white mb-4">Questions About These Terms?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            If you have any questions, concerns, or need clarification about these Terms and Conditions, please don't hesitate to reach out.
          </p>
          <a 
            href="mailto:support@learniq.com" 
            className="inline-flex items-center gap-2 border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            support@learniq.com
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center border-t-2 border-gray-800 pt-8">
          <p className="text-gray-400 mb-4">
            By using LearnIQ, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
          <p className="text-gray-500 text-sm">
            Last Updated: January 8, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;