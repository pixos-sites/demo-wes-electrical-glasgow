// ============================================================
// SITE IMAGES - edit src paths here to reskin for a new client.
// NEVER rename the slot keys - components reference them by name.
// Drop new images into public/images/ (no rebuild needed).
// ============================================================

export const siteImages = {

  // Logo (requires rebuild after swap - lives in public/images/)
  logo: "/images/W.E.S_Electrical_logo.png",

  // ----------------------------------------------------------
  // HomePage
  // ----------------------------------------------------------
  hero:  "/images/wes-hero-emergency-electrician.jpg",
  whyUs: "/images/wes-spotlights-install.jpg",
  team:  "/images/wes-eicr-technician.jpg",

  // ----------------------------------------------------------
  // ServicesPage (one image per service, order matches config.services)
  // ----------------------------------------------------------
  servicesHero: "/images/wes-services-header.jpg",
  builders:     "/images/wes-gallery-eicr-paisley.jpeg",
  painters:     "/images/wes-gallery-eicr-partick.jpeg",
  bathrooms:    "/images/wes-gallery-shawlands-letting.jpeg",
  tilers:       "/images/wes-gallery-landlord-paisley.jpg",
  joiners:      "/images/wes-gallery-landlord-certificates.jpg",
  extensions:   "/images/wes-testing-closeup.jpg",

  // ----------------------------------------------------------
  // CommercialPage
  // ----------------------------------------------------------
  commercialHero: "/images/wes-commercial-header.jpg",

  // ----------------------------------------------------------
  // GalleryPage (9 slots - order matches galleryPage.items in site.content.ts)
  // ----------------------------------------------------------
  gallery: {
    kitchen:    "/images/wes-gallery-eicr-paisley.jpeg",
    bathroom:   "/images/wes-gallery-eicr-partick.jpeg",
    extension:  "/images/wes-gallery-shawlands-letting.jpeg",
    painting:   "/images/wes-gallery-landlord-paisley.jpg",
    joinery:    "/images/wes-gallery-eicr-glasgow.jpg",
    tiling:     "/images/wes-gallery-eicr-electrician.jpg",
    plastering: "/images/wes-gallery-eicr-certificate.jpg",
    building:   "/images/wes-gallery-landlord-certificates.jpg",
    newbuild:   "/images/wes-testing-closeup.jpg",
  },

  // ----------------------------------------------------------
  // BlogPage (6 slots - order matches blogPage.posts in site.content.ts)
  // ----------------------------------------------------------
  blog: {
    post1: "/images/wes-gallery-eicr-glasgow.jpg",
    post2: "/images/wes-gallery-eicr-electrician.jpg",
    post3: "/images/wes-gallery-eicr-certificate.jpg",
    post4: "/images/wes-gallery-landlord-certificates.jpg",
    post5: "/images/wes-testing-closeup.jpg",
    post6: "/images/wes-eicr-technician.jpg",
  },

};
