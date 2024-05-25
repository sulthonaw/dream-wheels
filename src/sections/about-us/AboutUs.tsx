interface Statistic {
  title: string;
  decription: string;
}

export default function AboutUs() {
  const url: string =
    "https://images.unsplash.com/photo-1643142314913-0cf633d9bbb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const statistics: Array<Statistic> = [
    {
      title: "1000+ Products",
      decription: "ensuring you find the perfect fit",
    },
    {
      title: "1000+ Products",
      decription: "ensuring you find the perfect fit",
    },
    {
      title: "1000+ Products",
      decription: "ensuring you find the perfect fit",
    },
  ];

  return (
    <section className="container py-16">
      <div className="mb-16 flex flex-col items-center gap-10 *:flex-1 md:flex-row">
        <h1 className="text-4xl font-medium leading-normal md:text-5xl">
          Welcome to Dream Wheels Official
        </h1>
        <p className="md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          aspernatur voluptas earum enim esse delectus libero. Ullam, veritatis
          explicabo, quidem vero dolores ipsa expedita, rerum tempore rem
          tempora asperiores quisquam?
        </p>
      </div>
      <div className="grid grid-cols-5 gap-10">
        <div
          className="relative col-span-5 bg-cover bg-no-repeat md:col-span-3"
          style={{ backgroundImage: `url('${url}')` }}
        >
          <div className="h-full min-h-40 w-full bg-gradient-to-tr from-slate-950">
            <h2 className="absolute bottom-10 left-10 text-4xl text-white">
              About Us
            </h2>
          </div>
        </div>
        <div className="col-span-5 md:col-span-2">
          {statistics.map((value: Statistic, index: number) => (
            <article
              key={index}
              className="relative mb-4 bg-slate-50 p-8 first:bg-slate-800 first:text-white"
            >
              <h6 className="text-2xl font-medium">{value.title}</h6>
              <p className="text-slate-500">{value.decription}</p>
              <span className="absolute bottom-2 right-2 text-5xl opacity-25">
                0{++index}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
