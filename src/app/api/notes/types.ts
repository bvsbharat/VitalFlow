export interface Note {
id: number;
title: string;
content: string;
color: string;
createdAt: string;
starred: boolean;
}

export interface NoteInput {
title: string;
content: string;
color: string;
}