import { ArrowDownRightIcon } from "@heroicons/react/16/solid";
// import carsGIF from "../../assets/cars.gif";
import carsGIF_2 from "../../assets/cars_2.gif";

export default function Hero() {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${carsGIF_2}')` }}
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
