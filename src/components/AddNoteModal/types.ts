export type NoteColor = 'yellow' | 'orange' | 'purple' | 'green' | 'blue';

export interface NewNote {
title: string;
content: string;
color: NoteColor;
}

export interface AddNoteModalProps {
isOpen: boolean;
onClose: () => void;
onAddNote: (note: NewNote) => void;
}