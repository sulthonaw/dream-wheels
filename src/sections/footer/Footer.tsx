import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

interface NavType {
  title: string;
  items: Array<string>;
}

export default function Footer() {
  const nav: Array<NavType> = [
    {
      title: "Company",
      items: ["About Us", "Careers", "Blog", "Help Center"],
    },
    {
      title: "Shop",
      items: ["Jerseys", "Porsche", "Brio", "Kijang GL", "Accessories"],
    },
    {
      title: "Support",
      items: [
        "Contact Us",
        "FAQs",
        "Shopping Information",
        "Return & Exchanges",
        "Warranty Information",
      ],
    },
  ];

  const url: string =
    "https://images.unsplash.com/photo-1658977357835-307ba1121ce6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <footer className="container flex flex-col-reverse gap-40 py-16 *:flex-1 md:flex-row">
      <div>
        {nav.map((value: NavType) => (
          <article className="mb-10 flex gap-5 *:flex-1">
            <h1 className="text-2xl font-medium">{value.title}</h1>
            <ul>
              {value.items.map((value: string) => (
                <li className="mb-4 text-xl text-slate-500 hover:underline">
                  {value}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div>
        <article className="md:ml-20">
          <img
            src={url}
            alt="car"
            className="mb-10 aspect-[3/2] object-cover"
          />
          <h1 className="mb-4 text-3xl font-medium leading-normal">
            Join Our Community for Special Deals and Latest News!
          </h1>
          <p className="mb-10 font-light leading-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            voluptatem cum reiciendis odio eius, dolore reprehenderit? Excepturi
            deleniti ipsam ad?
          </p>
          <ul className="flex justify-between">
            {["Instagram", "Twitter", "YouTube"].map((value: string) => (
              <li className="group flex cursor-pointer items-center gap-3">
                <p className="underline">{value}</p>
                <ArrowUpRightIcon className="h-6 w-6 transition-all group-hover:scale-125" />
              </li>
            ))}
          </ul>
        </article>
      </div>
    </footer>
  );
}
