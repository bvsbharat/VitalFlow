export type NoteColor = 'yellow' | 'orange' | 'purple' | 'green' | 'blue';

export interface Note {
id: number;
title: string;
content: string;
color: NoteColor;
createdAt: string;
starred: boolean;
}

export interface NoteCardProps {
note: Note;
onEdit: (note: Note) => void;
onToggleStar: (id: number) => void;
onDelete: (id: number) => void;
}