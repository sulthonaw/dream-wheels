import carsGIF from "../../assets/cars_2.gif";

export default function CTA() {
  return (
    <section className="py-16">
      <div
        className="bg-cover bg-bottom"
        style={{ backgroundImage: `url('${carsGIF}')` }}
      >
        <div className="bg-slate-900/50 py-16">
          <div className="mx-auto max-w-3xl px-4 text-center text-white">
            <h1 className="mb-5 text-4xl md:text-6xl">
              Spend your money for your dream car
            </h1>
            <p className="mb-5 font-light opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              tempora.
            </p>
            <button className="btn rounded-full bg-white text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
