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
    description: "Er wird automatisch raus gefiltert, dient aber als Beispiel"
  },
  {
    time: "2025-04-25",
    from: "25.04.2025",
    to: "27.04.2025",
    title: "Probelager",
    description:
      "Im Frühjahr erwecken wir unser Lager wieder aus dem Winterschlaf und bereiten alles auf die Saison vor"
  },
  {
    time: "2025-05-29",
    from: "29.05.2025",
    to: "01.06.2025",
    title: "Spectaculum Worms",
    description:
      "Auch 2025 würden wir gerne wieder am Spectaculum Worms teilnehmen. Die Teilnehmer werden aber noch bekannt gegeben."
  },
  {
    time: "2025-06-19",
    from: "19.06.2025",
    to: "22.06.2025",
    title: "Mittelalterspektakel Hockenheim",
    description:
      "Dieses Jahr probieren wir einen neuen Markt aus, auch wenn der Markt in Hockenheim eine längere Tradition hat. Wir sind gespannt, wie es wird."
  },
  {
    time: "2025-10-25",
    from: "25.10.2025",
    to: "26.10.2025",
    title: "Ziviler Ausflug",
    description:
      "Ausflug in ein römisches Museum"
  },
  {
    time: "2025-11-07",
    from: "07.11.2025",
    // to: "29.07.2025",
    title: "Rekrutentreff",
    description:
      "Du willst bei uns mitmachen? Dann komm zu unserem Rekrutentreff und wir lernen uns kennen! Melde dich zeitnah bei uns an."
  },
  {
    time: "2025-11-29",
    from: "29.11.2025",
    // to: "29.07.2025",
    title: "Winterwanderung",
    description:
      "Alljährliche Wanderung in der Winterausstattung (6-8km)"
  },

  {
    time: "2026-04-10",
    from: "10.04.2026",
    to: "03.05.2026",
    title: "Probelager (Termin noch offen!)",
    description:
      "Im Frühjahr erwecken wir unser Lager wieder aus dem Winterschlaf und bereiten alles auf die Saison vor"
  },
  {
    time: "2026-04-26",
    from: "26.04.2026",
    // to: "29.07.2026",
    title: "Römertag Rheinhessen in Ingelheim",
    description:
      "Der Römertag wird 2026 ganz besonders, wir werden in Ingelheim am Museum bei der Kaiserpfalz dabei sein."
  },
  {
    time: "2026-05-14",
    from: "14.05.2026",
    to: "17.05.2026",
    title: "Spectaculum Worms",
    description:
      "Auch 2026 würden wir gerne wieder am Spectaculum Worms teilnehmen. Die Teilnehmer werden aber noch bekannt gegeben."
  },
  {
    time: "2026-06-05",
    from: "05.06.2026",
    to: "06.06.2026",
    title: "Römerfest Alzey",
    description:
      "Bei diesem Römerfest waren wir bislang als Tagesgäste dabei, 2026 wollen wir auch mit Lager teilnehmen."
  },
  {
    time: "2026-06-19",
    from: "19.06.2026",
    // to: "19.06.2026",
    title: "Römerfest Villa Haselburg",
    description:
      "Ein schöner Markt auf historischer Stätte"
  },
  {
    time: "2026-07-09",
    from: "09.07.2026",
    to: "12.07.2026",
    title: "Mittelaltermarkt Großwallstadt",
    description:
      "Ein schöner Markt direkt am Main, zu dem wir immer gerne fahren"
  }
];
