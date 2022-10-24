(function(){
    const users = [ 
        {
        firstname: "James",
        username: 'jamesuser',
        password: 'password1'
    },
     {
        firstname: "Jerry",
        username: 'jerryuser',
        password: 'password2'
    
    }, 
    
    {
        firstname: "Mary",
        username: 'maryuser',
        password: 'password3'
    
    }]

    if(document.querySelector("#login-form-id")){
        const loginForm = document.querySelector("#login-form-id");

        loginForm.addEventListener("submit", function(event){
            event.preventDefault();

            const username = this.username.value.trim();
            const password = this.password.value.trim();

            if(username.length == 0 || password.length == 0){
                alert("Username and password required");
            }else{
                
                const users_found = [];
                for(let i = 0; i < users.length; i++){
                    if(users[i].username === username && users[i].password === password){
                        //we have found the user
                        users_found.push(users[i]);
                        break;
                    }
                }

               if(users_found.length > 0){
                    //there is a user
                    alert("Welcome: " + users_found[0].firstname)
               }else{
                    alert("User not found")
               }
            }
        })

    }



}())