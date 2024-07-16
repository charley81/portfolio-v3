import { useMediaQuery } from '@/hooks/use-media-query'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '../ui/drawer'
import { MenuIcon } from 'lucide-react'
import logo from '../../images/logo.svg?url'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import links from '../../data/links'

export default function MainNavigation() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <header>
      <div className="w-full">
        <nav className="flex justify-between items-center mx-auto w-full px-4 py-8 sm:max-w-[628px] md:max-w-[728px] lg:max-w-[1028px]">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          {isDesktop ? (
            <ul className="flex gap-4 text-custom-dark-grey font-bold">
              {links.map((link) => (
                <li key={link.href} className="hover:text-custom-primary">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          ) : (
            <Drawer direction="right">
              <DrawerTrigger>
                <MenuIcon aria-label="Menu Icon" />
              </DrawerTrigger>
              <DrawerContent>
                <VisuallyHidden.Root>
                  <DrawerHeader>
                    <DrawerTitle>Mobile Navigation</DrawerTitle>
                    <DrawerDescription>
                      Links to navigate the site
                    </DrawerDescription>
                  </DrawerHeader>
                </VisuallyHidden.Root>
                <nav className="flex items-center justify-center w-full h-screen">
                  <ul className="flex flex-col gap-4  text-custom-dark-grey font-bold">
                    {links.map((link) => (
                      <li key={link.href} className="hover:text-custom-primary">
                        <a href={link.href} className="text-left ">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </DrawerContent>
            </Drawer>
          )}
        </nav>
      </div>
    </header>
  )
}
