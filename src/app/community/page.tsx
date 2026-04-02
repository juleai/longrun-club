import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "Long Run Saturday — NYC",
    date: "Apr 12, 2026",
    location: "Central Park, New York",
    distance: "10K Group Run",
    description: "Join our weekly community run through Central Park. All paces welcome. Coffee after.",
  },
  {
    title: "Trail Series — Boulder",
    date: "Apr 19, 2026",
    location: "Chautauqua Park, Boulder",
    distance: "Half Marathon",
    description: "Tackle the Flatirons trail with fellow Long Run athletes. Aid stations provided.",
  },
  {
    title: "Track Tuesday — LA",
    date: "Apr 22, 2026",
    location: "Drake Stadium, UCLA",
    distance: "Speed Workout",
    description: "Structured interval session with pace groups from 6:00 to 9:00/mi.",
  },
];

const athletes = [
  { name: "Maya Chen", role: "Ultra Runner", quote: "Long Run gear is the only kit I trust for 100-milers. It performs when everything else falls apart.", image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80" },
  { name: "James Okafor", role: "Marathon Runner", quote: "The Marathon Jacket got me through Boston in a downpour. 2:38 PR. Enough said.", image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&q=80" },
  { name: "Ava Rodriguez", role: "Trail Runner", quote: "From sea level to 14,000 ft — this gear adapts. I never think about what I'm wearing, I just run.", image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&q=80" },
];

const stats = [
  { value: "50K+", label: "Community Members" },
  { value: "200+", label: "Weekly Group Runs" },
  { value: "34", label: "Cities Worldwide" },
  { value: "1.2M", label: "Miles Logged Together" },
];

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="relative h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1600&q=85"
            alt="Community of runners"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#111827]/60 flex flex-col items-center justify-center gap-4 text-center px-8">
            <p className="text-white/60 text-xs tracking-widest uppercase font-light">Stronger Together</p>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-[-2px] text-white">THE LONG RUN COMMUNITY</h1>
            <p className="text-white/70 text-lg font-light max-w-lg">
              We believe running is better together. Find your crew, push your limits, and go the distance.
            </p>
          </div>
        </div>

        {/* Stats */}
        <section className="bg-[#111827] text-white py-16">
          <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map(s => (
              <div key={s.label}>
                <p className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[#3B82F6]">{s.value}</p>
                <p className="text-white/60 text-sm font-light mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="px-8 sm:px-12 lg:px-20 py-20">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#3B82F6] text-[11px] font-medium tracking-[3px] uppercase mb-3">Upcoming</p>
            <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-[-1.5px] text-[#111827] mb-12">Group Runs & Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map(event => (
                <div key={event.title} className="bg-white rounded-xl border border-black/8 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-md bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-medium">{event.distance}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2">{event.title}</h3>
                  <p className="text-[#6b7280] text-sm font-light mb-4">{event.description}</p>
                  <div className="flex flex-col gap-1.5 text-sm text-[#6b7280]">
                    <span>{event.date}</span>
                    <span>{event.location}</span>
                  </div>
                  <button className="mt-6 w-full px-5 py-3 rounded-lg border border-[#111827] text-[#111827] text-sm font-medium hover:bg-[#111827] hover:text-white transition-all duration-300">
                    RSVP
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Athletes */}
        <section className="bg-[#F3F4F6] px-8 sm:px-12 lg:px-20 py-20">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#3B82F6] text-[11px] font-medium tracking-[3px] uppercase mb-3">Athletes</p>
            <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-[-1.5px] text-[#111827] mb-12">Voices From The Road</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {athletes.map(a => (
                <div key={a.name} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative h-[240px]">
                    <Image src={a.image} alt={a.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <p className="text-[#6b7280] text-sm font-light italic leading-relaxed mb-4">&ldquo;{a.quote}&rdquo;</p>
                    <p className="font-bold text-[#111827] text-sm">{a.name}</p>
                    <p className="text-[#3B82F6] text-xs font-medium">{a.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="px-8 sm:px-12 lg:px-20 py-20 text-center">
          <div className="max-w-lg mx-auto">
            <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-[-1.5px] text-[#111827] mb-4">Ready To Join?</h2>
            <p className="text-[#6b7280] font-light mb-8">
              Whether you&apos;re training for your first 5K or your tenth ultra, there&apos;s a place for you here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/shop" className="px-8 py-4 rounded-lg bg-[#111827] text-[#FAFAF8] font-medium text-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                Shop The Collection
              </Link>
              <a href="#" className="px-8 py-4 rounded-lg border border-[#111827] text-[#111827] font-medium text-sm hover:bg-[#111827] hover:text-[#FAFAF8] transition-all duration-300">
                Find A Run Near You
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
