


var allUsers = []
var users = localStorage.getItem('Users')
if(users !== null){
    allUsers = JSON.parse(users)
}


function signup(){
    var usr = document.getElementById('usr')
    var email = document.getElementById('semail')
    var passward = document.getElementById('spass')
    var obj = {
        usr :usr.value,
        email :email.value,
        passward : passward.value
    }
allUsers.push(obj)
localStorage.setItem('Users',JSON.stringify(allUsers))
    location.href ='./welcome.html'
}



function signin(){
    var email = document.getElementById('lemail').value
    var passward = document.getElementById('lpass').value
    var filterUsers = allUsers.filter(function(data){
        return data.email === email && data.passward === passward
    })
    if(filterUsers.length){
       location.href = './dummy.html'
    }
    else{
        alert('please signup ')
    }
}





















