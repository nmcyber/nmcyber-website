import { useState } from 'react';
import { MenuIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { logo, socialIcons, socials } from '@/assets';
import { subMenuItemsOne, subMenuItemsTwo } from '@/Constants';
import { Button, buttonVariants } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

import Logo from '../shared/Logo';
import { GradientButton } from '../shared/GradientButton';
import ContactFormModal from '../Contact/ContactFormModal';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Navbar1 = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');


  const openContactModal = (e) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  return (
    <section className=" w-full py-4 fixed top-0 left-0 z-50 backdrop-blur-[30px]  outline-0 outline-fuchsia-600">
      <div className=' px-4 sm:px-8 lg:px-16 xl:px-24 '>
        <nav className="hidden justify-between lg:flex outline-0 outline-blue-400">
          <div className="flex flex-grow justify-between items-center gap-6 outline-0 outline-red-400">
                  {/* LOGO COMPONENT */}
            <>
             <Logo />
            </>
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
                                <item.icon className="size-5 shrink-0"  />
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
                                <item.icon className="size-5 shrink-0"  />
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
          </a>
            <GradientButton children={"Contact Us"} className="relative font-semibold px-6 py-2 rounded-2xl overflow-hidden group" />
          </div>
        </nav>

        {/* --------------------------- MOBILE MENU --------------------------- */}

        <div className="block lg:hidden outline-0 outline-lime-400">
          <div className="flex items-center justify-between">
           <Logo />
            <Sheet className=' '>
              <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                  <MenuIcon className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto border-none backdrop-blur-sm bg-[rgba(0,21,48,0.41)] outline-0 outline-orange-400">
                <SheetHeader>
                  <SheetTitle>
            <Logo />
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
                             <item.icon className="size-5 shrink-0"  />
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
                             <item.icon className="size-5 shrink-0"  />
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
                {/* <a href="#contact" onClick={openContactModal}>
                    <GradientButton children={"Contact Us"} className="relative font-semibold px-6 py-2 ~text-sm/lg rounded-full overflow-hidden group" />
                </a> */}
                { isMobile && ( <ContactFormModal onClose={() => setIsContactModalOpen(false)} /> )}
                </div>
                {/* --------------------------- LOWER MOBILE MENU SECTION --------------------------- */}
                  {/* <div className="grid grid-cols-2 justify-start">
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
                  </div> */}
                  {/* <div className="mt-2 flex flex-col gap-3">
                    <Button variant={'outline'}>Log in</Button>
                    <Button>Sign up</Button>
                  </div> */}
                {/* <div className="border-t pt-4">
                </div> */}
                    {/* -------------------- MOBILE MENU SHEET FOOTER ---------------- */}
                    <SheetFooter>
                    <div className="mb-8 flex justify-start space-x-6 md:order-last md:mb-0">
                    {socials.map(({ link, ariaLabel, iconImage: Icon }, index) => (
                        <a href={link} key={index} className="text-gray-400 hover:text-gray-500">
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
