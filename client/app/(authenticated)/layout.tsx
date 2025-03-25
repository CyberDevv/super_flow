import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full relative">
        <SidebarTrigger className="absolute" />
        <div className="lg:h-screen lg:min-h-screen lg:overflow-hidden">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default layout;
