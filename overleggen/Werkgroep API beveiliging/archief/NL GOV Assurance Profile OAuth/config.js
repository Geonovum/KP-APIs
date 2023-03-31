//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec  
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de 
//--              betreffende standaard. 
//-- Door. . . :  Frank Terpstra/Jan van Gelder
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20180615 - FT  - Initiele versie
//-- . . . . . :  20181106 - JvG - verplaatst naar root KP-APIs
//-------------------------------------------------------------------------------------

var respecConfig = 
{
  specStatus: "GN-BASIS",
  specType: "HR",
  pubDomain: "etc",
  publishDate: "2018-06-15",
  editors: 
  [
    {
      name: "Frank Terpstra",
      company: "Geonovum",
      companyURL: "http://www.geonovum.nl/",
    }
  ],
  authors: 
  [
    {
      name: "Remco Schaar",
      company: "Logius",
      companyURL: "http://www.logius.nl/",
    },
    {
      name: "Frank Terpstra",
      company: "Geonovum",
      companyURL: "http://geonovum.nl/",
    },
	  {
      name: "Jan Jaap Zoutendijk",
      company: "Rijkswaterstaat",
      companyURL: "http://www.rws.nl/",
    },
  ],
  shortName: "NL GOV Oauth",
  subtitle: "Workversion",
  github: "https://github.com/geonovum/KP-APIs/Werkgroep Authenticatie Autorisatie/NL GOV Assurance Profile OAuth/",
  issueBase: "https://github.com/geonovum/KP-APIs/Werkgroep Authenticatie Autorisatie/NL GOV Assurance Profile OAuth/issues/",
  localBiblio: {
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
      publisher: "Forum STandaardisatie",
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
  },
};
