const documentConfig = {
    //voor specStatus mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specStatus
    specStatus: "WV",
    //voor specType mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specType
    specType: "HR",
    pubDomain: "api",
    shortName: "security",
    publishDate: "2023-05-24",
    publishVersion: "0.1.0",
    // previousPublishVersion: "(none)",
    //  previousPublishDate: "(none)",
    //  previousMaturity: "WV",
    editors:
        [
            {
                name: "Kennisplatform API's",
                company: "Kennisplatform API's",
                companyURL: "https://github.com/Geonovum/KP-APIs",
            }
        ],
    authors:
        [
            {
                name: "Kennisplatform API's",
                company: "Kennisplatform API's",
                companyURL: "https://github.com/Geonovum/KP-APIs",
            },
            {
                name: "Martin van der Plas",
                company: "Logius",
                companyURL: "https://logius.nl",
            }
        ],
    github: "https://github.com/Geonovum/KP-APIs",


    // Controls if linked "§" section markers are added to a document
    addSectionLinks: true,

    localBiblio: {
        "NCSC.TLS": {
          href: "https://www.ncsc.nl/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1",
          title: "ICT-beveiligingsrichtlijnen voor Transport Layer Security (TLS)",
          authors: ["NCSC"],
          date: "April 2019"
        }
    }
}
