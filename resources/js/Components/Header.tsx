import ApplicationLogo from "@/Components/ApplicationLogo";
import { ModeToggle } from "@/Components/ModeToggle";
import { Button } from "@/Components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { Link } from "@inertiajs/react";
import { Menu } from "lucide-react";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

const Header = () => {
  return (
    <header>
      <nav className="shadow-sm px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <ApplicationLogo className="mr-2 w-8 h-8" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              {appName}
            </span>
          </Link>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href={route("login")}>Log in</Link>
            </Button>
            <Button asChild>
              <Link href={route("register")}>Get started</Link>
            </Button>
            <ModeToggle />
          </div>

          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <ApplicationLogo className="h-8 w-8" />
                    <span className="sr-only">LaraBits</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Home
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Menu
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </nav>

                <div className="flex items-center gap-2 mt-auto">
                  <ModeToggle />
                  <Button variant="ghost" asChild>
                    <Link href={route("login")}>Log in</Link>
                  </Button>
                  <Button asChild>
                    <Link href={route("register")}>Get started</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
