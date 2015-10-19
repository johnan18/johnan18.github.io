changeThisPageFunc=function(){
  var input;
  
  input=document.getElementById("todo").value;
  var list1 = document.createElement("li");
  var ul = document.createElement("ul");
  list1text = document.createTextNode(input);
  
  document.section.appendChild(ul);
  ul.appendChild(list1);
  list1.appendChild(list1text);
  
}

