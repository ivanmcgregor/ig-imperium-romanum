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
    time: "2023-04-28",
    from: "28.04.2023",
    to: "30.04.2023",
    title: "Probelager",
    description:
      "Wie jedes Jahr schauen wir, wie unsere Ausrüstung die Zeit im Winterlager verkraftet hat",
  },
  {
    time: "2023-05-19",
    from: "19.05.2023",
    to: "21.05.2023",
    title: "Spectaculum Worms",
    description:
      "Wir sind wir auch dieses Jahr wieder auf einem der schönsten mittelalterlichen Märkte deutschlands",
  },
  {
    time: "2023-06-16",
    from: "16.06.2023",
    to: "18.06.2023",
    title: "Markt Wörth",
    description:
      "Antikes Treiben in entspannter Atmosphäre an der Stadtmauer von Wörth am Main",
  },
];
