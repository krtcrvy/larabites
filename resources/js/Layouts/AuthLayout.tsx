import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import type { PropsWithChildren } from "react";

const AuthLayout = ({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) => {
  return (
    <>
      <Head title={title} />
      <Header />
      <div className="flex flex-col justify-center px-6 h-screen lg:py-0">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default AuthLayout;
