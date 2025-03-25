"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    label: "Home",
    icon: "house",
  },
  {
    label: "Statistics",
    icon: "chart-bar-",
  },
  {
    icon: "preferences",
    label: "Preferences",
  },
];

export function AppSidebar() {
  const pathName = usePathname();

  return (
    <Sidebar className="bg-red-50" variant="inset">
      <SidebarHeader className="my-5">
        <div className="col-center">
          <Image
            src="/svg/logo.svg"
            width={32}
            height={32}
            alt="logo"
            className="mr-2"
          />
          <span className="text-red-950 text-lg font-bold">SuperFlow</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => {
              const isActive =
                item?.label === "Home" && pathName === "/"
                  ? true
                  : pathName === `/${item.label.toLowerCase()}`;

              return (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <Link
                      href={
                        item.label === "Home"
                          ? "/"
                          : `/${item?.label?.toLowerCase()}`
                      }
                      className="cursor-pointer hover:bg-red-200/50 py-3 h-auto text-red-950 text-base tracking-[0.15px]"
                    >
                      <Image
                        src={`/svg/${item.icon}.svg`}
                        width={24}
                        height={24}
                        alt="menu"
                        className="mr-2"
                      />{" "}
                      {item.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
