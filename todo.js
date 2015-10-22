changeThisPageFunc=function(){
  
  var input=document.getElementById("todo").value;
  var myUl = document.querySelector("#tasklist");
  var myLitext = document.createTextNode(input);
  
  var myPriority = document.querySelector("#priority");
  var myLi = document.createElement("li");
  myLi.classList.add(myPriority.value);
  
  var myInput = document.createElement(“INPUT”);
  myInput.type = “checkbox”;
  
  
  myUl.appendChild(myLi);
  myLi.appendChild(myLitext);
  myLi.appendChile(myInput);
}
  


