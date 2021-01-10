# Terraform Primer

## Resources

* Resources have `meta arguments`: e.g. `count`, `foreach`.

* [Resources - TF Docs](https://www.terraform.io/docs/configuration/resources.html)

---

## Modules

* `main.tf` is the root file modules are initialised from.

* Modules create/manage a set of related resources.

* Modules are like `functions`:

    * __Input variables__ are like `function arguments`.

        * [Variables - TF Docs](https://www.terraform.io/docs/configuration/variables.html)

    * __Local values__ are like a function's temporary `local variables`.

        * [Locals - TF Docs](https://www.terraform.io/docs/configuration/locals.html)

    * __Output values__ are like `function return values`.

        * [Outputs - TF Docs](https://www.terraform.io/docs/configuration/outputs.html)

* [Modules - TF Docs](https://www.terraform.io/docs/configuration/modules.html)

* [Creating Modules -TF Docs](https://www.terraform.io/docs/modules/index.html)

---

## Datasources

* `Data sources` allow data to be fetched or computed for use elsewhere in Terraform configuration. 

    * managed resources cause Terraform to create, update, and delete infrastructure objects, 

    * data resources cause Terraform only to read objects

* Each provider may offer data sources alongside its set of resource types.

* [Datasources -TF Docs](https://www.terraform.io/docs/configuration/data-sources.html)

---

## Providers

* Providers extend the functionality of terraform by providing additional `resources`.