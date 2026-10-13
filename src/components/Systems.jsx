import { systems } from "../data/systems";

export default function Systems() {
  return (
    <section className="aurora-section" id="systems">
      <div className="aurora-backdrop">
        <img
          src="/screenshots/Engines.png"
          alt="Engines visual"
          className="aurora-bg-img"
        />
        <div className="aurora-overlay" />
      </div>
      <div className="systems-layout">
        <div className="systems-header">
          <span className="project-tag">CREATIVITY</span>
          <h2 className="section-title">Engines i am comfortable with</h2>
        </div>
        <div className="systems-list">
          {systems.map((system) => (
            <div key={system.num} className="system-row">
              <span className="system-num">{system.num}</span>
              <div className="system-details">
                <h4>{system.title}</h4>
                <p>{system.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
