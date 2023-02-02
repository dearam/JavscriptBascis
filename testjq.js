$(document).ready(function(){
    
    $("#irange").on("change",function(){
        $("#rvalue").text($("#irange").val());
    })

    $("#submitbtn").on('click',function(event){
        event.preventDefault();
        validateName();
        validateEmail();
        validateDob();
        validateRole();
        validateSkill();
        validatePassword();
    })

    function validateName(){
        if(!($("#iname").val())){
            $("#iname").css("border-color","red");
            $("#lname").css("color","red");
        }else{
            $("#iname").css("border-color","black");
        }
    }

    function validateEmail(){
        var Ereg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!($("#iemail").val())){
            $("#iemail").css("border-color","red");
            $("#lemail").css("color","red");
        }
        else if(!Ereg.test($("#iemail").val())){
            $("#iemail").css("border-color","red");
            $("#lemail").css("color","red");
        }
        else{
            $("#iemail").css("border-color","black");
            $("#lemail").css("color","black");
        }
    }
    function validateDob(){
        if(!($("#idob").val())){
            $("#idob").css("border-color","red");
            $("#ldob").css("color","red");
        }else{
            $("#idob").css("border-color","black");
            $("#ldob").css("color","black");
        }
    }

    function validateRole(){
        if(!$("input[name*='sradio']:checked").val()){
            $("#lrole").css("color","red");
        }
        else{
            $("#lrole").css("color","black");
        }   
    }
    function validateSkill(){
        let checkeddatas=""
        $("input[name*='scheckbox']:checked").each(function(){
            checkeddatas+=this.value+" ";
        })
        if(!checkeddatas){
            $("#lskill").css("color","red");
        }else{
            $("#lskill").css("color","black");
        }
    }
    function validatePassword(){
        if(!($("#ipassword").val())){
            $("#lpassword").css("color","red");
            $("#ipassword").css("border-color","red");
        }else{
            $("#lpassword").css("color","black");
            $("#ipassword").css("border-color","black");
        }
    }
});