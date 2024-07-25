"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { logout } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface LogoutButtonProps {}

export function LogoutButton({}: LogoutButtonProps) {
  const router = useRouter();

  const handleLogout = async () => {
    toast.promise(logout, {
      loading: "Logging out...",
      success: () => {
        router.push("/");
        return "Logged out successfully!";
      },
      error: "Failed to logout!",
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex w-full items-center rounded-md p-2 text-sm font-medium text-muted-foreground transition-all hover:text-accent-foreground">
        Logout
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will disconnect your account and you will need to login again.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
