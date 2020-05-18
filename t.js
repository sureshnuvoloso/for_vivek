
function myFunction() {
  //var my_json = JSON.stringify(document.getElementById("originalForm").innerHTML);
  var form_html = document.getElementById("originalForm").innerHTML;

  console.log(form_html);

  var elements = document.getElementById("originalForm").elements;
  var obj ={};
  for(var i = 0 ; i < elements.length ; i++){
    var item = elements.item(i);
:w
    obj[item.name] = elements[i ;
  }

  var form_data = JSON.stringify(obj);
  console.log(obj);

  var filename = "stage1.txt";

  download(filename, form_data);
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

