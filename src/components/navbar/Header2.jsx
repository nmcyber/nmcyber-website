import { Book, Menu, Sunset, Trees, Zap } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { logo, socialIcons, socials } from '@/assets';
import { GradientButton } from '../shared/GradientButton';

const subMenuItemsOne = [
  {
    title: 'Blog',
    description: 'The latest industry news, updates, and info',
    icon: <Book className="size-5 shrink-0" />,
  },
  {
    title: 'Company',
    description: 'Our mission is to innovate and empower the world',
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: 'Careers',
    description: 'Browse job listing and discover our workspace',
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    title: 'Support',
    description:
      'Get in touch with our support team or visit our community forums',
    icon: <Zap className="size-5 shrink-0" />,
  },
];

const subMenuItemsTwo = [
  {
    title: 'Help Center',
    description: 'Get all the answers you need right here',
    icon: <Zap className="size-5 shrink-0" />,
  },
  {
    title: 'Contact Us',
    description: 'We are here to help you with any questions you have',
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    title: 'Status',
    description: 'Check the current status of our services and APIs',
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: 'Terms of Service',
    description: 'Our terms and conditions for using our services',
    icon: <Book className="size-5 shrink-0" />,
  },
];

const Navbar1 = () => {
  return (
    <section className=" w-full py-4 fixed top-0 left-0 z-50 backdrop-blur-[30px] outline-0 outline-fuchsia-600">
      <div className=' px-4 sm:px-8 lg:px-16 xl:px-24 '>
        <nav className="hidden justify-between lg:flex outline-0 outline-blue-400">
          <div className="flex flex-grow justify-between items-center gap-6 outline-0 outline-red-400">
            <div className="flex  ~text-sm/2xl items-center gap-2 outline-0 outline-yellow-400">
              <img
                src={logo}
                className=" ~w-8/10"
                alt="logo"
              />
              <p>
              NM<span className="bg-clip-text text-transparent font-medium bg-gradient-to-r from-[#64CDF6] to-[#64CDF6]">Cyber</span>
              </p>
            </div>
            <div className="flex items-center mx-auto ~space-x-2/6 font-poppins ~text-md/3xl  outline-0 outline-purple-400">
              <a
                className={cn(
                  '',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  }),
                )}
                href="#"
              >
                Company
              </a>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem >
                    <NavigationMenuTrigger className=" bg-transparent">
                      <span>Products</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent >
                    
                      <ul className="w-80 p-3 text-foreground">
                        <NavigationMenuLink>
                          {subMenuItemsOne.map((item, idx) => (
                            <li key={idx}>
                              <a
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline border-none outline-none transition-colors hover:bg-accent/20 hover:text-tertiary focus:bg-accent/10 focus:text-accent-foreground',
                                )}
                                href="#"
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm text-white font-semibold">
                                    {item.title}
                                  </div>
                                  <p className=" ~text-xs/[0.85rem] pt-1 font-light text-foreground leading-snug ">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="">
                    <NavigationMenuTrigger className=" bg-transparent  ">Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3 text-foreground">
                        <NavigationMenuLink>
                          {subMenuItemsTwo.map((item, idx) => (
                            <li key={idx}>
                              <a
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline border-none  transition-colors hover:bg-accent/20 hover:text-tertiary focus:bg-accent/10 focus:text-accent-foreground',
                                )}
                                href="#"
                              >
                                {item.icon}
                                <div>
                                  <div className="text-sm text-white font-semibold">
                                    {item.title}
                                  </div>
                                  <p className=" ~text-xs/[0.85rem] pt-1 font-light  text-foreground leading-snug ">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <a
                className={cn(
                  '',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  }),
                )}
                href="#"
              >
                Platform
              </a>
              <a
                className={cn(
                  '',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  }),
                )}
                href="#"
              >
                Academy
              </a>
            </div>
          </div>
          <div className="flex gap-2">
          {/* -------------- THESE CAN BE ENABLED ONCE THE PLATOFMR AND/OR ACADEMY IS BUILT ----------- */}
            {/* <Button variant={'outline'}>Log in</Button>
            <Button>Sign up</Button> */}
            {/* ---------- CTA BUTTON ------ */}
            <a href="/contact">
            <GradientButton children={"Contact Us"} className="relative font-semibold px-6 py-2 rounded-2xl overflow-hidden group" />
          </a>
          </div>
        </nav>

        {/* --------------------------- MOBILE MENU --------------------------- */}

        <div className="block lg:hidden outline-0 outline-lime-400">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-white text-xl font-semibold gap-2">
              <img
                src={logo}
                className="~w-8/10"
                alt="logo"
              />
              <p>
              NM<span className="bg-clip-text text-transparent font-normal bg-gradient-to-r from-[#64CDF6] to-[#64CDF6]">Cyber</span>
              </p>
            </div>
            <Sheet className=' '>
              <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto border-none backdrop-blur-sm bg-[rgba(0,21,48,0.41)] outline-0 outline-orange-400">
                <SheetHeader>
                  <SheetTitle>

            <div className="flex items-center text-white text-xl font-semibold gap-2">
              <img
                src={logo}
                className=" ~w-8/10"
                alt="logo"
              />
              
              <p>
              NM<span className="bg-clip-text text-transparent font-normal bg-gradient-to-r from-[#64CDF6] to-[#64CDF6]">Cyber</span>
              </p>
            </div>
                  </SheetTitle>
                </SheetHeader>
                {/* --------------------------- MIDDLE MOBILE MENU SECTION --------------------------- */}
                <div className="my-8 flex flex-col gap-4">
                  <a href="#about" className="font-semibold">
                    Company
                  </a>
                  <Accordion type="single" collapsible className="w-full ">
                    <AccordionItem value="products" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        Solutions
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsOne.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            )}
                            href="#"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="resources" className="border-b-0">
                      <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                        Resources
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsTwo.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            )}
                            href="#"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">
                                {item.title}
                              </div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <a href="#" className="font-semibold pb-6">
                    Platform
                  </a>
                  {/* ------------------- MOBILE CONTACT US BUTTON ------------------- */}
                <a href="#contact">
                    <GradientButton children={"Contact Us"} className="relative font-semibold px-6 py-2 ~text-sm/lg rounded-full overflow-hidden group" />
                </a>
                </div>
                {/* --------------------------- LOWER MOBILE MENU SECTION --------------------------- */}
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 justify-start">
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Press
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Contact
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Imprint
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Sitemap
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Legal
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                        }),
                        'justify-start text-muted-foreground',
                      )}
                      href="#"
                    >
                      Cookie Settings
                    </a>
                  </div>
                  {/* <div className="mt-2 flex flex-col gap-3">
                    <Button variant={'outline'}>Log in</Button>
                    <Button>Sign up</Button>
                  </div> */}
                </div>
                    {/* -------------------- MOBILE MENU SHEET FOOTER ---------------- */}
                    <SheetFooter>
                    <div className="mb-8 flex justify-center space-x-6 md:order-last md:mb-0">
                    {socials.map(({ link, ariaLabel, iconImage: Icon }, index) => (
                        <a href={link} className="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">{ariaLabel}</span>
                        {/* <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd"
                            d={path}
                            clip-rule="evenodd"></path>
                        </svg> */}
                        <Icon size={`20`} />
                        <span className=' w-4 h-4 outline outline-lime-600'>
                        </span>
                        </a>
                    ))}
                    </div>
                    </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar1;
