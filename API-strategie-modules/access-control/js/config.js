const documentConfig = {
    //voor specStatus mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specStatus
    specStatus: "VV",
    //voor specType mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specType
    specType: "HR",
    pubDomain: "api",
    shortName: "access-control",
//    publishDate: "2022-06-24",
    publishVersion: "1.0.0",
    // previousPublishVersion: "(none)",
    //  previousPublishDate: "(none)",
    //  previousMaturity: "WV",
    edDraftURI: "https://geonovum.github.io/KP-APIs/API-strategie-modules/access-control/",
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
    github: "https://github.com/Geonovum/KP-APIs",

  localBiblio: {
    "NCSC.TLS": {
      href: "https://www.ncsc.nl/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1",
      title: "ICT-beveiligingsrichtlijnen voor Transport Layer Security (TLS)",
      authors: ["NCSC"],
      date: "April 2019"
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
    "OAuth2.Browser-Based-Apps": {
      href: "https://tools.ietf.org/html/draft-ietf-oauth-browser-based-apps",
      title:
        "OAuth 2.0 for Browser-Based Apps",
      authors: ["A. Parecki", "D. Waite"],
      status: "Internet-Draft",
      publisher: "IETF OAuth Working Group",
    },
    "hr-crs": {
      href: "https://docs.geostandaarden.nl/crs/crs/",
      title:
        "Handreiking Gebruik coördinaatreferentiesystemen bij uitwisseling en visualisatie van geo-informatie",
      authors: ["Lennard Huisman", "Friso Penninga"],
      status: "Vastgesteld",
      publisher: "Geonovum",
    },
    "ogcapi-features-1": {
      href: "http://docs.ogc.org/is/17-069r3/17-069r3.html",
      title: "OGC API - Features - Part 1: Core",
      editors: ["Clemens Portele", "Panagiotis (Peter) A. Vretanos", "Charles Heazel"],
      status: "Approved",
      publisher: "Open Geospatial Consortium",
      version: "1.0"
    },
    "ogcapi-features-2": {
      href: "https://docs.ogc.org/is/18-058/18-058.html",
      title: "OGC API - Features - Part 2: Coordinate Reference Systems by Reference",
      editors: ["Clemens Portele", "Panagiotis (Peter) A. Vretanos"],
      status: "Approved",
      publisher: "Open Geospatial Consortium",
      version: "1.0"
    },
    "ogcapi-features-3": {
      href: "http://docs.ogc.org/DRAFTS/19-079r1.html",
      title: "OGC API - Features - Part 3: Filtering",
      editors: ["Panagiotis (Peter) A. Vretanos", "Clemens Portele"],
      status: "Draft",
      publisher: "Open Geospatial Consortium",
      version: "1.0.0-rc.1"
    },
     "JSON-FG": {
      href: "https://docs.ogc.org/DRAFTS/21-045.html",
      title: "OGC Features and Geometries JSON - Part 1: Core",
      editors: ["Clemens Portele", "Panagiotis (Peter) A. Vretanos"],
      status: "Editor's Draft",
      publisher: "Open Geospatial Consortium",
      version: "0.1"
     },
  },
    // Controls if linked "§" section markers are added to a document
    //addSectionLinks: true,

    // this parameter will add the tag_name of the latest release to the document Title
    // only set this parameter when a release has been set
    //nl_addReleaseTagTitle: true,

    // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
    // so that figures can be linked are be a part of table of figures
    nl_markdownEmbedImageInFigure: true,
}
