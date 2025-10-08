var documentConfig = {
  title: "Batching",
  specStatus: "cv",
  sotdText: {
    ...organisationConfig,
    en: {
      ...organisationConfig.sotdText.en,
      cv: 'This is a proposed version authored by the ADR "orchestration" working group. Comments regarding this document may be shared through GitHub: https://github.com/Geonovum/KP-APIs/issues',
    },
  },
  specType: "st",
  pubDomain: "api",
  license: "cc-by",
  shortName: "API-Strategie-mod-batching",
  edDraftURI:
    "https://geonovum.github.io/KP-APIs/API-strategie-modules/batching",
  editors: [
    {
      name: "Joost Farla",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl",
    },
  ],
  authors: [
    {
      name: "Joost Farla",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl",
    },
    {
      name: "Frank Terpstra",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl",
    },
    {
      name: "Martin van der Plas",
      company: "Logius",
      companyURL: "https://www.logius.nl",
    },
    {
      name: "Peter Haasnoot",
      company: "Logius",
      companyURL: "https://www.logius.nl",
    },
    {
      name: "Pano Maria",
      company: "Skemu",
      companyURL: "https://skemu.com",
    },
  ],
  github:
    "https://github.com/Geonovum/KP-APIs/tree/master/API-strategie-modules/batching",
  localBiblio: {
    "OData JSON Format": {
      href: "https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html",
      title: "OData JSON Format Version 4.01",
      authors: ["OASIS"],
      date: "11 May 2020",
    },
  },
};
