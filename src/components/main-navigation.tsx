import { useMediaQuery } from '@/hooks/use-media-query'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from './ui/drawer'
import { MenuIcon } from 'lucide-react'

export default function MainNavigation() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return isDesktop ? (
    <h1 className="text-4xl">Chris Harley</h1>
  ) : (
    <div className="">
      <h1 className="text-4xl">Chris Harley</h1>
      <Drawer direction="right">
        <DrawerTrigger>
          <MenuIcon size={24} />
        </DrawerTrigger>
        <DrawerHeader>
          <DrawerTitle hidden>
            Main mobile navigation menu slide in drawer
          </DrawerTitle>
        </DrawerHeader>
        <DrawerContent>Some drawer content in here</DrawerContent>
      </Drawer>
    </div>
  )
}
