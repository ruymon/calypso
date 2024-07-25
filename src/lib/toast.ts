import { toast } from "sonner";

const errorToastsQueue = new Set<string>();

export function addErrorToastToQueue(message: string) {
  if (!errorToastsQueue.has(message)) {
    errorToastsQueue.add(message);

    toast.error(message, {
      onDismiss: () => errorToastsQueue.delete(message),
    });
  }
}
