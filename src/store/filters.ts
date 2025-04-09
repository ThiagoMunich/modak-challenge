import { FilterProps } from "@/@types/filter-types"
import { create } from "zustand"

export const useFiltersStore = create<FilterProps>((set) => ({
  type: undefined,
  currentFilter: undefined,
  setCurrentFilter: (filter: string, type: FilterProps["type"]) =>
    set(() => ({
      currentFilter: filter,
      type: type,
    })),
  clearFilters: () => set(() => ({ currentFilter: undefined, type: undefined })),
}))
