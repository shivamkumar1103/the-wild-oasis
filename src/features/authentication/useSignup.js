import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        "Account created successfully! Please check your email to verify your account.",
        { id: "signup-success" },
      );
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong", {
        id: "signup-error",
      });
    },
  });
  return { signup, isLoading };
}
