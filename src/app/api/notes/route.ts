import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Note, NoteInput } from './types';

let notes: Note[] = [];
let nextId = 1;

export async function GET(request: NextRequest) {
try {
const url = new URL(request.url);
const id = url.searchParams.get('id');
if (id) {
const note = notes.find(n => n.id === parseInt(id));
if (!note) {
return NextResponse.json({ error: 'Note not found' }, { status: 404 });
}
return NextResponse.json(note);
}
return NextResponse.json(notes);
} catch (error) {
return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}
}

export async function POST(request: NextRequest) {
try {
const body: NoteInput = await request.json();
if (!body.title || !body.content || !body.color) {
return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
}
const newNote: Note = {
id: nextId++,
title: body.title,
content: body.content,
color: body.color,
createdAt: new Date().toISOString(),
starred: false
};
notes.push(newNote);
return NextResponse.json(newNote, { status: 201 });
} catch (error) {
return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
}
}

export async function PUT(request: NextRequest) {
try {
const body: Partial<Note> = await request.json();
if (!body.id) {
return NextResponse.json({ error: 'Missing note id' }, { status: 400 });
}
const noteIndex = notes.findIndex(n => n.id === body.id);
if (noteIndex === -1) {
return NextResponse.json({ error: 'Note not found' }, { status: 404 });
}
notes[noteIndex] = { ...notes[noteIndex], ...body };
return NextResponse.json(notes[noteIndex]);
} catch (error) {
return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
}
}

export async function DELETE(request: NextRequest) {
try {
const url = new URL(request.url);
const id = url.searchParams.get('id');
if (!id) {
return NextResponse.json({ error: 'Missing note id' }, { status: 400 });
}
const noteIndex = notes.findIndex(n => n.id === parseInt(id));
if (noteIndex === -1) {
return NextResponse.json({ error: 'Note not found' }, { status: 404 });
}
notes.splice(noteIndex, 1);
return NextResponse.json({ message: 'Note deleted successfully' });
} catch (error) {
return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}
}