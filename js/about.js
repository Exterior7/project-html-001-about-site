var about = about || {};

(function (o) {
    "use strict";

    //Get document Node by queryselector
    var getNode = function (s) {
        return document.querySelector(s);
    };


    var validateEmail=function (email)  {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    //Name Field Node
    var inpName = getNode('#inpName');
 
    //Email Field Node
    var inpEmail = getNode('#inpEmail');
   
    //Message Field Node
    var inpMessage = getNode('#inpMessage');
    
    // Error field Node
    var errorField = getNode('#errorField');

    //Submit button Node
    var btnSaveForm = getNode('#btnSaveForm');
    
    btnSaveForm.addEventListener("click", function (e) {
        

        // Hiba tömb
        var arrError=[];
       
        // clear error field
        errorField.innerHTML='';
        
        // Chacking Name
        var inpNameValue=inpName.value;
        if (inpNameValue== '' || inpNameValue.length < 5) {
            arrError.push('A név mező üres vagy kisebb mint 5 karakter');
        }

        // Chacking Email
        var inpEmailValue=inpEmail.value;
        if (!validateEmail(inpEmailValue)) {
            arrError.push('Üres az email mező vagy érvénytelen az email cím');
        }

        // Checking Message
        var inpMessageValue=inpMessage.value;
        if (inpMessageValue== '') {
            arrError.push('Az üzenet mező nem lehet üres');
        }
        else if (inpMessageValue.length <= 20) {
            arrError.push('Az üzenet mező nem lehet kevesebb mint 20 karakter');
        }
        else if (inpMessageValue.length >= 255) {
            arrError.push('Az üzenet mező nem lehet több, mint 255 karakter');
        }

        // Checking Errors
        if (arrError.length > 0) {
            var Message='<ul><li>'+arrError.join('</li><li>')+'</li></ul>';
            console.log(Message); 
            errorField.innerHTML=Message;
            errorField.classList.remove('errorFieldHide');       
            errorField.classList.add('errorFieldShow');       
            e.preventDefault();
        }
        else {return true};
    },false);


}(about));