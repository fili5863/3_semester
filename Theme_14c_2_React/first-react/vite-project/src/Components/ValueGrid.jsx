import ValueCard from "./ValueCard";

export default function ValueGrid() {
  return (
    <section className="valueGrid">
      <div className="services">
        <h4>Our services</h4>
        <h2>Where we can add value</h2>
        <div className="container">
          <ValueCard />
          <ValueCard />
          <ValueCard />
          <ValueCard />
          <ValueCard />
          <ValueCard />
        </div>
      </div>
    </section>
  );
}
