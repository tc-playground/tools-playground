# NPM

---

## NPM Semantic Versioning

* NPM managed libraries can be defined to comply to fall within a specified range

    * __Major Version Range__ - `xyz@^2.2.1`
    
    * __Minor Version Range__ - `xyz@~2.2.1`

* [npm Semantic Versioning](https://semver.npmjs.com/)

---

## NPM List

* __All Dependencies__

    * `npm list` / `npm list [dependency]` / `npm list --depth=[depth]`

* __Direct Dependencies__

    * `npm view <PACKAGE> dependencies`

* http://npm.anvaka.com/#/view/2d/react

---

## NPM Audit

* `npm audit` audit the declared dependencies for issues.

```bash
npm audit
npm audit fix
```

