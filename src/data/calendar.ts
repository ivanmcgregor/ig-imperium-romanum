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
    time: "2025-02-08",
    from: "08.02.2025",
    // to: "08.02.2025",
    title: "Winterwanderung",
    description:
      "Wanderung in der Winterausstattung",
  },
  {
    time: "2025-04-12",
    from: "12.04.2025",
    // to: "08.02.2025",
    title: "Limesmarsch",
    description:
      "Wir wollen eine größere Wanderung entlang des Limes machen",
  },
  {
    time: "2025-04-25",
    from: "25.04.2025",
    to: "27.04.2025",
    title: "Probelager",
    description:
      "Im Frühjahr erwecken wir unser Lager wieder aus dem Winterschlaf und bereiten alles auf die Saison vor",
  }
  ,{
    time: "2025-05-29",
    from: "29.05.2025",
    to: "01.06.2025",
    title: "Spectaculum Worms",
    description:
      "Auch 2025 würden wir gerne wieder am Spectaculum Worms teilnehmen. Die Teilnehmer werden aber noch bekannt gegeben.",
  },
  {
    time: "2025-06-19",
    from: "19.06.2025",
    to: "22.06.2025",
    title: "Mittelalterspektakel Hockenheim",
    description:
      "Dieses Jahr probieren wir einen neuen Markt aus, auch wenn der Markt in Hockenheim eine längere Tradition hat. Wir sind gespannt, wie es wird.",
  },
  {
    time: "2025-10-25",
    from: "25.10.2025",
    to: "26.10.2025",
    title: "Ziviler Ausflug",
    description:
      "Ausflug ins Museum oder ähnliches",
  },
  {
    time: "2025-11-29",
    from: "29.11.2025",
    // to: "29.07.2025",
    title: "Winterwanderung",
    description:
      "Alljährliche Wanderung in der Winterausstattung",
  },
];
