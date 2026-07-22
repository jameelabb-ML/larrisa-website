import { useEffect, useState } from 'react';

/** Observes section elements matching the given ids and returns the id currently in view. */
export default function useActiveSection(ids = []) {
  const [activeId, setActiveId] = useState(ids[0] || '');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id.replace('#', '')))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
