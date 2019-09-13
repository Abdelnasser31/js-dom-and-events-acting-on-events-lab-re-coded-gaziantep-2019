function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault();
      event.stopPropagation();
      addNewElementAsLi();
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
 return document.querySelector('form input:first').value
}
function addNewElementAsLi() {
  let node = document.createElement("LI");    
  node.innerHTML = retrieveEmployeeInformation();
   document.querySelector('ul.employee-list').appendChild(node);
}
function addNewLiOnClick() {
    let node = document.createElement("LI");    
  node.innerHTML = retrieveEmployeeInformation();
   document.querySelector('ul.employee-list').appendChild(node);
}
function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    return document.querySelector('ul').innerHTML = "";
  })
}