export type ColorFilter = 'yellow' | 'orange' | 'purple' | 'green' | 'blue';

export interface SidebarProps {
onAddNote: () => void;
onFilterChange: (filter: ColorFilter | null) => void;
}