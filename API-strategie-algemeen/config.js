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
//-- . . . . . :  20200417 - JvG - Definitieve versie van 04-02-2020 gemaakt
//-- . . . . . :  20220412 - EJR - Vastgestelde versie van 09-03-2022 gemaakt
//-------------------------------------------------------------------------------------

//-- Postprocessors -------------------------------------------------------------------

//-- haalt gh-pages weg aan het eind van een URL
//-- Stopt zodra de eerste is gevonden (want komt maar 1x voor)
//-- JvG 2019-11-12
function custGHPG(respecConfig)
{
  var tags = document.getElementsByTagName("a");
  var srch = "gh-pages";
  var slen = srch.length;
  var i;

  for (i = 0; i < tags.length; i++)
  {
    if(tags[i].href.indexOf(srch) > -1)
    {
      console.log(tags[i].href + " is gevonden");
      tags[i].href = tags[i].href.substring(0, tags[i].href.length - slen);
      console.log(tags[i].href + " is aangepast");
      break;
    }
  }
}

var respecConfig =
{
  specStatus: "GN-WV",
  specType: "HR",
  pubDomain: "api",
  //publishDate: "2022-01-13",
  previousPublishDate: "2022-03-09",
  previousMaturity: "GN-DEF",
  edDraftURI: "https://geonovum.github.io/KP-APIs/API-strategie-algemeen/",
  editors:
  [
    {
      name: "Frank Terpstra",
      company: "Geonovum",
      companyURL: "http://www.geonovum.nl/",
    },
    {
      name: "Jan van Gelder",
      company: "Geonovum",
      companyURL: "http://www.Geonovum.nl/",
    }
  ],
  authors:
  [
    {
      name: "Lancelot Schellevis",
      company: "Forum Standaardisatie",
      companyURL: "http://www.forumstandaardisatie.nl/",
    },
    {
      name: "Han Zuidweg",
      company: "Forum Standaardisatie",
      companyURL: "http://www.forumstandaardisatie.nl/",
    },
    {
      name: "Friso Penninga",
      company: "Geonovum",
      companyURL: "http://geonovum.nl/",
    },
    {
      name: "Matthias Snoei",
      company: "Swis",
      companyURL: "http://swis.nl/",
    },
    {
      name: "Jasper Roes",
      company: "Het Kadaster",
      companyURL: "http://www.kadaster.nl/",
    },
    {
      name: "Peter Haasnoot",
      company: "Logius",
      companyURL: "www.logius.nl",
    },
    {
      name: "Frank van Es",
      company: "Logius",
      companyURL: "www.logius.nl",
    },
	{
      name: "Dennis de Wit",
      company: "Solventa",
      companyURL: "www.solventa.nl",
    },
  ],
  shortName: "API-Strategie",
  github: "https://github.com/geonovum/KP-APIs/",
  issueBase: "https://github.com/geonovum/KP-APIs/issues/",
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
    }
  },
  postProcess:[custGHPG],
};
