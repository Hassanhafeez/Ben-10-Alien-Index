import { useEffect, useRef } from "react";
import heatblastImage from "@assets/4120331-2821223764-140px_1754143255648.png";

interface Alien {
  name: string;
  image?: string;
  imagePlaceholder: string;
  description: string;
  powers: Array<{
    name: string;
    color: string;
  }>;
}

const aliens: Alien[] = [
  {
    name: "HEATBLAST",
    image: heatblastImage,
    imagePlaceholder: "HEATBLAST_IMAGE",
    description: "A magma-based Pyronite with the ability to generate and manipulate intense flames. Can fly using fire propulsion and withstand extreme temperatures.",
    powers: [
      { name: "Fire Powers", color: "bg-orange-500" },
      { name: "Flight", color: "bg-green-500" }
    ]
  },
  {
    name: "XLR8",
    imagePlaceholder: "XLR8_IMAGE",
    description: "A Kineceleran with incredible superhuman speed, capable of running faster than the eye can see. Enhanced reflexes and the ability to run on walls and water.",
    powers: [
      { name: "Super Speed", color: "bg-cyan-500" },
      { name: "Enhanced Reflexes", color: "bg-green-500" }
    ]
  },
  {
    name: "FOUR ARMS",
    imagePlaceholder: "FOURARMS_IMAGE",
    description: "A Tetramand from Khoros with incredible strength and four powerful arms. Nearly indestructible and capable of creating powerful shockwaves.",
    powers: [
      { name: "Super Strength", color: "bg-red-500" },
      { name: "Four Arms", color: "bg-green-500" }
    ]
  },
  {
    name: "SWAMPFIRE",
    imagePlaceholder: "SWAMPFIRE_IMAGE",
    description: "A Methanosian with the ability to control plant life and generate methane gas. Can ignite the gas for explosive attacks and regenerate from almost any injury.",
    powers: [
      { name: "Plant Control", color: "bg-green-500" },
      { name: "Fire Generation", color: "bg-orange-500" }
    ]
  },
  {
    name: "GOOP",
    imagePlaceholder: "GOOP_IMAGE",
    description: "A Polymorph with a liquid body that can change shape at will. Controlled by an anti-gravity projector that allows flight and shape manipulation.",
    powers: [
      { name: "Shape-shifting", color: "bg-cyan-500" },
      { name: "Anti-gravity", color: "bg-purple-500" }
    ]
  },
  {
    name: "CHROMASTONE",
    imagePlaceholder: "CHROMASTONE_IMAGE",
    description: "A Crystalsapien capable of absorbing energy and redirecting it as powerful laser beams. Crystal body provides enhanced durability and energy manipulation abilities.",
    powers: [
      { name: "Energy Absorption", color: "bg-yellow-500" },
      { name: "Laser Beams", color: "bg-cyan-500" }
    ]
  },
  {
    name: "SPIDERMONKEY",
    imagePlaceholder: "SPIDERMONKEY_IMAGE",
    description: "An Arachnichimp with enhanced agility and the ability to shoot webbing from his tail. Excellent climbing abilities and increased strength in all four limbs.",
    powers: [
      { name: "Web Shooting", color: "bg-green-500" },
      { name: "Enhanced Agility", color: "bg-blue-500" }
    ]
  },
  {
    name: "HUMUNGOUSAUR",
    imagePlaceholder: "HUMUNGOUSAUR_IMAGE",
    description: "A Vaxasaurian dinosaur-like alien with incredible size and strength. Can grow even larger for increased power and has a nearly impenetrable hide.",
    powers: [
      { name: "Size Growth", color: "bg-red-500" },
      { name: "Super Strength", color: "bg-green-500" }
    ]
  },
  {
    name: "ECHO ECHO",
    imagePlaceholder: "ECHOECHO_IMAGE",
    description: "A Sonorosian with the ability to duplicate himself and create powerful sonic screams. Each duplicate can act independently and combine attacks for devastating results.",
    powers: [
      { name: "Duplication", color: "bg-cyan-500" },
      { name: "Sonic Screams", color: "bg-purple-500" }
    ]
  }
];

function AlienCard({ alien }: { alien: Alien }) {
  return (
    <div className="card-glow bg-gray-900 rounded-2xl p-6 cursor-pointer">
      <div className="w-full h-48 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
        {alien.image ? (
          <img 
            src={alien.image} 
            alt={alien.name}
            className="w-full h-full object-contain bg-gradient-to-br from-gray-800 to-gray-900"
          />
        ) : (
          <div className="alien-image-placeholder w-full h-full flex items-center justify-center">
            <span className="text-green-400 font-orbitron font-bold text-lg">
              {alien.imagePlaceholder}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-orbitron font-bold text-2xl mb-3 neon-text">
        {alien.name}
      </h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        {alien.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {alien.powers.map((power, index) => (
          <span
            key={index}
            className={`px-3 py-1 ${power.color} bg-opacity-20 rounded-full text-sm font-semibold`}
            style={{
              color: power.color === 'bg-green-500' ? '#10b981' :
                     power.color === 'bg-cyan-500' ? '#06b6d4' :
                     power.color === 'bg-orange-500' ? '#f97316' :
                     power.color === 'bg-red-500' ? '#ef4444' :
                     power.color === 'bg-blue-500' ? '#3b82f6' :
                     power.color === 'bg-purple-500' ? '#a855f7' :
                     power.color === 'bg-yellow-500' ? '#eab308' : '#6b7280'
            }}
          >
            {power.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add intersection observer for card animations
    const cards = cardsRef.current?.querySelectorAll('.card-glow');
    if (!cards) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      const cardElement = card as HTMLElement;
      cardElement.style.opacity = '0';
      cardElement.style.transform = 'translateY(20px)';
      cardElement.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-white font-exo">
      {/* Header */}
      <header className="relative overflow-hidden py-16 px-4">
        <div className="section-glow absolute inset-0"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl mb-4 neon-text pulse-glow">
            BEN 10
          </h1>
          <h2 className="font-orbitron font-bold text-2xl md:text-4xl mb-8 text-cyan-400 float">
            ALIEN INDEX
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="mt-8 text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Discover the incredible alien transformations from the Omnitrix
          </p>
        </div>
      </header>

      {/* Alien Grid */}
      <main className="container mx-auto px-4 py-16">
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {aliens.map((alien, index) => (
            <AlienCard key={index} alien={alien} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center">
            <span className="font-orbitron font-bold text-black text-xl">10</span>
          </div>
          <p className="text-gray-400 font-exo">
            "It's Hero Time!" - Ben Tennyson
          </p>
          <div className="mt-8 text-sm text-gray-500">
            <p>Ben 10 Alien Index - Explore the Omnitrix Universe</p>
          </div>
        </div>
      </footer>
    </div>
  );
}