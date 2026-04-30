import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useBookingDelete() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success(`Booking deleted successfully.`);
    },
    onError: (error) => {
      console.log(error);
      toast.error(`Booking could not be deleted. Please try again later.`);
    },
  });

  return { isDeleting, deleteBooking };
}
