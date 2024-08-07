import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import AuthLayout from "@/Layouts/AuthLayout";
import { useForm } from "@inertiajs/react";
import type { FormEventHandler } from "react";

const ResetPassword = ({ token, email }: { token: string; email: string }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: "",
    password_confirmation: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("password.store"), {
      onFinish: () => reset("password", "password_confirmation"),
    });
  };

  return (
    <AuthLayout title="Reset Password">
      <form onSubmit={submit}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Reset Password</CardTitle>
            <CardDescription>Reset Password</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  autoComplete="username"
                  onChange={(e) => setData("email", e.target.value)}
                />
                <InputError message={errors.email} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  autoComplete="new-password"
                  onChange={(e) => setData("password", e.target.value)}
                />
                <InputError message={errors.password} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password_confirmation">Confirm Password</Label>
                <Input
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  autoComplete="new-password"
                  onChange={(e) =>
                    setData("password_confirmation", e.target.value)
                  }
                />
                <InputError message={errors.password_confirmation} />
              </div>

              <Button className="w-full" disabled={processing}>
                Reset Password
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
