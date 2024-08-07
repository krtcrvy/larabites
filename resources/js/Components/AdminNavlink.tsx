import { type InertiaLinkProps, Link } from "@inertiajs/react";

const AdminNavLink = ({
  active = false,
  className = "",
  children,
  ...props
}: InertiaLinkProps & { active?: boolean }) => {
  return (
    <Link
      {...props}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
        active ? "bg-muted text-primary" : "text-muted-foreground"
      } transition-all hover:text-primary ${className}`}
    >
      {children}
    </Link>
  );
};

export default AdminNavLink;
