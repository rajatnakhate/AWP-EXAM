function loginform(){
    var user=document.getElementById("username").value;
    var pass=document.getElementById("password").value;

    if(user==""){
        document.getElementById("username").innerhtml="please enter the username";
        return false;
    }
    if(pass==""){
        document.getElementById("username").innerhtml="please enter the username";
        return false;
    }



    var userdis=document.createElement("div");
    var passdis=document.createElement("div");
    userdis.textContent=user;
    passdis.textContent=pass;
    var form=document.getElementById("formvalue");
    form.appendChild(userdis);
    form.appendChild(passdis);
    form.children[0].innerHTML=userdis;
    form.children[1].innerHTML=passdis;
    var clear=document.querySelector("#submit");
    clear.getElementById("user")="";
    clear.getElementById("pass")="";

}