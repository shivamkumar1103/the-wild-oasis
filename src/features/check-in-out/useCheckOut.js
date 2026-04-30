import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckOut() {
  const queryClient = useQueryClient();
  const { mutate: checkOut, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} has been checked out successfully!`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (error) => {
      console.error(error);
      toast.error("Booking could not be checked out");
    },
  });

  return { checkOut, isCheckingOut };
}
