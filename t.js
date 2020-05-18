

function myFunction() {
  var my_json = JSON.stringify(document.getElementById("originalForm").innerHTML);
  console.log(my_json);

  var filename = "hello.txt";

  download(filename, my_json);
  alert("The form was submitted");
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
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

  //var my_json = JSON.stringify(document.body);
  //var my_json = JSON.stringify(document.getElementById("originalForm"));
  /*
  console.log(document);
  console.log("\n");
  console.log(document.getElementById("originalForm"));
  console.log("\n");
  console.log(document.body);
  */

  var my_json = JSON.stringify(document.getElementById("originalForm").innerHTML);
  console.log(my_json);

  //var my_json = JSON.stringify(document.body);
  //alert(my_json);
  //alert(document);
  //alert(document.getElementById("originalForm"));
  document.getElementById("originalForm").onsubmit = myFunction;
  /*
  document.getElementById("dwn-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    //var text = document.getElementById("text-val").value;

    var my_json = JSON.stringify(document.getElementById("originalForm").innerHTML);
    var filename = "hello.txt";

    download(filename, my_json);
  }, false);
  */
};

window.onbeforeunload = function(e) {
  /*
  var my_json = JSON.stringify(document.getElementById("originalForm").innerHTML);
  console.log(my_json);

  var filename = "hello.txt";

  download(filename, my_json);
  */
}



// Start file download.


