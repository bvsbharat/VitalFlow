"use client";
import React, { useState } from 'react';
import { SidebarProps, ColorFilter } from './types';
import ColorFilterButton from '../ColorFilterButton';

const Sidebar: React.FC<SidebarProps> = ({ onAddNote, onFilterChange }) => {
const [activeFilter, setActiveFilter] = useState<ColorFilter | null>(null);

const colors: ColorFilter[] = ['yellow', 'orange', 'purple', 'green', 'blue'];

const handleFilterClick = (color: ColorFilter) => {
const newFilter = activeFilter === color ? null : color;
setActiveFilter(newFilter);
onFilterChange(newFilter);
};

return (
<div className="w-16 bg-gray-100 h-screen fixed left-0 top-0 flex flex-col items-center py-4">
<button
onClick={onAddNote}
className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center mb-6 hover:bg-gray-200 transition-colors"
>
<span className="text-2xl text-gray-600">+</span>
</button>
{colors.map((color) => (
<ColorFilterButton
key={color}
color={color}
isActive={activeFilter === color}
onClick={() => handleFilterClick(color)}
/>
))}
</div>
);
};

export default Sidebar;