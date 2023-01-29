n=document.getElementById("iname");
m=document.getElementById("iemail");
d=document.getElementById("idob");


function tosubmition(event){
    event.preventDefault();
    //console.log(event)
    //console.log(event.target.tagName)
    console.log(d.value);
    
    // location.href="summa.html"
    // stop bubbling
    //event.stopPropagation();
    // remove all active event listeners for this event
    //event.stopImmediatePropagation();
}