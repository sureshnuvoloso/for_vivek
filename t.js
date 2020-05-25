
function conv_to_json_and_write() {

  var elements = document.getElementById("originalForm").elements;
  var obj ={};
  for(var i = 0 ; i < elements.length ; i++)
  {
    var item = elements.item(i);

    //skip submit buttons
    if (item.type == "submit")
      continue;

    //if a checkbox get checked instead of value
    if (item.type == "checkbox")
    {
      obj[item.name] = item.checked;
      continue;
    }
    obj[item.name] = item.value;
  }

  console.log(obj);

  var form_data = JSON.stringify(obj);

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

  document.getElementById("originalForm").onsubmit = conv_to_json_and_write;
};

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
});

window.onbeforeunload = function(e) {

  // TODO This doesnt work !!
  // basically i onbeforeunload doesnt seem to get called 
  // when i close the webpage
  // find the right event and move this code
  //
  // the previous addeventlistener seems to work
  // at least it prevents closing of the window
  // user can manually save the file
  // -suresh
  if (confirm("Do you want to save the data to a file?"))
  {
    conv_to_json_and_write();
  }
}

