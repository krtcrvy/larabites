import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import AuthLayout from "@/Layouts/AuthLayout";
import { Link, useForm } from "@inertiajs/react";
import type { FormEventHandler } from "react";

const VerifyEmail = ({ status }: { status?: string }) => {
  const { post, processing } = useForm({});

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("verification.send"));
  };

  return (
    <AuthLayout title="Verify Email">
      <form onSubmit={submit}>
        <Card className="w-full mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Verify Email</CardTitle>
            <CardDescription>
              Thanks for signing up! Please verify your email with the link we
              sent. Didn't receive it? We'll send another.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {status === "verification-link-sent" && (
              <div className="font-medium text-sm text-green-600">
                A new verification link has been sent to the email address you
                provided during registration.
              </div>
            )}

            <Button className="w-full" disabled={processing}>
              Resend Verification Email
            </Button>

            <Button className="w-full" variant="ghost" asChild>
              <Link href={route("logout")} method="post" as="button">
                Log Out
              </Link>
            </Button>
          </CardContent>
        </Card>
      </form>
    </AuthLayout>
  );
};

export default VerifyEmail;
