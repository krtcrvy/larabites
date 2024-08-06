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
import { Link, useForm } from "@inertiajs/react";
import type React from "react";
import type { FormEventHandler } from "react";

const Register = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("register"), {
      onFinish: () => reset("password", "password_confirmation"),
    });
  };

  return (
    <form onSubmit={submit}>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={data.name}
                autoComplete="name"
                onChange={(e) => setData("name", e.target.value)}
                required
              />
              <InputError message={errors.name} />
            </div>

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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                value={data.password}
                autoComplete="new-password"
                onChange={(e) => setData("password", e.target.value)}
                required
              />
              <InputError message={errors.password} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password_confirmation">Confirm Password</Label>
              <Input
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                autoComplete="new-password"
                onChange={(e) =>
                  setData("password_confirmation", e.target.value)
                }
                required
              />
              <InputError message={errors.password_confirmation} />
            </div>
            <Button type="submit" className="w-full" disabled={processing}>
              Create an account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              href={route("login")}
              className="text-primary underline-offset-4 hover:underline"
            >
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

Register.layout = (page: React.ReactNode) => (
  <AuthLayout title="Register" children={page} />
);

export default Register;
