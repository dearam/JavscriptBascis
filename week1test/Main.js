titlefirstname=document.getElementById("input-titlefirst");
firstname=document.getElementById("input-firstname");

titlelasttname=document.getElementById("input-titlelast");
lastname=document.getElementById("input-lastname");

mailtitle=document.getElementById("input-titlemail");
mail=document.getElementById("input-mail");


firstempty=document.getElementById("emptyfirst");
firstvalid=document.getElementById("emptyvalid");

lastempty=document.getElementById("emptylast");
validlast=document.getElementById("validlast");

mailempty=document.getElementById("emptymail");
mailvalid=document.getElementById("validmail");

mobilenumber=document.getElementById("input-number");
titlenumber=document.getElementById("title-number");
emptynumber=document.getElementById("emptynumber");
validnumber=document.getElementById("validnumber");

profile=document.getElementById("profile-input");
profile_title=document.getElementById("profile-title");
address=document.getElementById("address-input");
address_title=document.getElementById("address-title");

dob=document.getElementById("dob-input");
dob_title=document.getElementById("title-dob");

var check_fname = true;
var check_lname = true;
var check_email = true;
var check_num = true;
var check_profile=true;
var check_address=true;
var check_dob=true;

function formSubmition(event){
    event.preventDefault();
    validFirstname();
    validLastname();
    validEmail();
    validNumber();
    validProfile();
    validAddress();
    validDob();
    if(check_fname==true && check_lname==true && check_email==true && check_num==true && check_profile==true && check_address==true){
        if (confirm("Press a button!") == true) {
            alert("Success")
          } else {
            alert("Cancelled!")
          }
    }
    
}

function validFirstname(){
    if(!firstname.value){
        firstname.style.border="2px solid red";
        titlefirstname.style.color="red";
        firstempty.style.display="flex";
        firstvalid.style.display="none";
        check_fname = false;
    }
    else if(firstname.value.length>2 && firstname.value.length<100){
        firstname.style.border="2px solid green";
        titlefirstname.style.color="green";
        firstempty.style.display="none";
        check_fname = true;

    }else{
        firstname.style.border="2px solid red";
        titlefirstname.style.color="red";
        firstvalid.style.display="flex";
        firstempty.style.display="none";
        check_fname = false;
    }
}
function validLastname(){
    if(!lastname.value){
        lastname.style.border="2px solid red";
        titlelasttname.style.color="red";
        lastempty.style.display="flex";
        validlast.style.display="none";
        check_lname = false;
        console.log("comming2");
    }
    else if(lastname.value.length>2 && lastname.value.length<100){
        titlelasttname.style.color="green";
        lastname.style.border="2px solid green";
        lastempty.style.display="none";
        validlast.style.display="none";
        check_lname = true;

    }else{
        lastname.style.border="2px solid red";
        titlelasttname.style.color="red";
        check_lname = false;
        validlast.style.display="flex";
        lastempty.style.display="none";
    }
}

function validEmail(){
    special=/[@]/g;
    special2=/[.]/g;
    lowercase=/[a-z]/g;
    let count=0;
    if(mail.value.match(special)&&mail.value.match(special2)){
        count++;
    }
    if(mail.value.match(lowercase)){
        count++;
    }

    if(!mail.value){
        mail.style.border="2px solid red";
        mailtitle.style.color="red";
        mailempty.style.display="flex";
        mailvalid.style.display="none";
        check_email = false;
    }
    else if(count==2){
        mail.style.border="2px solid green";
        mailtitle.style.color="green";
        mailempty.style.display="none";
        mailvalid.style.display="none";
        check_email = true;
    }
    else{
        mail.style.border="2px solid red";
        mailtitle.style.color="red";
        check_email = false;
        mailempty.style.display="none";
        mailvalid.style.display="flex";
    }
}
function validNumber(){
    if(!mobilenumber.value){
        titlenumber.style.color="red";
        mobilenumber.style.border="2px solid red";
        emptynumber.style.display="flex";
        validnumber.style.display="none";
        check_num = false;
    } else if(mobilenumber.value.length==10){
        titlenumber.style.color="green";
        mobilenumber.style.border="2px solid green";
        emptynumber.style.display="none";
        validnumber.style.display="none";
        check_num = true;
    }
    else{
        titlenumber.style.color="red";
        mobilenumber.style.border="2px solid red";
        emptynumber.style.display="none";
        validnumber.style.display="flex";
        check_num = false;
    }
}

function validAddress(){
    if(!address.value){
        check_address=false;
        address.style.border="2px solid red";
        address_title.style.color="red";
    }else{
        check_address=true;
        address.style.border="2px solid green";
        address_title.style.color="green";
    }
}
function validProfile(){
    if(!profile.value){
        check_profile=false;
        profile.style.border="2px solid red";
        profile_title.style.color="red";
    }else{
        check_profile=true;
        profile.style.border="2px solid green";
        profile_title.style.color="green";
    }
}
function validDob(){
    if(!dob.value){
        check_dob=false;
        dob.style.border="2px solid red";
        dob_title.style.color="red";
    }else{
        check_dob=true;
        dob.style.border="2px solid green";
        dob_title.style.color="green";
    }
}