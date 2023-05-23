import { useMemo } from "react";
import { calendar } from "@/data/calendar";

type ParsedCalendar = Array<{
  time: number;
  key: string;
  from: string;
  to?: string;
  title: string;
  description?: string;
}>;

export const useEvents = () => {
  const events = useMemo(() => {
    const processed: ParsedCalendar = calendar.map(
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
    const filtered: ParsedCalendar = processed.filter(
      (entry) => entry.time > now
    );

    return filtered.sort((a, b) => a.time - b.time);
  }, []);

  const previewEvents = useMemo(() => {
    return events.slice(0, 3);
  }, [events]);

  return useMemo(() => ({ events, previewEvents }), [events, previewEvents]);
};
