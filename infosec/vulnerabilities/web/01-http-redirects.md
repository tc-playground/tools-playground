# Open Redirects

## Introduction

1. `Open redirects` are used to redirect a target to website the attacker controls.

    * This is important as further attack can be staged from the attackers pages.

2. `Open redirect mechanisms` fall into 3 main categories:

    1. __URL Parameter Redirects__ - Via browser request.

        * Example - `https://www.google.com/?redirect_to=https://www.attacker.com`

        * The parameters can be named anything: 'url=', 'redirect=', 'next=', 'r=', 'u='. 
        
        * The server issues a `3XX` redirect on interpretation.

    2. __<meta> Tag Redirects__ - Via `HTML`.

        * `<meta> tags` can tell browsers to refresh a web page and make a GET request to a URL defined in the tag’s `content` attribute:

            * `<meta http-equiv="refresh" content="0; url=https://www.google.com/">`

    3. __Browser Location__ - Via client-side `JavaScript`.

        * `window.location = https://www.google.com`

        * `window.location.href = https://www.google.com`

        * `window.location.replace(https://www.google.com)`

3. `redirect target urls` can be used to change the `domain` of the target url:

    * `www.example.com` -> `www.example.com.<attack-domain.com>` - DNS resolves starting at the RHS root.

    * Other special `url encoded` might be used to similar effect.
