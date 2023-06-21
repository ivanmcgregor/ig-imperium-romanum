type RawCalendar = Array<{
  time: string;
  from: string;
  to?: string;
  title: string;
  description?: string;
}>;

export const calendar: RawCalendar = [
  {
    time: "2018-01-01",
    from: "01.01.2018",
    to: "03.01.2018",
    title: "vergangener Termin",
    description: "Er wird automatisch raus gefiltert, dient aber als Beispiel",
  },
];
