n=document.getElementById("iname");
m=document.getElementById("iemail");
d=document.getElementById("idob");
p=document.getElementById("ipassword");
r=document.getElementsByName("sradio");
lab=document.getElementsByName("olab");
check=document.getElementsByName("scheckbox");
datas=[];

function tosubmition(event){
    event.preventDefault();
    //console.log(event)
    //console.log(event.target.tagName)
    datas.push(d.value);
    datas.push(n.value);
    datas.push(m.value);
    datas.push(p.value);
    for(let i=0;i<r.length;i++){
        if(r[i].checked){
            console.log(r[i].value);
        }
    }
    let checks=[];
    for(let i=0;i<check.length;i++){
        if(check[i].checked){
            checks.push(check[i].value);
        }
    }
    datas.push(checks);
    console.log(datas);
    localStorage.setItem("myvalue",datas);
    location.href="summa.html"
    // stop bubbling
    //event.stopPropagation();
    // remove all active event listeners for this event
    //event.stopImmediatePropagation();
}