import { Bars3Icon, ShoppingBagIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export default function Header() {
  const [onScrollClassName, setOnScrollClassName] = useState<string>("");
  // const [widthScreen, setWidthScreen] = useState<number>();

  const onScroll = () => {
    if (window !== undefined) {
      // setWidthScreen(window.screen.width);
      window.scrollY > 1
        ? setOnScrollClassName(
            "bg-slate-950/50 backdrop-blur-2xl border-b-2 border-white",
          )
        : setOnScrollClassName("");
    }
  };

  // const getWidthScreen = () => {};

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const nav: Array<string> = ["About Us", "Product", "Events", "Testimonials"];

  return (
    <header
      className={`${onScrollClassName} fixed left-0 right-0 top-0 z-50 w-full`}
    >
      <nav className="container grid grid-cols-3 items-center justify-between bg-cover py-4 text-white">
        <h1 className="font-semibold">Dream Wheels</h1>
        <ul
          //  className="hidden gap-5 *:font-light md:flex"
          className="order-4 col-span-3 flex flex-col gap-5 *:font-light"
        >
          {nav.map((value: string, index: number) => (
            <li key={index} className="btn cursor-pointer hover:underline">
              {value}
            </li>
          ))}
        </ul>
        <div className="col-span-2 flex items-center justify-end gap-2">
          <button className="btn group flex gap-3 text-nowrap rounded-full bg-white text-black *:transition-all">
            <p>Shop Now</p>
            <ShoppingBagIcon className="hidden h-4 w-4 transition-all group-hover:block" />
          </button>
          <button className="btn">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
