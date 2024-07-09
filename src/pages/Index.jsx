import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, GitHub } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-sm">
        <div className="text-2xl font-bold">Logo</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <Button>Sign Up</Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-100">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Revolutionize Your Workflow</h1>
          <p className="text-xl mb-6">Streamline your business processes with our cutting-edge SaaS solution.</p>
          <div className="space-x-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg" alt="Hero Image" className="mx-auto object-cover w-full h-[300px]" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Easy Integration", description: "Seamlessly integrate with your existing tools" },
            { title: "Real-time Analytics", description: "Get insights instantly with our powerful analytics" },
            { title: "Secure & Reliable", description: "Your data is safe with our enterprise-grade security" }
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Basic", price: "$9.99", description: "Perfect for small teams" },
            { title: "Pro", price: "$19.99", description: "Ideal for growing businesses" },
            { title: "Enterprise", price: "Custom", description: "Tailored solutions for large organizations" }
          ].map((plan, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">{plan.price}</p>
                <p className="mb-4">{plan.description}</p>
                <Button className="w-full">Sign Up</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg mb-4">
              We are a passionate team of innovators dedicated to simplifying your business processes.
              Our mission is to provide cutting-edge SaaS solutions that empower businesses to thrive in the digital age.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg" alt="About Us" className="mx-auto object-cover w-full h-[200px]" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-md mx-auto">
          <div className="space-y-4">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Message" />
            <Button className="w-full">Send Message</Button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-8">
        <div className="flex justify-center space-x-4 mb-4">
          <Facebook className="h-6 w-6" />
          <Twitter className="h-6 w-6" />
          <Instagram className="h-6 w-6" />
          <GitHub className="h-6 w-6" />
        </div>
        <div className="text-center space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
        <div className="text-center mt-4">
          &copy; 2024 SaaS Startup. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;