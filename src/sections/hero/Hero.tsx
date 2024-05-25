import { ArrowDownRightIcon } from "@heroicons/react/16/solid";

export default function Hero() {
  const url: string =
    "https://images.unsplash.com/photo-1534998367816-92fe742a94bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${url}')` }}
    >
      <div className="relative flex h-screen w-full items-center justify-center bg-slate-950/50 px-4">
        <div className="max-w-2xl text-center text-white">
          <h1 className="mb-4 text-5xl font-semibold md:text-6xl">
            Discover Your Dream Car with Us
          </h1>
          <p className="text-sm italic opacity-80 md:text-base">
            Don't wait any longer—find your dream car at{" "}
            <strong className="font-bold">Dream Wheels</strong> today! Enjoy the
            best selection, exclusive deals, and professional service. Visit our
            showroom now and make your driving dreams come true!
          </p>
        </div>
        <button className="btn absolute bottom-20 flex items-center gap-2 rounded-full border border-white text-white hover:bg-white hover:text-black">
          <p>Explore Now</p>
          <ArrowDownRightIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
