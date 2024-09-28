'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import NoteCard from '@/components/NoteCard';
import AddNoteModal from '@/components/AddNoteModal';
import EditNoteModal from '@/components/EditNoteModal';
import { Note, NoteColor } from './types';

export default function AppContainer() {
const [notes, setNotes] = useState<Note[]>([]);
const [isLoading, setIsLoading] = useState<boolean>(true);
const [error, setError] = useState<Error | null>(null);
const [activeFilter, setActiveFilter] = useState<NoteColor | null>(null);
const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
const [editingNote, setEditingNote] = useState<Note | null>(null);

useEffect(() => {
const fetchNotes = async () => {
try {
const response = await fetch('/api/notes');
if (!response.ok) {
throw new Error('Failed to fetch notes');
}
const data = await response.json();
setNotes(data);
} catch (err) {
setError(err instanceof Error ? err : new Error('An error occurred'));
} finally {
setIsLoading(false);
}
};

fetchNotes();
}, []);

const handleAddNote = async (newNote: Omit<Note, 'id' | 'createdAt' | 'starred'>) => {
try {
const response = await fetch('/api/notes', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(newNote),
});
if (!response.ok) {
throw new Error('Failed to add note');
}
const addedNote = await response.json();
setNotes([...notes, addedNote]);
} catch (err) {
setError(err instanceof Error ? err : new Error('Failed to add note'));
}
};

const handleEditNote = async (updatedNote: Note) => {
try {
const response = await fetch(`/api/notes?id=${updatedNote.id}`, {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(updatedNote),
});
if (!response.ok) {
throw new Error('Failed to update note');
}
const editedNote = await response.json();
setNotes(notes.map(note => note.id === editedNote.id ? editedNote : note));
} catch (err) {
setError(err instanceof Error ? err : new Error('Failed to update note'));
}
};

const handleDeleteNote = async (id: number) => {
try {
const response = await fetch(`/api/notes?id=${id}`, { method: 'DELETE' });
if (!response.ok) {
throw new Error('Failed to delete note');
}
setNotes(notes.filter(note => note.id !== id));
} catch (err) {
setError(err instanceof Error ? err : new Error('Failed to delete note'));
}
};

const handleToggleStar = async (id: number) => {
const noteToUpdate = notes.find(note => note.id === id);
if (noteToUpdate) {
const updatedNote = { ...noteToUpdate, starred: !noteToUpdate.starred };
await handleEditNote(updatedNote);
}
};

const filteredNotes = activeFilter
? notes.filter(note => note.color === activeFilter)
: notes;

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;

return (
<div className="flex">
<Sidebar
onAddNote={() => setIsAddModalOpen(true)}
onFilterChange={setActiveFilter}
/>
<div className="flex-1 pl-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{filteredNotes.map(note => (
<NoteCard
key={note.id}
note={note}
onEdit={() => {
setEditingNote(note);
setIsEditModalOpen(true);
}}
onToggleStar={() => handleToggleStar(note.id)}
onDelete={() => handleDeleteNote(note.id)}
/>
))}
</div>
</div>
<AddNoteModal
isOpen={isAddModalOpen}
onClose={() => setIsAddModalOpen(false)}
onAddNote={handleAddNote}
/>
<EditNoteModal
isOpen={isEditModalOpen}
onClose={() => {
setIsEditModalOpen(false);
setEditingNote(null);
}}
onEditNote={handleEditNote}
note={editingNote}
/>
</div>
);
}