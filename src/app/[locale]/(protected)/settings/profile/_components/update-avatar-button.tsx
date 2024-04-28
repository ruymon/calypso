"use client";

import { Input } from "@/components/ui/input";
import { updateProfileAvatar } from "@/lib/profile";
import { useScopedI18n } from "@/locales/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface UpdateAvatarButtonProps {}

export function UpdateAvatarButton({}: UpdateAvatarButtonProps) {
  const t = useScopedI18n("settings.profile.avatarCard");
  const router = useRouter();

  async function handleAvatarChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      await updateProfileAvatar(file);
      toast.success("Avatar updated successfully!");
      router.refresh();
    } catch (error) {
      toast.error("Failed to update avatar!", {
        description: error as string,
      });
    }
  }

  return (
    <Input
      className="w-full"
      type="file"
      id="avatar"
      name="avatar"
      accept="image/*"
      onChange={handleAvatarChange}
    />
  );
}
