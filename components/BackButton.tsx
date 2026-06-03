"use client";

export default function BackButton() {

  return (
    <button
      onClick={() => window.history.back()}
      className="group inline-flex items-center gap-3 uppercase tracking-[0.35em] text-[10px] text-gray-400 hover:text-white transition duration-500"
    >

      <span className="text-lg group-hover:-translate-x-1 transition duration-500">
        ←
      </span>

      Back
    </button>
  );
}