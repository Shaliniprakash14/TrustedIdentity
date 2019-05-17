var register = document.getElementById('register_btn');
console.log(register);
    register.onclick = function () {
      console.log("coming here");
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
                  window.location.href = '/login';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          }
        };
        
        // Make the request
        var user_name = document.getElementById('username').value;
        var pass_word = document.getElementById('password').value;
        console.log(user_name);
        console.log(pass_word);
        /*var user_detail ={
          username: user_name,
          password: pass_word
        };*/
        request.open('POST', '/create_user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: user_name,password: pass_word}));  
        register.value = 'Registering...';
    
    };