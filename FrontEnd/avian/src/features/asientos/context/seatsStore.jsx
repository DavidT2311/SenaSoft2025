// Zustand
import { create } from "zustand";
// Shared
import { getDataService } from "../../../shared/utils/getDataService";
import { flightsStore } from "../../vuelos/context/flightsStore";

const baseUrl = "http://127.0.0.1:8383/api/v1";

export const seatsStore = create((set) => ({
  seats_list: [],

  getSeats: async () => {
    // const flight = flightsStore().getState().flightCode;
    // console.log(flight);

    try {
      const data = await getDataService(`${baseUrl}/asientos/avion/${1}`);

      set({ seats_list: data });
    } catch (error) {}
  },
  clearList: async () => set({ seats_list: [] }),
}));
