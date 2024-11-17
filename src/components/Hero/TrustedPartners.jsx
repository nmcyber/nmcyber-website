import { motion } from 'framer-motion';

const partners = [
  { name: 'Huntress', logo: huntressLogo },
  { name: 'Proofpoint', logo: proofpointLogo },
  { name: 'Sophos', logo: sophosLogo },
];

const TrustedPartners = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex flex-col gap-y-2 text-center relative py-4 z-30 outline-0 outline-fuchsia-500 "
    >
      <h3 className=" font-jarkata text-gradient-clip text-white font-medium ~text-sm/2xl pb-0 capitalize">Our Trusted partners</h3>
                  {/* -- STARS FOR PARTNERS STRIP -- */}
      <div className="flex justify-center items-center space-x-8 py-0 outline-0 outline-lime-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <div className=" ~py-4/6 md:~px-2/28 flex justify-center items-center ~space-x-4/20 outline-0 outline-orange-500">
        {partners.map((partner) => (
          <img  key={partner.name} src={partner.logo} alt={partner.name} className="~h-6/10 bg-transparent object-cover outline-0 outline-lime-600 " />
        ))}
      </div>
    </motion.section>
  );
};

export default TrustedPartners;

// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

import AutoScroll from 'embla-carousel-auto-scroll';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { huntressLogo, proofpointLogo, sophosLogo } from '@/assets';

const logos = [
  {
    id: 'logo-1',
    description: 'Logo 1',
    image: 'https://www.shadcnblocks.com/images/block/logos/astro.svg',
  },
  {
    id: 'logo-2',
    description: 'Logo 2',
    image: 'https://www.shadcnblocks.com/images/block/logos/figma.svg',
  },
  {
    id: 'logo-3',
    description: 'Logo 3',
    image: 'https://www.shadcnblocks.com/images/block/logos/nextjs.svg',
  },
  {
    id: 'logo-4',
    description: 'Logo 4',
    image: 'https://www.shadcnblocks.com/images/block/logos/react.png',
  },
  {
    id: 'logo-5',
    description: 'Logo 5',
    image: 'https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg',
  },
  {
    id: 'logo-6',
    description: 'Logo 6',
    image: 'https://www.shadcnblocks.com/images/block/logos/supabase.svg',
  },
  {
    id: 'logo-7',
    description: 'Logo 7',
    image: 'https://www.shadcnblocks.com/images/block/logos/tailwind.svg',
  },
  {
    id: 'logo-8',
    description: 'Logo 8',
    image: 'https://www.shadcnblocks.com/images/block/logos/vercel.svg',
  },
];

export const Logos3 = () => {
  return (
    <section className="py-32 relative z-30">
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Trusted by these companies
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
