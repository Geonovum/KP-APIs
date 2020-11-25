// Build the attributes.
HashMap<String, String> attributes = new HashMap<>(3);
attributes.put("fullname", response.getConsumerName());
attributes.put("iban", response.getConsumerIBAN());
attributes.put("bic", response.getConsumerBIC());

// Build the credential.
HashMap<CredentialIdentifier, HashMap<String, String>> credentials = new HashMap<>();
credentials.put(new CredentialIdentifier(
        IdealConfiguration.getInstance().getSchemeManager(),
        IdealConfiguration.getInstance().getIdealIssuer(),
        IdealConfiguration.getInstance().getIbanCredential()
), attributes);
Calendar calendar = Calendar.getInstance();
calendar.add(Calendar.YEAR, 1);
IdentityProviderRequest iprequest = ApiClient.getIdentityProviderRequest(credentials, calendar.getTimeInMillis()/1000);

// Build a JWT to request this credential.
String jwt = ApiClient.getSignedIssuingJWT(iprequest,
        IdealConfiguration.getInstance().getServerName(),
        IdealConfiguration.getInstance().getHumanReadableName(),
        IdealConfiguration.getInstance().getJwtAlgorithm(),
        IdealConfiguration.getInstance().getJwtPrivateKey()
);

byte[] rawToken = IdinResource.makeToken(response.getConsumerBIC(), response.getConsumerIBAN());
String token = Base64.encodeBase64URLSafeString(rawToken);

IdealApplication.openDatabase();
IdinToken rec = new IdinToken();
rec.set("hashedToken", IdinResource.hashToken(rawToken));
rec.saveIt();

byte[] rawSignature = IdinResource.signToken(rawToken);
String signature = Base64.encodeBase64URLSafeString(rawSignature);
String signedToken = token + ":" + signature;

IdealSuccessResponse entity = new IdealSuccessResponse();
entity.jwt = jwt;
entity.token = signedToken;
return Response.status(Response.Status.OK).entity(entity).build();
