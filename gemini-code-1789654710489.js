import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Calendar, Clock, Instagram, MapPin, Bitcoin, Copy, X } from "lucide-react";

const ARTISTS = [
  {
    id: "a1",
    name: "João Henrique da Silva",
    specialty: "Fine line & botanical",
    initials: "JS",
    years: "9 yrs",
    photo: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "a2",
    name: "Elena Rostova",
    specialty: "Black & Grey Realism",
    initials: "ER",
    years: "12 yrs",
    photo: "https://images.unsplash.com/photo-1562159278-1253a58da141?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "a3",
    name: "Marcus Vance",
    specialty: "Neotraditional & Japanese",
    initials: "MV",
    years: "7 yrs",
    photo: "https://images.unsplash.com/photo-1579187707643-35646d22b596?auto=format&fit=crop&q=80&w=600"
  }
];

const GALLERY = [
  "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1590246814884-570a1d416535?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1565058384373-c196884a4a58?auto=format&fit=crop&q=80&w=800"
];

export default function InkDynasty() {
  const [selectedArtist, setSelectedArtist] = useState(ARTISTS[0].id);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const btcAddress = "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa";

  const handleCopy = () => {
    navigator.clipboard.writeText(btcAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === GALLERY.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? GALLERY.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased">
      {/* Navigation */}
      <nav className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-neutral-950 font-bold text-xl tracking-tighter">
              ID
            </div>
            <span className="text-xl font-bold tracking-wider uppercase text-neutral-100">
              Ink Dynasty
            </span>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/10"
          >
            Book Session
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">
              Premier Tattoo Studio
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-3 mb-6 text-neutral-100 leading-tight">
              Permanence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Meets Precision
              </span>
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Crafting bespoke body art with industry-leading sterile techniques and world-class resident artists.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-neutral-100 text-neutral-950 font-semibold px-6 py-3 rounded-lg hover:bg-neutral-200 transition"
              >
                Consultation
              </button>
              <a 
                href="#artists"
                className="border border-neutral-700 text-neutral-300 hover:text-neutral-100 px-6 py-3 rounded-lg hover:bg-neutral-900 transition"
              >
                View Artists
              </a>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group">
            <img 
              src={GALLERY[currentSlide]} 
              alt="Studio Gallery" 
              className="w-full h-[400px] object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-900/80 text-white p-2 rounded-full hover:bg-neutral-800 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-neutral-900/80 text-white p-2 rounded-full hover:bg-neutral-800 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20 border-t border-neutral-800 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Resident Artists</h2>
            <p className="text-neutral-400">Select an artist to view their specialization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTISTS.map((artist) => (
              <div
                key={artist.id}
                onClick={() => setSelectedArtist(artist.id)}
                className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 relative overflow-hidden ${
                  selectedArtist === artist.id
                    ? "border-amber-500 bg-neutral-900 shadow-xl shadow-amber-500/5"
                    : "border-neutral-800 bg-neutral-950 hover:border-neutral-700"
                }`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={artist.photo}
                    alt={artist.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-neutral-700"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-100">{artist.name}</h3>
                    <p className="text-amber-500 text-sm font-medium">{artist.specialty}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-neutral-800/80 text-sm text-neutral-400">
                  <span>Experience</span>
                  <span className="font-semibold text-neutral-200">{artist.years}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crypto Payment Section */}
      <section className="py-16 border-t border-neutral-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-amber-500 bg-amber-500/10 px-4 py-2 rounded-full mb-6">
            <Bitcoin size={18} />
            <span className="text-sm font-medium">Crypto Accepted</span>
          </div>
          <h2 className="text-2xl font-bold mb-4">Pay Deposits with Bitcoin</h2>
          <p className="text-neutral-400 mb-6">
            We support Bitcoin payments for booking deposits and consultations.
          </p>
          <div className="flex items-center justify-center gap-3 bg-neutral-900 border border-neutral-800 rounded-lg p-3 max-w-md mx-auto">
            <span className="text-sm font-mono text-neutral-300 truncate">{btcAddress}</span>
            <button
              onClick={handleCopy}
              className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 p-2 rounded transition flex items-center gap-1"
            >
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12 bg-neutral-950 text-neutral-400 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-amber-500" />
            <span>108 Cyberpunk Way, Suite 404, Neo-Tokyo</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-amber-500 transition flex items-center gap-1">
              <Instagram size={16} /> @inkdynasty
            </a>
          </div>
          <div>© {new Date().getFullYear()} Ink Dynasty Studio. All rights reserved.</div>
        </div>
      </footer>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-neutral-400 hover:text-white"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-bold mb-4">Book a Session</h3>
            <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert("Booking Request Sent!"); }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-semibold text-neutral-400 mb-1">Name</label>
                  <input type="text" required className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-sm focus:border-amber-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs uppercase font-semibold text-neutral-400 mb-1">Email</label>
                  <input type="email" required className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-sm focus:border-amber-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs uppercase font-semibold text-neutral-400 mb-1">Artist</label>
                  <select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2.5 text-sm focus:border-amber-500 outline-none">
                    {ARTISTS.map(a => <option key={a.id} value={a.id}>{a.name} ({a.specialty})</option>)}
                  </select>
                </div>
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-3 rounded-lg transition mt-2">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}