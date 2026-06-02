import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import {
  Apple,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Download,
  Headphones,
  LayoutDashboard,
  Lock,
  Mail,
  MapPin,
  Menu,
  Percent,
  Phone,
  RefreshCw,
  Send,
  Shield,
  Smartphone,
  Users,
  Wallet,
  X,
  Zap,
} from 'lucide-react'

type ExchangeRate = {
  buying: number
  selling: number
  change: string
}

const exchangeRates: Record<string, ExchangeRate> = {
  USD: { buying: 1280.35, selling: 1305.0, change: '+0.5%' },
  GBP: { buying: 1620.75, selling: 1645.3, change: '+0.3%' },
  EUR: { buying: 1380.2, selling: 1405.45, change: '-0.2%' },
  ZAR: { buying: 68.5, selling: 70.25, change: '+0.8%' },
  CAD: { buying: 945.6, selling: 960.25, change: '+0.1%' },
}

const navItems = [
  'Home',
  'Open Account',
  'Retail',
  "SME's",
  'Corporate',
  'e-Services',
  'Rates & Tariffs',
  'Forms',
  'Publications',
  'Media',
]

const bankingPillars = [
  {
    image: '/real/personal.png',
    title: 'Retail Banking',
    desc: 'Personal accounts, loans, and everyday banking for individuals.',
  },
  {
    image: '/real/international.png',
    title: 'International Banking',
    desc: 'Cross-border payments and global financial solutions.',
  },
  {
    image: '/real/corporate.png',
    title: 'Corporate Banking',
    desc: 'Sophisticated services for enterprises and institutions.',
  },
  {
    image: '/real/asset.png',
    title: 'Asset Finance',
    desc: 'Expertise across asset classes for investors.',
  },
]

const latestNews = [
  {
    title: 'NBM plc donates K10 Million to Rotary Club of Blantyre',
    date: 'June 1, 2026',
    category: 'Community',
    readTime: '3 min read',
    image: '/real/news1.jpg',
  },
  {
    title: 'NBM Appoints Bernard Masi as Head of Corporate Banking',
    date: 'May 28, 2026',
    category: 'Corporate',
    readTime: '5 min read',
    image: '/real/news2.jpg',
  },
  {
    title: 'NBM plc launches innovative digital onboarding platform',
    date: 'May 25, 2026',
    category: 'Product',
    readTime: '4 min read',
    image: '/real/hero.jpg',
  },
  {
    title: 'Foreign currency exchange rates update — Kwacha stable',
    date: 'May 22, 2026',
    category: 'Markets',
    readTime: '2 min read',
    image: '/real/mobile.jpg',
  },
]

const newsImages = [
  '/real/news1.jpg',
  '/real/news2.jpg',
  '/real/hero.jpg',
  '/real/mobile.jpg',
]

const standoutFeatures = [
  {
    title: 'Instant Onboarding',
    detail: 'Open an account in minutes with guided digital verification.',
  },
  {
    title: 'Smart Money Tools',
    detail: 'Track spending, savings goals, and transfers in one clean dashboard.',
  },
  {
    title: 'Enterprise Ready',
    detail: 'Bulk payments, approvals, and treasury visibility for growing teams.',
  },
]

function LogoMark({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const [logoFailed, setLogoFailed] = useState(false)
  const logoSize = size === 'sm' ? 'h-10 w-32' : 'h-12 w-40'
  return (
    <div className="flex shrink-0 items-center justify-center rounded-xl bg-nbm-blue-dark px-2 py-1 shadow-md ring-1 ring-white/25">
      {logoFailed ? (
        <span className="text-sm font-extrabold tracking-wide text-white">NBM</span>
      ) : (
        <img
          src="/real/nbm-logo.png"
          alt="National Bank of Malawi logo"
          className={`${logoSize} object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]`}
          decoding="async"
          onError={() => setLogoFailed(true)}
        />
      )}
    </div>
  )
}

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [newsImageTick, setNewsImageTick] = useState(0)
  const [autoRotateNews, setAutoRotateNews] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!autoRotateNews) return
    const interval = window.setInterval(() => {
      setNewsImageTick((value) => (value + 1) % newsImages.length)
    }, 3000)
    return () => window.clearInterval(interval)
  }, [autoRotateNews])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) setAutoRotateNews(false)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only z-[70] rounded-md bg-nbm-blue px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
      >
        Skip to main content
      </a>
      <header className="fixed z-50 w-full">
        {/* Top utility bar */}
        <div className="hidden bg-nbm-blue-dark text-white lg:block">
          <div className="container mx-auto flex items-center justify-between px-6 py-2 text-xs">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-nbm-blue-accent-light" />
                Secure Banking
              </span>
              <span className="flex items-center gap-1.5 text-white/80">
                <Phone className="h-3.5 w-3.5" />
                24/7 Support: (265) 111 820 622
              </span>
            </div>
            <div className="flex items-center gap-5 text-white/80">
              <a href="#privacy" className="transition hover:text-nbm-blue-accent-light">
                Privacy Policy
              </a>
              <a href="#terms" className="transition hover:text-nbm-blue-accent-light">
                Terms &amp; Conditions
              </a>
              <span className="font-medium text-nbm-blue-accent-light">Inspire Greatness</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Primary navigation"
          className={`w-full transition-all duration-300 ${
            scrolled
              ? 'border-b border-gray-100 bg-white/95 py-3 shadow-lg backdrop-blur-md'
              : 'bg-white py-4 shadow-sm'
          }`}
        >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3 no-underline" aria-label="National Bank of Malawi home">
            <LogoMark />
            <div className="hidden sm:block">
              <span className="text-base font-bold leading-tight text-gray-900">
                National Bank
              </span>
              <span className="block text-xs font-medium text-nbm-blue">
                of Malawi plc · The bank of the Nation
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-5 xl:flex">
            <Link
              to="/"
              className={`text-sm font-medium transition ${
                location.pathname === '/'
                  ? 'text-nbm-blue'
                  : 'text-gray-600 hover:text-nbm-blue'
              }`}
            >
              Home
            </Link>
            <Link
              to="/open-account"
              className={`text-sm font-medium transition ${
                location.pathname === '/open-account'
                  ? 'text-nbm-blue'
                  : 'text-gray-600 hover:text-nbm-blue'
              }`}
            >
              Open Account
            </Link>
            {navItems.slice(2, 6).map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-gray-600 transition hover:text-nbm-blue"
              >
                {item}
              </a>
            ))}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-nbm-blue"
              >
                More <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute right-0 top-full z-50 mt-1 w-52 rounded-xl border border-gray-100 bg-white py-1 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                {navItems.slice(6).map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2.5 text-sm text-gray-600 transition hover:bg-nbm-blue-50 hover:text-nbm-blue"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#login"
              className="flex items-center gap-2 rounded-full bg-nbm-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-nbm-blue-light hover:shadow-lg no-underline"
            >
              <LayoutDashboard className="h-4 w-4" />
              Internet Banking
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-gray-700 xl:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 top-full max-h-[80vh] w-full overflow-y-auto border-t border-gray-100 bg-white px-6 py-4 shadow-xl xl:hidden">
            <Link
              to="/"
              className="block border-b border-gray-50 py-3 text-gray-700 transition hover:text-nbm-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/open-account"
              className="block border-b border-gray-50 py-3 text-gray-700 transition hover:text-nbm-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Open Account
            </Link>
            {navItems.slice(2).map((item) => (
              <a
                key={item}
                href="#"
                className="block border-b border-gray-50 py-3 text-gray-700 transition hover:text-nbm-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#login"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-nbm-blue py-3 text-sm font-semibold text-white no-underline"
            >
              <LayoutDashboard className="h-4 w-4" />
              Internet Banking
            </a>
          </div>
        )}
        </nav>
      </header>

      <main id="main-content">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-nbm-blue-50 via-white to-white px-4 pb-20 pt-28 sm:px-6 lg:pb-24 lg:pt-40">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-nbm-blue/5 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-nbm-blue-accent/10 blur-3xl"
          aria-hidden
        />
        <div className="container relative mx-auto">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            <div className="space-y-6 lg:w-[52%]">
              <div className="inline-flex items-center gap-2 rounded-full border border-nbm-blue/20 bg-white px-4 py-2 text-sm font-medium text-nbm-blue shadow-sm">
                <Zap className="h-4 w-4 text-nbm-blue-accent" />
                Welcome to the Future of Banking in Malawi
              </div>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 lg:text-5xl xl:text-6xl">
                Banking that
                <span className="mt-1 block bg-gradient-to-r from-nbm-blue to-nbm-blue-light bg-clip-text text-transparent">
                  Inspires Greatness
                </span>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-gray-500">
                Experience seamless digital banking, competitive exchange rates, and
                financial services designed for modern Malawi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/open-account"
                  className="inline-flex items-center gap-2 rounded-xl bg-nbm-blue px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-nbm-blue-light hover:shadow-xl no-underline"
                >
                  Open Account <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#app"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-3.5 font-semibold text-gray-700 shadow-sm transition hover:border-nbm-blue hover:text-nbm-blue no-underline"
                >
                  <Download className="h-4 w-4" /> Download Mo626
                </a>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-nbm-blue/10 text-xs font-bold text-nbm-blue"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  Trusted by over <strong className="text-gray-800">500,000+</strong>{' '}
                  customers across Malawi
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Bank-level security', 'Fast onboarding', '24/7 digital access'].map(
                  (pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-nbm-blue/15 bg-white px-3 py-1 text-xs font-semibold text-nbm-blue"
                    >
                      {pill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Exchange rates card */}
            <div className="w-full lg:w-[44%]">
              <div className="relative mx-auto max-w-md">
                <div
                  className="absolute -left-8 -top-8 h-64 w-64 animate-pulse rounded-full bg-nbm-blue/10 blur-3xl"
                  aria-hidden
                />
                <div className="relative z-10 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[var(--shadow-card)]">
                <img
                  src="/real/hero.jpg"
                  alt="NBM digital banking experience"
                  className="h-44 w-full object-cover"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/real/news1.jpg'
                  }}
                  />
                  <div className="border-b border-gray-100 bg-gradient-to-r from-nbm-blue to-nbm-blue-light px-6 py-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Foreign Exchange Rates</h3>
                        <p className="mt-0.5 text-xs text-white/75">
                          1 June 2026 · 08:55 CAT
                        </p>
                      </div>
                      <button
                        type="button"
                        className="rounded-lg bg-white/15 p-2 transition hover:bg-white/25"
                        aria-label="Refresh rates"
                      >
                        <RefreshCw className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-50 p-2">
                    {Object.entries(exchangeRates).map(([currency, rates]) => (
                      <div
                        key={currency}
                        className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 transition hover:bg-nbm-blue-50"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nbm-blue/10 text-xs font-bold text-nbm-blue">
                            {currency}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{currency}/MWK</p>
                            <p className="text-xs text-gray-400">Indicative</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-mono text-sm font-medium text-gray-800">
                            {rates.buying.toFixed(2)}
                          </p>
                          <p className="font-mono text-xs text-gray-500">
                            Sell {rates.selling.toFixed(2)}
                          </p>
                          <p
                            className={`text-xs font-medium ${
                              rates.change.startsWith('+') ? 'text-nbm-blue' : 'text-red-500'
                            }`}
                          >
                            {rates.change}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#rates"
                    className="flex w-full items-center justify-center gap-1 border-t border-gray-100 py-4 text-sm font-semibold text-nbm-blue transition hover:gap-2 no-underline"
                  >
                    More foreign exchange details
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium differentiator band */}
      <section className="bg-[#050b1a] px-4 py-16 text-white sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nbm-blue-accent-light">
                Built To Lead
              </p>
              <h2 className="mt-2 max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl">
                A modern banking experience designed to outclass ordinary bank websites
              </h2>
            </div>
            <a
              href="#open"
              aria-label="Start opening an account"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#050b1a] no-underline transition hover:bg-nbm-blue-accent-light"
            >
              Start your journey <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {standoutFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-nbm-blue-accent/50 hover:bg-white/10"
              >
                <p className="mb-3 text-xs font-bold text-nbm-blue-accent-light">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{feature.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reference rate banner */}
      <div className="border-y border-nbm-blue-accent/30 bg-gradient-to-r from-nbm-blue-accent/15 to-nbm-blue-50 px-4 py-4 sm:px-6">
        <div className="container mx-auto flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-700">
            <strong className="text-nbm-blue-dark">April 2026 Reference Rate:</strong>{' '}
            revised to <strong>20.80%</strong> effective 7 April (prev. 22.40%).
          </p>
          <a
            href="#rates"
            className="text-sm font-semibold text-nbm-blue no-underline hover:underline"
          >
            Read more →
          </a>
        </div>
      </div>

      {/* Stats */}
      <section className="border-b border-gray-100 bg-white py-14 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: '500K+', label: 'Active Customers', icon: Users },
              { value: 'MWK 2.5B+', label: 'Loans Disbursed', icon: Wallet },
              { value: '49+', label: 'Service Centres', icon: Building2 },
              { value: '24/7', label: 'Customer Support', icon: Headphones },
            ].map((stat) => (
              <div key={stat.label} className="group text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-nbm-blue/10 text-nbm-blue transition group-hover:scale-110 group-hover:bg-nbm-blue group-hover:text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking pillars */}
      <section className="bg-nbm-blue-dark px-4 py-16 text-white sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold lg:text-3xl">How we serve you</h2>
            <p className="mt-2 text-white/70">Comprehensive banking for every need</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bankingPillars.map((pillar) => (
              <a
                key={pillar.title}
                href="#"
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-nbm-blue-accent/50 hover:bg-white/10 no-underline"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/20 transition group-hover:scale-105">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-full w-full bg-white p-1 object-contain"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = '/real/personal.png'
                    }}
                  />
                </div>
                <h3 className="font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{pillar.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-nbm-blue-accent-light group-hover:gap-2">
                  Explore <ChevronRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Products to power your financial life
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              From everyday banking to business solutions, we&apos;ve got you covered.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                image: '/real/card-a.jpg',
                title: 'Mortgages',
                desc: 'Own your dream home',
                gradient: 'from-nbm-blue to-nbm-blue-light',
                rate: 'From 12.5%',
              },
              {
                image: '/real/card-b.jpg',
                title: 'Business Loans',
                desc: 'Grow your enterprise',
                gradient: 'from-nbm-blue-dark to-nbm-blue',
                rate: 'From 14%',
              },
              {
                image: '/real/card-c.jpg',
                title: 'Credit Cards',
                desc: 'Rewards & benefits',
                gradient: 'from-nbm-blue to-nbm-blue-light',
                rate: 'From 18%',
              },
              {
                image: '/real/card-d.jpg',
                title: 'Investment Plans',
                desc: 'Build your wealth',
                gradient: 'from-nbm-blue-light to-nbm-blue-accent',
                rate: 'Up to 15%',
              },
            ].map((product) => (
              <div
                key={product.title}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = '/real/card-a.jpg'
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-45`} />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{product.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.desc}</p>
                  <p className="mt-2 text-xs font-bold text-nbm-blue">{product.rate}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-nbm-blue transition group-hover:gap-2">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile app */}
      <section id="app" className="relative overflow-hidden bg-gradient-to-br from-nbm-blue-dark via-nbm-blue to-nbm-blue-light px-4 py-20 text-white sm:px-6">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_50%,rgba(96,165,250,0.18),transparent_60%)]"
          aria-hidden
        />
        <div className="container relative mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                <Smartphone className="h-4 w-4 text-nbm-blue-accent-light" />
                Mo626 Digital+ Mobile App
              </div>
              <h2 className="text-3xl font-bold lg:text-4xl">Banking at your fingertips</h2>
              <p className="text-lg text-white/80">
                Download Mo626 Digital+ for seamless transactions, bill pay, and account
                management — plus BankNet 360 on the web.
              </p>
              <ul className="space-y-3">
                {[
                  'Instant money transfers',
                  'Bill payments & airtime',
                  'Check account balance',
                  'Loan applications',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-nbm-blue-accent-light" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-xl bg-gray-900 px-5 py-3 transition hover:bg-black"
                >
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase opacity-80">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-5 py-3 backdrop-blur transition hover:bg-white/20"
                >
                  <Smartphone className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase opacity-80">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-72 overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur">
                <img
                  src="/real/mobile.jpg"
                  alt="NBM mobile banking app"
                  className="h-[28rem] w-full rounded-[1.25rem] object-cover"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/real/hero.jpg'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="px-4 py-20 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
              <p className="mt-2 text-gray-500">Stay updated with NBM announcements</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1 self-start rounded-lg border border-nbm-blue/30 px-4 py-2 text-sm font-semibold text-nbm-blue transition hover:bg-nbm-blue hover:text-white no-underline sm:self-auto"
            >
              View All News <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mb-4 flex items-center justify-between rounded-xl border border-nbm-blue/15 bg-nbm-blue-50/50 px-4 py-2">
            <p className="text-xs font-medium text-gray-600">
              News images rotate automatically for quick scanning.
            </p>
            <button
              type="button"
              onClick={() => setAutoRotateNews((prev) => !prev)}
              className="rounded-md border border-nbm-blue/25 bg-white px-3 py-1 text-xs font-semibold text-nbm-blue transition hover:bg-nbm-blue hover:text-white"
              aria-pressed={autoRotateNews}
            >
              {autoRotateNews ? 'Pause rotation' : 'Resume rotation'}
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {latestNews.map((news, idx) => (
              <article
                key={news.title}
                className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-nbm-blue/20 hover:shadow-[var(--shadow-card-hover)]"
              >
                <img
                  src={newsImages[(newsImageTick + idx) % newsImages.length]}
                  alt={news.title}
                  className="mb-4 h-32 w-full rounded-xl object-cover transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = '/real/news1.jpg'
                  }}
                />
                <div className="text-xs font-bold uppercase tracking-wide text-nbm-blue-accent">
                  {news.category}
                </div>
                <h3 className="mt-2 font-bold leading-snug text-gray-900 transition group-hover:text-nbm-blue">
                  {news.title}
                </h3>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {news.date}
                  </span>
                  <span>{news.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Payments CTA */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6">
        <div className="container mx-auto">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-nbm-blue to-nbm-blue-light p-8 text-white lg:col-span-2">
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"
                aria-hidden
              />
              <h3 className="relative text-2xl font-bold">Make Payments Anywhere, Anytime</h3>
              <p className="relative mt-2 max-w-md text-white/85">
                Pay bills, buy airtime, and transfer money instantly using Mo626 Digital+ and
                BankNet 360.
              </p>
              <div className="relative mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-2.5 font-semibold text-nbm-blue transition hover:bg-nbm-blue-50"
                >
                  Make Payment <Send className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="rounded-xl border border-white/40 px-6 py-2.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              {[
                {
                  icon: Percent,
                  title: 'Competitive Rates',
                  desc: 'Best exchange rates',
                  bg: 'bg-nbm-blue/10',
                  color: 'text-nbm-blue',
                },
                {
                  icon: Lock,
                  title: 'Secure Transactions',
                  desc: 'Bank-grade encryption',
                  bg: 'bg-nbm-blue-50',
                  color: 'text-nbm-blue',
                },
                {
                  icon: Clock,
                  title: '24/7 Access',
                  desc: 'Bank anytime',
                  bg: 'bg-nbm-blue-50',
                  color: 'text-nbm-blue',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${item.bg}`}
                  >
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 sm:px-6">
        <div className="container mx-auto rounded-3xl bg-gradient-to-r from-nbm-blue-50 via-white to-nbm-blue-50 px-8 py-16 text-center ring-1 ring-nbm-blue/10">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to experience banking differently?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-gray-500">
            Join over 500,000 Malawians who trust National Bank of Malawi.
          </p>
          <a
            href="#open"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-nbm-blue px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105 hover:bg-nbm-blue-light hover:shadow-xl no-underline"
          >
            Open an Account Today <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-nbm-blue-dark px-4 py-14 text-gray-400 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <LogoMark size="sm" />
                <span className="font-semibold leading-tight text-white">
                  National Bank
                  <br />
                  of Malawi plc
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                Your privacy matters.{' '}
                <a href="#privacy" className="text-nbm-blue-accent-light hover:underline">
                  Read our Privacy Policy
                </a>
                .
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['About Us', 'Contact Us', 'Media', 'Publications'].map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-nbm-blue-accent-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Digital Banking</h4>
              <ul className="space-y-2 text-sm">
                {['Internet Banking', 'Mo626 Digital+', 'BankNet 360', 'e-Services'].map(
                  (link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-nbm-blue-accent-light">
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-nbm-blue-accent" />
                  (265) 111 820 622
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-nbm-blue-accent" />
                  service@nbm.mw
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-nbm-blue-accent" />
                  NBM Towers, 7 Henderson Street, Blantyre
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-xs text-white/50">
            <p>
              &copy; {new Date().getFullYear()} National Bank of Malawi plc. All rights
              reserved. Design mockup — not the official website.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function OpenAccountPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <LogoMark />
            <div className="hidden sm:block">
              <span className="text-base font-bold leading-tight text-gray-900">
                National Bank
              </span>
              <span className="block text-xs font-medium text-nbm-blue">
                of Malawi plc · The bank of the Nation
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-nbm-blue hover:text-nbm-blue no-underline"
            >
              Back to Home
            </Link>
            <a
              href="#contact"
              className="rounded-full bg-nbm-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-nbm-blue-light no-underline"
            >
              Contact us
            </a>
          </div>
        </div>
      </header>

      <main className="px-4 pb-20 pt-10 sm:px-6">
        <div className="container mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-nbm-blue">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-gray-300">
                /
              </li>
              <li className="font-semibold text-gray-700">Open Account</li>
            </ol>
          </nav>

          <section className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-nbm-blue-dark via-nbm-blue to-nbm-blue-light text-white ring-1 ring-white/10">
            <div className="grid gap-10 px-8 py-12 lg:grid-cols-[1.25fr_0.75fr] lg:px-12">
              <div className="space-y-5">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                  Trade Finance Service
                </p>
                <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                  Open Account
                </h1>
                <p className="max-w-2xl text-lg text-white/85">
                  A payment arrangement for importers and traders to pay foreign suppliers for
                  goods received directly, after presenting exchange control documentation.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-nbm-blue-dark shadow-sm transition hover:bg-nbm-blue-50 no-underline"
                  >
                    How it works <ChevronRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 no-underline"
                  >
                    View pricing <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <aside className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
                <h2 className="text-base font-bold">At a glance</h2>
                <dl className="mt-4 space-y-4 text-sm text-white/85">
                  <div className="flex items-start justify-between gap-6">
                    <dt className="text-white/70">Target market</dt>
                    <dd className="text-right font-semibold">Importers &amp; traders</dd>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <dt className="text-white/70">Key requirement</dt>
                    <dd className="text-right font-semibold">Exchange control documents</dd>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <dt className="text-white/70">Payment basis</dt>
                    <dd className="text-right font-semibold">Customer obligation</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </section>

          <section className="mt-14 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">What is it?</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                An open account payment is used for making payment to a foreign supplier for
                goods which have been received directly from the supplier, without bank
                engagement in the shipment.
              </p>
            </article>
            <article
              id="how-it-works"
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-bold text-gray-900">How does it work?</h2>
              <ol className="mt-4 space-y-3 text-sm text-gray-600">
                {[
                  'Customer receives goods directly from the foreign supplier.',
                  'Customer presents exchange control documents to the bank.',
                  'Bank facilitates payment to the foreign supplier.',
                ].map((step) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-nbm-blue/10 text-xs font-extrabold text-nbm-blue">
                      {step.startsWith('Customer receives') ? '1' : step.startsWith('Customer presents') ? '2' : '3'}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
            <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900">Benefits</h2>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                {[
                  'Customer keeps full control of the payment decision.',
                  'Straightforward documentation-based processing.',
                  'Suitable for established supplier relationships.',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-nbm-blue" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section id="pricing" className="mt-14">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">Pricing</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Indicative fees based on the legacy NBM “Open Account” service page.
                </p>
              </div>
              <div className="rounded-xl border border-nbm-blue/15 bg-nbm-blue-50/60 px-4 py-3 text-xs text-gray-700">
                Fees may change. Confirm the latest charges with NBM before transacting.
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Commission', value: '1% (min MWK 6,900 · max MWK 31,800)' },
                { label: 'EC Application Charge', value: 'MWK 5,220' },
                { label: 'SWIFT (fixed)', value: 'MWK 21,050' },
                { label: 'Stamp Duty', value: 'MWK 1.00' },
              ].map((fee) => (
                <div
                  key={fee.label}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <div className="text-xs font-bold uppercase tracking-wide text-nbm-blue-accent">
                    {fee.label}
                  </div>
                  <div className="mt-3 text-lg font-extrabold text-gray-900">
                    {fee.value}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-nbm-blue-50 via-white to-nbm-blue-50 px-8 py-12 ring-1 ring-nbm-blue/10"
          >
            <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  Need help with Open Account payments?
                </h2>
                <p className="mt-2 max-w-2xl text-gray-600">
                  Talk to our Trade Finance team about documentation, processing timelines, and
                  applicable fees for your transaction.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+265111820622"
                    className="inline-flex items-center gap-2 rounded-xl bg-nbm-blue px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-nbm-blue-light no-underline"
                  >
                    <Phone className="h-4 w-4" />
                    Call (265) 111 820 622
                  </a>
                  <a
                    href="mailto:service@nbm.mw"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-nbm-blue hover:text-nbm-blue no-underline"
                  >
                    <Mail className="h-4 w-4" />
                    Email service@nbm.mw
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900">What to prepare</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  {[
                    'Supplier invoice & goods details',
                    'Exchange control documentation',
                    'Beneficiary banking information (SWIFT, etc.)',
                    'Your NBM account details',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-nbm-blue/10 text-[11px] font-extrabold text-nbm-blue">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/open-account" element={<OpenAccountPage />} />
    </Routes>
  )
}
