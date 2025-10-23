// Zustand
import { create } from "zustand";
// Shared
import { sendDataService } from "../../../shared/utils/sendDataService";
import { flightsStore } from "../../vuelos/context/flightsStore";

const baseUrl = "http://127.0.0.1:8383/api/v1";

export const reservationsStore = create((set) => ({
  id_list: [],
  passenger_list: [],
  reservation: null,

  getReservation: async () => {
    const flightCode = flightsStore().getState().flightCode;
    set({ reservation: null });

    try {
      const data = await getDataService(`${baseUrl}/reservas`);

      const result = data.filter((e) => e.codigo_vuelo == flightCode);
      set({ reservation: result.codigo });
    } catch (error) {}
  },
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
