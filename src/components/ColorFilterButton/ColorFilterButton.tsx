import React from 'react';
import { ColorFilterButtonProps } from './types';

const ColorFilterButton: React.FC<ColorFilterButtonProps> = ({ color, isActive, onClick }) => {
const baseClasses = "w-8 h-8 rounded-full mb-4 cursor-pointer transition-all duration-200";
const colorClasses = {
yellow: "bg-yellow-300",
orange: "bg-orange-300",
purple: "bg-purple-300",
green: "bg-green-300",
blue: "bg-blue-300"
};

return (
<button
className={`${baseClasses} ${colorClasses[color]} ${isActive ? 'ring-2 ring-gray-400' : ''}`}
onClick={onClick}
aria-label={`Filter by ${color}`}
/>
);
};

export default ColorFilterButton;