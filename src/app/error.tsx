'use client';

export default function Error({
error,
reset,
}: {
error: Error;
reset: () => void;
}) {
return (
<div>
<h2>Something went wrong!</h2>
<button
className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
onClick={() => reset()}
>
Try again
</button>
</div>
)
}