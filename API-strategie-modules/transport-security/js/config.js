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

    // this parameter will add the tag_name of the latest release to the document Title
    // only set this parameter when a release has been set
    nl_addReleaseTagTitle: true,

    // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
    // so that figures can be linked are be a part of table of figures
    nl_markdownEmbedImageInFigure: true,
}