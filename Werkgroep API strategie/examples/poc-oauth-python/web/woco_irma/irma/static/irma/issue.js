var iprequest = {
    data: "foobar",
    timeout: 60,
    request: {
        "credentials": [
            {
                "credential": "irma-demo.kp-api-auth.inkomen",
                "attributes": {
                    "indicatie": "J", // groter dan 41.056 euro
                }
            }
        ]
    }
};

var jwt = IRMA.createUnsignedIssuanceJWT(iprequest);

function handler() {
    console.log(arguments);
}

IRMA.issue(jwt, handler, handler, handler);
