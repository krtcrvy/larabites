import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import type React from "react";

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const MainLayout = ({ title, children }: MainLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
