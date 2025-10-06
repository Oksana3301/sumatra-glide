import { Button } from "@/components/ui/button";
import { SeasonDial } from "@/components/SeasonDial";
import { TrustBadges } from "@/components/TrustBadges";
import { LegCard } from "@/components/LegCard";
import { PaymentMethodCard } from "@/components/PaymentMethodCard";
import { BlogCard } from "@/components/BlogCard";
import { WarningBanner } from "@/components/WarningBanner";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "apple" | "google" | "crypto">("card");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-ocean text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
              Plan, book, and glide across West Sumatra
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              Your confidence-first itinerary builder for Padang & Mentawai Islands
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg text-lg px-8"
              >
                Build Itinerary <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
              >
                <Calendar className="mr-2 h-5 w-5" />
                See Ferry Windows
              </Button>
            </div>

            <div className="animate-slide-up">
              <TrustBadges />
            </div>
          </div>
        </div>
      </section>

      {/* Season Guide */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <SeasonDial />
        </div>
      </section>

      {/* Sample Itinerary Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-3">Sample 10-Day Charter Trip</h2>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            Flighty-style timeline showing each leg as a verified card with buffer nights and transport windows
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-6">
              <LegCard
                type="flight"
                origin="SFO"
                destination="PDG"
                date="Mar 15, 2025"
                time="Dep 14:30"
                duration="22h via SIN"
                verified
              />
              
              <LegCard
                type="hotel"
                origin="Padang"
                destination="Buffer Night"
                date="Mar 16, 2025"
                time="Check-in after 15:00"
                verified
              />

              <WarningBanner type="info" className="ml-8">
                <strong>Why buffer?</strong> Flight arrives after 15:00 → ferry cutoff risk. Stay overnight for safe connection.
              </WarningBanner>
              
              <LegCard
                type="ferry"
                origin="Padang"
                destination="Tuapejat"
                date="Mar 17, 2025"
                time="Dep 08:00"
                duration="4.5h"
                verified
              />
              
              <LegCard
                type="charter"
                origin="Mentawai Islands"
                destination="10-Night Charter"
                date="Mar 17–27, 2025"
                verified
              />
              
              <LegCard
                type="ferry"
                origin="Tuapejat"
                destination="Padang"
                date="Mar 28, 2025"
                time="Dep 13:00"
                duration="4.5h"
                verified
              />
              
              <LegCard
                type="hotel"
                origin="Padang"
                destination="Buffer Night"
                date="Mar 28, 2025"
                time="Late arrival → buffer"
                verified
              />
              
              <LegCard
                type="flight"
                origin="PDG"
                destination="SFO"
                date="Mar 29, 2025"
                time="Dep 10:30"
                duration="21h via SIN"
                verified
              />
            </div>
          </div>

          <div className="mt-12 flex gap-4 justify-center">
            <Button size="lg" className="gradient-ocean text-primary-foreground shadow-glow">
              Customize This Trip
            </Button>
            <Button size="lg" variant="outline">
              View All Routes
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Methods Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-3 text-center">Payment Your Way</h2>
          <p className="text-center text-muted-foreground mb-8">
            Cards, Apple/Google Pay, or crypto (USDC/ETH) with instant confirmation
          </p>

          <div className="grid gap-3">
            <PaymentMethodCard 
              method="card" 
              selected={paymentMethod === "card"}
              onSelect={() => setPaymentMethod("card")}
            />
            <PaymentMethodCard 
              method="apple"
              selected={paymentMethod === "apple"}
              onSelect={() => setPaymentMethod("apple")}
            />
            <PaymentMethodCard 
              method="crypto"
              selected={paymentMethod === "crypto"}
              onSelect={() => setPaymentMethod("crypto")}
            />
          </div>

          {paymentMethod === "crypto" && (
            <div className="mt-6 p-4 rounded-lg bg-accent/50 border border-accent text-sm">
              <strong>Network support:</strong> Ethereum, Base, Arbitrum, Polygon. Rate lock timer + on-chain confirmation.
            </div>
          )}
        </div>
      </section>

      {/* Blog/Guides */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center">Stories & Guides</h2>
          <p className="text-center text-muted-foreground mb-12">
            Practical tips from surfers, photographers, and adventure travelers
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <BlogCard
              category="Getting There"
              title="How to Get to Mentawai: Complete Transport Guide"
              excerpt="Ferry windows, charter options, and Padang buffer strategies for stress-free island access."
              readTime="8 min"
              lastUpdated="2 days ago"
            />
            <BlogCard
              category="Season Guide"
              title="Best Season & Swell Basics"
              excerpt="Mar–Oct prime window breakdown with crowd levels, swell consistency, and weather patterns."
              readTime="6 min"
              lastUpdated="1 week ago"
            />
            <BlogCard
              category="Padang Tips"
              title="Perfect Padang Layover: Food & Culture"
              excerpt="Turn your buffer night into a culinary adventure with our top nasi kapau and rendang spots."
              readTime="5 min"
              lastUpdated="3 days ago"
            />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-gradient-sunset text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Planning?</h2>
          <p className="text-lg mb-8 opacity-90">
            Build your custom West Sumatra itinerary in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 shadow-lg">
              Build Your Itinerary
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-foreground hover:bg-foreground/10"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Concierge
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
