// ============================================================
// SITE COMPOSITIONS — layout presets (documentation only).
// App.tsx routing is fixed; these describe section-order concepts
// for future dynamic wiring or designer reference.
// ============================================================

export const siteCompositions = {

  // Current default: leads with trust signals
  "trust-first": {
    label: "Trust First (current default)",
    sections: [
      "Hero",
      "Stats Bar",
      "Services",
      "Why Us / Features",
      "Testimonials",
      "Team / About",
      "CTA Banner",
    ],
  },

  // Alternative: leads with portfolio / gallery
  "work-first": {
    label: "Work First (leads with portfolio)",
    sections: [
      "Hero",
      "Gallery Preview",
      "Services",
      "Why Us / Features",
      "About",
      "CTA Banner",
    ],
  },

  // Stripped-back single-page style
  "minimal": {
    label: "Minimal",
    sections: [
      "Hero",
      "Services",
      "Contact",
    ],
  },

} as const;
