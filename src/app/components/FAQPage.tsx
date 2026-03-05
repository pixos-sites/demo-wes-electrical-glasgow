import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Phone } from "lucide-react";
import { Link } from "react-router";
import { config } from "../config";

const fp = config.faqPage;

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div style={{ fontFamily: config.brand.fonts.sans }}>
      <section className="py-20" style={{ backgroundColor: config.brand.primary }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span
              className="inline-block px-4 py-1.5 rounded-full mb-4"
              style={{
                backgroundColor: "rgba(199,32,42,0.18)",
                border: "1px solid rgba(199,32,42,0.45)",
                color: "#FFEAF0",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              {fp.badge}
            </span>
            <h1
              className="m-0 mb-4 text-white"
              style={{
                fontFamily: config.brand.fonts.serif,
                fontSize: "clamp(34px, 5vw, 56px)",
                fontWeight: 700,
                letterSpacing: "0.5px",
                lineHeight: 1,
              }}
            >
              {fp.heading}
            </h1>
            <p className="m-0 mx-auto" style={{ fontSize: "18px", color: "#FFFFFF", maxWidth: "720px", lineHeight: 1.7 }}>
              {fp.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ backgroundColor: config.brand.background }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-4">
            {fp.items.map((item, index) => {
              const open = openIndex === index;
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl overflow-hidden"
                  style={{ backgroundColor: config.brand.white, border: `1px solid ${config.brand.border}` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="w-full px-6 py-5 border-none cursor-pointer flex items-center justify-between text-left"
                    style={{ backgroundColor: open ? config.brand.primaryAlpha08 : "transparent" }}
                  >
                    <span style={{ fontSize: "18px", fontWeight: 700, color: config.brand.light }}>{item.question}</span>
                    <ChevronDown
                      size={20}
                      style={{
                        color: config.brand.primary,
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-6 pt-4 pb-6">
                          <p className="m-0" style={{ fontSize: "16px", color: config.brand.secondary, lineHeight: 1.75 }}>
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 p-10 rounded-2xl text-center"
            style={{ backgroundColor: config.brand.primary }}
          >
            <h3 className="m-0 mb-3" style={{ color: "#F4F8FF", fontFamily: config.brand.fonts.serif, fontSize: "34px", fontWeight: 700 }}>
              Need advice for your specific project?
            </h3>
            <p className="m-0 mb-6 mx-auto" style={{ fontSize: "16px", color: "rgba(244,248,255,0.88)", maxWidth: "560px", lineHeight: 1.7 }}>
              Call our team for practical guidance on residential, commercial, or industrial electrical work.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 no-underline rounded-xl transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: config.brand.primary, color: "#FFFFFF", fontSize: "16px", fontWeight: 700 }}
            >
              <Phone size={18} />
              Call for Support
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
