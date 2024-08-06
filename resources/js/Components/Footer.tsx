import { Link } from "@inertiajs/react";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="p-4 bg-stone-50 sm:p-6 dark:bg-stone-800">
      <div className="mx-auto max-w-screen-xl flex items-center justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; {year}{" "}
          <Link href="/" className="hover:underline">
            {appName}
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
