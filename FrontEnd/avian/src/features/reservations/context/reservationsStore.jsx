// Zustand
import { create } from "zustand";
// Shared
import { sendDataService } from "../../../shared/utils/sendDataService";

const baseUrl = "http://127.0.0.1:8383/api/v1";

export const reservationsStore = create((set) => ({
  id_list: [],
  passenger_list: [],

  addPassenger: async (passenger_list) => {
    set({ id_list: [] });

    try {
      const data = await sendDataService(
        `${baseUrl}/pasajeros`,
        passenger_list
      );
      set({ id_list: data });
    } catch (error) {}
  },
  clearList: async () => set({ id_list: [] }),
}));
