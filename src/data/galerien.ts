export interface GalleryType {
  link: string;
  title: string;
  date: string; // YYYY-MM-DD
  description: string;
  folder: string; // Folder containing the images (incl. cover foto)
  coverFoto: string;
  fotos: Array<string>;
}

export const galleries: Array<GalleryType> = [
  {
    link: "2024_probelager",
    title: "Probelager",
    date: "2024-04-13",
    description:
      "Bereit für die Saison. Alles glänzt und ist bereit für die ersten Besucher.",
    folder: "2024_probelager",
    coverFoto: "titel.jpg",
    fotos: [
      "_MG_1433.jpg",
      "_MG_1437.jpg",
      "_MG_1452.jpg",
      "_MG_1461.jpg",
      "_MG_1516.jpg",
      "IMG-20240413-WA0001.jpg",
      "IMG-20240413-WA0019.jpg",
      "IMG-20240413-WA0020.jpg",
      "_MG_1529.jpg",
      "_MG_1534.jpg",
      "_MG_1536.jpg",
      "IMG-20240413-WA0022.jpg",
      "IMG-20240416-WA0022.jpg",
      "IMG-20240416-WA0011.jpg",
      "IMG-20240416-WA0014.jpg",
      "IMG-20240416-WA0017.jpg",
      "_MG_1520.jpg",
      "_MG_1525.jpg",
    ],
  },
  {
    link: "2024_spectaculum",
    title: "Spectaculum Worms",
    date: "2024-05-10",
    description:
      "Auch 2024 haben wir wieder Kultur und gute Laune im Wormser Wäldchen verbreitet",
    folder: "2024_spectaculum",
    coverFoto: "IMG-20240513-WA0038.jpg",
    fotos: [
      "IMG-20240513-WA0016.jpg",
      "IMG-20240513-WA0021.jpg",
      "IMG-20240513-WA0020.jpg",
      "IMG-20240511-WA0002.jpg",
      "IMG-20240513-WA0036.jpg",
      "IMG-20240513-WA0010.jpg",
      "IMG-20240510-WA0005.jpg",
      "IMG-20240513-WA0011.jpg",
      "IMG-20240513-WA0014.jpg",
      "IMG-20240513-WA0015.jpg",
      "IMG-20240513-WA0019.jpg",
      "IMG-20240513-WA0031.jpg",
      "IMG-20240513-WA0033.jpg",
      "IMG-20240513-WA0038.jpg",
      "IMG-20240513-WA0041.jpg",
      "IMG-20240513-WA0005.jpg",
      "IMG-20240513-WA0048.jpg",
      "IMG-20240512-WA0013.jpg",
      "IMG-20240513-WA0013.jpg",
      "IMG-20240513-WA0079.jpg",
    ],
  },
  // {
  //   link: "2024_haselburg",
  //   title: "Römerfest Villa Haselburg",
  //   date: "2024-06-16",
  //   description: "",
  //   folder: "2024-",
  //   coverFoto: "",
  //   fotos: [],
  // },
  // {
  //   link: "2024_grosswallstadt",
  //   title: "Historischer Markt Großwallstadt",
  //   date: "2024-07-12",
  //   description: "",
  //   folder: "2024-",
  //   coverFoto: "",
  //   fotos: [],
  // },
  {
    link: "2023_winterwanderung",
    title: "Winterwanderung",
    date: "2023-11-19",
    description:
      "Für diese Wanderung kurz vor Wintereinbruch waren wir im Odenwald. Das Wetter war herrlich, die Strecke vielleicht stellenweise etwas herausfordernder als gedacht.",
    folder: "2023-11_winterwanderung",
    coverFoto: "title.jpeg",
    fotos: [
      "14.jpeg",
      "1.jpeg",
      "3.jpeg",
      "5.jpeg",
      "4.jpeg",
      "6.jpeg",
      "7.jpeg",
      "8.jpeg",
      "9.jpeg",
      "10.jpeg",
      "11.jpeg",
      "2.jpeg",
      "12.jpeg",
      "13.jpeg",
    ],
  },
  {
    link: "2023_woerth",
    title: "Markt Wörth",
    date: "2023-06-16",
    description:
      "Dieser Markt war anlässlich des Jubiläums der Stadt Wörth am Main. Eingeladen von unserem Freund Otto hatten wir ein ruhiges Lager mit viel Spaß.",
    folder: "2023-06_woerth",
    coverFoto: "2023-06_2.jpeg",
    fotos: [
      "2023-06-19_30.jpg",
      "2023-06-19_26.jpg",
      "2023-06-19_12.jpg",
      "2023-06-19_09.jpg",
      "2023-06-19_18.jpg",
      "2023-06-19_21.jpg",
      "2023-06_1.jpeg",
      "2023-06-19_14.jpg",
      "2023-06_5.jpeg",
      "2023-06-19_13.jpg",
      "2023-06-19_35.jpg",
      "2023-06-19_48.jpg",
      "2023-06-19_56.jpg",
      "2023-06-19_37.jpg",
      "2023-06-19_32.jpg",
      "2023-06-19_33.jpg",
      "2023-06-19_39.jpg",
      "2023-06-19_49.jpg",
      "2023-06-19_50.jpg",
      "2023-06-19_51.jpg",
      "2023-06-19_52.jpg",
      "2023-06-19_53.jpg",
      "2023-06-19_57.jpg",
      "2023-06-19_58.jpg",
      "2023-06-19_42.jpg",
      "2023-06-19_54.jpg",
      "2023-06-19_55.jpg",
      "2023-06-19_44.jpg",
      "2023-06-19_47.jpg",
      "2023-06_2.jpeg",
    ],
  },
  {
    link: "2023_probelager",
    title: "Probelager",
    date: "2023-05-02",
    description:
      "Nach einem regnerischen Start hatten wir ein super Wochenende. Wir haben mit Pfeil und Bogen und ein bisschen mit unserem Geschütz geschossen.",
    folder: "2023-05_Probelager",
    coverFoto: "0801.jpeg",
    fotos: [
      "0687.jpeg",
      "0701.jpeg",
      "0702.jpeg",
      "0715.jpeg",
      "0724.jpeg",
      "0730.jpeg",
      "0731.jpeg",
      "0886.jpeg",
      "0743.jpeg",
      "0750.jpeg",
      "0780.jpeg",
      "0801.jpeg",
      "0835.jpeg",
      "0890.jpeg",
      "0900.jpeg",
      "0905.jpeg",
    ],
  },
  {
    link: "2023_worms",
    title: "Spectaculum Worms",
    date: "2023-05-18",
    description:
      "Wir hatten wieder den Platz direkt am Eingang und durften so (zumindest vom Zeitstrahl her) den Markt eröffnen. Manch einer war so lange vor unserem Lager, dass der Rest des Marktes möglicherweise zu kurz kam. Hier sind die kreuzförmigen Helmverstärkungen bei unseren Helmen sehr gut zu sehen.",
    folder: "2023-05_Worms",
    coverFoto: "19b856f94ee0.jpeg",
    fotos: [
      "IMG_4250.jpg",
      "IMG_4255.jpg",
      "c8329398099c.jpeg",
      "00811461.jpg",
      "19b856f94ee0.jpeg",
      "130_b.jpg",
      "133.jpg",
      "274-b.jpg",
      "298-b.jpg",
      "299.jpg",
      "301-b.jpg",
      "305-c.jpg",
      "307.jpg",
      "323.jpg",
      "324.jpg",
      "712494486173458864_n.jpg",
      "2021407672312802486_n.jpg",
      "4182874136589976030_n.jpg",
      "7016422086242261065_n.jpg",
      "7339837290661312594_n.jpg",
    ],
  },
  {
    link: "2022_winterwanderung",
    title: "Winterwanderung",
    date: "2022-12-04",
    description:
      "Auch im Winter 2022 haben wir unsere Ausrüstung in kälterem Klima getestet. Das Wetter hat uns auch schöne Bilder im Schnee beschert, besonders erfreut hat das auch das Kamerateam vom SWR, das uns begleitet hat. Die Videos sind auf der Video Seite verlinkt. Danke an alle Beteiligten!",
    folder: "2022-12_winterwanderung",
    coverFoto: "titel.jpeg",
    fotos: [
      "1.jpeg",
      "2.jpeg",
      "3.jpeg",
      "4.jpeg",
      "5.jpeg",
      "6.jpeg",
      "7.jpeg",
      "8.jpeg",
      "9.jpeg",
      "10.jpeg",
      "11.jpeg",
    ],
  },
  {
    link: "2022_herbstwanderung",
    title: "Herbstwanderung",
    date: "2022-10-02",
    description:
      "Hier haben wir eine kleine Wanderung veranstaltet, um zu schauen was wir bis zur Winterwanderung alles optimieren wollen.",
    folder: "2022-10_herbstwanderung",
    coverFoto: "titel.jpg",
    fotos: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"],
  },
  {
    link: "2022_grosswallstadt",
    title: "Markt Großwallstadt",
    date: "2022-07-08",
    description:
      "Wir waren in Großwallstadt auf einem erfreulich antiken Lager direkt am Main und in super Gesellschaft.",
    folder: "2022-07_grosswallstadt",
    coverFoto: "titel.jpeg",
    fotos: [
      "Gruppe2.jpeg",
      "Gruppe3.jpeg",
      "Gruppe6.jpeg",
      "Gruppe1.jpeg",
      "Gruppe62.jpeg",
      "feldschlacht1.jpeg",
      "Feldschlacht2.jpeg",
      "Feldschlacht5.jpeg",
      "Feldschlacht8.jpeg",
      "Gruppe32.jpeg",
      "Gruppe.jpeg",
      "Gruppe7.jpeg",
      "Lager12.jpeg",
      "Lager22.jpeg",
      "Lager.jpeg",
      "Lager1.jpeg",
      "Lager2.jpeg",
      "Lager3.jpeg",
      "Lager4.jpeg",
      "Lager7.jpeg",
      "Lager8.jpeg",
      "Nacht1.jpeg",
      "Nacht2.jpeg",
      "Nacht5.jpeg",
      "Nacht13.jpeg",
      "Nacht14.jpeg",
      "Nacht15.jpeg",
      "Nacht16.jpeg",
    ],
  },
  {
    link: "2022_Spectaculum",
    title: "Spectaculum Worms",
    date: "2022-05-27",
    description:
      "Im Jahr 2022 konnte ganz Worms unser Lager bestaunen und Groß und Klein ließen sich Ausrüstung erklären oder bewunderten sie im Einsatz in der Feldschlacht.",
    folder: "2022-05_Spectaculum",
    coverFoto: "_5280507.JPG",
    fotos: [
      "_5280498.JPG",
      "_5280499.JPG",
      "_5280507.JPG",
      "453.jpg",
      "458.jpg",
      "460-b.jpg",
      "471.jpg",
      "485.jpg",
      "502.jpg",
      "504.jpg",
      "530-b.jpg",
      "534.jpg",
      "548.jpg",
      "2022-06-02T00.46.46.jpeg",
      "2022-06-02T00.46.47.jpeg",
      "7987488814737879140.jpg",
      "R5RU8162.JPG",
      "RUO43189.JPG",
      "RUO43215.JPG",
      "RUO43222.JPG",
      "RUO43284.JPG",
      "RUO43382.JPG",
      "2022-05-29T21.56.00.jpeg",
      "_5280580.JPG",
      "_5280584.JPG",
      "_5280585.JPG",
      "2022-05-30T07.00.05.jpeg",
      "2022-05-30T07.00.06.jpeg",
      "2022-05-30T09.21.33.jpeg",
      "2022-05-30T09.21.34.jpeg",
      "2022-05-30T09.21.35.jpeg",
      "2022-05-30T09.30.14.jpeg",
      "2022-05-30T09.30.15.jpeg",
      "2022-05-30T09.30.16.jpeg",
      "2022-05-30T12.44.08.jpeg",
    ],
  },
  {
    link: "2022_Werbeaktion",
    title: "Werbeaktion Tiergarten",
    date: "2022-05-15",
    description:
      "Werbeaktion für das Spectaculum in Worms im Wormser Tiergarten am 15.05.22",
    folder: "2022-05_Werbeaktion",
    coverFoto: "IR_2022_05_00119.jpg",
    fotos: [
      "2022-05-17T19.02.27.jpeg",
      "2022-05-17T19.03.24.jpeg",
      "IR_2022_05_00119.jpg",
      "IR_2022_05_00194.jpg",
      "IR_2022_05_00328.jpg",
      "IR_2022_05_00378.jpg",
      "IR_2022_05_00015.jpg",
      "IR_2022_05_00036.jpg",
      "IR_2022_05_00439.jpg",
      "IR_2022_05_00471.jpg",
      "IR_2022_05_00498.jpg",
      "IR_2022_05_00510.jpg",
      "IR_2022_05_00554.jpg",
    ],
  },
  {
    link: "2022_Probelager",
    title: "Probelager",
    date: "2022-04-15",
    description:
      "Die Ausrüstung konnte nach längerem mal wieder in der Praxis getestet werden.",
    folder: "2022-04_Probelager",
    coverFoto: "2022-04-16T17.38.08.jpeg",
    fotos: [
      "2022-04-15T15.59.30.jpeg",
      "2022-04-15T18.56.18.jpeg",
      "2022-04-16T17.38.06.jpeg",
      "2022-04-16T17.38.07.jpeg",
      "2022-04-16T17.38.08.jpeg",
      "2022-04-16T17.38.09.jpeg",
      "2022-04-16T17.38.10.jpeg",
      "2022-04-18T10.07.36.jpeg",
      "2022-04-18T13.07.22.jpeg",
    ],
  },
  {
    link: "2020_Freundschaftslager",
    title: "Freundschaftslager",
    date: "2020-09-19",
    description:
      "Wir danken dem Frankenklan dafür, dass sie das Freundschaftslager organisiert haben und uns dazu eingeladen haben! Wir hatten viel spaß und freuen uns auf ein nächstes gemeinsames Lager.",
    folder: "2020-09-19_Frankenlager",
    coverFoto: "IMG_7773.JPG",
    fotos: [
      "IMG_7808.JPG",
      "IMG_7565.JPG",
      "IMG_7588.JPG",
      "IMG_7591.JPG",
      "IMG_7596.JPG",
      "IMG_7598.JPG",
      "IMG_7599.JPG",
      "IMG_7602.JPG",
      "IMG_7608.JPG",
      "IMG_7711.JPG",
      "IMG_7715.JPG",
      "IMG_7716.JPG",
      "IMG_7717.JPG",
      "IMG_7772.JPG",
      "IMG_7773.JPG",
      "IMG_7774.JPG",
      "IMG_7775.JPG",
      "IMG_7801.JPG",
      "IMG_7816.JPG",
      "IMG_7575.JPG",
      "IMG_7795.JPG",
    ],
  },
  {
    link: "2020_Probelager",
    title: "Probelager",
    date: "2020-07-04",
    description:
      "Wir haben erfolgreich unsere neue Ausrüstung getestet und einige Formationen trainiert.",
    folder: "2020_Probelager",
    coverFoto: "probelager_4343.jpg",
    fotos: [
      "probelager_008.JPG",
      "probelager_4122.jpg",
      "probelager_4129.jpg",
      "probelager_4087.jpg",
      "probelager_4101.jpg",
      "probelager_4142.jpg",
      "probelager_4149.jpg",
      "probelager_4327.jpg",
      "probelager_4343.jpg",
      "probelager_4967.jpg",
      "probelager_4954.jpg",
      "probelager_4956.jpg",
      "probelager_002.JPG",
      "probelager_003.JPG",
      "probelager_006.JPG",
      "probelager_016.JPG",
      "probelager_017.JPG",
      "probelager_023.JPG",
      "probelager_027.JPG",
      "probelager_030.JPG",
    ],
  },
  {
    link: "2019_Winterwanderung",
    title: "Winterwanderung Donnersberg",
    date: "2019-12-08",
    description: "Am 08.12.19",
    folder: "2019-12-08_Winterwanderung_Donnersberg",
    coverFoto: "DSC_1212XXXX.jpg",
    fotos: [
      "DSC_1170XX.jpg",
      "DSC_1202XX.jpg",
      "DSC_1212XXXX.jpg",
      "DSC_1222XXXX.jpg",
      "DSC_1253.JPG",
      "DSC_1257XXX.jpg",
    ],
  },
  {
    link: "2019_Hassloch",
    title: "Hassloch Marktbesuch",
    date: "2019-08-31",
    description: "Am 31.08.19",
    folder: "2019-08-19_Hassloch_Marktbesuch",
    coverFoto: "IMG-20190831-WA0066.jpg",
    fotos: [
      "IMG-20190831-WA0049.jpg",
      "IMG-20190831-WA0057.jpg",
      "IMG-20190831-WA0061.jpg",
      "IMG-20190831-WA0064.jpg",
      "IMG-20190831-WA0066.jpg",
    ],
  },
  {
    link: "2019_Angelbachtal",
    title: "Angelbachtal Marktbesuch",
    date: "2019-08-11",
    description: "Am 11.08.2019",
    folder: "2019-08-11_Angelbachtal_Marktbesuch",
    coverFoto: "IMG-20190824-WA0031.jpg",
    fotos: [
      "IMG-20190811-WA0017.jpeg",
      "IMG-20190811-WA0021.jpg",
      "IMG-20190811-WA0022.jpg",
      "IMG-20190811-WA0024.jpg",
      "IMG-20190811-WA0025.jpg",
      "IMG-20190811-WA0032.jpeg",
      "IMG-20190821-WA0015.jpg",
      "IMG-20190821-WA0022.jpg",
      "IMG-20190824-WA0031.jpg",
    ],
  },
  {
    link: "2019_Teufelsburg",
    title: "Teufelsburg",
    date: "2019-07-07",
    description: "Vom 05.07 bis 07.07.19",
    folder: "2019-07-05_Teufelsburg",
    coverFoto: "DSC_0245.JPG",
    fotos: [
      "DSC_0024.JPG",
      "DSC_0036.JPG",
      "DSC_0062.JPG",
      "DSC_0083.JPG",
      "DSC_0092.JPG",
      "DSC_0127.JPG",
      "DSC_0137.JPG",
      "DSC_0139.JPG",
      "DSC_0158.JPG",
      "DSC_0162.JPG",
      "DSC_0178.JPG",
      "DSC_0181.JPG",
      "DSC_0200.JPG",
      "DSC_0203.JPG",
      "DSC_0215.JPG",
      "DSC_0217.JPG",
      "DSC_0228.JPG",
      "DSC_0232.JPG",
      "DSC_0238.JPG",
      "DSC_0245.JPG",
      "DSC_0251.JPG",
      "DSC_0271.JPG",
      "DSC_0278.JPG",
      "DSC_0283.JPG",
      "DSC_0295.JPG",
      "DSC_0300.JPG",
      "DSC_0310.JPG",
      "DSC_0334.JPG",
      "DSC_0336.JPG",
      "DSC_0337.JPG",
      "DSC_0342.JPG",
      "IMG_20190705_202755282.jpg",
      "IMG-20190707-WA0018.jpg",
      "IMG-20190707-WA0019.jpg",
      "IMG-20190707-WA0020.jpg",
      "IMG-20190707-WA0026.jpg",
      "IMG-20190707-WA0028.jpg",
      "IMG-20190707-WA0033.jpg",
      "IMG-20190707-WA0040.jpg",
      "IMG-20190707-WA0044.jpg",
    ],
  },
  {
    link: "2019_Werbeaktion",
    title: "Werbeaktion Tiergarten",
    date: "2019-05-19",
    description:
      "Werbeaktion für das Spectaculum in Worms im Wormser Tiergarten am 19.05.19",
    folder: "2019-05-19_Werbeaktion",
    coverFoto: "23.18.38_3.jpeg",
    fotos: [
      "23.18.35.jpeg",
      "23.18.36_1.jpeg",
      "23.18.36_2.jpeg",
      "23.18.36.jpeg",
      "23.18.37_1.jpeg",
      "23.18.37_2.jpeg",
      "23.18.37_3.jpeg",
      "23.18.37_4.jpeg",
      "23.18.37.jpeg",
      "23.18.38_1.jpeg",
      "23.18.38_2.jpeg",
      "23.18.38_3.jpeg",
      "23.18.38.jpeg",
    ],
  },
  {
    link: "2018_Spektakulum",
    title: "Spectaculum Worms",
    date: "2018-05-13",
    description: "Vom 10.05 bis 13.05.18",
    folder: "2018-05-10_Spectaculum_Worms",
    coverFoto: "32453887_1585507298213278_3882416042038788096_o.jpg",
    fotos: [
      "31897608_198530397432088_1924441001271754752_n.jpg",
      "32453887_1585507298213278_3882416042038788096_o.jpg",
      "32457918_1585506958213312_5245024623199780864_o.jpg",
      "32460660_1889183171133678_3778015265497808896_o.jpg",
      "32530740_1585505401546801_9093003256681988096_o.jpg",
      "IMG_20180511_133015.jpg",
      "IMG_20180512_221954.jpg",
      "IMG_20180512_222043.jpg",
      "IMG_20180512_222135.jpg",
      "IMG-20180513-WA0034.jpg",
      "IMG-20180513-WA0035.jpg",
      "IMG-20180513-WA0037.jpg",
      "IMG-20180513-WA0039.jpg",
      "IMG-20180513-WA0041.jpg",
      "IMG-20180513-WA0043.jpg",
      "IMG-20180513-WA0048.jpg",
      "IMG-20180513-WA0050.jpg",
      "IMG-20180513-WA0051.jpg",
      "IMG-20180513-WA0059.jpg",
      "IMG-20180515-WA0002.jpg",
      "IMG-20180516-WA0023.jpg",
      "Worms_38.jpg",
      "Worms_329.jpg",
      "Worms_330.jpg",
    ],
  },
  {
    link: "2018_Tiergarten",
    title: "Tiergarten Werbeaktion",
    date: "2018-04-29",
    description: "Am 29.04.2018",
    folder: "2018-04-29_Tiergarten_Werbeaktion",
    coverFoto: "DSC02454.JPG",
    fotos: [
      "DSC02443.JPG",
      "DSC02454.JPG",
      "DSC02477.JPG",
      "DSC02480.JPG",
      "DSC02482.JPG",
      "DSC02483.JPG",
      "DSC02484.JPG",
      "DSC02489.JPG",
      "DSC02491.JPG",
      "DSC02495.JPG",
      "DSC02502.JPG",
    ],
  },
  {
    link: "2018_Winterwanderung",
    title: "Winterwanderung Donnersberg",
    date: "2018-02-04",
    description: "Am 04.02.2018",
    folder: "2018-02-04_Winterwanderung_Donnersberg",
    coverFoto: "27624693_1345886392183382_6358278783868118534_o.jpg",
    fotos: [
      "27624693_1345886392183382_6358278783868118534_o.jpg",
      "27629533_1345886815516673_522036589577566252_o.jpg",
      "27711404_1237764579690179_1705747562_o.jpg",
      "27744136_1237767493023221_1359544900_o.jpg",
      "27745070_1237764666356837_1490045079_o.jpg",
      "27746188_1237762406357063_987216590_o.jpg",
      "27747496_1345886075516747_2506664013442706204_o.jpg",
      "27785327_1237762653023705_773061439_o.jpg",
      "IMG_20180208_134811.jpg",
    ],
  },
];
