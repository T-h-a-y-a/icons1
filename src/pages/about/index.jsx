import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

/* ---------- Reusable hook: reveal once when in view ---------- */
function useInViewReveal({ delay = 0, threshold = 0.1 } = {}) {
  const [shown, setShown] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const t = setTimeout(() => setShown(true), delay);
          obs.unobserve(entry.target);
          return () => clearTimeout(t);
        });
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);

  return [ref, shown];
}

/**
 * NOTE: For perfect clamping, enable Tailwind's line-clamp plugin
 * https://tailwindcss.com/docs/line-clamp
 * and use className="line-clamp-3".
 * If you can't, add this once in your global CSS as a fallback:
 *
 * .clamp-3 {
 *   display: -webkit-box;
 *   -webkit-line-clamp: 3;
 *   -webkit-box-orient: vertical;
 *   overflow: hidden;
 *   text-overflow: ellipsis;
 * }
 */

/* ---------- Data ---------- */
const FLOWERS = [
  {
    title: "Rose",
    text:
      "A type of flowering shrub, its name comes from the Latin word Rosa. The rose has been a symbol of love, beauty, war, and politics. The rose plant can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles. Flowers vary in size and shape and are usually large and showy, in colors ranging from white through yellows and reds. Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa. Roses are often grown as ornamental plants for their beautiful and sometimes fragrant flowers. They are popular garden plants but are sometimes grown indoors and are used as cut flowers. The rose species, China rose (Rosa chinensis), has been used in traditional Chinese medicine. The roots and fruits are used for arthritis, joint pains, coughs, and skin wounds and infections. The flower buds are used to stimulate blood flow and help with chest and abdominal pain. Rose water is commonly used in Middle Eastern and Indian cooking, especially in sweets such as baklava, nougat, and Turkish delight.",
  },
  {
    title: "Tulip",
    text:
      "Tulips are spring-blooming perennials that grow from bulbs. Depending on the species, tulip plants can grow as short as 4 inches (10 cm) or as high as 28 inches (71 cm). The tulip's large flowers usually bloom on scapes or subscapose stems that lack bracts. Most tulips produce only one flower per stem, but a few species bear multiple flowers on their scapes (e.g., Tulipa turkestanica). The showy, generally cup- or star-shaped tulip flower has three petals and three sepals, which are often termed tepals because they are nearly identical. Tulip bulbs are measured in centimeters around the 'waist' of the bulb. Longfield Gardens supplies tulip bulbs that are at least 12cm in circumference. This ensures you will always get the biggest, brightest blooms. Tulip bulbs should be planted in mid to late fall, any time after the first frost and before the ground freezes. For best results, plant the bulbs within a month after you receive them. Plant tulip bulbs 6\" to 8\" deep and 4\" to 5\" apart on center...",
  },
  {
    title: "Sunflower",
    text:
      "Sunflowers are known for being “happy” flowers, making them the perfect gift to bring joy to someone’s day. The common sunflower has a green erect stem covered in coarse hairs, growing on average around 2m tall. The leaves are broad, with serrated edges, and are alternately arranged on the stem. The ‘flower’ of the common sunflower is actually a pseudanthium, or flowerhead, made up of many small flowers. The outer yellow ‘petals’ are ray flowers. The black-brown flowers in the centre, called disk flowers, mature into sunflower seeds. Sunflower seeds are processed to create sunflower oil, eaten both raw and roasted, and can be made into sunflower butter. Some Native American peoples use ground sunflower seeds to make bread-like products. Did you know? Sunflower petals are edible, but they aren't widely eaten due to their flavour.",
  },
  {
    title: "Daisy",
    text:
      "Daisies are simple yet sophisticated and are some of the most beautiful flowers in the floral world. Daisy plants often grow to about 2 to 3 feet tall. Two types of flower make up each flower head: ray flowers (petals) and tiny disk flowers at the center. Oxeye and Shasta daisies have a ring of white ray flowers around a bright yellow center. With its soft, pearly white petals radiating from a golden center, the Shasta daisy is a timeless classic. The daisy has come to symbolize new beginnings and spread happiness—great for milestone celebrations.",
  },
  {
    title: "Orchid",
    text:
      "Orchids are delicate, exotic and graceful—symbols of love, luxury, beauty and strength. They form one of the world’s largest plant families with between 15,000 and 35,000 species. Orchids grow in most parts of the world except near the poles. Many grow on other plants or rocks and take in moisture from rainwater or the air. Orchid plants can measure from less than an inch to more than 15 feet tall. Flowers can be as small as 2.5 mm or as large as 38 cm and in almost any color. Vanilla flavoring comes from orchid seedpods.",
  },
  {
    title: "Chrysanthemum",
    text:
      "Chrysanthemum flowers vary widely in size, petal arrangement, and color—from white and light yellow to deep burgundy and purple. They often have a sweet, floral scent with menthol notes. Mums are edible flowers; Garland chrysanthemums are commonly used and their greens are known as Shungiku. Chrysanthemums have symbolized love, life, and rebirth, and are also placed as offerings during Diwali Puja. They’re popular in gardens and cuisine for color, texture, and flavor.",
  },
  {
    title: "Chrysanthemuuum",
    text:
      "Chrysanthemum flowers vary widely in size, petal arrangement, and color—from white and light yellow to deep burgundy and purple. They often have a sweet, floral scent with menthol notes. Mums are edible flowers; Garland chrysanthemums are commonly used and their greens are known as Shungiku. Chrysanthemums have symbolized love, life, and rebirth, and are also placed as offerings during Diwali Puja. They’re popular in gardens and cuisine for color, texture, and flavor.",
  },
];

const CARDS = [
  {
    title: "Mr. Shajahan S",
    designation: "Head of Marketing and Sales",
    text:
      "He is the driving force behind our sales success. His keen market insights and relationship-building prowess fuel business expansion, ensuring each client receives tailored BPO solutions that foster growth and profitability.",
    img:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mr. Prem Anand Y",
    designation: "Head of HR & Administration",
    text:
      "He is the architect of our people-centric approach, shaping an efficient, motivated workforce. By balancing talent acquisition and administrative precision, he cultivates an empowered environment where innovation thrives.",
    img:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mr. Vijay Anand P",
    designation: "Head of Operations",
    text:
      "He orchestrates operational excellence, blending cutting-edge tech and streamlined processes. His strategic focus on efficiency and delivery ensures flawless execution, transforming client needs into impactful, seamless business solutions.",
    img:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function About() {
  // === Animations
  const fade = {
    hidden: { opacity: 0, y: 18 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
    }),
  };

  // === Video state
  const [isPlaying, setIsPlaying] = useState(false);
  const VIDEO_ID = "bcMvQT0R2R0";
  const posterSrc = "/assets/icons.png";

  // === In-view reveals
  const [visionContentRef, visionContentShown] = useInViewReveal({
    threshold: 0.1,
  });
  const [visionFirstRef, visionFirstShown] = useInViewReveal({ delay: 300 });
  const [visionSecondRef, visionSecondShown] = useInViewReveal({ delay: 800 });

  const [missionContentRef, missionContentShown] = useInViewReveal({
    threshold: 0.1,
  });
  const [missionFirstRef, missionFirstShown] = useInViewReveal({ delay: 300 });
  const [missionSecondRef, missionSecondShown] = useInViewReveal({
    delay: 800,
  });

  // === Hover-moving background + zoom
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);
  const [zoomIndex, setZoomIndex] = useState(null);
  const [bg, setBg] = useState({ w: 0, h: 0, x: 0, y: 0, opacity: 0 });

  // Set initial background position using last hovered (hidden)
  useEffect(() => {
    let idx = 0;
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("lastHoveredCardIndex");
      const parsed = Number.parseInt(stored || "0", 10);
      if (Number.isFinite(parsed)) idx = Math.min(Math.max(parsed, 0), FLOWERS.length - 1);
    }
    const el = cardRefs.current[idx];
    const wrap = wrapperRef.current;
    if (!el || !wrap) return;
    const rect = el.getBoundingClientRect();
    const wRect = wrap.getBoundingClientRect();
    setBg({
      w: rect.width,
      h: rect.height,
      x: rect.left - wRect.left,
      y: rect.top - wRect.top,
      opacity: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lock body scroll while zoomed
  useEffect(() => {
    const cls = "overflow-hidden";
    const body = document.body;
    if (zoomIndex !== null) body.classList.add(cls);
    else body.classList.remove(cls);
    return () => body.classList.remove(cls);
  }, [zoomIndex]);

  // ESC to close zoom
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setZoomIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleEnter = (idx) => {
    if (zoomIndex !== null) return; // Disable hover while zoomed
    const el = cardRefs.current[idx];
    const wrap = wrapperRef.current;
    if (!el || !wrap) return;
    const rect = el.getBoundingClientRect();
    const wRect = wrap.getBoundingClientRect();
    setBg({
      w: rect.width,
      h: rect.height,
      x: rect.left - wRect.left,
      y: rect.top - wRect.top,
      opacity: 1,
    });
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lastHoveredCardIndex", String(idx));
    }
  };

  const handleLeave = () => {
    if (zoomIndex !== null) return;
    setBg((b) => ({ ...b, opacity: 0, w: 0, h: 0 }));
  };

  const toggleZoom = (idx) => {
    setZoomIndex((cur) => (cur === idx ? null : idx));
    setBg((b) => ({ ...b, opacity: 0, w: 0, h: 0 })); // hide hover bg when zooming
  };

  return (
    <div className="mt-4">
      <Helmet>
        <title>About Us | 20+ Years of Global BPO & IT Services.</title>
        <meta
          name="description"
          content="With 20+ years of global experience, we provide reliable BPO and IT services that enhance efficiency, reduce costs, and drive business growth."
        />
      </Helmet>

      {/* Top Image */}
      <div className="text-left">
        <img src="/assets/tw_alumni_banners_2550 x 4602.jpg" alt="about us" className="w-full h-auto" />
      </div>

      {/* Intro + Video */}
      <div className="mx-auto max-w-[80%] px-6 py-12 ">
        <h1 className="playfont tracking-widest text-2xl md:text-3xl lg:text-6xl font-bold text-center">
          Unlocking Business Efficiency through Innovative BPO and Software Development Solutions
        </h1>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div>
            <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[20px] md:text-justify leading-relaxed">
              With over 20+ years of global experience, i-Cons Technologies is a trusted provider of Business Process
              Outsourcing (BPO) and Information Technology (IT) services. We specialize in delivering innovative,
              cost-effective solutions that streamline operations, boost efficiency, and accelerate business growth.
            </p>
            <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[20px] md:text-justify leading-relaxed mt-4">
              Founded in 2004, our mission has always been to empower clients with technology-driven services tailored
              to their unique needs. Whether it's customer support, data processing, software development, or digital
              transformation, we bring deep industry expertise and a commitment to excellence in everything we do.
            </p>
            <p className="poppins-regular text-[#9f9f9f] text-lg md:text-[20px] md:text-justify leading-relaxed mt-4">
              Our global team of professionals works across industries and time zones, ensuring round-the-clock support
              and scalable solutions that evolve with your business. At i-Cons Technologies, we don’t just offer services
              — we deliver value, trust, and measurable results.
            </p>
          </div>

          {/* Right: video */}
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-2xl pb-[56.25%] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
              {!isPlaying && (
                <>
                  <img
                    src={posterSrc}
                    alt="Intro video poster"
                    className="absolute inset-0 mt-10 w-[40%] mx-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/95 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/40 flex items-center justify-center"
                    aria-label="Play video"
                    title="Play"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-blue-600 transition group-hover:scale-110">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </>
              )}

              {isPlaying && (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&controls=1&fs=1&playsinline=1`}
                  title="Company intro video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              )}
             
            </div>
          </div>
        </div>
      </div>

      {/* Leadership cards */}
      <div className="mx-auto max-w-[90%] px-4 py-12">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">Meet the Visionaries Behind Our Brand</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.title}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <div className="flex flex-1 flex-col sm:flex-row">
                <div className="sm:basis-2/5 sm:shrink-0">
                  <div className="h-48 w-full sm:h-full">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                </div>
                <div className="sm:basis-3/5">
                  <div className="h-full p-6">
                    <h3 className="text-2xl text-center font-semibold leading-tight playfont">{card.title}</h3>
                    <p className="mt-1 text-[12px] text-center">({card.designation})</p>
                    <p className="mt-4 text-sm leading-relaxed text-black/70">{card.text}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Vision */}
      <div className="bg-gradient-to-br">
        <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div
              ref={visionContentRef}
              className={[
                "text-left transition-all duration-700",
                visionContentShown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Vision:</h2>
              <h2 className="text-5xl font-bold mb-6 text-gray-800 playfont">Empowering Global Progress and Innovation</h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-6 poppins-regular">
                Our vision is simple yet impactful: to create opportunities, drive change, and be a catalyst for progress
                across the globe. We strive to serve clients worldwide, build long-lasting relationships based on trust,
                and inspire innovation at every level. Our passion for what we do fuels our relentless pursuit of
                excellence, making us a trusted partner for businesses seeking sustainable growth.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg mb-8 poppins-regular">
                We are dedicated to being accountable, creative, and transparent in our interactions with clients. By
                fostering a culture of integrity and respect, we continuously evolve and adapt to meet the ever-changing
                demands of the global business landscape.
              </p>
            </div>

            <div className="relative w-full h-[600px] hidden lg:block">
              <div
                ref={visionSecondRef}
                className={[
                  "absolute top-0 left-0 z-20 transition-all duration-700 group",
                  visionSecondShown ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-6 -translate-y-3",
                ].join(" ")}
              >
                <img
                  src="/assets/Vision_1.jpg"
                  alt="Creative Vision"
                  className="w-[280px] h-[350px] rounded-2xl shadow-2xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                  loading="lazy"
                />
              </div>

              <div
                ref={visionFirstRef}
                className={[
                  "absolute bottom-0 right-0 z-10 transition-all duration-700 group",
                  visionFirstShown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
              >
                <img
                  src="/assets/Vision_2.jpg"
                  alt="Our Excellence"
                  className="w-[320px] h-[400px] rounded-2xl shadow-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mission */}
      <div className="bg-gradient-to-br md:mt-4 lg:mt-32">
        <section className="relative mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="relative w-full h-[600px] hidden lg:block">
              <div
                ref={missionSecondRef}
                className={[
                  "absolute top-0 left-0 z-20 transition-all duration-700 group",
                  missionSecondShown ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-6 -translate-y-3",
                ].join(" ")}
              >
                <img
                  src="/assets/Mission_1.jpg"
                  alt="Creative Vision"
                  className="w-[280px] h-[350px] rounded-2xl shadow-2xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                  loading="lazy"
                />
              </div>

              <div
                ref={missionFirstRef}
                className={[
                  "absolute bottom-0 right-0 z-10 transition-all duration-700 group",
                  missionFirstShown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                ].join(" ")}
              >
                <img
                  src="/assets/Mission_2.jpg"
                  alt="Our Excellence"
                  className="w-[320px] h-[400px] rounded-2xl shadow-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:rotate-2"
                  loading="lazy"
                />
              </div>
            </div>

            <div
              ref={missionContentRef}
              className={[
                "text-left transition-all duration-700",
                missionContentShown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission:</h2>
              <h2 className="text-5xl font-bold mb-6 text-gray-800 playfont">
                Building the Future of Business with AI and Process Optimization
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg mb-6 poppins-regular">
                Our mission is to revolutionize business processes by enhancing Human-Machine interactions and making
                them more efficient, intelligent, and productive. We aim to create a sustainable business environment
                that reduces process time, drives efficiency, and increases organizational value.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg mb-8 poppins-regular">
                Through the integration of Artificial Intelligence (AI) and process automation, we are enabling
                businesses to optimize operations, improve decision-making, and achieve superior performance. By
                implementing AI-driven solutions across multiple services, we aim to improve process speed, reduce
                errors, and deliver real-time insights that empower businesses to stay ahead of the competition.
              </p>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}
