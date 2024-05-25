import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Testimonials() {
  const url: string =
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
  ]);

  return (
    <section className="container py-16">
      <h1 className="mb-20 text-center text-4xl font-medium leading-normal md:text-6xl md:leading-normal">
        Testimonials <br /> from Our Users
      </h1>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {Array.from({ length: 10 }).map(() => (
            <article className="mr-5 w-80 flex-none bg-slate-100 p-8 md:mr-10 md:w-[42rem]">
              <p
                className={`mb-4 line-clamp-3 text-xl before:content-['"'] after:content-['"'] md:text-4xl`}
              >
                I recently had the pleasure of purchasing my dream car from
                Elite Auto Showroom, and the experience was nothing short of
                extraordinary.
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={url}
                  alt="profile"
                  className="aspect-square h-10 rounded-full"
                />
                <div>
                  <h6 className="text-sm font-medium">Acong Achmad</h6>
                  <p className="text-xs text-slate-500">CEO - Orange Tech</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
