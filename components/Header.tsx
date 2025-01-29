import { ModeToggle } from "@/components/ModeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 shadow-lg bg-background opacity-75 sticky top-0 z-50">
      <SidebarTrigger />
      <h2>FuzzyChat</h2>
      <NavigationMenu className="hidden md:flex gap-4">
        <NavigationMenuItem
          className="btn bg-accent py-2 px-4 rounded-xl shadow-md hover:shadow-xl"
          asChild
        >
          <NavigationMenuLink href="/">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem
          className="btn bg-accent py-2 px-4 rounded-xl shadow-md hover:shadow-xl"
          asChild
        >
          <NavigationMenuLink href="/">About</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem
          className="btn bg-accent py-2 px-4  rounded-xl shadow-md hover:shadow-xl"
          asChild
        >
          <NavigationMenuLink href="/">Chat</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
      <ModeToggle />
    </div>
  );
}

export default Header;
