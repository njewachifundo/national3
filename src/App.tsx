import { useState } from 'react'
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
} from 'lucide-react'

const colors = {
  ink: '#171717',
  charcoal: '#28231F',
  muted: '#686159',
  line: '#DED7CE',
  paper: '#F5F1EA',
  ivory: '#FFFDF8',
  white: '#FFFFFF',
  oxblood: '#8D241F',
  copper: '#9C6334',
  gold: '#C39A45',
  forest: '#2F5946',
  mist: '#E9F0EA',
}

const customerSegments = [
  {
    image: '/real/card-a.jpg',
    label: 'Personal banking',
    title: 'Accounts, cards, and loans for everyday life',
    text: 'Clear pathways for opening accounts, borrowing, card services, and digital banking.',
    icon: PiggyBank,
  },
  {
    image: '/real/card-d.jpg',
    label: 'Corporate banking',
    title: 'Finance and support for growing businesses',
    text: 'Facilities for SMEs, corporates, working capital, guarantees, and trade.',
    icon: BriefcaseBusiness,
  },
  {
    image: '/real/card-b.jpg',
    label: 'International',
    title: 'Treasury, forex, and cross-border services',
    text: 'Foreign exchange, MoneyGram, custody, diaspora, and international trade support.',
    icon: Globe2,
  },
]

const bannerPictures = [
  { image: '/real/hero.jpg' },
  { image: '/real/mobile.jpg' },
  { image: '/real/card-c.jpg' },
]

const quickActions = [
  { icon: MousePointer2, title: 'Open account', text: 'Start an account application.' },
  { icon: Calculator, title: 'Loan calculator', text: 'Estimate repayments.' },
  { icon: Download, title: 'Forms', text: 'Download banking forms.' },
  { icon: Search, title: 'Rates', text: 'View tariffs and forex.' },
]

const productGroups = [
  {
    title: 'Banking',
    icon: PiggyBank,
    links: ['Savings Account', 'Current Account', 'Student Serve Account', 'Diaspora Account'],
  },
  {
    title: 'Borrowing',
    icon: Banknote,
    links: ['Consumer Loans', 'Pay-Day Loan', 'Mortgage Finance', 'Asset Based Financing'],
  },
  {
    title: 'Cards and payments',
    icon: CreditCard,
    links: ['Visa Cards', 'Contactless Cards', 'Cash Passport', 'Mo626Pay'],
  },
  {
    title: 'Digital services',
    icon: Smartphone,
    links: ['Mo626 Digital+', 'Mo626ice', 'BankNet360', 'Cardless Withdrawal'],
  },
]

const supportLinks = [
  { icon: LockKeyhole, title: 'Security centre', text: 'Protect your account and digital access.' },
  { icon: Phone, title: 'Contact support', text: 'Get help with accounts, cards, and services.' },
  { icon: FileText, title: 'Statements', text: 'Access balances, statements, and service requests.' },
  { icon: ReceiptText, title: 'Bills and tax', text: 'Pay utilities, airtime, merchants, and selected public services.' },
]

const languages = ['English', 'Chichewa', 'Tumbuka']

function LanguageSelector({ dark = false }: { dark?: boolean }) {
  const [language, setLanguage] = useState('English')

  return (
    <label
      className={`flex items-center gap-2 border px-3 py-2 ${dark ? 'bg-transparent' : 'bg-white'}`}
      style={{ borderColor: dark ? 'rgba(255,255,255,0.3)' : colors.line }}
    >
      <Globe2 className="h-4 w-4" style={{ color: dark ? colors.gold : colors.oxblood }} />
      <span className="sr-only">Select language</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
        className="bg-transparent text-sm font-black outline-none"
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
          ${dark ? 'bg-transparent' : 'bg-[#8D241F]'}
        `}
        style={{
          width: dark ? '320px' : '300px',
          height: dark ? '90px' : '80px',
          border: dark
            ? '1px solid rgba(255,255,255,0.22)'
            : '1px solid rgba(141,36,31,0.1)',
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
              style={{ color: dark ? colors.gold : colors.white }}
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

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()
    alert(`Login attempt with: ${credential}`)
    setCredential('')
    setLoginOpen(false)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.ivory, color: colors.ink, fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800;14..32,900&display=swap');

        .soft-hover {
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .soft-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 42px rgba(23, 23, 23, 0.12);
        }
      `}</style>

      <header className="sticky top-0 z-50 bg-white">
        <div className="border-b text-xs font-black" style={{ borderColor: colors.line, color: colors.muted }}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5">
            <div className="hidden items-center gap-6 md:flex">
              {['Personal', 'SME', 'Corporate', 'Diaspora'].map((item) => (
                <button key={item}>{item}</button>
              ))}
            </div>
            <div className="flex items-center gap-5">
              <button>Branches</button>
              <button>Help</button>
              <button>Contact</button>
              <div className="hidden md:block">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {['Banking', 'Borrowing', 'Cards', 'Digital', 'Business'].map((item) => (
              <button key={item} className="border-b-2 border-transparent pb-1 text-sm font-black hover:border-[#8d241f]">
                {item}
              </button>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <button onClick={() => setLoginOpen(true)} className="border px-5 py-2.5 text-sm font-black" style={{ borderColor: colors.ink }}>
              Log in
            </button>
            <button className="px-5 py-2.5 text-sm font-black text-white" style={{ backgroundColor: colors.oxblood }}>
              Open account
            </button>
          </div>
          <button className="border bg-white p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" style={{ borderColor: colors.line }}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t bg-white px-5 py-4 lg:hidden" style={{ borderColor: colors.line }}>
            <div className="mb-3">
              <LanguageSelector />
            </div>
            {['Banking', 'Borrowing', 'Cards', 'Digital', 'Business', 'Log in'].map((item) => (
              <button
                key={item}
                className="block w-full border-b px-1 py-3 text-left font-black"
                style={{ borderColor: colors.line }}
                onClick={() => item === 'Log in' && setLoginOpen(true)}
              >
                {item}
              </button>

            ))}
          </div>
        )}
      </header>

      <main>
        <section className="text-white" style={{ backgroundColor: colors.charcoal }}>
          <div className="mx-auto max-w-7xl">
            <div className="flex min-h-[720px] flex-col justify-between px-5 py-8 md:px-8 lg:px-10">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                {/* <div className="w-fit bg-white p-3 shadow-2xl">
                  <Logo dark />
                </div> */}
                <LanguageSelector dark />
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
                <div className="max-w-xl">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.22em]" style={{ color: colors.gold }}>
                  National Bank of Malawi
                </p>
                <h1 className="text-4xl font-black leading-tight md:text-6xl">Banking built around people, business, and progress.</h1>
                <p className="mt-6 text-base leading-8 text-white/78 md:text-lg">
                  A stronger professional homepage with a dominant NBM logo, large banner photography, and simple customer pathways.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 bg-white px-5 py-3 font-black" style={{ color: colors.ink }}>
                    Explore services <ArrowRight className="h-4 w-4" />
                  </button>
                  <button onClick={() => setLoginOpen(true)} className="border px-5 py-3 font-black text-white" style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
                    Log in
                  </button>
                </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="relative min-h-[430px] overflow-hidden">
                    <img src="/real/hero.jpg" alt="NBM banking banner" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/8 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: colors.gold }}>
                        Featured
                      </p>
                     
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {bannerPictures.slice(1).map((banner) => (
                      <article key={banner.image} className="relative min-h-[205px] overflow-hidden">
                        <img src={banner.image} className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/66 to-transparent" />
                        <h3 className="absolute bottom-0 left-0 p-5 text-xl font-black leading-tight">{banner.title}</h3>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3 border-t pt-5 sm:grid-cols-3" style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
                {['Personal', 'Corporate', 'International'].map((item) => (
                  <button key={item} className="border px-4 py-3 text-left text-sm font-black" style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-12">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {customerSegments.map((segment) => (
              <article key={segment.title} className="soft-hover overflow-hidden border bg-white" style={{ borderColor: colors.line }}>
                <img src={segment.image} alt={segment.label} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <segment.icon className="mb-6 h-7 w-7" style={{ color: colors.oxblood }} />
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.2em]" style={{ color: colors.oxblood }}>
                    {segment.label}
                  </p>
                  <h2 className="text-2xl font-black leading-tight">{segment.title}</h2>
                  <p className="mt-4 leading-7" style={{ color: colors.muted }}>
                    {segment.text}
                  </p>
                  <button className="mt-6 flex items-center gap-2 font-black" style={{ color: colors.oxblood }}>
                    Learn more <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b bg-white px-5 py-5" style={{ borderColor: colors.line }}>
          <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-4">
            {quickActions.map((action) => (
              <button key={action.title} className="soft-hover flex items-center justify-between border p-5 text-left" style={{ borderColor: colors.line }}>
                <span>
                  <span className="block text-lg font-black">{action.title}</span>
                  <span className="mt-1 block text-sm font-semibold" style={{ color: colors.muted }}>
                    {action.text}
                  </span>
                </span>
                <action.icon className="ml-4 h-6 w-6 shrink-0" style={{ color: colors.oxblood }} />
              </button>
            ))}
          </div>
        </section>

        <section className="px-5 py-18 md:py-20" style={{ backgroundColor: colors.paper }}>
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.48fr_0.52fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.22em]" style={{ color: colors.oxblood }}>
                  Product finder
                </p>
                <h2 className="text-4xl font-black leading-tight md:text-5xl">Choose the service you need, then move quickly.</h2>
              </div>
              <p className="max-w-2xl leading-8" style={{ color: colors.muted }}>
                The page now uses one clear product section instead of repeating the same banking categories in several places.
              </p>
            </div>

            <div className="grid gap-0 border-t border-l bg-white md:grid-cols-2 xl:grid-cols-4" style={{ borderColor: colors.line }}>
              {productGroups.map((group) => (
                <article key={group.title} className="border-r border-b p-6" style={{ borderColor: colors.line }}>
                  <group.icon className="mb-8 h-8 w-8" style={{ color: colors.copper }} />
                  <h3 className="text-2xl font-black">{group.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {group.links.map((item) => (
                      <li key={item} className="text-sm font-bold" style={{ color: colors.muted }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-18 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.22em]" style={{ color: colors.forest }}>
                Important update
              </p>
              <h2 className="text-4xl font-black leading-tight md:text-5xl">Card services and customer notices can live in a dedicated feature area.</h2>
              <p className="mt-5 leading-8" style={{ color: colors.muted }}>
                This keeps promotional content away from core banking navigation and gives announcements enough space to breathe.
              </p>
              <button className="mt-8 flex items-center gap-2 border px-5 py-3 font-black" style={{ borderColor: colors.ink }}>
                Read notice <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="border bg-white p-4" style={{ borderColor: colors.line }}>
              <img src="/real/news2.jpg" alt="MyFuel card services notice" className="h-full min-h-[320px] w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="px-5 py-18 md:py-20" style={{ backgroundColor: colors.mist }}>
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.22em]" style={{ color: colors.forest }}>
                Help and support
              </p>
              <h2 className="text-4xl font-black leading-tight md:text-5xl">Support customers before they get stuck.</h2>
              <p className="mt-5 leading-8" style={{ color: colors.muted }}>
                A single support area keeps security, contacts, statements, and bill payments visible without overloading the page.
              </p>
            </div>
            <div className="grid gap-0 border-t border-l bg-white md:grid-cols-2" style={{ borderColor: colors.line }}>
              {supportLinks.map((item) => (
                <article key={item.title} className="border-r border-b p-7" style={{ borderColor: colors.line }}>
                  <item.icon className="mb-8 h-7 w-7" style={{ color: colors.forest }} />
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7" style={{ color: colors.muted }}>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t px-5 py-10" style={{ borderColor: colors.line, backgroundColor: colors.ivory }}>
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_2fr_1fr]">
          <Logo />
          <div className="grid gap-4 text-sm sm:grid-cols-3" style={{ color: colors.muted }}>
            <div>
              <h4 className="mb-3 font-black" style={{ color: colors.ink }}>
                Banking
              </h4>
              <p>Accounts</p>
              <p>Loans</p>
              <p>Cards</p>
            </div>
            <div>
              <h4 className="mb-3 font-black" style={{ color: colors.ink }}>
                Digital
              </h4>
              <p>Mo626 Digital+</p>
              <p>Mo626ice</p>
              <p>BankNet360</p>
            </div>
            <div>
              <h4 className="mb-3 font-black" style={{ color: colors.ink }}>
                Support
              </h4>
              <p>Contacts</p>
              <p>Forms</p>
              <p>Rates & Tariffs</p>
            </div>
          </div>
          <p className="text-sm md:text-right" style={{ color: colors.muted }}>
            National Bank of Malawi plc. Copyright 2026. All rights reserved.
          </p>
        </div>
      </footer>

      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm" onClick={() => setLoginOpen(false)}>
          <div className="w-full max-w-md bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black">Log in</h2>
                <p className="text-sm" style={{ color: colors.muted }}>
                  Access your NBM digital services.
                </p>
              </div>
              <button onClick={() => setLoginOpen(false)} className="p-2 hover:bg-[#f5f1ea]" aria-label="Close login">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleLogin}>
              <label className="mb-2 block text-sm font-black">Phone, email, or customer ID</label>
              <input
                value={credential}
                onChange={(event) => setCredential(event.target.value)}
                className="mb-4 w-full border px-4 py-3 outline-none focus:ring-2"
                style={{ borderColor: colors.line, '--tw-ring-color': colors.oxblood } as React.CSSProperties}
                placeholder="Enter your details"
                required
              />
              <button type="submit" className="w-full px-5 py-3.5 font-black text-white" style={{ backgroundColor: colors.oxblood }}>
                Continue
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}