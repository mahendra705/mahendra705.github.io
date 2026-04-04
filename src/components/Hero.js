import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <h1>Hello, I'm Mahendra 👋</h1>
      <p>Full Stack Developer | React | Node.js</p>
      <button onClick={() => window.scrollTo(0, 600)}>
        View Work
      </button>
    </section>
  );
}