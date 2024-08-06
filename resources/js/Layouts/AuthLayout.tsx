import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import type React from "react";

interface AuthLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const AuthLayout = ({ title, children }: AuthLayoutProps) => {
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
