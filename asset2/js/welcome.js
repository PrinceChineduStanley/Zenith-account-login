const accountnumber =document.getElementById("accountnumber")
const password =document.getElementById("password")

const users= [

    {
        number : "8145385617",
        password : "prince"
    },

    {
        Email:"Peter@gmail.com",
        password: "Peter1"
    },

]

function signin(){
    let number = accountnumber.value
    let password= password.value
    
    for (let i =0; i<users.length; i++){
        if (number==users[i].number && password==users[i].password){
            alert (" Signed up Successful")
        }
    
        else{
            alert ("Sign in Failed")
        }
    }
    }




