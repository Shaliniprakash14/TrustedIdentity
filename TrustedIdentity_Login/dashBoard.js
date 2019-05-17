//var session = require('express-session');
/*app.use(session({
    secret: 'someRandomSecretValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
}));
var username = session.auth.username;
 $('#user_name').html(username);*/
 var logout = document.getElementById('logout_btn');
logout.onclick = function() {
  console.log("coming in logout  ")
    //Make a request to server nd send name
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
       if(request.readyState === XMLHttpRequest.DONE) {
           if(request.status === 200){
            console.log('user logged in');
            alert('Logged in succssfully');
            window.location.href = '/dashBoard';
   }else if(request.status === 403){
       alert('Username/password is incorrect');
   }else if(request.status === 500){
       alert('something went wrong on the server');
   }
  }
};

console.log("dashboard.js");
//var name = nameInput.value;
request.open('POST','/logout',true);
//request.setRequestHeader('Content-Type', 'application/json');
//request.send(JSON.stringify({username: username,password: password}));
};
