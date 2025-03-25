"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { Button } from "./ui/button";
import Preferences from "./Preferences";
import React from "react";

export const MenuButton = ({
  icon,
  shortcut,
  label,
  onClick,
}: {
  icon: string;
  shortcut: string;
  label: string;
  onClick?: () => void;
}) => {
  return (
    <MenubarItem
      onClick={onClick}
      className="cursor-pointer focus:bg-red-100 py-3 text-red-950 text-base tracking-[0.15px]"
    >
      <Image
        src={`/svg/${icon}.svg`}
        width={24}
        height={24}
        alt="menu"
        className="mr-2"
      />{" "}
      {label} <MenubarShortcut>{shortcut}</MenubarShortcut>
    </MenubarItem>
  );
};

const Menu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Menubar className="bg-none p-0 border-none">
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Button size="icon" className="~rounded-[1rem]/[1.5rem] ~p-4/6">
              <Image src="/svg/menu.svg" width={32} height={32} alt="menu" />
            </Button>
          </MenubarTrigger>
          <MenubarContent className="min-w-[250px] rounded-xl py-2 px-0 bg-red-50">
            <MenuButton
              icon={"chart-bar-"}
              shortcut="Ctrl + S"
              label="Statistics"
              onClick={() => setOpen(true)}
            />
            <MenuButton
              icon={"preferences"}
              shortcut="Ctrl + P"
              label="Preferences"
            />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Preferences open={open} setOpen={setOpen} />
    </>
  );
};

export default Menu;
