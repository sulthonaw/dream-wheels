export default function CTA() {
  const url: string =
    "https://plus.unsplash.com/premium_photo-1678318784591-cb64d92e14cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds";

  return (
    <section className="py-16">
      <div
        className="bg-cover bg-bottom"
        style={{ backgroundImage: `url('${url}')` }}
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
