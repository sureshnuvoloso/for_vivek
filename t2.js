
  /*
   document.getElementById("originalForm").innerHTML = "\n\n      <ul>\n        <li>\n          <label for=\"name\">Name:</label>\n          <input type=\"text\" id=\"name\" name=\"name\" value=\"Suresh\">\n\n        </li>\n        <li>\n          <label for=\"Header\">Header:</label>\n          <input type=\"text\" id=\"header\" name=\"header\" value=\"Iyer\">\n        </li>\n      </ul>\n       <input type=\"submit\" value=\"Submit\">\n\n\n    "
 */


window.onload = function(e) {

  //hide the form when life begins
 document.getElementById("originalForm").style.display = "none";
  
  document.getElementById('inputfile').addEventListener('change', function() { 
      var fr=new FileReader(); 
      fr.onload=function(){ 
        console.log(fr.result);
        parse_json_populate(fr.result);
      } 

      fr.readAsText(this.files[0]); 
    }) 
};
function parse_json_populate(json_string_from_file) {

  var load_obj = JSON.parse(json_string_from_file);
  console.log(load_obj);

  var elements = document.getElementById("originalForm").elements;

  for(var i = 0 ; i < elements.length ; i++)
  {
    var item = elements.item(i);

    //skip submit buttons
    if (item.type == "submit")
      continue;

    //if a checkbox get checked instead of value
    if (item.type == "checkbox")
    {
      document.getElementById("originalForm").elements.item(i).checked = load_obj[item.name];
      continue;
    }
    document.getElementById("originalForm").elements.item(i).value  = load_obj[item.name];
  }
  document.getElementById("originalForm").style.display = "block";
}





