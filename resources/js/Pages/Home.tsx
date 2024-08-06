import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

const Home = () => {
  return (
    <>
      <Head title="Home" />
      <MainLayout>
        <main>
          <h1>Welcome to Laravel</h1>
          <p>This is a Laravel React preset application.</p>
        </main>
      </MainLayout>
    </>
  );
};

export default Home;
