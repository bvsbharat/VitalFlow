export type NoteColor = 'yellow' | 'orange' | 'purple' | 'green' | 'blue';

export interface Note {
id: number;
title: string;
content: string;
color: NoteColor;
createdAt: string;
starred: boolean;
}

export interface EditNoteModalProps {
isOpen: boolean;
onClose: () => void;
onEditNote: (note: Note) => void;
note: Note | null;
}