## Versionering

<p class='warning'>This extension is still in development and can be modified at any time.</p>

### Deprication of a major API version

Major API releases should always be backward incompatible. In case a new API release does _not_  result in backward incompatibility, it does not warrant a full version increase and it is merely a minor release. In case a major release takes place, all (potential) clients have to implement the new version.

As clients cannot be broken, a migration from the previous to the new release cannot happen abruptly. After the launch the new version, the previous version has to be available in production as well. As not to maintain the previous version indefinitely and to encourage clients to use the new version, a transition period is communicated for users to adjust their code to the new version. This period is referred to as *deprecation period*. The duration of this period may very per API. Typically, the deprecation period lasts 6 months, but not more than one year. From a maintenance perspective, at most two major versions (one of which is the deprecated version) should be available in production concurrently. Communication with users is crucial during this period. The following points have to be communicated:

- A link to the (documentation of the) new API version; 
- Deprecation period with the exact date the deprecated version will be taken offline;
- Migration plan to easily transition to the new version;
- Overview of added, changed or removed features;
- Breaking changes for the current implementation;
- Contact details to request an extension of the deprecation period.

These should be communicated using the following channels:

- To the e-mail accounts of the users (if known)
- Clearly visible in the documentation of the previous version;
- Using a `Warning` response header in all responses from the old API.

A step-by-step approach:

1. Launch new version;
2. Determine deprecation period;
3. Write migration plan;
4. Communicate in the API documentation of the old version;
5. Communicate per e-mail, Web forum and other channels;
6. Add `Warning` response header to the old version;
7. Check logs to monitor the usage of the old version during the deprecation period;
8. Shut down end-point of the old version at the planned date and monitor feedback;
9. No feeedback related to the old version within two weeks, remove the old version (including docs);

### The Warning response header

The `Warning` reponse header (see: RFC 7234) has the status code 299 ("Miscellaneous Persistent Warning") and the API endpoint (including version number) as the warn-agent of the warning, followed by the warn-text with the human-readable warning. For example:

`Waarschuwing: 299 https://service.../api/.../v1 "Deze versie van de API is verouderd en zal uit dienst worden genomen op 2020-02-01. Raadpleeg voor meer informatie hier de documentatie: https://omgevingswet.../api/.../v1".`

Users should have sufficient time to phase out the old API. A period of 6 to 12 months is recommended.

> [API principle: Inform users of a deprecated API actively](#api-21)