from django.shortcuts import redirect
from django.views.generic import FormView
from django import forms
from django.http import HttpResponse, JsonResponse

from requests_oauthlib import OAuth2Session

SCOPES = ['basic email']

# IP = '10.208.82.42'
# IP = '10.208.82.25'

IRMA_ATTRIBUTE = 'irma-demo.kp-api-auth.inkomensindicatie'


class AuthServerForm(forms.Form):
    auth_url = forms.ChoiceField(choices=[
        ('http://10.208.82.42:4444/auth_code.php/authorize', 'PHP auth server'),
        ('http://10.208.82.25:4444/auth_code.php/authorize', 'Java auth server'),
    ])
    token_url = forms.ChoiceField(choices=[
        ('http://10.208.82.42:4444/auth_code.php/access_token', 'PHP auth server'),
        ('http://10.208.82.25:4444/auth_code.php/access_token', 'Java auth server'),
    ])
    client_id = forms.CharField(initial='myawesomeapp')
    client_secret = forms.CharField(initial='abc123')
    resource_endpoint = forms.URLField(required=False)


class OauthView(FormView):
    form_class = AuthServerForm
    template_name = 'oauth.html'

    CODE_PARAM = 'code'

    def form_valid(self, form) -> HttpResponse:
        self.request.session.update(form.cleaned_data)
        return self.start_oauth(form.cleaned_data['auth_url'])

    def get(self, request, *args, **kwargs) -> HttpResponse:
        if self.CODE_PARAM in request.GET:
            return self.finalize_oauth()
        return super().get(request, *args, **kwargs)

    @property
    def _oauth(self) -> OAuth2Session:
        client_id = self.request.session['client_id']
        return OAuth2Session(client_id, scope=SCOPES, redirect_uri='http://localhost:8000/')

    def start_oauth(self, auth_url) -> HttpResponse:
        authorization_url, state = self._oauth.authorization_url(
            auth_url,
            state=self.request.session.session_key
        )
        return redirect(authorization_url)

    def finalize_oauth(self) -> HttpResponse:
        code = self.request.GET[self.CODE_PARAM]

        token_url = self.request.session['token_url']
        client_secret = self.request.session['client_secret']
        token = self._oauth.fetch_token(token_url, code=code, client_secret=client_secret)

        return JsonResponse(token)

        # assert that state is as expected
        assert token['state'] == self.request.session.session_key

        response = self._oauth.get(self.request.session['resource_endpoint'])
        return JsonResponse(response.json())
