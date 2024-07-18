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
    <header id="top">
      <div className="w-full">
        <nav className="flex justify-between items-center mx-auto w-full py-8">
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
                <MenuIcon aria-label="Menu Icon" size={32} />
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
                        <a
                          href={link.href}
                          className="text-left"
                          {...(link.name === 'Resume' && { target: '_blank' })}
                        >
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
