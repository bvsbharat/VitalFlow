import { ColorFilter } from '../Sidebar/types';

export interface ColorFilterButtonProps {
color: ColorFilter;
isActive: boolean;
onClick: () => void;
}