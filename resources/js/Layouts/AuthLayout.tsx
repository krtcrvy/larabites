import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import type { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center px-6 h-screen lg:py-0">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default AuthLayout;
