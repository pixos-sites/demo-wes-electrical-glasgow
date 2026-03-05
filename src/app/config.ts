// ============================================================
// CONFIG — thin adapter. Do not edit directly.
// Edit src/site.content.ts, src/site.theme.ts, src/site.images.ts
// ============================================================

import { siteContent } from '../site.content';
import { siteTheme }   from '../site.theme';
import { siteImages }  from '../site.images';

// Wire gallery items: captions/categories from content + image paths from images
const galleryImageOrder = [
  siteImages.gallery.kitchen,
  siteImages.gallery.bathroom,
  siteImages.gallery.extension,
  siteImages.gallery.painting,
  siteImages.gallery.joinery,
  siteImages.gallery.tiling,
  siteImages.gallery.plastering,
  siteImages.gallery.building,
  siteImages.gallery.newbuild,
];

// Wire blog posts: text data from content + image paths from images
const blogImageOrder = [
  siteImages.blog.post1,
  siteImages.blog.post2,
  siteImages.blog.post3,
  siteImages.blog.post4,
  siteImages.blog.post5,
  siteImages.blog.post6,
];

export const config = {
  // Spread all content (business, nav, hero, services, features, testimonials,
  // footer, homePage, servicesPage, commercialPage, testimonialsPage,
  // contactPage, recruitmentPage, plus base galleryPage/blogPage)
  ...siteContent,

  // Enriched pages: captions/posts merged with resolved image paths
  galleryPage: {
    ...siteContent.galleryPage,
    items: siteContent.galleryPage.items.map((item, i) => ({
      ...item,
      src: galleryImageOrder[i] ?? siteImages.gallery.kitchen,
    })),
  },

  blogPage: {
    ...siteContent.blogPage,
    posts: siteContent.blogPage.posts.map((post, i) => ({
      ...post,
      image: blogImageOrder[i] ?? siteImages.blog.post1,
    })),
  },

  // Brand: all colour tokens + font families
  brand: {
    ...siteTheme.colors,
    fonts: siteTheme.fonts,
  },

  // All image slots (for direct access by components)
  images: siteImages,

  // Logo at top level (Layout.tsx reads config.logo)
  logo: siteImages.logo,
};
