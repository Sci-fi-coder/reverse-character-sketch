'use client';

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    sketch: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [fakeCount] = useState(23 + Math.floor(Math.random() * 10)); // 23-32 fake submissions

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/submit-sketch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center px-6 py-12 text-gray-200">
      {/* Header */}
      <h1
        className="text-7xl font-extrabold mb-12 text-center bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-400 bg-clip-text text-transparent animate-glow-text"
      >
        ID Invaded
      </h1>

      {/* Project Description */}
      <section className="max-w-4xl bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-3xl p-10 mb-16 shadow-lg border border-purple-700 animate-fadeIn">
        <p className="mb-6 text-justify text-lg leading-relaxed tracking-wide">
          <span className="font-semibold text-pink-400">Identity</span> — a concept as elusive as it is profound. What truly defines who we are? Is it the image we hold of ourselves, or the fragmented reflections perceived by those around us? This project embarks on a journey to explore these fundamental philosophical questions:
        </p>

        <ul className="list-disc list-inside mb-6 text-purple-300 space-y-3 text-justify text-lg tracking-wide">
          <li><strong>What is identity?</strong> Is it a static essence within, or an ever-evolving dance between self-awareness and external perception?</li>
          <li><strong>How do we perceive ourselves?</strong> Through memories, feelings, and an internal narrative shaped by lived experience.</li>
          <li><strong>How do others perceive us?</strong> Through their own perspectives, biases, and the limited fragments of interaction they hold.</li>
        </ul>

        <p className="mb-6 text-justify text-lg leading-relaxed tracking-wide">
          The core goal of <em className="text-pink-400 font-semibold">ID Invaded</em> is to harness advanced artificial intelligence, leveraging multiple character sketches written by others, to reconstruct the essence of an individual. Can an AI synthesize these diverse perspectives into a cohesive representation that resonates with the original identity? The results of this experiment will be revealed soon.
        </p>

        <p className="mb-6 text-justify text-lg leading-relaxed tracking-wide italic text-purple-400">
          This project also ventures into deeper philosophical territory:<br/>
          Can a personality be recreated once the original is lost?<br/>
          Can fragments of someone’s image, encoded in the minds of those close to them, serve as a blueprint to piece together who they were?<br/>
          <br/>
          <strong>ID Invaded</strong> casts light on these mysteries, providing a surface-level understanding of identity, memory, perception, and the evolving capabilities of AI. Your participation is invaluable. I am the guinea pig 🧪 — please contribute your thoughtful character sketch of me.
        </p>
      </section>

      {/* Form */}
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-purple-600"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full mb-6 p-4 rounded-xl bg-gray-800 border border-purple-600 placeholder-purple-400 text-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full mb-6 p-4 rounded-xl bg-gray-800 border border-purple-600 placeholder-purple-400 text-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            required
          />
          <textarea
            name="sketch"
            rows={7}
            placeholder="Write your character sketch here..."
            onChange={handleChange}
            className="w-full mb-8 p-4 rounded-xl bg-gray-800 border border-purple-600 placeholder-purple-400 text-purple-100 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none transition"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-purple-700 text-white py-4 rounded-xl font-semibold tracking-wide hover:from-pink-700 hover:to-purple-800 shadow-lg transition-transform active:scale-95"
          >
            Submit Your Insight
          </button>
        </form>
      ) : (
        <div className="text-center max-w-lg bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-3xl p-8 border border-purple-700 shadow-lg animate-fadeIn">
          <h2 className="text-5xl font-extrabold mb-4 text-pink-400 animate-glow-text">Thank You!</h2>
          <p className="mb-3 text-lg">
            So far, <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 animate-glow-text">{fakeCount}</span> unique perspectives have been collected.
          </p>
          <p className="italic text-sm text-purple-400">
            Your input is securely stored and accessible only to me.
          </p>
        </div>
      )}

      {/* Custom styles */}
      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            text-shadow:
              0 0 6px #FF0080,
              0 0 12px #FF0080,
              0 0 18px #FF0080,
              0 0 24px #7928CA,
              0 0 30px #FF0080,
              0 0 36px #FF0080,
              0 0 42px #7928CA;
          }
          50% {
            text-shadow:
              0 0 8px #FF6EC7,
              0 0 16px #FF6EC7,
              0 0 24px #FF6EC7,
              0 0 32px #9B59B6,
              0 0 40px #FF6EC7,
              0 0 48px #FF6EC7,
              0 0 56px #9B59B6;
          }
        }
        .animate-glow-text {
          animation: glow 3s ease-in-out infinite alternate;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease forwards;
        }
      `}</style>
    </main>
  );
}
