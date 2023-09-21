


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

Swal.fire(
    'Acount create successfully!',
    'You clicked the button!',
    'success'
  )
}



function signin(){
    var email = document.getElementById('lemail').value
    var passward = document.getElementById('lpass').value
    var filterUsers = allUsers.filter(function(data){
        return data.email === email && data.passward === passward
    })
    if(filterUsers.length){
        Swal.fire(
            'Login successfully!',
            'You clicked the button!',
            'success'
          )  
        location.href = './expance.html'
    
    }
    else{
        Swal.fire({
            title: 'Oops..,Please signup first',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
    }
}





















