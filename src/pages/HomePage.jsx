import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-800">
      <section className="bg-[#48BFE3] text-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">LaurMed – Your AI Doctor, 24/7</h1>
        <p className="text-lg mb-4">Free, multilingual medical guidance from anywhere.</p>
        <button className="bg-white text-[#48BFE3] font-semibold px-6 py-2 rounded-full shadow">
          Start Consultation
        </button>
      </section>
    </div>
  );
}