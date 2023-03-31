# INSPIRE requirements
[INSPIRE](https://inspire.ec.europa.eu/) is a European directive that forces data providers of geospatial datasets that belong to one of the 34 INSPIRE themes to publish the metadata, a viewservice and a download service. These services can also be APIs.

For the OGC-API Features, a special working group has worked on a [document](https://github.com/INSPIRE-MIF/gp-ogc-api-features/blob/master/spec/oapif-inspire-download.md) that proposes a technical approach for implementing the requirements set out in the INSPIRE Implementing Rules for Network Services [[IRs for NS](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02009R0976-20141231&from=EN)] based on the newly adopted [OGC API - Features standard](http://docs.opengeospatial.org/is/17-069r3/17-069r3.html).

The extra requirements stated in this document concern:

- [links to predefined data set download](https://github.com/INSPIRE-MIF/gp-ogc-api-features/blob/master/spec/oapif-inspire-download.md#81-requirements-class-inspire-pre-defined-data-set-download-oapif--)
- [multilinguality](https://github.com/INSPIRE-MIF/gp-ogc-api-features/blob/master/spec/oapif-inspire-download.md#82-requirements-class-inspire-multilinguality-)
- [GeoJSON](https://github.com/INSPIRE-MIF/gp-ogc-api-features/blob/master/spec/oapif-inspire-download.md#83-requirements-class-inspire-oapif-geojson-)
- [link to bulk download](https://github.com/INSPIRE-MIF/gp-ogc-api-features/blob/master/spec/oapif-inspire-download.md#84-requirements-class-inspire-bulk-download-)
- [INSPIRE-CRS](https://github.com/INSPIRE-MIF/gp-ogc-api-features/blob/master/spec/oapif-inspire-download.md#85-requirements-class-inspire-crs-)
- [describing encoding](https://github.com/INSPIRE-MIF/2017.2/blob/master/GeoJSON/geojson-encoding-rule.md#inspire-requirements-for-encoding-rules)
- [metadata links](https://github.com/INSPIRE-MIF/gp-ogc-api-features/blob/master/spec/oapif-inspire-download.md#metadata-elements-of-the-data-set)

These requirements should be met when an API serves features for an INSPIRE dataset.