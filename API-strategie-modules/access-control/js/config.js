let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "API Access control module",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "vv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  //specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  specType: "HR",                     // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  pubDomain: "api",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //licence: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //licence: "cc0",                 // Public Domain Dedication
  licence: "cc-by",                 // Attribution, met bronvermelding
  //-- shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "API-Strategie-mod-access-control",
  edDraftURI: "https://geonovum.github.io/KP-APIs/API-strategie-modules/access-control/",  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  publishDate: "2023-12-21",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  publishVersion: "1.0.0",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  previousPublishDate: "2023-05-24",
  previousMaturity: "def",
  //-- de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
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
            }
        ],
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/KP-APIs",
  // Controls if linked "§" section markers are added to a document
    addSectionLinks: true,

    localBiblio: {
        "NCSC.TLS": {
          href: "https://www.ncsc.nl/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1",
          title: "ICT-beveiligingsrichtlijnen voor Transport Layer Security (TLS)",
          authors: ["NCSC"],
          date: "Januari 2021"
        },
          "OAuth2": {
      href: "https://tools.ietf.org/html/rfc6749",
      title:
        "The OAuth 2.0 Authorization Framework",
      authors: ["D. Hardt"],
      date: "October 2012",
      publisher: "The Internet Engineering Task Force",
    },
	"Expert": {
      href: "https://www.forumstandaardisatie.nl/sites/bfs/files/Expertadvies%20OAuth%202.0.pdf",
      title:
        "Expertadvies OAuth 2.0",
      authors: ["P. Dam"],
      date: "24 februari 2017",
      publisher: "Forum Standaardisatie",
    },
	"JWT": {
      href: "https://tools.ietf.org/html/rfc7519",
      title:
        "JSON Web Token (JWT)",
      authors: ["M. Jones, J. Bradley, N. Sakimura"],
      date: "may 2015",
      publisher: "IETF",
    },
	"JWS": {
      href: "https://tools.ietf.org/html/rfc7515",
      title:
        "JSON Web Signature (JWS)",
      authors: ["M. Jones, J. Bradley, N. Sakimura"],
      date: "may 2015",
      publisher: "IETF",
    },
	"JWE": {
      href: "https://tools.ietf.org/html/rfc7516",
      title:
        "JSON Web Encryption (JWE)",
      authors: ["M. Jones, J. Hildebrand"],
      date: "may 2015",
      publisher: "IETF",
    },
	"JWK": {
      href: "https://tools.ietf.org/html/rfc7517",
      title:
        "JSON Web Key (JWK))",
      authors: ["M. Jones"],
      date: "may 2015",
      publisher: "IETF",
    },
	"JWA": {
      href: "https://tools.ietf.org/html/rfc7518",
      title:
        "JSON Web Algorithms (JWA)",
      authors: ["M. Jones"],
      date: "may 2015",
      publisher: "IETF",
    },
	"PKCE": {
      href: "https://tools.ietf.org/html/rfc7636",
      title:
        "Proof Key for Code Exchange by OAuth Public Clients",
      authors: ["N. Sakimura, J. Bradley, N. Agarwal"],
      date: "september 2015",
      publisher: "IETF",
    },
	"Introspection": {
      href: "https://tools.ietf.org/html/rfc7662",
      title:
        "OAuth 2.0 Token Introspection",
      authors: ["J. Richer"],
      date: "October 2015",
      publisher: "IETF",
    },
	"OpenID.Core": {
      href: "https://openid.net/specs/openid-connect-core-1_0.html",
      title:
        "OpenID Connect Core 1.0",
      authors: ["N. Sakimura, J. Bradley, M. Jones, B. de Medeiros, C. Mortimore"],
      date: "November 8 2014",
      publisher: "OpenID foundation",
    },
	"iGOV.OpenID": {
      href: "https://openid.net/specs/openid-igov-openid-connect-1_0.html",
      title:
        "International Government Assurance Profile (iGov) for OpenID Connect 1.0 - draft 3",
      authors: ["M. Varley, P. Grassi"],
      date: "October 5 2018",
      publisher: "OpenID foundation",
    },
	"iGOV.OAuth2": {
      href: "https://openid.net/specs/openid-igov-oauth2-1_0.html",
      title:
        "International Government Assurance Profile (iGov) for OAuth 2.0",
      authors: ["J. Richer, M. Varley, P. Grassi"],
      date: "October 5 2018",
      publisher: "OpenID foundation",
    },
	"OpenID.Discovery": {
      href: "https://openid.net/specs/openid-connect-discovery-1_0.html",
      title:
        "OpenID Connect Discovery 1.0",
      authors: ["N. Sakimura, J. Bradley, M. Jones, E. Jay"],
      date: "November 8 2014",
      publisher: "OpenID foundation",
    },
	"I-D.ietf-oauth-pop-architecture": {
      href: "https://tools.ietf.org/html/draft-ietf-oauth-pop-architecture-08",
      title:
        "OAuth 2.0 Proof-of-Possession (PoP) Security Architecture",
      authors: ["P. Hunt, J. Richer, W. Mills, P. Mishra, H. Tschofenig"],
      date: "July 8, 2016",
      publisher: "IETF",
    },
	"HEART.OAuth2": {
      href: "https://openid.net/specs/openid-heart-oauth2-1_0.html",
      title:
        "Health Relationship Trust Profile for OAuth 2.0",
      authors: ["J. Richer"],
      date: "April 25, 2017",
      publisher: "OpenID foundation",
    },
	"JWS.JWE.Algs": {
      href: "https://www.iana.org/assignments/jose/jose.xhtml#web-signature-encryption-algorithms",
      title:
        "IANA JSON Web Signatures and Encryption Algorithms registry",
      authors: ["Jim Schaad, Jeff Hodges, Joe Hildebrand, Sean Turner"],
      date: "",
      publisher: "IANA",
    },
  "BCP195": {
      href: "https://tools.ietf.org/html/bcp195",
      title: "Recommendations for Secure Use of Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)",
      authors: ["Y. Sheffer, R. Holz, P. Saint-Andre"],
      date: "May 2015",
      publisher: "IETF",
    },
  "HAL": {
      href: "http://stateless.co/hal_specification.html",
      title: "HAL - Hypertext Application Language",
      authors: ["Mike Kelly"],
      date: " 2013-09-18",
    },
  "rfc7946": {
      href: "https://datatracker.ietf.org/doc/html/rfc7946",
      title: "The GeoJSON Format",
      authors: ["H. Butler, M. Daly, A. Doyle, S. Gillies, T. Schaub, S. Hagen"],
      date: "2016-08-01",
    },
    "OAuth2.Browser-Based-Apps": {
      href: "https://tools.ietf.org/html/draft-ietf-oauth-browser-based-apps",
      title:
        "OAuth 2.0 for Browser-Based Apps",
      authors: ["A. Parecki", "D. Waite"],
      status: "Internet-Draft",
      publisher: "IETF OAuth Working Group",
    }   
    }  
  
  // Create PDF and link to file in header (optional):
  //alternateFormats: [
  //    {
  //        label: "pdf",
  //       uri: "template.pdf",
  //    },
  // ],
};
