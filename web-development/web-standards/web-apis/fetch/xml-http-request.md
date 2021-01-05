# XMLHttpRequest (XHR) - AJAX

## Introduction

* `Asynchronous JavaScript And XML (AJAX)` is synonymous for applications using `XHR`.

* `AJAX` allows you to update parts of the `DOM` of an `HTML` page instead without the need for a __full page refresh__.

* `XMLHttpRequest (XHR)` was the original method to enable fetching `JSON` data via an `API`.

* The `XMLHttpRequest` exposed an `open` function and `onreadystatechange` callback function in-order to make requests.

* `XHR` was implemented with a simple wrapper function in the `jQuery` library.

* `XHR` has been superseded by teh `fetch` Web API built into modern browsers.

---

## Example - JavaScript

```js
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();
```

---

## Example - jQuery

```js
$("button").click(function(){
  $.ajax({url: "demo_test.txt", success: function(result){
    $("#div1").html(result);
  }});
});
```

---

## References

* [XMLHttpRequest - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

* [AJAX](https://developer.mozilla.org/en-US/docs/Glossary/AJAX)

* [XHR - W3C](https://www.w3schools.com/xml/xml_http.asp)

* [jQuery XHR - W3C](https://www.w3schools.com/jquery/ajax_ajax.asp)