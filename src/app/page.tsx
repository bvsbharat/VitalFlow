import { Metadata } from 'next';
import AppContainer from './AppContainer';

export const metadata: Metadata = {
title: 'Note Taking App',
description: 'A simple and intuitive note-taking application',
};

export default function HomePage() {
return (
<div className="p-4 text-black">
<h1 className="text-3xl font-bold mb-4">My Notes</h1>
<AppContainer />
</div>
);
}