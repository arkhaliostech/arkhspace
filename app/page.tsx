import Link from "next/link";

const IconBox = ({ children }: { children: React.ReactNode }) => (
  <div
    className="w-[46px] h-[46px] flex items-center justify-center relative"
    style={{ border: "3px solid #000", background: "#37CBC3", boxShadow: "4px 5px 0 0 #000" }}
  >
    {children}
  </div>
);

const features = [
  {
    bg: "#FF6B6B",
    icon: (
      <div className="relative w-[52px] h-[52px]">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <rect x="1.5" y="1.5" width="49" height="49" rx="9.5" fill="black" stroke="#2A5855" strokeWidth="3"/>
          <circle cx="26" cy="26" r="14.5" fill="black" stroke="#2A5855"/>
          <circle cx="26" cy="26" r="9" fill="#37CBC3"/>
          <circle cx="26" cy="20" r="5" fill="black"/>
          <ellipse cx="26" cy="33" rx="8" ry="4" fill="black"/>
        </svg>
      </div>
    ),
    title: "Finds your Identity",
    description: "Your identity as a student matters, because it determines who you want to be and who you are.",
  },
  {
    bg: "#2DA3A2",
    icon: (
      <IconBox>
        <svg width="29" height="28" viewBox="0 0 29 28" fill="none">
          <rect x="0" y="3" width="29" height="4" fill="#080808"/>
          <rect x="0" y="9" width="29" height="19" fill="#080808"/>
          <rect x="3" y="12" width="3" height="3" fill="#37CBC3"/>
          <rect x="9" y="12" width="3" height="3" fill="#37CBC3"/>
          <rect x="15" y="12" width="3" height="3" fill="#37CBC3"/>
          <rect x="3" y="18" width="3" height="3" fill="#37CBC3"/>
          <rect x="9" y="18" width="3" height="3" fill="#37CBC3"/>
          <rect x="15" y="18" width="3" height="3" fill="#37CBC3"/>
          <rect x="4" y="0" width="3" height="4" fill="#080808"/>
          <rect x="22" y="0" width="3" height="4" fill="#080808"/>
        </svg>
      </IconBox>
    ),
    title: "Systemize your Student Life",
    description: "Systems over goals. Organizes habits, calendar, and tasks by priority so you know exactly what to tackle first.",
  },
  {
    bg: "#FFD47F",
    icon: (
      <IconBox>
        <svg width="25" height="21" viewBox="0 0 25 21" fill="none">
          <rect x="0" y="0" width="25" height="4" fill="#080808"/>
          <rect x="0" y="7" width="25" height="14" fill="#080808"/>
          <rect x="3" y="10" width="2" height="3" fill="#37CBC3"/>
          <rect x="20" y="0" width="3" height="4" fill="#080808"/>
          <rect x="3" y="0" width="3" height="4" fill="#080808"/>
          <rect x="2" y="13" width="3" height="4" fill="#37CBC3"/>
          <rect x="20" y="13" width="2" height="4" fill="#37CBC3"/>
        </svg>
      </IconBox>
    ),
    title: "Makes Learning Fun",
    description: "Streaks, timers, and progress tracking turn study sessions into engaging challenges.",
  },
  {
    bg: "#8AC186",
    icon: (
      <IconBox>
        <svg width="29" height="30" viewBox="0 0 29 30" fill="none">
          <rect x="0" y="12" width="29" height="18" fill="#080808"/>
          <rect x="0" y="6" width="4" height="7" fill="#080808"/>
          <rect x="25" y="6" width="4" height="7" fill="#080808"/>
          <rect x="4" y="2" width="8" height="10" fill="#080808"/>
          <rect x="17" y="2" width="8" height="10" fill="#080808"/>
          <rect x="3" y="16" width="5" height="5" fill="#37CBC3"/>
          <rect x="12" y="16" width="5" height="5" fill="#37CBC3"/>
          <rect x="21" y="16" width="5" height="5" fill="#37CBC3"/>
          <rect x="3" y="22" width="5" height="8" fill="#37CBC3"/>
        </svg>
      </IconBox>
    ),
    title: "Personalized Dashboard",
    description: "Wether you are in Engineering, Med or Tech etc. you will be reminded everyday the life you are building.",
  },
  {
    bg: "#F8D6B3",
    icon: (
      <IconBox>
        <svg width="29" height="30" viewBox="0 0 29 30" fill="none">
          <circle cx="14" cy="14" r="10" stroke="#080808" strokeWidth="3" fill="none"/>
          <circle cx="14" cy="14" r="6" fill="#37CBC3"/>
          <circle cx="14" cy="14" r="3" fill="#080808"/>
          <line x1="21" y1="21" x2="29" y2="29" stroke="#080808" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      </IconBox>
    ),
    title: "GPA and Budget Tracker",
    description: "Computes your GPA and budget for you, all you need to do is input your scores/grades and money.",
  },
  {
    bg: "#FFABC7",
    icon: (
      <IconBox>
        <svg width="25" height="21" viewBox="0 0 25 21" fill="none">
          <rect x="0" y="0" width="25" height="21" fill="#080808"/>
          <rect x="2" y="3" width="21" height="3" fill="#37CBC3"/>
          <rect x="2" y="9" width="15" height="3" fill="#37CBC3"/>
          <rect x="2" y="15" width="10" height="3" fill="#37CBC3"/>
        </svg>
      </IconBox>
    ),
    title: "Frees Up Time",
    description: "Don't let your GPA ruin what is in front of you, relationships with people and yourself matter more.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050f0e] overflow-x-hidden relative">
      {/* Space background overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(55,203,195,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(55,203,195,0.03) 0%, transparent 50%)",
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: "5%", left: "10%", size: 2 }, { top: "12%", left: "85%", size: 1.5 },
          { top: "18%", left: "45%", size: 1 }, { top: "25%", left: "70%", size: 2 },
          { top: "35%", left: "15%", size: 1.5 }, { top: "40%", left: "92%", size: 1 },
          { top: "50%", left: "5%", size: 2 }, { top: "55%", left: "60%", size: 1 },
          { top: "65%", left: "30%", size: 1.5 }, { top: "70%", left: "80%", size: 2 },
          { top: "80%", left: "50%", size: 1 }, { top: "90%", left: "20%", size: 1.5 },
          { top: "8%", left: "55%", size: 1 }, { top: "45%", left: "42%", size: 1.5 },
          { top: "60%", left: "88%", size: 1 }, { top: "75%", left: "65%", size: 2 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-60"
            style={{ top: star.top, left: star.left, width: star.size * 2, height: star.size * 2 }}
          />
        ))}
        {/* Teal dots */}
        {[
          { top: "30%", left: "25%", size: 3 }, { top: "60%", left: "75%", size: 3 },
          { top: "85%", left: "40%", size: 3 }, { top: "15%", left: "60%", size: 3 },
        ].map((dot, i) => (
          <div
            key={`t${i}`}
            className="absolute rounded-full opacity-40"
            style={{ top: dot.top, left: dot.left, width: dot.size * 2, height: dot.size * 2, background: "#37CBC3" }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#37CBC3] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 4C8 4 5 7 5 12C5 17 8 20 12 20C16 20 19 17 19 12C19 7 16 4 12 4Z" fill="black"/>
              <circle cx="12" cy="12" r="4" fill="#37CBC3"/>
            </svg>
          </div>
          <span
            className="text-2xl font-bold tracking-[-0.2em]"
            style={{ fontFamily: "var(--font-lexend-giga)", background: "linear-gradient(0deg, #63C4AB, #63C4AB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            ArkhSpace
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {["About Us", "Pricing", "Features"].map((link) => (
            <Link key={link} href="#" className="text-white text-sm font-medium hover:text-[#37CBC3] transition-colors" style={{ fontFamily: "var(--font-archivo)" }}>
              {link}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/auth/login">
            <button
              className="px-5 py-2 rounded-full text-white text-sm font-bold border-2 border-white transition-all hover:bg-white hover:text-black"
              style={{ fontFamily: "var(--font-lexend-mega)", letterSpacing: "-0.17em", boxShadow: "3px 4px 0 0 #FFF" }}
            >
              Login
            </button>
          </Link>
          <Link href="/auth/sign-up">
            <button
              className="px-5 py-2 rounded-full text-white text-sm font-bold border-2 border-white transition-all hover:bg-white hover:text-black"
              style={{ fontFamily: "var(--font-lexend-mega)", letterSpacing: "-0.17em", boxShadow: "3px 4px 0 0 #FFF" }}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center text-center px-4 pt-16 pb-24">
        {/* Sparkle top right */}
        <svg className="absolute right-[8%] top-[10%] hidden lg:block" width="57" height="59" viewBox="0 0 57 59" fill="none">
          <path d="M32.8408 24.5957L32.9053 24.9199L33.2285 24.9883L54.5801 29.5L33.2285 34.0117L32.9053 34.0801L32.8408 34.4043L28.5 56.417L24.1592 34.4043L24.0947 34.0801L23.7715 34.0117L2.41895 29.5L23.7715 24.9883L24.0947 24.9199L24.1592 24.5957L28.5 2.58203L32.8408 24.5957Z" fill="#FFD47F" stroke="black"/>
        </svg>

        {/* Star sparkle left */}
        <svg className="absolute left-[5%] top-[40%] hidden lg:block" width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M33.1455 14.9355L33.127 15.6768L33.8213 15.417L45.6465 10.9834L37.959 21.4756L37.5439 22.041L38.2139 22.249L50.3105 26L38.2139 29.751L37.5439 29.959L37.959 30.5244L45.6465 41.0156L33.8213 36.583L33.127 36.3232L33.1455 37.0645L33.4883 50.2471L26.4189 39.3975L26 38.7549L25.5811 39.3975L18.5107 50.2471L18.8545 37.0645L18.873 36.3232L18.1787 36.583L6.35254 41.0156L14.041 30.5244L14.4561 29.959L13.7861 29.751L1.68848 26L13.7861 22.249L14.4561 22.041L14.041 21.4756L6.35254 10.9834L18.1787 15.417L18.873 15.6768L18.8545 14.9355L18.5107 1.75195L25.5811 12.6025L26 13.2451L26.4189 12.6025L33.4883 1.75195L33.1455 14.9355Z" fill="#FF8D28" stroke="black"/>
        </svg>

        <h1
          className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl"
          style={{ fontFamily: "var(--font-bricolage)", textShadow: "0 4px 4px rgba(245,245,245,0.25)" }}
        >
          <span className="text-white">Turn your student life into a </span>
          <span style={{ color: "#37CBC3" }}>system</span>
          <span className="text-white"> that works for you.</span>
        </h1>

        <p
          className="mt-8 text-white text-base md:text-xl max-w-2xl text-center"
          style={{ fontFamily: "Molengo, serif" }}
        >
          The ultimate space for students to combine multiple tasks, builds systems, build habits, and find your identity. All while making the process of learning fun and engaging.
        </p>
      </section>

      {/* What It Does Section */}
      <section className="relative z-10 px-4 md:px-16 pb-20">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8 max-w-6xl mx-auto">
          <div className="relative w-5 h-9">
            <div className="absolute w-5 h-[7px] rounded-full top-0 left-0" style={{ background: "#37CBC3", transform: "rotate(45deg)", transformOrigin: "left center" }} />
            <div className="absolute w-5 h-[7px] rounded-full bottom-0 left-0" style={{ background: "#37CBC3", transform: "rotate(-45deg)", transformOrigin: "left center" }} />
          </div>
          <h2
            className="text-white text-2xl font-bold"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            What It Does
          </h2>
          {/* Spiky badge top right */}
          <div className="ml-auto">
            <svg className="hidden lg:block" width="57" height="59" viewBox="0 0 57 59" fill="none">
              <path d="M32.8408 24.5957L32.9053 24.9199L33.2285 24.9883L54.5801 29.5L33.2285 34.0117L32.9053 34.0801L32.8408 34.4043L28.5 56.417L24.1592 34.4043L24.0947 34.0801L23.7715 34.0117L2.41895 29.5L23.7715 24.9883L24.0947 24.9199L24.1592 24.5957L28.5 2.58203L32.8408 24.5957Z" fill="#FFD47F" stroke="black"/>
            </svg>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col gap-3 border"
              style={{ background: feature.bg, borderColor: "#222A3B" }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3
                className="text-black text-lg font-bold mt-2"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-black text-sm leading-relaxed"
                style={{ fontFamily: "Molengo, serif", textAlign: "justify" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Beta Banner */}
      <div className="relative z-10 w-full bg-white py-6 overflow-hidden">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 mr-8">
              <span
                className="text-[#37CBC3] text-2xl font-bold"
                style={{ fontFamily: "var(--font-lexend-mega)", letterSpacing: "-0.17em" }}
              >
                Beta v.1
              </span>
              <span
                className="text-black text-sm font-normal"
                style={{ fontFamily: "var(--font-lexend-mega)", letterSpacing: "-0.15em" }}
              >
                users who subscribes during beta will get a lifetime discount :)
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mx-2 flex-shrink-0">
                <circle cx="7" cy="7" r="7" fill="#FFD47F"/>
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* What It Solves Section */}
      <section className="relative z-10 px-4 md:px-16 py-20">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10 max-w-6xl mx-auto">
          <div className="relative w-5 h-9">
            <div className="absolute w-5 h-[7px] rounded-full top-0 left-0" style={{ background: "#37CBC3", transform: "rotate(45deg)", transformOrigin: "left center" }} />
            <div className="absolute w-5 h-[7px] rounded-full bottom-0 left-0" style={{ background: "#37CBC3", transform: "rotate(-45deg)", transformOrigin: "left center" }} />
          </div>
          <h2
            className="text-white text-2xl font-bold"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            What It Solves
          </h2>
        </div>

        {/* Dark card */}
        <div
          className="relative max-w-6xl mx-auto rounded-[40px] overflow-hidden flex items-center justify-center"
          style={{ background: "#222A3B", minHeight: 500 }}
        >
          {/* Teal square decoration */}
          <div className="absolute left-10 top-10">
            <div className="w-36 h-36 rotate-[-6deg] absolute" style={{ background: "white", top: 8, left: 4 }} />
            <div className="w-36 h-36 rotate-[-6deg]" style={{ background: "#37CBC3" }} />
          </div>

          {/* Yellow rounded square */}
          <div className="absolute right-10 top-10">
            <div className="w-36 h-36 rounded-[50px] absolute" style={{ background: "white", top: 8, left: 8 }} />
            <div className="w-36 h-36 rounded-[50px]" style={{ background: "#FFD47F" }} />
          </div>

          {/* Red circle decoration */}
          <div className="absolute left-10 bottom-10">
            <div className="w-36 h-36 rounded-full absolute" style={{ background: "white", top: 8, left: 8 }} />
            <div className="w-36 h-36 rounded-full" style={{ background: "#FF6B6B" }} />
          </div>

          {/* Text */}
          <div className="text-center relative z-10 py-20 px-8">
            <p
              className="text-white text-2xl md:text-3xl font-bold mb-2"
              style={{ fontFamily: "var(--font-lexend-giga)", letterSpacing: "-0.15em" }}
            >
              not just another
            </p>
            <p
              className="font-bold"
              style={{
                fontFamily: "var(--font-bricolage)",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "#37CBC3",
                lineHeight: 1.1,
              }}
            >
              student
            </p>
            <p
              className="text-white font-bold"
              style={{
                fontFamily: "var(--font-lexend-giga)",
                fontSize: "clamp(4rem, 12vw, 10.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.15em",
              }}
            >
              tool
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
