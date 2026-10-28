"use client";

import { useEffect, useState } from "react";

// Types each phrase, pauses, deletes it, then moves on to the next one.
export default function Typewriter({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const phrase = phrases[index % phrases.length];

  useEffect(() => {
    const done = !deleting && length === phrase.length;
    const cleared = deleting && length === 0;
    const delay = done ? 1800 : deleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (done) setDeleting(true);
      else if (cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else setLength((l) => l + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [deleting, length, phrase]);

  return (
    <span>
      <span className="sr-only">{phrases[0]}</span>
      <span aria-hidden="true">
        {phrase.slice(0, length)}
        <span className="caret ml-0.5 font-light text-ink">|</span>
      </span>
    </span>
  );
}
