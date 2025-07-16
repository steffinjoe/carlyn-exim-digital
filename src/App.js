import React, { useState, useEffect } from 'react';
import { Play, Camera, TrendingUp, Users, Award, ChevronRight, Menu, X, Star } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
    setShowContactForm(false);
  };

  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      title: "Digital Marketing",
      description: "Strategic campaigns that drive engagement and convert leads into loyal customers.",
      features: ["SEO Optimization", "Social Media Management", "PPC Advertising", "Content Strategy"]
    },
    {
      icon: <Camera className="w-12 h-12 text-purple-500" />,
      title: "Videography",
      description: "Compelling visual storytelling that captures your brand's essence and connects with audiences.",
      features: ["Brand Videos", "Product Showcases", "Event Coverage", "Motion Graphics"]
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Brand Strategy",
      description: "Comprehensive brand development that establishes your unique market position.",
      features: ["Brand Identity", "Market Research", "Competitive Analysis", "Brand Guidelines"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      text: "Carlyn Exim transformed our digital presence completely. Their videography work is exceptional!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Green Valley Organics",
      text: "Outstanding results! Our engagement increased by 300% in just 3 months.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      company: "Urban Lifestyle Co",
      text: "Professional, creative, and results-driven. Exactly what we needed for our brand.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <img class="p-5" src="/logo.webp"/>
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Carlyn Exim Digital
              </span>
            </div>
            
              <a href="#portfolio" onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#services" onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              {/* <a href="#testimonials" onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a> */}
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105"
              >
                Get Started
              </button>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-700">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700">About</a>
              {/* <a href="#testimonials" className="block px-3 py-2 text-gray-700">Testimonials</a> */}
              <button className="w-full text-left bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-lg mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transform Your Brand with 
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital Excellence</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We craft compelling digital experiences through strategic marketing and stunning videography that captivate audiences and drive results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Start Your Journey
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-all flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Our Work
                </button>
              </div>

              {/* <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div> */}
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-6 shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
                      <TrendingUp className="w-8 h-8 text-blue-500 mb-4" />
                      <h3 className="font-semibold text-gray-900">Marketing</h3>
                      <p className="text-gray-600 text-sm">Strategic campaigns</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                      <Camera className="w-8 h-8 text-purple-500 mb-4" />
                      <h3 className="font-semibold text-gray-900">Videography</h3>
                      <p className="text-gray-600 text-sm">Visual storytelling</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
                      <Users className="w-8 h-8 text-green-500 mb-4" />
                      <h3 className="font-semibold text-gray-900">Branding</h3>
                      <p className="text-gray-600 text-sm">Identity design</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
                      <Award className="w-8 h-8 text-orange-500 mb-4" />
                      <h3 className="font-semibold text-gray-900">Results</h3>
                      <p className="text-gray-600 text-sm">Proven success</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our creative work and see how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Portfolio Items */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Launch Campaign</h3>
                <p className="text-gray-600 mb-4">Complete digital marketing campaign for a tech startup including video content and social media strategy.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">Video</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Marketing</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Showcase</h3>
                <p className="text-gray-600 mb-4">High-quality product videography and photography for e-commerce brand launch.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">Photography</span>
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full">E-commerce</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Media Growth</h3>
                <p className="text-gray-600 mb-4">300% follower growth and engagement boost for lifestyle brand through strategic content.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full mr-2">Social Media</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">Strategy</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Users className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Event</h3>
                <p className="text-gray-600 mb-4">Full event coverage including live streaming, highlights reel, and social media content.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full mr-2">Event</span>
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full">Live Stream</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                <Award className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Transformation</h3>
                <p className="text-gray-600 mb-4">Complete brand identity redesign with video storytelling and digital marketing integration.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full mr-2">Branding</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Identity</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentary Series</h3>
                <p className="text-gray-600 mb-4">Multi-part documentary series showcasing company culture and values for internal communications.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full mr-2">Documentary</span>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Series</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Let's Create Something Amazing Together
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions that help your business stand out in today's competitive market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create something amazing together. Get in touch and let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Get Free Consultation
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Get Started</h3>
                <button 
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="videography">Videography</option>
                    <option value="brand-strategy">Brand Strategy</option>
                    <option value="all-services">All Services</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <img class="p-2" src="/logo.webp"/>
                </div>
                <span className="ml-2 text-lg font-bold">Carlyn Exim Digital</span>
              </div>
              <p className="text-gray-400">
                Transforming brands through innovative digital marketing and compelling videography.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Digital Marketing</li>
                <li>Videography</li>
                <li>Brand Strategy</li>
                <li>Content Creation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>YouTube</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Carlyn Exim Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;