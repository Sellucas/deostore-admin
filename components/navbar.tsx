import { UserButton, auth } from "@clerk/nextjs";
import { Bell } from "lucide-react";

import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "./ui/separator";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId: userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">

          <Popover>
            <PopoverTrigger>
              <Button variant="ghost" size="icon">
                <Bell size={20} />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="grid gap-4 mb-4">
                <div className="space-y-1">
                  <h4 className="font-medium leading-none">Notificações</h4>
                  <p className="text-sm text-muted-foreground">
                    Suas mais recentes notificações.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold">🎯 Lorem ipsum dolor sit amet</h4>
                <p className="text-sm text-muted-foreground">consectetur adipisicing elit. Modi velit, debitis fuga cumque amet
                  obcaecati perferendis repellat temporibus!
                </p>
                <span className="text-xs">Fev 12, 2023</span>
              </div>
              <Separator className="my-2" />
              <div>
                <h4 className="font-semibold">🎯 Lorem ipsum dolor sit amet</h4>
                <p className="text-sm text-muted-foreground">consectetur adipisicing elit. Modi velit, debitis fuga cumque amet
                  obcaecati perferendis repellat temporibus!
                </p>
                <span className="text-xs">Jul 22, 2023</span>
              </div>
            </PopoverContent>
          </Popover>


          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
