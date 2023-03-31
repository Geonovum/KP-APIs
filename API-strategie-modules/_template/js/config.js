const documentConfig = {
    //voor specStatus mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specStatus
    specStatus: "WV",
    //voor specType mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specType
    specType: "HR",
    pubDomain: "dk",
    shortName: "template",
    publishDate: "2022-06-24",
    publishVersion: "0.0.1",
    // previousPublishVersion: "(none)",
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
    github: "https://github.com/Logius-standaarden/API-Design-Rules",


    // Controls if linked "§" section markers are added to a document
    addSectionLinks: true,

    // this parameter will add the tag_name of the latest release to the document Title
    // only set this parameter when a release has been set
    nl_addReleaseTagTitle: true,

    // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
    // so that figures can be linked are be a part of table of figures
    nl_markdownEmbedImageInFigure: true,
}