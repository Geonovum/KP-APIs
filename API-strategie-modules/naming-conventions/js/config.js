const documentConfig = {
    //voor specStatus mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specStatus
    specStatus: "WV",
    //voor specType mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specType
    specType: "HR",
    pubDomain: "api",
    shortName: "naming-conventions",
    publishDate: "2023-06-06",
    publishVersion: "1.0.0",
    previousPublishVersion: "0.0.0",
    //  previousPublishDate: "(none)",
    //  previousMaturity: "WV",
    editors:
        [
            {
                name: "Logius Standaarden",
                company: "Logius",
                companyURL: "https://github.com/Logius-standaarden",
            }
        ],
    authors:
        [
            {
                name: "Logius Standaarden",
                company: "Logius",
                companyURL: "https://github.com/Logius-standaarden",
            }
        ],
    github: "https://github.com/Geonovum/KP-APIs",


    // Controls if linked "§" section markers are added to a document
    addSectionLinks: true,

    // this parameter will add the tag_name of the latest release to the document Title
    // only set this parameter when a release has been set
    nl_addReleaseTagTitle: true,

    // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
    // so that figures can be linked are be a part of table of figures
    nl_markdownEmbedImageInFigure: true,
    
    localBiblio: {
                "HAL": {
          href: "http://stateless.co/hal_specification.html",
          title: "HAL - Hypertext Application Language",
          authors: ["Mike Kelly"],
          date: " 2013-09-18",
        },
    }
}