export default function PortfolioSite() {
  const projects = [
    {
      title: "Contractor & Remodeling Websites",
      description:
        "Modern trust-focused websites for contractors, remodelers, and home service professionals.",
      features: [
        "Quote request systems",
        "Project galleries",
        "Lead-focused layouts",
        "Mobile-first design",
      ],
      gradient: "from-stone-900 to-stone-700",
    },
    {
      title: "Automotive Service Websites",
      description:
        "High-conversion websites designed to generate more appointments and customer trust.",
      features: [
        "Appointment booking flows",
        "Modern service pages",
        "Local SEO structure",
        "Clear customer actions",
      ],
      gradient: "from-gray-900 to-gray-700",
    },
    {
      title: "Restaurant & Cafe Websites",
      description:
        "Clean restaurant websites optimized for menus, reservations, and mobile visitors.",
      features: [
        "Online menu systems",
        "Reservation CTAs",
        "Modern food presentation",
        "Fast mobile browsing",
      ],
      gradient: "from-orange-900 to-red-700",
    },
    {
      title: "Medical & Dental Websites",
      description:
        "Professional healthcare websites designed to build trust and simplify patient contact.",
      features: [
        "Professional layouts",
        "Patient inquiry forms",
        "Trust-focused branding",
        "Accessible mobile UX",
      ],
      gradient: "from-cyan-900 to-blue-700",
    },
    {
      title: "Legal & Consulting Websites",
      description:
        "Authority-focused websites for lawyers, consultants, and professional services.",
      features: [
        "Professional positioning",
        "Lead generation pages",
        "Trust-building structure",
        "Clean typography",
      ],
      gradient: "from-neutral-900 to-zinc-700",
    },
    {
      title: "Gym & Fitness Websites",
      description:
        "High-energy modern websites designed for gyms, trainers, and fitness brands.",
      features: [
        "Membership CTAs",
        "Class schedule sections",
        "Modern branding",
        "Mobile-first layouts",
      ],
      gradient: "from-green-900 to-emerald-700",
    },
  ];

  const services = [
    {
      title: "Website Redesigns",
      description: "Complete visual overhauls that modernize outdated business websites.",
    },
    {
      title: "Mobile Optimization",
      description: "Responsive layouts built to look polished across phones and tablets.",
    },
    {
      title: "Landing Pages",
      description: "High-conversion landing pages focused on generating more leads.",
    },
    {
      title: "Local SEO Structure",
      description: "Website structures designed to improve local search visibility.",
    },
    {
      title: "AI-Assisted Copywriting",
      description: "Professionally written website copy tailored to your business and audience.",
    },
    {
      title: "Fast Turnaround",
      description: "Quick concept development and streamlined redesign delivery.",
    },
    {
      title: "Restaurant Websites",
      description: "Modern restaurant websites with menus, reservations, and mobile-first browsing.",
    },
    {
      title: "Medical Office Websites",
      description: "Clean, trustworthy websites for clinics, dentists, and healthcare providers.",
    },
    {
      title: "Law Firm Websites",
      description: "Professional legal websites designed to establish authority and trust.",
    },
    {
      title: "Gym & Fitness Websites",
      description: "High-energy fitness websites with class schedules and membership calls-to-action.",
    },
    {
      title: "Real Estate Websites",
      description: "Property-focused websites optimized for listings, inquiries, and local branding.",
    },
    {
      title: "Home Service Websites",
      description: "Lead-focused websites for contractors, repair companies, and service professionals.",
    },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur px-6 py-4 md:px-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-bold text-xl">LocalLift Studio</div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("case-studies")}>Case Studies</button>
            <button onClick={() => scrollTo("audit")}>Free Audit</button>
          </div>

          <button
            onClick={() => scrollTo("audit-form-page")}
            className="px-5 py-3 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90 transition"
          >
            Contact
          </button>
        </div>
      </nav>

      <section id="hero" className="px-6 py-20 md:px-16 border-b">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-gray-100 text-sm mb-6">
              Professional Website Redesign Studio
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Modern Websites For Local Businesses
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We help local businesses transform outdated websites into modern, mobile-friendly experiences that increase trust, calls, and bookings.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("audit-form-page")}
                className="px-6 py-4 rounded-2xl bg-black text-white font-medium shadow-lg hover:scale-105 transition"
              >
                Get Free Website Audit
              </button>

              <button
                onClick={() => scrollTo("case-studies")}
                className="px-6 py-4 rounded-2xl border font-medium hover:bg-gray-50 transition"
              >
                View Case Studies
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden border shadow-2xl bg-white">
            <div className="px-6 py-4 border-b bg-gray-50 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  Live Concept Preview
                </div>
                <div className="font-semibold">
                  Modern Local Business Homepage
                </div>
              </div>

              <div className="text-sm font-medium text-green-600">
                Mobile Optimized
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-950 to-gray-800 text-white">
              <h3 className="text-4xl font-bold leading-tight mb-4">
                Websites That Turn Visitors Into Customers
              </h3>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Modern layouts designed to improve credibility, clarity, and customer engagement.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => scrollTo("audit-form-page")}
                  className="px-5 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:scale-105 transition"
                >
                  Request Quote
                </button>

                <button
                  onClick={() => scrollTo("services")}
                  className="px-5 py-3 rounded-xl border border-white/20 text-sm hover:bg-white/10 transition"
                >
                  View Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p className="text-gray-600 text-lg">
              Professional website upgrades built for modern local businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-3xl border bg-white hover:shadow-xl transition"
              >
                <div className="text-2xl font-semibold mb-3">
                  {service.title}
                </div>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="case-studies"
        className="px-6 py-20 md:px-16 bg-gray-50 border-y"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Case Studies</h2>

            <p className="text-gray-600 text-lg">
              Examples of modern website directions tailored to different industries and business goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-3xl overflow-hidden border shadow-sm hover:shadow-2xl transition"
              >
                <div
                  className={`h-56 bg-gradient-to-br ${project.gradient} p-6 text-white flex flex-col justify-between`}
                >
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/70 mb-2">
                      Concept Preview
                    </div>

                    <h3 className="text-2xl font-bold leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                      Mobile UX
                    </div>

                    <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                      Faster Conversions
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-sm text-gray-500 mb-2">
                    Business Website Concept
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-3 text-sm text-gray-700 mb-6">
                    {project.features.map((item) => (
                      <div key={item}>✓ {item}</div>
                    ))}
                  </div>

                  <button
                    onClick={() => scrollTo("audit-form-page")}
                    className="w-full py-3 rounded-2xl bg-black text-white font-medium hover:opacity-90 transition"
                  >
                    Start A Similar Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl border bg-white shadow-sm">
            <div className="text-5xl font-bold mb-2">48h</div>
            <div className="text-gray-600">Average concept turnaround</div>
          </div>

          <div className="p-8 rounded-3xl border bg-white shadow-sm">
            <div className="text-5xl font-bold mb-2">Mobile</div>
            <div className="text-gray-600">
              Every redesign optimized for phones first
            </div>
          </div>

          <div className="p-8 rounded-3xl border bg-white shadow-sm">
            <div className="text-5xl font-bold mb-2">Local</div>
            <div className="text-gray-600">
              Built for growing local businesses
            </div>
          </div>
        </div>
      </section>

      <section id="audit" className="px-6 py-20 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Your Website Should Match The Quality Of Your Business
          </h2>

          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Get a free audit and homepage modernization concept.
          </p>

          <div className="bg-black text-white rounded-[2rem] p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Free Website Audit
            </h3>

            <button
              onClick={() => scrollTo("audit-form-page")}
              className="mt-4 w-full py-4 rounded-2xl bg-white text-black font-semibold hover:scale-[1.01] transition"
            >
              Get My Free Audit
            </button>
          </div>
        </div>
      </section>

      <section
        id="audit-form-page"
        className="px-6 py-24 md:px-16 bg-gray-950 text-white border-t"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm mb-6">
              Free Website Audit Request
            </div>

            <h2 className="text-5xl font-bold mb-6">
              Tell Us About Your Business
            </h2>

            <p className="text-gray-300 text-xl leading-relaxed">
              Fill out a few details about your business and website goals.
              We’ll reach out with recommendations and next steps for improving your website.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white text-black rounded-[2rem] p-8 shadow-2xl">
              <form
                className="space-y-5"
                name="audit-request"
                method="POST"
                data-netlify="true"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString(),
                  })
                    .then(() => alert("Audit request submitted! We will be in touch soon."))
                    .catch(() => alert("Something went wrong. Please try again."));
                }}
              >
                <input type="hidden" name="form-name" value="audit-request" />
                <input
                  className="w-full border rounded-2xl px-5 py-4"
                  placeholder="Business Name"
                  name="business-name"
                />

                <input
                  className="w-full border rounded-2xl px-5 py-4"
                  placeholder="Website URL"
                  name="website-url"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    className="w-full border rounded-2xl px-5 py-4"
                    placeholder="Your Name"
                    name="name"
                  />

                  <input
                    className="w-full border rounded-2xl px-5 py-4"
                    placeholder="Your Email"
                    name="email"
                  />
                </div>

                <textarea
                  className="w-full border rounded-2xl px-5 py-4 min-h-[140px]"
                  placeholder="Tell us about your website goals, frustrations, or features you'd like added."
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition"
                >
                  Submit Audit Request
                </button>
              </form>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur">
              <div className="text-sm uppercase tracking-wide text-gray-400 mb-4">
                Direct Contact
              </div>

              <h3 className="text-3xl font-bold mb-6">
                LocalLift Studio
              </h3>

              <div className="space-y-5 text-gray-300 leading-relaxed">
                <div>
                  Professional websites designed to help businesses look modern and trustworthy online.
                </div>

                <div>
                  <div className="text-white font-semibold mb-1">Phone</div>
                  <div>650-405-5171</div>
                </div>

                <div>
                  <div className="text-white font-semibold mb-1">
                    Professional Email
                  </div>
                  <div>contact@localliftstudio.online</div>
                </div>

                <div>
                  <div className="text-white font-semibold mb-1">
                    What We Do
                  </div>
                  <div>
                    Website redesigns, mobile optimization, lead-focused layouts, and website modernization services.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 md:px-16 border-t bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="font-bold text-2xl mb-2">LocalLift Studio</div>
            <div className="text-gray-600 leading-relaxed max-w-md">
              Modern website redesigns for local businesses looking to improve their online presence.
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 text-sm">
            <div>
              <div className="font-semibold mb-3">Navigation</div>

              <div className="space-y-2 text-gray-600">
                <button
                  className="block"
                  onClick={() => scrollTo("services")}
                >
                  Services
                </button>

                <button
                  className="block"
                  onClick={() => scrollTo("case-studies")}
                >
                  Case Studies
                </button>

                <button
                  className="block"
                  onClick={() => scrollTo("audit-form-page")}
                >
                  Free Audit
                </button>
              </div>
            </div>

            <div>
              <div className="font-semibold mb-3">Contact</div>

              <div className="space-y-3 text-gray-600 leading-relaxed">
                <div>
                  <div className="font-medium text-black">Phone</div>
                  <div>650-405-5171</div>
                </div>

                <div>
                  <div className="font-medium text-black">
                    Professional Email
                  </div>
                  <div>contact@localliftstudio.online</div>
                </div>

                <div className="text-xs text-gray-500 pt-2">
                  Contact us directly for redesign projects, free audits, and website consultations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
