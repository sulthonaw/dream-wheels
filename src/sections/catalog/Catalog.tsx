import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

export default function Catalog() {
  const url: string =
    "https://images.unsplash.com/photo-1616361986889-3a182ffc7a23?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds";
  return (
    <section className="container py-16">
      <div className="mx-auto mb-10 max-w-4xl leading-normal">
        <h1 className="mb-10 text-center text-4xl font-medium leading-normal md:text-5xl md:leading-normal">
          Browse Our Catalog for Dream Car Perfection
        </h1>
        <ul className="flex flex-wrap justify-center gap-4">
          {Array.from({ length: 6 }).map(() => (
            <li className="rounded-full border border-slate-800 px-8 py-2 text-xs first:bg-slate-800 first:text-white md:text-sm">
              Supercar
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-10 grid grid-cols-2 gap-10 md:grid-cols-3">
        {Array.from({ length: 6 }).map(() => (
          <article className="group cursor-pointer">
            <div className="relative mb-5 aspect-square w-full overflow-hidden">
              <img
                src={url}
                alt="Product"
                className="object-cover object-center transition-all group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 hidden bg-black/70 p-4 text-white transition-all group-hover:block">
                <h1 className="mb-2 text-sm font-semibold">Highest Speed</h1>
                <p className="line-clamp-2 text-xs font-light opacity-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  itaque, accusamus repudiandae adipisci ducimus omnis
                  recusandae quia eum nemo ratione dignissimos eligendi maxime
                  autem. Nam quam laborum amet eius perferendis.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h6 className="font-medium group-hover:underline md:text-lg">
                  Techart
                </h6>
                <p className="text-sm text-slate-500 md:text-base">$291,650</p>
              </div>
              <div className="aspect-square bg-slate-700 p-2 text-white">
                <ArrowUpRightIcon className="h-6 w-6 stroke-1 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-125 md:h-10 md:w-10" />
              </div>
            </div>
          </article>
        ))}
      </div>
      <button className="btn mx-auto block rounded-full border font-normal">
        Browse All Products
      </button>
    </section>
  );
}
