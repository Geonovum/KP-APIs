

let respecConfig =
{
  //voor specStatus mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specStatus
  specStatus: "CV",
  //voor specType mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specType
  specType: "ST",
  pubDomain: "api",
  shortName: "encryption",
  publishDate: "2023-06-24",
  thisVersion: "https://geonovum.github.io/KP-APIs/API-strategie-modules/encryption/",
  latestVersion: "https://geonovum.github.io/KP-APIs/API-strategie-modules/encryption/",
  // publishVersion: "1.0",
  // previousPublishVersion: "(none)",
  //  previousPublishDate: "(none)",
  //  previousMaturity: "WV",
  editors:
    [
      {
        name: "Peter Haasnoot",
        company: "Logius",
        companyURL: "https://logius.nl",
      },
  
      

    ],
  authors:
    [

      {
        name: "KPAPI",
        company: "KPAPI",
        companyURL: "https://github.com/Geonovum/KP-APIs",
      },
    ],
  github: "https://github.com/Geonovum/KP-APIs",
  
  
 // Controls if linked "§" section markers are added to a document
 addSectionLinks: true,
 

  localBiblio: {


    "SemVer": {
      href: "https://semver.org",
      title: "Semantic Versioning 2.0.0",
      authors: ["T. Preston-Werner"],
      date: "June 2013"
    },
    "JAdES": {
      href: "https://www.etsi.org/deliver/etsi_ts/119100_119199/11918201/01.01.01_60/ts_11918201v010101p.pdf",
      title: "JAdES digital signatures",
    },
    "HTTP-MessageSig": {
      href: "https://www.ietf.org/archive/id/draft-ietf-httpbis-message-signatures-14.html",
      title: "HTTP Message Signatures",
    },
    "ETSI-JADES": {
      href: "https://www.etsi.org/deliver/etsi_ts/119100_119199/11918201/01.01.01_60/ts_11918201v010101p.pdf",
      title: "JAdES digital signatures",
    },
    "ENISA-CRYPTO-2020": {
      href: "https://www.enisa.europa.eu/topics/cryptography",
      title: "ENISA Good Practises in Cryptography – Primitives and Schemes, December 2020. (Limited availability)",
    }
  },
  
  postProcess: [window.respecMermaid.createFigures],
};
