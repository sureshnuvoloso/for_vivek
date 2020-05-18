
function myFunction() {
  //var my_json = JSON.stringify(document.getElementById("originalForm").innerHTML);
  var my_json = document.getElementById("originalForm").innerHTML;
  console.log(my_json);

  var filename = "stage1.txt";

  download(filename, my_json);
  alert("The form was submitted to a file", filename);
}

function download(filename, text) {
    var element = document.createElement('a');
    //element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + text);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

window.onload = function(e) {
  /*
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "id";

  var label = document.createElement('label')
  label.htmlFor = "id";
  label.appendChild(document.createTextNode('text for label after checkbox'));

  document.body.appendChild(checkbox);
  document.body.appendChild(label);
  */

  var my_json = JSON.stringify(document.getElementById("originalForm").innerHTML);
  console.log(my_json);
  var inner_html = document.getElementById("originalForm").innerHTML;
  console.log(inner_html);

  document.getElementById("originalForm").onsubmit = myFunction;
};

window.onbeforeunload = function(e) {
  /*
  var my_json = JSON.stringify(document.getElementById("originalForm").innerHTML);
  console.log(my_json);

  var filename = "hello.txt";

  download(filename, my_json);
  */
}

