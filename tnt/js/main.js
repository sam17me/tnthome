document.addEventListener('DOMContentLoaded',function(){

var ajax = new XMLHttpRequest
ajax.open('GET','./students.json');
ajax.setRequestHeader("Content-Type","application/json");
ajax.onreadystatechange= function(){
  if (ajax.readyState == 4 && ajax.status == 200){
    // document.getElementById("content_main").innerHTML = JSON.parse(ajax.responseText);
    var obj = document.getElementById('content_main');
    var data = JSON.parse(ajax.responseText);
    //console.log("First Name: " + data.students[0].firstname + '\n'+ "Last Name: " + data.students[0].lastname);

// all my problems start here

    var markup = "<table><thead><tr><th>First Name</th><th>Last Name</th><th>Birthdate</th><th>Age</th><th>Double-Mini</th><th>Trampoline</th><th>Tumbling</th></tr></thead><tbody>";
    $('#content_main').html(markup);

// Display the content of the json responsetext
for(var i in data.students){
document.getElementById('content_main').innerHTML = markup +="<tr><td>" + data.students[i].firstname +" </td><td>" + data.students[i].lastname +
"</td><td>" + data.students[i].birthdate + "</td><td>" +  data.students[i].age + "</td><td>" + data.students[i].dmtlevel + "</td><td>" +
data.students[i].tramplevel + "</td><td>" + data.students[i].tumblinglevel + "</td></tr>" ;


}  // end for
markup += "</tbody>";
$('#contain_main').html(markup);

  } // end if
}
ajax.send(null);

 // Controls for the search button

function searchthis(sample){



} // end function searchthis
document.getElementById('searchbar').addEventListener("keyup", function(e){
  var res = document.getElementById('content_2');
  var param = document.getElementById('searchbar').textContent;
  res.innerHTMl = param.textContent; });
}, false);
