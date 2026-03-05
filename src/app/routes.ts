import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { CommercialPage } from "./components/CommercialPage";
import { GalleryPage } from "./components/GalleryPage";
import { ContactPage } from "./components/ContactPage";
import { FAQPage } from "./components/FAQPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "commercial", Component: CommercialPage },
      { path: "gallery", Component: GalleryPage },
      { path: "faqs", Component: FAQPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: HomePage },
    ],
  },
]);
