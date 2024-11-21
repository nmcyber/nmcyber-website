// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

import AutoScroll from 'embla-carousel-auto-scroll';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { curtinUniversityLogo, universityOfCambridgeLogo, charteredAccountantsOfAustraliaLogo } from '@/assets';

const logos = [
  {
    id: 'logo-1',
    description: 'Curtin University, Australia',
    image: curtinUniversityLogo,
  },
  {
    id: 'logo-2',
    description: 'University of Cambridge',
    image: universityOfCambridgeLogo,
  },
  {
    id: 'logo-3',
    description: 'Chartered Accountants of Australia',
    image: charteredAccountantsOfAustraliaLogo,
  },
];

export const Clients = () => {
  return (
    <section className="py-32 relative z-30">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Satisfied Clients
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="basis-1/3 pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className="h-7 w-auto"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};