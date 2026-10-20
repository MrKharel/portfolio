"use client";

import { useRouter } from "next/navigation";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 px-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-6xl sm:text-7xl font-bold tracking-tight text-muted-foreground/40">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-heading font-semibold">
          Page Not Found
        </h1>
        <p className="max-w-md text-sm text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It may have been
          moved or deleted.
        </p>
      </div>

      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <Button variant="outline" onClick={() => router.back()}>
          Go Back
        </Button>
        <Button nativeButton={false} render={<Link href="/" />}>
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
