import { disciplines } from "../data/disciplines";

export default function Disciplines() {
  return (
    <section className="obs-section">
      <div className="obs-header">
        <span className="project-tag">TECHNICAL KNOWLEDGE</span>
        <h2 className="section-title">Systems i can create</h2>
      </div>
      <div className="obs-grid">
        {disciplines.map((item) => (
          <div key={item.index} className="obs-card">
            <span className="card-index">{item.index}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
