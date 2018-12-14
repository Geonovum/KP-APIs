# IRMA attribuut issuer op basis van OAUTH2 profiel KP-API

Use case:

1. Gebruiker wil inkomensindicatie verlenen aan woningcorporatie
2. Gebruiker heeft IRMA app
3. Gebruiker laadt IRMA attribuut in, uitgegeven door MijnOverheid over OAUTH2
4. WoCo leest IRMA attribuut uit

## Attribute issuer - secure?

* OAUTH client gekend bij MO
* scope gekend
* BD resource provider checkt Access Token bij MO (auth server)
* attribute issuer gekend bij IRMA -> trust bij centrale IRMA authoriteit
* attributes & public keys transparant op github
