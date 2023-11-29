'use client';

import React, { FC, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react';
import Logo from './Logo';
import ThemeButton from './ThemeButton';

const Navibar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar
      position='sticky'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='sm:hidden'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>
      <NavbarContent justify='start'>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#test'>
            home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#test' color='foreground'>
            about
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#test'>
            works
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <ThemeButton />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color='foreground' href='#test'>
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color='foreground' href='#test'>
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color='foreground' href='#test'>
            Home
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Navibar;
