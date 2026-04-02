import { useState } from 'react'

const PHONE = '(604) 783-7296'
const PHONE_HREF = 'tel:+16047837296'
const EMAIL = 'calmacc@gmail.com'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-900/30">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          {/* Stethoscope SVG icon */}
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            {/* Stethoscope earpiece left */}
            <circle cx="10" cy="7" r="3" stroke="#dc2626" strokeWidth="2" fill="none"/>
            {/* Stethoscope earpiece right */}
            <circle cx="34" cy="7" r="3" stroke="#dc2626" strokeWidth="2" fill="none"/>
            {/* Headset arc */}
            <path d="M10 10 C10 18 14 22 22 22 C30 22 34 18 34 10" stroke="#dc2626" strokeWidth="2" fill="none" strokeLinecap="round"/>
            {/* Tube down */}
            <path d="M22 22 L22 33" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
            {/* Chest piece circle */}
            <circle cx="22" cy="37" r="4" stroke="#dc2626" strokeWidth="2" fill="#dc2626" fillOpacity="0.15"/>
            <circle cx="22" cy="37" r="1.5" fill="#dc2626"/>
          </svg>
          <div className="leading-tight">
            <div className="font-black text-white text-base sm:text-lg tracking-tight uppercase">Doctor Dave</div>
            <div className="text-red-400 font-semibold text-[10px] sm:text-xs uppercase tracking-widest">Computer Remedies</div>
            <div className="text-gray-600 text-[9px] hidden sm:block">www.doctordave.com</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#services" className="hover:text-red-400 transition-colors">Services</a>
          <a href="#trust" className="hover:text-red-400 transition-colors">Reviews</a>
          <a href="#pricing" className="hover:text-red-400 transition-colors">Pricing</a>
          <a href="#booking" className="hover:text-red-400 transition-colors">Book</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all glow-red-sm"
          >
            <PhoneIcon className="w-4 h-4" />
            Call Now
          </a>
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-red-900/30 px-4 py-4 flex flex-col gap-4 text-sm">
          {['#services','#trust','#pricing','#booking'].map((href, i) => (
            <a
              key={href}
              href={href}
              className="text-gray-300 hover:text-red-400 transition-colors capitalize"
              onClick={() => setOpen(false)}
            >
              {['Services','Reviews','Pricing','Book a Service'][i]}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 bg-red-600 text-white font-semibold px-4 py-2 rounded-full w-fit"
          >
            <PhoneIcon className="w-4 h-4" />
            {PHONE}
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-900/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-800/50 text-red-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Same-Day Service Available
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          Your Computer's{' '}
          <span className="text-red-500 text-glow">On-Call</span>
          <br />
          Doctor
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Fast, friendly, and reliable IT support for homes and small businesses.
          Virus removal, repairs, networking — we come to <em className="text-gray-300 not-italic">you</em>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#booking"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-full transition-all glow-red"
          >
            Book a Service Call
            <ArrowRightIcon className="w-5 h-5" />
          </a>
          <a
            href={PHONE_HREF}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-red-700/60 hover:border-red-500 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all hover:bg-red-950/30"
          >
            <PhoneIcon className="w-5 h-5 text-red-400" />
            {PHONE}
          </a>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          {[
            { icon: <StarIcon className="w-4 h-4 text-yellow-400" />, label: '5-Star Rated' },
            { icon: <ShieldIcon className="w-4 h-4 text-green-400" />, label: '10+ Years Experience' },
            { icon: <MapPinIcon className="w-4 h-4 text-red-400" />, label: 'Vancouver & Toronto' },
            { icon: <ClockIcon className="w-4 h-4 text-blue-400" />, label: 'Same-Day Appointments' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              {icon}
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: <BugIcon />,
    title: 'Virus & Malware Removal',
    desc: 'Complete system cleanup, spyware elimination, and security hardening so you\'re protected going forward.',
    tag: 'Most Popular',
  },
  {
    icon: <WrenchIcon />,
    title: 'Hardware Repair',
    desc: 'Screen replacements, battery swaps, keyboard repairs, and component upgrades for laptops and desktops.',
  },
  {
    icon: <SpeedIcon />,
    title: 'Performance Tune-Up',
    desc: 'Slow machine? We diagnose and fix bottlenecks — startup optimization, storage cleanup, RAM upgrades.',
  },
  {
    icon: <WifiIcon />,
    title: 'Network & Wi-Fi Setup',
    desc: 'Home and office network configuration, router setup, Wi-Fi dead zones, and secure network hardening.',
  },
  {
    icon: <DataIcon />,
    title: 'Data Recovery',
    desc: 'Lost files? Crashed hard drive? We recover your precious photos, documents, and business data.',
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud & Backup Setup',
    desc: 'Configure automated backups and cloud sync so you never lose important data again.',
  },
  {
    icon: <PrinterIcon />,
    title: 'Printer & Peripheral Setup',
    desc: 'Printers, scanners, webcams — we get your devices connected and working seamlessly.',
  },
  {
    icon: <SupportIcon />,
    title: 'Ongoing IT Support',
    desc: 'Monthly support plans for small businesses. Your own IT department without the overhead.',
  },
]

function Services() {
  return (
    <section id="services" className="py-24 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          eyebrow="What We Fix"
          title="Every Computer Problem, Solved"
          subtitle="From a sluggish laptop to a crashed server — Dr Dave handles it all, on-site at your home or office."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="relative bg-zinc-900/70 rounded-2xl p-6 border border-zinc-800 card-glow transition-all duration-300 group cursor-default"
            >
              {svc.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-bold bg-red-600/20 text-red-400 border border-red-700/40 px-2 py-0.5 rounded-full">
                  {svc.tag}
                </span>
              )}
              <div className="w-10 h-10 bg-red-950/50 border border-red-900/40 rounded-xl flex items-center justify-center text-red-400 mb-4 group-hover:bg-red-900/40 transition-colors">
                {svc.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2">{svc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Vancouver, BC',
    stars: 5,
    text: 'Dave showed up within hours and had my laptop running like new. Honest pricing, no upsells. Highly recommend!',
  },
  {
    name: 'James T.',
    location: 'Toronto, ON',
    stars: 5,
    text: 'Got a ransomware attack on my business PC. Dave recovered everything and set up proper backups. An absolute lifesaver.',
  },
  {
    name: 'Linda K.',
    location: 'Vancouver, BC',
    stars: 5,
    text: 'Super patient explaining everything in plain English. Fixed my Wi-Fi dead zones and set up my printer in one visit.',
  },
  {
    name: 'Mike R.',
    location: 'Toronto, ON',
    stars: 5,
    text: 'My old computer was painfully slow. Dave upgraded the RAM and SSD — it feels brand new. Worth every penny.',
  },
  {
    name: 'Chen W.',
    location: 'Vancouver, BC',
    stars: 5,
    text: 'Called at 8pm about a dead hard drive with irreplaceable family photos. Dave came same evening and recovered them all.',
  },
  {
    name: 'Priya S.',
    location: 'Toronto, ON',
    stars: 5,
    text: 'Our small office now has an ongoing support plan with Dr Dave. It\'s like having an IT department at a fraction of the cost.',
  },
]

function Trust() {
  return (
    <section id="trust" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <SectionHeader
          eyebrow="Social Proof"
          title="Trusted by Hundreds of Happy Clients"
          subtitle="Real customers. Real results."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 mb-16">
          {[
            { value: '500+', label: 'Devices Repaired' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '10+', label: 'Years Experience' },
            { value: 'Same Day', label: 'Service Available' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-center">
              <div className="text-2xl sm:text-3xl font-black text-red-400 mb-1">{value}</div>
              <div className="text-gray-500 text-sm">{label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 card-glow transition-all duration-300">
              <div className="flex gap-1 mb-3">
                {Array(r.stars).fill(0).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-900/40 border border-red-800/40 flex items-center justify-center text-red-400 text-xs font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{r.name}</div>
                  <div className="text-gray-600 text-xs">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#080808]">
      <div className="max-w-2xl mx-auto px-4">
        <SectionHeader
          eyebrow="Transparent Pricing"
          title="No Surprises, No Hidden Fees"
          subtitle="Simple, honest hourly rate. You only pay for the time it takes."
        />

        <div className="mt-12 flex justify-center">
          <div className="w-full bg-red-950/30 border border-red-600/50 rounded-2xl p-10 glow-red text-center">
            <div className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">Hourly Rate</div>
            <div className="flex items-end justify-center gap-2 mb-3">
              <span className="text-7xl font-black text-white">$125</span>
              <span className="text-gray-400 text-xl mb-3">/hour</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
              All services billed at a single flat rate — no call-out fees, no hidden charges. You know exactly what you're paying from the start.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-10 max-w-sm mx-auto">
              {[
                'On-site home & office visits',
                'All services included',
                'No call-out fees',
                'Same-day availability',
                'Honest time estimates upfront',
                'Pay only for time used',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckIcon className="w-4 h-4 text-red-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#booking"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-10 py-4 rounded-full transition-all glow-red-sm text-base"
            >
              Book a Service Call
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          Questions about pricing? <a href={PHONE_HREF} className="text-red-400 hover:text-red-300 underline underline-offset-2">Call or text us</a> — free estimate, no obligation.
        </p>
      </div>
    </section>
  )
}

function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '', time: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="booking" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-800/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <SectionHeader
          eyebrow="Get Help Today"
          title="Book Your Service Call"
          subtitle="Fill out the form and Dr Dave will contact you within the hour."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <ContactBlock icon={<PhoneIcon className="w-5 h-5 text-red-400" />} title="Phone / Text">
              <a href={PHONE_HREF} className="text-white hover:text-red-400 transition-colors font-semibold">{PHONE}</a>
              <p className="text-gray-500 text-xs mt-0.5">Available Mon–Sat, 8am–8pm</p>
            </ContactBlock>

            <ContactBlock icon={<MailIcon className="w-5 h-5 text-red-400" />} title="Email">
              <a href={`mailto:${EMAIL}`} className="text-white hover:text-red-400 transition-colors font-semibold break-all">{EMAIL}</a>
              <p className="text-gray-500 text-xs mt-0.5">Usually reply within 30 min</p>
            </ContactBlock>

            <ContactBlock icon={<MapPinIcon className="w-5 h-5 text-red-400" />} title="Service Areas">
              <p className="text-white font-semibold">Vancouver, BC</p>
              <p className="text-white font-semibold">Toronto, ON</p>
              <p className="text-gray-500 text-xs mt-0.5">On-site home & office visits</p>
            </ContactBlock>

            <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-4">
              <p className="text-red-300 text-sm font-semibold mb-1">⚡ Need help right now?</p>
              <p className="text-gray-400 text-sm">Call or text for immediate assistance. Same-day appointments often available.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="bg-zinc-900/60 border border-green-800/40 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-900/30 border border-green-700/40 rounded-full flex items-center justify-center text-green-400 text-3xl mb-4">✓</div>
                <h3 className="text-white text-xl font-bold mb-2">Request Received!</h3>
                <p className="text-gray-400">Dr Dave will be in touch within the hour. Check your phone!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-7 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Your Name" name="name" placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
                  <FormField label="Phone Number" name="phone" type="tel" placeholder="(604) 555-0000" value={form.phone} onChange={handleChange} required />
                </div>
                <FormField label="Email Address" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} />
                <div>
                  <label className="block text-sm text-gray-400 font-medium mb-1.5">Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-800 border border-zinc-700 focus:border-red-600 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a service…</option>
                    {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                    <option value="Not sure">Not sure / Need diagnosis</option>
                  </select>
                </div>
                <FormField
                  label="Preferred Time"
                  name="time"
                  placeholder="e.g. Tomorrow morning, weekday afternoons…"
                  value={form.time}
                  onChange={handleChange}
                />
                <div>
                  <label className="block text-sm text-gray-400 font-medium mb-1.5">Describe the Problem</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="What's happening with your device? The more detail, the better."
                    className="w-full bg-zinc-800 border border-zinc-700 focus:border-red-600 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none placeholder-gray-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 rounded-full transition-all glow-red-sm text-base"
                >
                  Send Booking Request
                </button>
                <p className="text-gray-600 text-xs text-center">We'll confirm your appointment within 1 hour.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-zinc-900 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-xs">Rx</div>
          <div>
            <span className="text-white font-bold text-sm">Dr Dave Computer Remedies</span>
            <p className="text-gray-600 text-xs">Vancouver & Toronto · {new Date().getFullYear()}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#services" className="hover:text-gray-400 transition-colors">Services</a>
          <a href="#pricing" className="hover:text-gray-400 transition-colors">Pricing</a>
          <a href="#booking" className="hover:text-gray-400 transition-colors">Contact</a>
          <a href={PHONE_HREF} className="text-red-500 hover:text-red-400 transition-colors font-semibold">{PHONE}</a>
        </div>
      </div>
    </footer>
  )
}

// Mobile sticky CTA bar
function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-black/95 border-t border-red-900/40 backdrop-blur-md p-3 flex gap-3">
      <a
        href={PHONE_HREF}
        className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-full transition-all text-sm"
      >
        <PhoneIcon className="w-4 h-4" />
        Call Now
      </a>
      <a
        href="#booking"
        className="flex-1 flex items-center justify-center gap-2 border border-red-700/60 text-white font-semibold py-3 rounded-full transition-all text-sm hover:bg-red-950/30"
      >
        <CalendarIcon className="w-4 h-4 text-red-400" />
        Book Online
      </a>
    </div>
  )
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="inline-block text-red-500 text-xs font-bold uppercase tracking-widest mb-3 bg-red-950/40 border border-red-900/40 px-3 py-1 rounded-full">
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{title}</h2>
      <p className="text-gray-400 leading-relaxed">{subtitle}</p>
    </div>
  )
}

function FormField({ label, name, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="block text-sm text-gray-400 font-medium mb-1.5">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-zinc-800 border border-zinc-700 focus:border-red-600 text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors placeholder-gray-600"
      />
    </div>
  )
}

function ContactBlock({ icon, title, children }) {
  return (
    <div className="flex gap-3">
      <div className="w-10 h-10 bg-red-950/40 border border-red-900/30 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <div className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1">{title}</div>
        {children}
      </div>
    </div>
  )
}

// ─── SVG Icons ───────────────────────────────────────────────────────────────

function PhoneIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function ShieldIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function MapPinIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function ClockIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function MenuIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

function XIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function MailIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function CalendarIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  )
}

function BugIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c-2.21 0-4-1.79-4-4V6a4 4 0 018 0v2c0 2.21-1.79 4-4 4zm0 0v8m-4-6H4m16 0h-4M6.34 6.34L4 4m13.66 2.34L20 4M6.34 17.66L4 20m13.66-2.34L20 20" />
    </svg>
  )
}

function WrenchIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  )
}

function SpeedIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  )
}

function WifiIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  )
}

function DataIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  )
}

function CloudIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  )
}

function PrinterIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
    </svg>
  )
}

function SupportIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Trust />
      <Pricing />
      <Booking />
      <Footer />
      <StickyBar />
    </div>
  )
}
