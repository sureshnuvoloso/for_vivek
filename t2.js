
  /*
   document.getElementById("originalForm").innerHTML = "\n\n      <ul>\n        <li>\n          <label for=\"name\">Name:</label>\n          <input type=\"text\" id=\"name\" name=\"name\" value=\"Suresh\">\n\n        </li>\n        <li>\n          <label for=\"Header\">Header:</label>\n          <input type=\"text\" id=\"header\" name=\"header\" value=\"Iyer\">\n        </li>\n      </ul>\n       <input type=\"submit\" value=\"Submit\">\n\n\n    "
 */


window.onload = function(e) {
  document.getElementById('inputfile') 
    .addEventListener('change', function() { 

      var fr=new FileReader(); 
      fr.onload=function(){ 
        console.log(fr.result);
        document.getElementById("originalForm").innerHTML = fr.result;
      } 

      fr.readAsText(this.files[0]); 
    }) 
};





