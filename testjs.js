n=document.getElementById("iname");
m=document.getElementById("iemail");
d=document.getElementById("idob");
p=document.getElementById("ipassword");
r=document.getElementsByName("sradio");
lab=document.getElementsByName("olab");
check=document.getElementsByName("scheckbox");
f=document.getElementById('mainform');
datas=[];

src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"

//FOR BUTTON SUBMITION USING ONCLICK

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
    localStorage.setItem("mydata",datas);
    location.href="summa.html"
    // stop bubbling
    //event.stopPropagation();
    // remove all active event listeners for this event
    //event.stopImmediatePropagation();
}

//FOR FORM SUBMITION USING ONSUBMIT
function submition(){
    document.getElementById("btnsubmit").addEventListener("click",(event)=>{
        event.preventDefault();
    })
    alert(n.value);
}

function toSubmitionsamepage(event){
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
    let checks="";
    for(let i=0;i<check.length;i++){
        if(check[i].checked){
            checks+=check[i].value+" ";
        }
    }
    datas.push(checks);
    const sd=document.createElement("div");
    document.getElementById("duser").innerHTML="Userdetail :";
    const pd=document.createElement('p');
    pd.innerHTML=d.value;
    sd.appendChild(pd); 
    const p2d=document.createElement('p');
    p2d.innerHTML=n.value;
    sd.appendChild(p2d); 
    const p3d=document.createElement('p');
    p3d.innerHTML=m.value;
    sd.appendChild(p3d); 
    const p4d=document.createElement('p');
    p4d.innerHTML=p.value;
    sd.appendChild(p4d); 
    const p5d=document.createElement('p');
    p5d.innerHTML=checks;
    sd.appendChild(p5d); 
    const mdiv=document.getElementById("result");
    mdiv.appendChild(sd);
    f.reset();
    // stop bubbling
    //event.stopPropagation();
    // remove all active event listeners for this event
    //event.stopImmediatePropagation();
}
const count=[]
p.onfocus=function(){
    document.getElementById('ipassword').style.border="2px solid red";
}
p.onblur=function(){
    document.getElementById('ipassword').style.border="0.1px solid #999";
    document.getElementById('ipassword').style.borderRadius="2px";
}
function pwdvalidation(){
    var lowercase= /[a-z]/g;
    if(p.value.match(lowercase)){
        //onsole.log("iruku lowercase iruku")
        if(!count.includes('l')){
            count.push('l');
            console.log(count)
        }
    }
    var uppercase=/[A-Z]/g;
    if(p.value.match(uppercase)){
        //console.log("iruku capital iruku")
        if(!count.includes('u')){
            count.push('u')
            console.log(count)
        }
    }
    var numbers=/[0-9]/g;
    if(p.value.match(numbers)){
        //console.log("iruku number iruku");
        if(!count.includes('n')){
            count.push('n')
            console.log(count)
        }
    }
    var special=/[@#$%^&*]/g;
    if(p.value.match(special)){
        //console.log("iruku special charcter iruku");
        if(!count.includes('s')){
            count.push('s')
            console.log(count)
        }
    }
    if(p.value.length>=8){
       // //console.log("iruku 8 mela iruku");
       if(!count.includes('le')){
        count.push('le')
        console.log(count)
       }
    }
    if(count.length<5){
            document.getElementById('ipassword').style.border="2px solid red";
    }else{
        document.getElementById('ipassword').style.border="2px solid green";
    }
}
