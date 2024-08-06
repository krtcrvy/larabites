import MainLayout from "@/Layouts/MainLayout";
import type React from "react";

const Home = () => {
  return (
    <main>
      <h1>Welcome to Laravel</h1>
      <p>This is a Laravel React preset application.</p>
    </main>
  );
};

Home.layout = (page: React.ReactNode) => (
  <MainLayout title="Home" children={page} />
);

export default Home;
