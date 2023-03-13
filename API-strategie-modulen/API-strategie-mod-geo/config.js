//-------------------------------------------------------------------------------------
//-- File. . . :  config.js
//-- Bevat . . :  Template voor de  configuratie voor respec
//--              Gebaseerd op https://github.com/Geonovum/respec/wiki
//--              Deze file moet worden neergezet in de root-directory van de
//--              betreffende standaard.
//-- Door. . . :  Linda van den Brink
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-- Log . . . :  20190503 - LvdB  - Initiele versie
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
  //specStatus: "GN-CV",
  specStatus: "GN-WV",
  specType: "HR",
  pubDomain: "api",
  //publishDate: "2022-09-30",
  previousPublishDate: "2022-09-30",
  previousMaturity: "GN-CV",
  edDraftURI: "https://geonovum.github.io/KP-APIs/API-strategie-mod-geo/",
  editors:
  [
    {
      name: "Linda van den Brink",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl",
    },
  ],
  authors:
  [
    {
      name: "Pieter Bresters",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl",
    },
    {
      name: "Linda van den Brink",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl",
    },
    {
      name: "Paul van Genuchten",
      company: "ISRIC",
      companyURL: "https://www.isric.org",
    },
    {
      name: "George Mathijssen",
      company: "Sweco Nederland B.V.",
      companyURL: "https://www.sweco.nl",
    },
    {
      name: "Mark Strijker",
      company: "Het Kadaster",
      companyURL: "https://www.kadaster.nl",
    },
  ],
  shortName: "API-Strategie-mod-geo",
  github: "https://github.com/geonovum/KP-APIs/",
  issueBase: "https://github.com/geonovum/KP-APIs/issues/",
  localBiblio: {
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
    "HAL": {
      href: "http://stateless.co/hal_specification.html",
      title: "HAL - Hypertext Application Language",
      authors: ["Mike Kelly"],
      date: " 2013-09-18",
    },
  },
  postProcess:[custGHPG],
};