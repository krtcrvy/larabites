import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import type { FormEventHandler } from "react";

const ForgotPassword = ({ status }: { status?: string }) => {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("password.email"));
  };

  return (
    <AuthLayout title="Forgot Password">
      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <Card className="w-full mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Forgot Password</CardTitle>
            <CardDescription>
              Forgot your password? Enter your email to receive a reset link.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
              <InputError message={errors.email} />
            </div>

            <Button className="w-full" disabled={processing}>
              Email Password Reset Link
            </Button>
          </CardContent>
        </Card>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
