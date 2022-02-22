import { attributes } from "../../content/termine.md";
import { useMemo } from "react";

const { terminListe } = attributes;

export const useEvents = () => {
  const events = useMemo(() => {
    const processed = terminListe.map(
      ({ time, from, to, title, description }, i) => {
        return {
          time: new Date(time).getTime(),
          key: `${time}-${i}`,
          from,
          to,
          title,
          description,
        };
      }
    );

    const now = new Date().getTime();
    const filtered = processed.filter((entry) => entry.time > now);

    return filtered.sort((a, b) => a.time < b.time);
  }, []);

  const previewEvents = useMemo(() => {
    return events.slice(0, 3);
  }, [events]);

  const result = useMemo(
    () => ({ events, previewEvents }),
    [events, previewEvents]
  );

  return result;
};
