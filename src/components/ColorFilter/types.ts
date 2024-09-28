export type ColorType = 'yellow' | 'orange' | 'purple' | 'green' | 'blue';

export interface ColorFilterProps {
activeColor: ColorType | null;
onColorChange: (color: ColorType | null) => void;
}