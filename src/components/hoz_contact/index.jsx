import React from "react";

export default function ContactForm() {
  // Generate 15-minute interval options dynamically (9 AM–9 PM)
  const timeSlots = [];
  for (let hour = 9; hour < 21; hour++) {
    for (let min = 0; min < 60; min += 15) {
      const startHour = hour.toString().padStart(2, "0");
      const startMin = min.toString().padStart(2, "0");
      const endHour = min === 45 ? (hour + 1).toString().padStart(2, "0") : startHour;
      const endMin = ((min + 15) % 60).toString().padStart(2, "0");
      timeSlots.push(`${startHour}:${startMin} – ${endHour}:${endMin} IST`);
    }
  }

  return (
    <section
      className="bg-[#041A2F] text-white pt-8 pb-14 px-6 rounded-md max-w-[92%] mx-auto
                 shadow-xl shadow-black/30"
    >
      <div className="max-w-8xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Talk to Our Experts</h2>

        <form className="flex flex-wrap items-center justify-center gap-6">
          <input
            type="text"
            placeholder="Name*"
            className="w-52 md:w-56 px-3 py-2 border border-white bg-transparent text-white placeholder-white/70 rounded
                       shadow-sm focus:shadow-md transition-shadow
                       focus:outline-none focus:ring-2 focus:ring-[#E1B346]"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-52 md:w-56 px-3 py-2 border border-white bg-transparent text-white placeholder-white/70 rounded
                       shadow-sm focus:shadow-md transition-shadow
                       focus:outline-none focus:ring-2 focus:ring-[#E1B346]"
          />
          <input
            type="tel"
            placeholder="Phone*"
            className="w-40 md:w-48 px-3 py-2 border border-white bg-transparent text-white placeholder-white/70 rounded
                       shadow-sm focus:shadow-md transition-shadow
                       focus:outline-none focus:ring-2 focus:ring-[#E1B346]"
          />
          <input
            type="text"
            placeholder="Requirements*"
            className="w-60 md:w-72 px-3 py-2 border border-white bg-transparent text-white placeholder-white/70 rounded
                       shadow-sm focus:shadow-md transition-shadow
                       focus:outline-none focus:ring-2 focus:ring-[#E1B346]"
          />

          {/* IST Time Dropdown (15-min slots) */}
          <select
            name="preferredIstTime"
            defaultValue=""
            className="w-56 md:w-60 px-3 py-2 border border-white bg-transparent text-white rounded
                       shadow-sm focus:shadow-md transition-shadow
                       focus:outline-none focus:ring-2 focus:ring-[#E1B346]"
          >
            <option value="" disabled className="bg-[#041A2F] text-white">
              Preferred Time (IST)
            </option>
            {timeSlots.map((slot, idx) => (
              <option key={idx} className="bg-[#041A2F] text-white" value={slot}>
                {slot}
              </option>
            ))}
          </select>

          <button
            className="relative overflow-hidden group px-6 py-3 border tracking-[2px] text-[13px] text-white font-semibold
                       isolation-auto border-gray-50 rounded
                       shadow-md hover:shadow-lg active:shadow
                       transition-all
                       before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full
                       before:-left-full before:hover:left-0 before:bg-white hover:text-[#f0bc44]
                       before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10"
          >
            SUBMIT NOW
          </button>
        </form>
      </div>
    </section>
  );
}
