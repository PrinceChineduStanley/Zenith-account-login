const accountnumber =document.getElementById("accountnumber")
const password =document.getElementById("password")

const users= [

    {
        accntnumber : "8145385617",
        password : "prince"
    },

    {
        accntnumber:"7073589338",
        password: "Peter1"
    },

]





function signin(){
    let number = accountnumber.value
    let password1= password.value
    let passed = false
    
    for (let i =0; i<users.length; i++){

        if (number==users[i].accntnumber && password1==users[i].password){
            passed = false

         break
        }
    
        else{
            passed = true
        
        }
    }


    if(passed == true){
            alert ("Sign in Failed")

    }
    else{
            alert (" Signed up Successful")
        }
    }





   

