let userArr = [];
$(document).ready(function(){
    let attempts = 11;
    function isEmail(address){
        address = address.split('')
        if(address.indexOf('@') != -1 && address.indexOf('@') != 0 && address.indexOf('.') > address.indexOf('@')){
            console.log(true)
            return true;
        }
        else{
            console.log(false)
            return false;
        }
    }
    
  $('.submit').click(function(){
      let curretStorage = JSON.parse(localStorage.getItem('users'));
        if(curretStorage == null && isEmail($('#email').val())){
            const newUser = {
                userName :$('#username').val(),
                email:$('#email').val(),
                winsTic:0,
                loseTic:0,
                winsRPS:0,
                loseRPS:0
            }
            localStorage.setItem('users',JSON.stringify(newUser))
            window.location.replace('../main/main_page.html');

        }
        else if($('#username').val() == curretStorage.userName  && $('#email').val()== curretStorage.email){
            window.location.replace('../main/main_page.html');
        }
     
        else{
            attempts -=1;
            if(attempts >0){
            window.alert('INCORRECT CODE YOU HAVE ' + attempts +' TRYS LEFT BEFORE USER DATA IS DELETED'  );;
            
            console.log(curretStorage.userName, curretStorage.email)
            console.log($('#username').val(),$('#email').val())
        }
        else{
            localStorage.removeItem('users')
            window.alert("USER DELETED, YOU RAN OUT OF TRIES")
        }
        
    }
  });
  $("*").keyup(function(event) {
    if (event.keyCode === 13) {
        $(".submit").click();
    }
});


});