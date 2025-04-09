type FilterType = "category" | "sort" | undefined

export interface FilterProps {
  type: FilterType
  currentFilter: string | undefined
  clearFilters: () => void
  setCurrentFilter: (filter: string, type: FilterType) => void
}
