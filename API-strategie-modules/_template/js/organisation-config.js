const organisationConfig = {
    // nl_organisationName is used in the header (and Sotd)
    nl_organisationName: "Logius",

    // this url points to the folder where organsation specific css files are stored
    // defaults to https://tools.geostandaarden.nl/respec/style/ if not set
    nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",

    // prefix for the names of company specific css, svg and ico prefixes
    // defaults to "GN-"
    nl_organisationPrefix: "LS-",

    // nl_organisationPublishURL points to organisation specifica publication page, used in header
    // defaults to  https://docs.geostandaarden.nl/"
    nl_organisationPublishURL: "https://publicatie.centrumvoorstandaarden.nl/",

    // nl_logo refers to company logo
    // defaults to https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg
    nl_logo: {
        src: "https://publicatie.centrumvoorstandaarden.nl/respec/style/logos/figure-logius.svg",
        alt: "Logius",
        id: "Logius",
        height: 77,
        width: 44,
        url: "https://www.logius.nl/standaarden",
    },
	
	localBiblio: {
	"SemVer": {
            href: "https://semver.org",
            title: "Semantic Versioning 2.0.0",
            authors: ["T. Preston-Werner"],
            date: "June 2013"
        }
    },
}