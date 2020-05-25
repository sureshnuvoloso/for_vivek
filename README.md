
t.html -> the first html where your user will type in values and submit
on submit we write to a local file. 
t.js -> the corresponding javascript code

Note :The user cant chose a filename right now
( i will look into this,how to do it, it doesnt look easy to use the browser save as box)
However, i can easily make the file name same as <header + name>.txt or something.


t2.html -> this is pretty similar to the t.html in the sense that form is exactly same 
as t.html. The differences are important. Mainly we have a fileinput button
Do a diff of t.html and t2.html to see the difference.

t2.js -> the corresponding javascript code.

Note: We load the form as hidden on load
And the user is provided with a button to load the file that was saved in step 1 above.
Once the file is selected, we read the file content and populate the fields
of the form and make the form visiable.

