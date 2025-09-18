# Scopes for the Notification API

Scopes are typically defined per component and indicate which autorisations are possible and in the context of a JWT token they indicate which autorisations someone has or wants to obtain.

## Scope: `events.consume`

Allows to:
- create subscriptions
- read subscriptions
- update subscriptions
- delete subscriptions
- read domains


## Scope: `events.publish`

Allows to:
- create domains
- read domains
- update domains
- delete domains
- read subscriptions
- publish notifications to this component (Notification API)
- publish notifications to the subscribers
