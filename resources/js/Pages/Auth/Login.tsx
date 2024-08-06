import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Checkbox } from "@/Components/ui/checkbox";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import AuthLayout from "@/Layouts/AuthLayout";
import { Link, useForm } from "@inertiajs/react";
import type React from "react";
import type { FormEventHandler } from "react";

const Login = ({
  status,
  canResetPassword,
}: { status?: string; canResetPassword: boolean }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("login"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <>
      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      <form onSubmit={submit}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
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
                  required
                />
                <InputError message={errors.email} />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {canResetPassword && (
                    <Link
                      href={route("password.request")}
                      className="ml-auto inline-block text-sm text-primary underline-offset-4 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  )}
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  autoComplete="current-password"
                  onChange={(e) => setData("password", e.target.value)}
                  required
                />
                <InputError message={errors.password} />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  name="remember"
                  checked={data.remember}
                  onCheckedChange={(checked) =>
                    setData("remember", Boolean(checked))
                  }
                />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button type="submit" className="w-full" disabled={processing}>
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href={route("register")}
                className="text-primary underline-offset-4 hover:underline"
              >
                Register
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </>
  );
};

Login.layout = (page: React.ReactNode) => (
  <AuthLayout title="Login" children={page} />
);

export default Login;
