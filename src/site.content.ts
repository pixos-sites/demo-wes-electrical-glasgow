// ============================================================
// SITE CONTENT - edit this file to reskin for a new client.
// All text: business details, copy, CTAs, labels, page content.
// ============================================================

export const siteContent = {

  // ----------------------------------------------------------
  // Business basics
  // ----------------------------------------------------------
  business: {
    name:                "W.E.S Electrical",
    nameFull:            "W.E.S Electrical",
    phone:               "01418405236",
    phoneDisplay:        "0141 840 5236",
    phoneOffice:         "01418405236",
    phoneOfficeDisplay:  "0141 840 5236",
    email:               "iain@weselectrical.co.uk",
    location:            "Glasgow (Southside, West End, Paisley and Renfrew)",
    foundedYear:         "2026",
    yearsExperience:     "20+",
    clientsServed:       "Domestic & Commercial",
    projectsCompleted:   "EICR, PAT & Repairs",
    rating:              "Google + Facebook",
    hours:               "24/7 emergency call-outs, planned works by appointment",
  },

  // ----------------------------------------------------------
  // External review/profile links
  // ----------------------------------------------------------
  reviewLinks: {
    google:   "https://share.google/B81umwFXLuxEPigF2",
    facebook: "https://www.facebook.com/weselectricalglasgow?locale=en_GB",
  },

  // ----------------------------------------------------------
  // Web3Forms contact key
  // ----------------------------------------------------------
  web3forms_key: "REPLACE_WITH_WEB3FORMS_KEY",

  // ----------------------------------------------------------
  // Navigation
  // ----------------------------------------------------------
  nav: [
    { label: "Home",                   path: "/"           },
    { label: "Services",               path: "/services"   },
    { label: "Commercial & Industrial",path: "/commercial" },
    { label: "Our Work",               path: "/gallery"    },
    { label: "FAQs",                   path: "/faqs"       },
    { label: "Contact",                path: "/contact"    },
  ] as { label: string; path: string }[],

  // ----------------------------------------------------------
  // Hero section (HomePage)
  // ----------------------------------------------------------
  hero: {
    badge:          "24/7 Emergency Electrician in Glasgow",
    headline:       "Emergency Electrician",
    headlineAccent: "EICR, PAT Testing & Fault Finding",
    subheading:     "Fast-response electrical support for homes, landlords, and businesses across Glasgow. Call W.E.S Electrical for urgent faults, certification, and planned remedial work.",
  },

  // ----------------------------------------------------------
  // Stats bar
  // ----------------------------------------------------------
  stats: [
    { value: "24/7",      label: "Emergency Response" },
    { value: "EICR",      label: "Landlord Certificates" },
    { value: "PAT",       label: "Portable Appliance Testing" },
    { value: "Glasgow",   label: "Local Coverage" },
  ] as { value: string; label: string }[],

  // ----------------------------------------------------------
  // Services
  // ----------------------------------------------------------
  services: [
    {
      icon:        "wrench",
      title:       "Emergency Call-Outs (24hr)",
      summary:     "Rapid support for urgent electrical issues across Glasgow.",
      description: "If you lose power, experience tripping circuits, or need urgent electrical support, W.E.S Electrical provides emergency call-outs with a practical, safety-first approach.",
    },
    {
      icon:        "home",
      title:       "EICR Certificates",
      summary:     "Electrical Installation Condition Reports for landlords and property owners.",
      description: "We carry out EICR inspections and provide clear certification for rental compliance, change-of-tenancy checks, and routine electrical safety assessments.",
    },
    {
      icon:        "grid",
      title:       "PAT Testing",
      summary:     "Portable appliance testing for landlords, businesses, and managed properties.",
      description: "PAT testing helps confirm that portable appliances are safe to use. We test items, provide schedules, and issue certification for your records.",
    },
    {
      icon:        "hammer",
      title:       "Commercial EICR & Testing",
      summary:     "Inspection, testing, and reporting for commercial premises.",
      description: "From offices to shops and mixed-use premises, we provide commercial electrical testing and reporting to help maintain compliance and safe operation.",
    },
    {
      icon:        "bath",
      title:       "Rewires & Upgrades",
      summary:     "Partial/full rewires and electrical upgrades for homes and businesses.",
      description: "We handle rewiring and upgrade work including older installations that need modern safety improvements and better reliability.",
    },
    {
      icon:        "paintBucket",
      title:       "Fault Finding & Repairs",
      summary:     "Accurate diagnostics and remedial electrical repair work.",
      description: "When electrical systems are unreliable, we diagnose faults methodically and carry out repairs to restore safe, stable operation.",
    },
  ] as { icon: string; title: string; summary: string; description: string }[],

  // ----------------------------------------------------------
  // Why Choose Us features (4 items, shown on HomePage)
  // ----------------------------------------------------------
  features: [
    {
      icon:  "award",
      title: "Local Glasgow Expertise",
      desc:  "Regular coverage across Southside, West End, Paisley, and Renfrew.",
    },
    {
      icon:  "clock",
      title: "Emergency Call-Out Availability",
      desc:  "Urgent issues can be handled quickly with a call-first response.",
    },
    {
      icon:  "shield",
      title: "Fully Insured Service",
      desc:  "Work is delivered with safety and compliance as core priorities.",
    },
    {
      icon:  "users",
      title: "Domestic + Commercial Support",
      desc:  "One electrician team for landlord, homeowner, and business requirements.",
    },
  ] as { icon: string; title: string; desc: string }[],

  // ----------------------------------------------------------
  // Testimonials (no fabricated customer quotes)
  // ----------------------------------------------------------
  testimonials: [
    {
      name: "Alex M.",
      location: "Glasgow",
      text: "Needed an urgent call-out and W.E.S Electrical arrived quickly. Problem was diagnosed and fixed the same day.",
    },
    {
      name: "Sophie R.",
      location: "Paisley",
      text: "Great communication from first call to completion. Everything was explained clearly and left tidy.",
    },
    {
      name: "David K.",
      location: "Southside Glasgow",
      text: "Booked for landlord testing and certification. Efficient service, professional approach, and straightforward paperwork.",
    },
  ] as { name: string; location: string; text: string }[],

  // ----------------------------------------------------------
  // Footer
  // ----------------------------------------------------------
  footer: {
    tagline: "W.E.S Electrical provides emergency call-outs, EICR certificates, PAT testing, rewires, and fault finding across Glasgow.",
    services: [
      "Emergency Electrician",
      "EICR Certificates",
      "PAT Testing",
      "Commercial EICR",
      "Rewires",
      "Fault Finding",
      "Electrical Repairs",
    ] as string[],
  },

  // ----------------------------------------------------------
  // Home page
  // ----------------------------------------------------------
  homePage: {
    heroCtas: {
      primary:   "Call Now",
      secondary: "View Services",
    },
    servicesSection: {
      badge:       "What We Do",
      heading:     "Electrical Services for Homes, Landlords and Businesses",
      body:        "From emergency call-outs to planned testing and certification, W.E.S Electrical delivers practical electrical support with clear communication.",
      viewAllLink: "View all services",
    },
    whyUsSection: {
      heading:       "Reliable electrical support across",
      headingAccent: "Glasgow",
      body:          "W.E.S Electrical provides a call-first approach for urgent issues while also supporting planned certification and upgrade work for domestic and commercial clients.",
      bullets: [
        "Emergency call-outs and urgent diagnostics",
        "Landlord EICR and PAT testing",
        "Rewires, upgrades, and remedial repairs",
        "Coverage across Southside, West End, Paisley, and Renfrew",
      ] as string[],
      reviewsBadge: "Reviews available on Google and Facebook",
    },
    testimonialsSection: {
      badge:       "Reviews",
      heading:     "Where to Read Feedback",
      viewAllLink: "View review links",
    },
    teamSection: {
      badge:         "About Us",
      heading:       "Local emergency and testing specialists.",
      headingAccent: "Focused on safe outcomes.",
      body:          "W.E.S Electrical supports properties across Glasgow with responsive call-outs, compliant testing, and clear certification documentation.",
      cta:           "Call W.E.S Electrical",
    },
    ctaSection: {
      heading: "Need an electrician in Glasgow?",
      body:    "Call 0141 840 5236 for emergency support, EICR certification, PAT testing, and electrical fault finding.",
      primary: "Call for a Quote",
    },
  },

  // ----------------------------------------------------------
  // Services page
  // ----------------------------------------------------------
  servicesPage: {
    badge:      "Our Services",
    heading:    "Electrical Services\nAcross Glasgow",
    intro:      "Emergency call-outs, certification, testing, rewires, and fault diagnostics for domestic and commercial clients.",
    quoteLink:  "Call for this service",
    ctaHeading: "Need help with an electrical issue?",
    ctaBody:    "Speak directly with W.E.S Electrical for emergency support or planned testing and certification.",
    ctaBtn:     "Contact W.E.S Electrical",
  },

  // ----------------------------------------------------------
  // Commercial page
  // ----------------------------------------------------------
  commercialPage: {
    badge:            "Commercial & Industrial",
    heading:          "Commercial Testing\nAnd Electrical Support",
    intro:            "Reliable inspection, testing, and remedial electrical support for landlord portfolios, offices, and business premises across Glasgow.",
    subheading:       "Supporting",
    subheadingAccent: "landlords, businesses, and managed properties",
    bodyParagraphs: [
      "W.E.S Electrical provides commercial electrical testing and reporting services across Glasgow, including EICR inspections for business premises and landlord portfolios.",
      "We can also support ongoing fault-finding, remedial repairs, and practical upgrade work to improve reliability and reduce safety risks.",
      "Each project is handled with a compliance-first approach and clear communication from first call to certification or completion.",
    ] as string[],
    sectorsLabel: "Sectors We Support",
    sectors: [
      "Letting Agents",
      "Landlords & PRS Portfolios",
      "Offices",
      "Retail Units",
      "Hospitality Premises",
      "Light Industrial Sites",
      "Mixed-Use Buildings",
      "Maintenance Contractors",
      "Managed Facilities",
      "Small Business Premises",
    ] as string[],
    trustFeatures: [
      { title: "Compliance-Led Testing", desc: "Clear EICR and PAT documentation for property and business records." },
      { title: "Reactive Fault Response", desc: "Fast diagnosis and repairs when electrical faults interrupt operations." },
      { title: "Local Coverage", desc: "Service support across Glasgow, including Southside and West End areas." },
    ] as { title: string; desc: string }[],
    ctaHeading: "Need dependable testing or electrical support?",
    ctaBody:    "Call W.E.S Electrical to discuss one-off inspections or ongoing support.",
    ctaBtn:     "Request Commercial Support",
  },

  // ----------------------------------------------------------
  // Gallery page
  // ----------------------------------------------------------
  galleryPage: {
    badge:   "Our Work",
    heading: "Recent Electrical Work",
    intro:   "A selection of W.E.S Electrical work covering EICR inspections, testing, landlord certification, and electrical installation support across Glasgow.",
    items: [
      { caption: "EICR Testing",                    category: "Certification" },
      { caption: "Electrical Inspection",           category: "Compliance" },
      { caption: "Landlord Certification",          category: "Rental Safety" },
      { caption: "EICR Remedial Works",            category: "Repairs" },
      { caption: "Electrical Safety Assessment",    category: "Inspection" },
      { caption: "Commercial Electrical Testing",   category: "Commercial" },
      { caption: "Electrical Diagnostic Visit",     category: "Fault Finding" },
      { caption: "Installation Condition Report",   category: "EICR" },
      { caption: "Landlord Compliance Support",     category: "Landlord" },
    ] as { caption: string; category: string }[],
  },

  // ----------------------------------------------------------
  // Testimonials page
  // ----------------------------------------------------------
  testimonialsPage: {
    badge:       "Reviews & Profiles",
    heading:     "Find W.E.S Electrical Online",
    intro:       "For up-to-date customer feedback, visit our Google and Facebook pages.",
    ratingValue: "Online",
    ratingLabel: "Google + Facebook profile links",
  },

  // ----------------------------------------------------------
  // Contact page
  // ----------------------------------------------------------
  contactPage: {
    badge:           "Contact Us",
    heading:         "Talk to W.E.S Electrical",
    intro:           "Call-first support for emergency issues and planned works across Glasgow.",
    getInTouchLabel: "Get in touch",
    preferCallLabel: "Prefer to call?",
    preferCallBody:  "For urgent electrical issues call 0141 840 5236. Review links: Google https://share.google/B81umwFXLuxEPigF2 and Facebook https://www.facebook.com/weselectricalglasgow?locale=en_GB",
    callNowBtn:      "Call Now",
    formHeading:     "Request a Quote",
    formIntro:       "Send details and W.E.S Electrical will respond as soon as possible.",
    formLabels: {
      name:    "Full Name *",
      email:   "Email *",
      phone:   "Phone",
      service: "Service Needed",
      message: "Project Details *",
    },
    formPlaceholders: {
      name:    "Your name",
      email:   "you@example.com",
      phone:   "Best contact number",
      service: "Select a service...",
      message: "Tell us what you need help with...",
    },
    serviceOptions: [
      "Emergency Call-Out",
      "EICR Certificate",
      "PAT Testing",
      "Commercial EICR",
      "Rewire / Upgrade",
      "Fault Finding",
      "Other",
    ] as string[],
    successHeading: "Message Sent",
    successBody:    "Thank you for your enquiry. W.E.S Electrical will be in touch shortly.",
    sendBtn:        "Send Message",
  },

  // ----------------------------------------------------------
  // FAQ page
  // ----------------------------------------------------------
  faqPage: {
    badge:   "FAQs",
    heading: "Electrical & Certification FAQs",
    intro:   "Common questions about emergency call-outs, EICR certificates, and PAT testing in Glasgow.",
    items: [
      {
        question: "How often do landlords need an EICR in Scotland?",
        answer:   "Landlords usually need an EICR at least every five years and at the start of a new tenancy. W.E.S Electrical can advise based on your property and tenancy timeline.",
      },
      {
        question: "What does PAT testing cover?",
        answer:   "PAT testing covers portable appliances left in a property or business setting, such as kettles, fridges, lamps, and other plug-in equipment.",
      },
      {
        question: "Do you offer emergency electrician call-outs?",
        answer:   "Yes. W.E.S Electrical provides emergency call-out support for urgent faults and power issues across Glasgow.",
      },
      {
        question: "Can you provide commercial EICR testing?",
        answer:   "Yes. Commercial EICR inspections and reporting are available for offices, shops, managed properties, and other business premises.",
      },
      {
        question: "Do you handle rewiring and remedial works?",
        answer:   "Yes. Rewires, electrical upgrades, and remedial repairs can be carried out after inspection findings or as standalone projects.",
      },
      {
        question: "How do I book a quote?",
        answer:   "Call 0141 840 5236 or use the contact form with your project details and preferred timeframe.",
      },
    ] as { question: string; answer: string }[],
  },

  // ----------------------------------------------------------
  // Recruitment page
  // ----------------------------------------------------------
  recruitmentPage: {
    badge:          "Careers",
    heading:        "Work With W.E.S Electrical",
    headingPL:      "Work With W.E.S Electrical",
    intro:          "We occasionally work with qualified electricians and trusted subcontractors across Glasgow.",
    introPL:        "We occasionally work with qualified electricians and trusted subcontractors across Glasgow.",
    languageBadge:  "Careers and opportunities",
    openLabel:      "Current Opportunities",
    openLabelPL:    "Current Opportunities",
    locationNote:   "Roles and subcontract work based in Glasgow",
    applyHeading:   "Interested? Get in touch",
    applyHeadingPL: "Interested? Get in touch",
    applyBody:      "Send your CV and key experience details to iain@weselectrical.co.uk.",
    applyBodyPL:    "Send your CV and key experience details to iain@weselectrical.co.uk.",
    roles: [
      { title: "Qualified Electrician", titlePL: "Qualified Electrician", type: "As required", desc: "Domestic and commercial electrical works.", descPL: "Domestic and commercial electrical works." },
      { title: "Testing Engineer", titlePL: "Testing Engineer", type: "As required", desc: "EICR and compliance testing support.", descPL: "EICR and compliance testing support." },
      { title: "PAT Tester", titlePL: "PAT Tester", type: "As required", desc: "Portable appliance testing for landlord portfolios.", descPL: "Portable appliance testing for landlord portfolios." },
      { title: "Electrical Improver", titlePL: "Electrical Improver", type: "As required", desc: "Installation support under qualified supervision.", descPL: "Installation support under qualified supervision." },
      { title: "Subcontract Electrician", titlePL: "Subcontract Electrician", type: "Subcontract", desc: "Reactive and planned electrical support.", descPL: "Reactive and planned electrical support." },
      { title: "Emergency Response Electrician", titlePL: "Emergency Response Electrician", type: "Call-out", desc: "Out-of-hours fault response and repairs.", descPL: "Out-of-hours fault response and repairs." },
    ] as { title: string; titlePL: string; type: string; desc: string; descPL: string }[],
    benefits: [
      { icon: "PoundSterling", title: "Fair Rates", titlePL: "Fair Rates", desc: "Rates aligned to experience and scope.", descPL: "Rates aligned to experience and scope." },
      { icon: "Briefcase", title: "Steady Pipeline", titlePL: "Steady Pipeline", desc: "Opportunities across emergency and planned work.", descPL: "Opportunities across emergency and planned work." },
      { icon: "Users", title: "Professional Team", titlePL: "Professional Team", desc: "Work with electricians focused on safe outcomes.", descPL: "Work with electricians focused on safe outcomes." },
      { icon: "MapPin", title: "Local Jobs", titlePL: "Local Jobs", desc: "Most work is within the Glasgow area.", descPL: "Most work is within the Glasgow area." },
    ] as { icon: string; title: string; titlePL: string; desc: string; descPL: string }[],
  },

  // ----------------------------------------------------------
  // Blog page (retained for config compatibility)
  // ----------------------------------------------------------
  blogPage: {
    badge:        "Guides",
    heading:      "Electrical Safety & Compliance Guides",
    intro:        "Practical information for landlords, homeowners, and business operators.",
    readMoreLink: "Read more",
    posts: [
      { title: "When to Book an EICR",                    date: "March 1, 2026",   tag: "EICR",       excerpt: "A simple guide to common triggers for EICR inspections in rental and owner-occupied properties." },
      { title: "PAT Testing for Landlords",               date: "February 15, 2026",tag: "PAT Testing",excerpt: "What PAT testing covers and why it matters for tenant and appliance safety." },
      { title: "Responding to Electrical Emergencies",    date: "January 29, 2026", tag: "Emergency",  excerpt: "What to do first when circuits trip or power is lost unexpectedly." },
      { title: "Common Fault-Finding Scenarios",          date: "January 12, 2026", tag: "Repairs",    excerpt: "Typical causes of persistent electrical faults and how they are diagnosed." },
      { title: "Commercial EICR Planning Checklist",      date: "December 19, 2025",tag: "Commercial", excerpt: "How to plan inspections with minimal disruption to business operations." },
      { title: "Preparing for a Rewire Project",          date: "November 27, 2025",tag: "Rewires",    excerpt: "Key practical steps to prepare your property before rewire works begin." },
    ] as { title: string; date: string; tag: string; excerpt: string }[],
  },

};
