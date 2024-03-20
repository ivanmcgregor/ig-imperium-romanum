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
  {
    time: "2024-05-10",
    from: "10.05.2024",
    to: "12.05.2024",
    title: "Spectaculum Worms",
    description:
      "Auch 2024 wollen wir wieder Kultur und gute Laune im Wormser Wäldchen verbreiten",
  },
  {
    time: "2024-06-16",
    from: "16.06.2024",
    to: "16.06.2024",
    title: "Römerfest Villa Haselburg",
    description:
      "Im Park der römischen Villa Haselburg wird ein Römer und Keltenmarkt stattfinden",
  },
  {
    time: "2024-07-12",
    from: "12.07.2024",
    to: "14.07.2024",
    title: "Historischer Markt Großwallstadt",
    description:
      "Wir freuen uns am 7. Markt der Genii Loci am Main dabei zu sein",
  },
];
