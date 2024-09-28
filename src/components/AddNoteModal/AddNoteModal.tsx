"use client";
import React, { useState } from 'react';
import { AddNoteModalProps, NoteColor } from './types';

const AddNoteModal: React.FC<AddNoteModalProps> = ({ isOpen, onClose, onAddNote }) => {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [color, setColor] = useState<NoteColor>('yellow');

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
if (title.trim() && content.trim()) {
onAddNote({ title, content, color });
setTitle('');
setContent('');
setColor('yellow');
onClose();
}
};

if (!isOpen) return null;

return (
<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
<div className="bg-white rounded-lg p-6 w-full max-w-md">
<h2 className="text-2xl font-bold mb-4">Add New Note</h2>
<form onSubmit={handleSubmit}>
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
placeholder="Title"
className="w-full mb-4 p-2 border border-gray-300 rounded"
required
/>
<textarea
value={content}
onChange={(e) => setContent(e.target.value)}
placeholder="Content"
className="w-full mb-4 p-2 border border-gray-300 rounded h-32"
required
/>
<div className="mb-4">
<label className="block mb-2">Color:</label>
<div className="flex space-x-2">
{['yellow', 'orange', 'purple', 'green', 'blue'].map((c) => (
<button
key={c}
type="button"
onClick={() => setColor(c as NoteColor)}
className={`w-8 h-8 rounded-full ${
color === c ? 'ring-2 ring-gray-400' : ''
} ${`bg-${c}-300`}`}
/>
))}
</div>
</div>
<div className="flex justify-end space-x-2">
<button
type="button"
onClick={onClose}
className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
>
Cancel
</button>
<button
type="submit"
className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
>
Add Note
</button>
</div>
</form>
</div>
</div>
);
};

export default AddNoteModal;