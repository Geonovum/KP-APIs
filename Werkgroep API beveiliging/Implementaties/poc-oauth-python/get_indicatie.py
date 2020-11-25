#!/usr/bin/env python
# import webbrowser

from oauthlib.oauth2 import BackendApplicationClient
from requests_oauthlib import OAuth2Session

CLIENT_ID = 'myawesomeapp'
CLIENT_SECRET = 'abc123'

AUTH_URL = 'http://10.208.82.42:4444/auth_code.php/authorize'
TOKEN_URL = 'https://mijn.overheid.nl/oauth2/token'

# ?response_type=code
# &grant_type=client_credentials
# &client_id=myawesomeapp
# &client_secret=abc123
# &scope=basic%20email


REDIRECT_URI = 'http://localhost:8000/oauth/'
SCOPES = ['basic email']

ENDPOINT = 'http://10.208.82.42:4444/income.php'

IRMA_ATTRIBUTE = 'KP_API_AUTH.INKOMENSINDICATIE'

INDICATIES = [
    ('J', 'Groter dan 41.056 euro'),
    ('M', 'Groter dan 41.056 euro'),
    ('N', 'Lager dan 41.056 euro'),
    ('O', 'Niet vast te stellen'),
    ('U', 'Uitzondering voor gezinnen =>4 en Gepensioneerden'),
]


def main():
    # grant_type=client_credentials
    # client = BackendApplicationClient(client_id=CLIENT_ID)
    # oauth = OAuth2Session(client=client)
    # oauth.fetch_token(
    #     token_url=TOKEN_URL,
    #     client_id=CLIENT_ID,
    #     client_secret=CLIENT_SECRET,
    #     headers={'Accept': 'application/json'}
    # )

    oauth = OAuth2Session(CLIENT_ID, redirect_uri=REDIRECT_URI, scope=SCOPES)
    authorization_url, state = oauth.authorization_url(AUTH_URL)

    print(f'Please go to {authorization_url} and authorize access.')
    webbrowser.open(authorization_url)

    authorization_response = input('Enter the full callback URL: ')

    oauth.fetch_token(
        TOKEN_URL,
        authorization_response=authorization_response,
        client_secret=CLIENT_SECRET
    )

    response = oauth.get(ENDPOINT)
    print(response)

    attrs = {
        IRMA_ATTRIBUTE: response.json()['indicatie'],
    }

    jwt = build_jwt(attrs)
    signed_token = build_signed_token()

    response = {
        'jwt': jwt,
        'token': signed_token,
    }

    print(response)
    return response


def build_jwt(attrs: dict) -> str:
    """
    Build the signed JWT disclosing the attribute
    """


def build_signed_token() -> str:
    pass


if __name__ == '__main__':
    main()
