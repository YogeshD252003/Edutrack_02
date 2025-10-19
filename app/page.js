"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Shield, 
  Clock, 
  MapPin,
  Zap,
  BarChart3,
  Smartphone,
  Cloud,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: MapPin,
      title: "Geofencing Technology",
      description: "Automatic location-based attendance verification ensures students are physically present in the classroom.",
      color: "from-blue-500 to-cyan-500",
      stats: "99.8% Accuracy"
    },
    {
      icon: Shield,
      title: "Face Recognition",
      description: "Advanced biometric verification prevents proxy attendance and ensures accurate identification.",
      color: "from-purple-500 to-pink-500",
      stats: "100% Secure"
    },
    {
      icon: Clock,
      title: "Real-time Analytics",
      description: "Instant notifications and live attendance tracking keep everyone synchronized and informed.",
      color: "from-emerald-500 to-teal-500",
      stats: "Live Updates"
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting",
      description: "Comprehensive analytics and detailed reports for better decision-making and insights.",
      color: "from-orange-500 to-red-500",
      stats: "Deep Insights"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Fully responsive design that works seamlessly across all devices and platforms.",
      color: "from-violet-500 to-purple-500",
      stats: "Any Device"
    },
    {
      icon: Cloud,
      title: "Cloud Powered",
      description: "Secure cloud infrastructure ensuring data safety and accessibility from anywhere.",
      color: "from-amber-500 to-yellow-500",
      stats: "Always Available"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Head of Computer Science",
      content: "This system reduced our administrative workload by 70%. Absolutely revolutionary!",
      avatar: "SC"
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "Mathematics Department",
      content: "The geofencing feature eliminated proxy attendance completely. Game changer!",
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Student Representative",
      content: "So much easier to mark attendance. The face recognition is instant and accurate.",
      avatar: "EJ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Navigation Bar */}
      <nav className="relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  EduAttend
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Smart System</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors font-medium">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors font-medium">
                Pricing
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5" />
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm mb-8">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Trusted by 500+ institutions worldwide
              </span>
            </div>

            {/* Main Heading */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-300">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Smart
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Attendance
              </span>
              Revolution
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Next-generation attendance tracking with AI-powered geofencing, facial recognition, 
              and real-time analytics. Transform your educational institution today.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              {[
                { number: "99.9%", label: "Accuracy" },
                { number: "50K+", label: "Users" },
                { number: "500+", label: "Institutions" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Portal Selection */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Teacher Portal */}
              <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-500" />
                <CardHeader className="relative pb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mb-4 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                    Teacher Portal
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                    Advanced classroom management with real-time analytics, automated reporting, and intelligent session tracking.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: MapPin, text: "Smart geofencing technology", color: "text-blue-500" },
                      { icon: Clock, text: "Real-time session management", color: "text-blue-500" },
                      { icon: Shield, text: "Advanced security controls", color: "text-blue-500" },
                      { icon: BarChart3, text: "Comprehensive analytics", color: "text-blue-500" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <span className="text-left">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/Teacher-dashboard" className="w-full block">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg text-white font-semibold py-7 text-lg rounded-2xl transition-all duration-300 group/btn transform hover:scale-105">
                      Access Teacher Portal
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Student Portal */}
              <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500" />
                <CardHeader className="relative pb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mb-4 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                    Student Portal
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                    Seamless attendance marking with facial recognition, instant notifications, and personalized tracking.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      { icon: Shield, text: "Facial recognition verification", color: "text-emerald-500" },
                      { icon: Clock, text: "Instant push notifications", color: "text-emerald-500" },
                      { icon: BookOpen, text: "Attendance history tracking", color: "text-emerald-500" },
                      { icon: Target, text: "Personalized insights", color: "text-emerald-500" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <span className="text-left">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/student-dashboard" className="w-full block">
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg text-white font-semibold py-7 text-lg rounded-2xl transition-all duration-300 group/btn transform hover:scale-105">
                      Access Student Portal
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 lg:py-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
              <Award className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Award-winning Features
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of attendance management with our comprehensive suite of intelligent, AI-powered features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mb-6 mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full mb-4">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature.stats}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/5 to-indigo-600/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Educators</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of educational institutions that have transformed their attendance management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
                  <div className="flex gap-1 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Institution?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of educators who have revolutionized their attendance management system
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-2xl shadow-lg transform hover:scale-105 transition-all">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-2xl">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}