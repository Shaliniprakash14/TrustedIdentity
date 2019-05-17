/*var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to server nd send name
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
       if(request.readyState === XMLHttpRequest.DONE) {
           if(request.status === 200){
            console.log('user logged in');
            alert('Logged in succssfully');
   }else if(request.status === 403){
       alert('Username/password is incorrect');
   }else if(request.status === 500){
       alert('something went wrong on the server');
   }
  }
};
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
console.log(username);
console.log(password);
//var name = nameInput.value;
request.open('POST','/login',true);
request.setRequestHeader('Content-Type', 'application/json');
 request.send(JSON.stringify({username: username,password: password}));
};*/


var register = document.getElementById('register_btn');

    register.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        request.open('POST', '/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          }
        };
        
        // Make the request
        var user_name = document.getElementById('username').value;
        var pass_word = document.getElementById('password').value;
        var user_detail ={
          username: user_name,
          password: pass_word
        };
        request.send(JSON.stringify(user_detail));  
        register.value = 'Registering...';



    
    };