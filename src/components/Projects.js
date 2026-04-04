import React from "react";

const projects = [
  {
    title: "AI Interview App",
    desc: "Mock interview platform using AI",
  },
  {
    title: "Fantasy Cricket App",
    desc: "End-to-end fantasy cricket platform",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div key={i} className="card">
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
}