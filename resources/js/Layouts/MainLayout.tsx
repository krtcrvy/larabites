import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import type { PropsWithChildren } from "react";

const MainLayout = ({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) => {
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
