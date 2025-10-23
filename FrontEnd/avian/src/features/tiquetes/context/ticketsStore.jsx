// Zustand
import { create } from "zustand";
// Shared
import { getDataService } from "../../../shared/utils/getDataService";

const baseUrl = "http://127.0.0.1:8383/api/v1";

export const ticketsStore = create((set) => ({
  ticketsList: [],

  getTickets: async (passenger_list) => {
    set({ ticketsList: [] });
    const reservation = 1;

    try {
      const data = await getDataService(`${baseUrl}/tiquetes`);

      const result = data.filter((e) => e.codigo_reserva == reservation);
      set({ ticketsList: result });
    } catch (error) {}
  },
  clearList: async () => set({ ticketsList: [] }),
}));
