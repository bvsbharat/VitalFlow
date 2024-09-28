"use client";
import React, { useState } from 'react';
import { NoteCardProps } from './types';
import { FaStar, FaRegStar, FaEdit } from 'react-icons/fa';

const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onToggleStar, onDelete }) => {
const [isHovered, setIsHovered] = useState(false);

const colorClasses = {
yellow: 'bg-yellow-200',
orange: 'bg-orange-200',
purple: 'bg-purple-200',
green: 'bg-green-200',
blue: 'bg-blue-200',
};

const handleEditClick = (e: React.MouseEvent) => {
e.stopPropagation();
onEdit(note);
};

const handleStarClick = (e: React.MouseEvent) => {
e.stopPropagation();
onToggleStar(note.id);
};

const handleDeleteClick = (e: React.MouseEvent) => {
e.stopPropagation();
onDelete(note.id);
};

return (
<div
className={`${colorClasses[note.color]} rounded-lg p-4 shadow-md transition-all duration-200 hover:shadow-lg`}
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}
>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold truncate">{note.title}</h3>
<div className="flex items-center space-x-2">
<button onClick={handleStarClick} className="text-yellow-500 hover:text-yellow-600">
{note.starred ? <FaStar /> : <FaRegStar />}
</button>
<button onClick={handleEditClick} className="text-gray-600 hover:text-gray-800">
<FaEdit />
</button>
</div>
</div>
<p className="text-sm text-gray-700 mb-2 line-clamp-3">{note.content}</p>
<div className="flex justify-between items-center text-xs text-gray-500">
<span>{new Date(note.createdAt).toLocaleDateString()}</span>
{isHovered && (
<button
onClick={handleDeleteClick}
className="text-red-500 hover:text-red-600 transition-colors duration-200"
>
Delete
</button>
)}
</div>
</div>
);
};

export default NoteCard;