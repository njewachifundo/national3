import { useState, useEffect } from 'react'
import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  Calculator,
  CreditCard,
  Download,
  FileText,
  Globe2,
  LockKeyhole,
  Menu,
  MousePointer2,
  Phone,
  PiggyBank,
  ReceiptText,
  Search,
  Smartphone,
  X,
  ChevronRight,
  MapPin,
  Shield,
  TrendingUp,
  Home,
  Pause,
  Play,
} from 'lucide-react'

const colors = {
  ink: '#0F1B2D',
  charcoal: '#1F2A3A',
  muted: '#5F738C',
  line: '#E2E8F0',
  paper: '#F8FAFE',
  ivory: '#FFFFFF',
  white: '#FFFFFF',
  oxblood: '#0050B4',
  copper: '#4A90E2',
  forest: '#2E9D7F',
  gold: '#F2C14E',
  mist: '#F0F4FA',
}

// High quality rotating hero images
const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1920&h=1080&fit=crop',
    alt: 'Modern bank building exterior',
  },
  {
    url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&h=1080&fit=crop',
    alt: 'Person using mobile banking app',
  },
  {
    url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop',
    alt: 'Credit cards and financial planning',
  },
  {
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop',
    alt: 'Business handshake deal',
  },
  {
    url: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1920&h=1080&fit=crop',
    alt: 'Savings and investment concept',
  },
]

const customerSegments = [
  {
    image: '/real/card-a.jpg',
    label: 'Personal Banking',
    title: 'Banking for your everyday life',
    text: 'Accounts, cards, loans, and mortgages tailored to your financial goals.',
    icon: PiggyBank,
  },
  {
    image: '/real/card-d.jpg',
    label: 'Business Banking',
    title: 'Support for your business',
    text: 'From startups to enterprises, find financing, cash management, and trade solutions.',
    icon: BriefcaseBusiness,
  },
  {
    image: '/real/card-b.jpg',
    label: 'Wealth Management',
    title: 'Grow and protect your wealth',
    text: 'Investment advice, retirement planning, and private banking services.',
    icon: Globe2,
  },
]

const quickActions = [
  { icon: MousePointer2, title: 'Open an Account', text: 'Start your application online' },
  { icon: Calculator, title: 'Mortgage Calculator', text: 'Estimate your payments' },
  { icon: Download, title: 'Download Forms', text: 'Access banking documents' },
  { icon: Search, title: 'View Rates', text: 'Check current interest rates' },
]

const productGroups = [
  {
    title: 'Banking',
    icon: PiggyBank,
    links: ['Chequing Accounts', 'Savings Accounts', 'Student Banking', 'Senior Banking'],
  },
  {
    title: 'Borrowing',
    icon: Banknote,
    links: ['Personal Loans', 'Mortgages', 'Home Equity Loans', 'Lines of Credit'],
  },
  {
    title: 'Cards & Payments',
    icon: CreditCard,
    links: ['Visa Credit Cards', 'Debit Cards', 'Prepaid Cards', 'Mobile Payments'],
  },
  {
    title: 'Digital Services',
    icon: Smartphone,
    links: ['Online Banking', 'Mobile App', 'Bill Payments', 'Money Transfers'],
  },
]

const supportLinks = [
  { icon: LockKeyhole, title: 'Security Centre', text: 'Protect your accounts and digital access.' },
  { icon: Phone, title: 'Customer Support', text: 'Get help with accounts, cards, and services.' },
  { icon: FileText, title: 'Statements & Documents', text: 'Access eStatements, tax documents, and confirmations.' },
  { icon: ReceiptText, title: 'Bill Payments', text: 'Pay utilities, credit cards, and more.' },
]

const insights = [
  {
    title: 'Economic Outlook 2026',
    description: 'Our latest analysis on interest rates, inflation, and market trends for the coming year.',
    icon: TrendingUp,
  },
  {
    title: 'Digital Banking Security',
    description: 'How to protect yourself from online fraud and scams with our advanced security features.',
    icon: Shield,
  },
  {
    title: 'First-Time Home Buyer Guide',
    description: 'Everything you need to know about mortgages, down payments, and buying your first home.',
    icon: Home,
  },
]

const languages = ['English', 'Chichewa', 'Tumbuka']

function LanguageSelector({ dark = false }: { dark?: boolean }) {
  const [language, setLanguage] = useState('English')

  return (
    <label
      className={`flex items-center gap-2 border px-3 py-2 ${dark ? 'bg-transparent' : 'bg-white'}`}
      style={{ borderColor: dark ? 'rgba(255,255,255,0.2)' : colors.line }}
    >
      <Globe2 className="h-4 w-4" style={{ color: dark ? colors.white : colors.oxblood }} />
      <span className="sr-only">Select language</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
        className="bg-transparent text-sm font-medium outline-none"
        style={{ color: dark ? colors.white : colors.ink }}
      >
        {languages.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </label>
  )
}

function Logo({ dark = false }: { dark?: boolean }) {
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <div className="flex items-center">
      <div
        className={`
          flex items-center justify-center overflow-hidden rounded-lg
          ${dark ? 'bg-transparent' : 'bg-[#0050B4]'}
        `}
        style={{
          width: dark ? '320px' : '300px',
          height: dark ? '90px' : '80px',
          border: dark
            ? '1px solid rgba(255,255,255,0.22)'
            : '1px solid rgba(0,80,180,0.25)',
        }}
      >
        {!logoFailed ? (
          <img
            src="/real/nbm-logo-dominant.png"
            alt="National Bank of Malawi"
            className="h-full w-full object-contain p-3"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <div className="flex flex-col items-center">
            <span
              className="text-3xl font-black tracking-tight"
              style={{ color: dark ? colors.oxblood : colors.white }}
            >
              NBM
            </span>
            <span
              className="text-[10px] font-bold uppercase tracking-wider"
              style={{ color: dark ? colors.white : 'rgba(255,255,255,0.85)' }}
            >
              National Bank of Malawi
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [credential, setCredential] = useState('')
  const [activeTab, setActiveTab] = useState('Personal')
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()
    alert(`Login attempt with: ${credential}`)
    setCredential('')
    setLoginOpen(false)
  }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    alert(`${tab} Banking section loaded.`)
  }

  const goToPrevious = () => {
    setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setIsPlaying(false)
  }

  const goToNext = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)
    setIsPlaying(false)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const navItems = ['Personal', 'Business', 'Wealth', 'Cards', 'Digital']

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.paper, color: colors.ink, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');
        
        .hover-lift {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
        }
        .tab-active {
          border-bottom-color: ${colors.oxblood};
          color: ${colors.oxblood};
        }
        .hero-fade {
          transition: opacity 1s ease-in-out;
        }
      `}</style>

      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="border-b" style={{ borderColor: colors.line }}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
            <div className="hidden items-center gap-6 text-xs font-medium md:flex" style={{ color: colors.muted }}>
              <button className="hover:text-[#0050B4]">Personal</button>
              <button className="hover:text-[#0050B4]">Business</button>
              <button className="hover:text-[#0050B4]">Wealth Management</button>
              <button className="hover:text-[#0050B4]">Investor Services</button>
            </div>
            <div className="flex items-center gap-5 text-xs font-medium" style={{ color: colors.muted }}>
              <button className="flex items-center gap-1 hover:text-[#0050B4]"><MapPin className="h-3 w-3" /> Branches</button>
              <button className="hover:text-[#0050B4]">Help</button>
              <button className="hover:text-[#0050B4]">Contact</button>
              <div className="hidden md:block">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Logo />
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleTabClick(item)}
                className={`border-b-2 pb-1 text-sm font-semibold transition-colors ${
                  activeTab === item ? 'tab-active' : 'border-transparent hover:border-[#0050B4]'
                }`}
                style={{ color: activeTab === item ? colors.oxblood : colors.ink }}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => setLoginOpen(true)}
              className="rounded border px-5 py-2 text-sm font-semibold transition-all hover:bg-gray-50"
              style={{ borderColor: colors.line }}
            >
              Sign In
            </button>
            <button
              className="rounded px-5 py-2 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: colors.oxblood }}
            >
              Open an Account
            </button>
          </div>
          <button
            className="rounded border bg-white p-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ borderColor: colors.line }}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t bg-white px-5 py-4 lg:hidden" style={{ borderColor: colors.line }}>
            <div className="mb-3">
              <LanguageSelector />
            </div>
            {[...navItems, 'Sign In'].map((item) => (
              <button
                key={item}
                className="block w-full border-b py-3 text-left font-medium"
                style={{ borderColor: colors.line }}
                onClick={() => {
                  if (item === 'Sign In') setLoginOpen(true)
                  else handleTabClick(item)
                  setMenuOpen(false)
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Hero Section with Rotating High Quality Images */}
        <section className="relative overflow-hidden" style={{ backgroundColor: colors.charcoal }}>
          {/* Rotating Background Images */}
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentHeroIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
            ))}
          </div>

          {/* Hero Content */}
          <div className="relative mx-auto max-w-7xl px-5 py-16 md:py-24">
            <div className="max-w-2xl text-white">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide" style={{ color: colors.gold }}>
                National Bank of Malawi
              </p>
              <h1 className="text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                Banking built around you.
              </h1>
              <p className="mt-4 text-lg text-white/80">
                Discover personalized banking solutions for every stage of your financial journey.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setLoginOpen(true)}
                  className="rounded bg-white px-6 py-3 font-semibold text-[#0050B4] transition-all hover:bg-gray-100"
                >
                  Sign In
                </button>
                <button className="rounded border border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white/10">
                  Learn More <ArrowRight className="ml-2 inline h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-6 left-0 right-0 mx-auto flex items-center justify-center gap-4">
            <button
              onClick={goToPrevious}
              className="rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
              aria-label="Previous image"
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
            </button>
            
            {/* Dot Indicators */}
            <div className="flex gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentHeroIndex(index)
                    setIsPlaying(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentHeroIndex ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <button
              onClick={togglePlayPause}
              className="rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 ml-2"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
          </div>
        </section>

        {/* Quick Actions Bar */}
        <section className="border-b bg-white" style={{ borderColor: colors.line }}>
          <div className="mx-auto max-w-7xl px-5 py-5">
            <div className="grid gap-3 md:grid-cols-4">
              {quickActions.map((action) => (
                <button
                  key={action.title}
                  className="hover-lift flex items-center justify-between rounded-lg border p-4 text-left transition-all"
                  style={{ borderColor: colors.line }}
                >
                  <div>
                    <p className="font-semibold">{action.title}</p>
                    <p className="mt-0.5 text-sm" style={{ color: colors.muted }}>{action.text}</p>
                  </div>
                  <action.icon className="h-5 w-5 shrink-0" style={{ color: colors.oxblood }} />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Segments */}
        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: colors.oxblood }}>
                Financial Solutions
              </p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Banking for every need</h2>
              <p className="mx-auto mt-3 max-w-2xl" style={{ color: colors.muted }}>
                From personal accounts to corporate solutions, we have the right financial products for you.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {customerSegments.map((segment) => (
                <article
                  key={segment.title}
                  className="group overflow-hidden rounded-xl border transition-all hover:shadow-md"
                  style={{ borderColor: colors.line }}
                >
                  <img src={segment.image} alt={segment.label} className="h-56 w-full object-cover" />
                  <div className="p-6">
                    <segment.icon className="mb-4 h-6 w-6" style={{ color: colors.oxblood }} />
                    <p className="text-xs font-semibold uppercase" style={{ color: colors.oxblood }}>{segment.label}</p>
                    <h3 className="mt-1 text-xl font-bold">{segment.title}</h3>
                    <p className="mt-2 leading-relaxed" style={{ color: colors.muted }}>{segment.text}</p>
                    <button className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2" style={{ color: colors.oxblood }}>
                      Learn more <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product Finder */}
        <section className="px-5 py-16" style={{ backgroundColor: colors.mist }}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: colors.oxblood }}>
                Product Finder
              </p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Find the right product for you</h2>
            </div>
            <div className="grid gap-0 overflow-hidden rounded-xl border bg-white md:grid-cols-2 lg:grid-cols-4" style={{ borderColor: colors.line }}>
              {productGroups.map((group) => (
                <div key={group.title} className="border-b p-6 last:border-b-0 md:border-b-0 md:border-r" style={{ borderColor: colors.line }}>
                  <group.icon className="mb-4 h-7 w-7" style={{ color: colors.copper }} />
                  <h3 className="text-xl font-bold">{group.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.links.map((item) => (
                      <li key={item} className="cursor-pointer text-sm transition-colors hover:text-[#0050B4]" style={{ color: colors.muted }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: colors.oxblood }}>
                  Insights & Advice
                </p>
                <h2 className="mt-1 text-2xl font-black md:text-3xl">Thought leadership to help you move forward</h2>
              </div>
              <button className="flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2" style={{ color: colors.oxblood }}>
                View all insights <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {insights.map((insight) => (
                <div key={insight.title} className="rounded-xl border p-6 transition-all hover:shadow-md" style={{ borderColor: colors.line }}>
                  <insight.icon className="mb-4 h-8 w-8" style={{ color: colors.oxblood }} />
                  <h3 className="text-lg font-bold">{insight.title}</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: colors.muted }}>{insight.description}</p>
                  <button className="mt-3 flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2" style={{ color: colors.oxblood }}>
                    Read more <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="px-5 py-16" style={{ backgroundColor: colors.paper }}>
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: colors.forest }}>
                  Help & Support
                </p>
                <h2 className="mt-2 text-3xl font-black md:text-4xl">We're here to help</h2>
                <p className="mt-4 leading-relaxed" style={{ color: colors.muted }}>
                  Get the support you need to manage your finances confidently. Our dedicated team is available 24/7 to assist you.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {supportLinks.map((item) => (
                  <div key={item.title} className="rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-md">
                    <item.icon className="mb-3 h-6 w-6" style={{ color: colors.forest }} />
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: colors.muted }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white px-5 py-10" style={{ borderColor: colors.line }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Logo />
              <p className="mt-4 text-sm" style={{ color: colors.muted }}>
                National Bank of Malawi plc.
              </p>
            </div>
            <div>
              <h4 className="mb-3 font-semibold">Banking</h4>
              <ul className="space-y-2 text-sm" style={{ color: colors.muted }}>
                <li className="cursor-pointer transition-colors hover:text-[#0050B4]">Personal Banking</li>
                <li className="cursor-pointer transition-colors hover:text-[#0050B4]">Business Banking</li>
                <li className="cursor-pointer transition-colors hover:text-[#0050B4]">Wealth Management</li>
                <li className="cursor-pointer transition-colors hover:text-[#0050B4]">Corporate Banking</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold">Support</h4>
              <ul className="space-y-2 text-sm" style={{ color: colors.muted }}>
                <li className="cursor-pointer transition-colors hover:text-[#0050B4]">Contact Us</li>
                <li className="cursor-pointer transition-colors hover:text-[#0050B4]">Security Centre</li>
                <li className="cursor-pointer transition-colors hover:text-[#0050B4]">Find a Branch</li>
                <li className="cursor-pointer transition-colors hover:text-[#0050B4]">FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm" style={{ color: colors.muted }}>
                <li className="cursor-pointer transition-colors hover:text-[#0050B4]">Privacy & Security</li>
                <li className="cursor-pointer transition-colors hover:text-[#0050B4]">Terms of Use</li>
                <li className="cursor-pointer transition-colors hover:text-[#0050B4]">Accessibility</li>
                <li className="cursor-pointer transition-colors hover:text-[#0050B4]">Legal Information</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-xs" style={{ borderColor: colors.line, color: colors.muted }}>
            <p>© {new Date().getFullYear()} National Bank of Malawi plc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" onClick={() => setLoginOpen(false)}>
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Sign In</h2>
                <p className="text-sm" style={{ color: colors.muted }}>Access your accounts securely.</p>
              </div>
              <button onClick={() => setLoginOpen(false)} className="rounded p-1 transition-colors hover:bg-gray-100">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleLogin}>
              <label className="mb-1 block text-sm font-medium">Username or Customer ID</label>
              <input
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                className="mb-4 w-full rounded border px-4 py-2 outline-none transition-all focus:ring-2"
                style={{ borderColor: colors.line, '--tw-ring-color': colors.oxblood } as React.CSSProperties}
                placeholder="Enter your credentials"
                required
              />
              <button
                type="submit"
                className="w-full rounded py-2.5 font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: colors.oxblood }}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}