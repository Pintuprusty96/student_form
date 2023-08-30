document.querySelector("form").addEventListener("submit", formfun);
let emptyobj = JSON.parse(localStorage.getItem("data"))  || []
function formfun(event){
    event.preventDefault()
    let obj = {
        name:document.getElementById("name").value,
        number :document.getElementById("number").value,
        city:document.getElementById("city").value
    }
    emptyobj.push(obj)
    console.log(emptyobj)
    localStorage.setItem("data",JSON.stringify(emptyobj))
    
}
