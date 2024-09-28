"use client";
import React from 'react';
import { ColorFilterProps, ColorType } from './types';

const ColorFilter: React.FC<ColorFilterProps> = ({ activeColor, onColorChange }) => {
const colors: ColorType[] = ['yellow', 'orange', 'purple', 'green', 'blue'];

const colorClasses: Record<ColorType, string> = {
yellow: 'bg-yellow-300',
orange: 'bg-orange-300',
purple: 'bg-purple-300',
green: 'bg-green-300',
blue: 'bg-blue-300',
};

const handleColorClick = (color: ColorType) => {
onColorChange(color === activeColor ? null : color);
};

return (
<div className="flex flex-col items-center space-y-4">
{colors.map((color) => (
<button
key={color}
onClick={() => handleColorClick(color)}
className={`w-8 h-8 rounded-full ${colorClasses[color]} ${
activeColor === color ? 'ring-2 ring-gray-600' : ''
} hover:opacity-80 transition-opacity duration-200`}
aria-label={`Filter by ${color}`}
/>
))}
</div>
);
};

export default ColorFilter;