# DOM (Document Object Model)

## Get Document

    ```js
    const doc = document;
    ```

## Access Document Properties

    ```js
    const doc = document;
    const nodeList = doc.all;
    const htmlNode = doc.all[0];
    const numNodes = doc.all.length();
    const head = doc.head;
    const body = doc.body;
    const doctype = doc.doctype;
    const domain = doc.domain;
    const url = doc.URL;
    const charSet = doc.characterSet;
    const contentType = doc.contentType;
    ```

# Accessing Document Elements and Attributes

    ```js
    const doc = document;

    // Forms
    const forms = document.forms;
    const firstForm = document.forms[0];
    const firstFormId = document.forms[0].id;
    const firstFormMethod = document.forms[0].method;
    const firstFormAction = document.forms[0].action;

    // Links
    const links = document.links;
    const firstLink = document.links[0];
    const firstLinkId = document.links[0].id;
    const firstClasses = document.links[0].classList;

    // Images
    const images = document.images;
    ```

* __Iteration Document Elements__

    ```js
    // Scripts
    const scripts = document.scripts;
    const scriptOneSource = document.scripts[0].getAttribute('src');
    // Html Selector Elements need to be converted into an array in order to iterate
    const scriptList = Array.from(document.scripts);
    scriptList.forEach((script) => {
        console.log("script: ", script);
    });
    ```

