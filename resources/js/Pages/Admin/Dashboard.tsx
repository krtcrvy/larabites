import AdminLayout from "@/Layouts/AdminLayout";
import type { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
  return (
    <AdminLayout
      user={auth.user}
      title="Admin Dashboard"
      header="Admin Dashboard"
    >
      <div>
        <h2>Hello World</h2>
      </div>
    </AdminLayout>
  );
}
