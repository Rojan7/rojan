let istatus =document.querySelector("h5")
 let addFriend = document.querySelector("#add")
let click =0;

 addFriend.addEventListener('click',function(e){
    if(click ===0)
        {
              istatus.innerHTML = "Friends"
             istatus.style.color = "green"
             addFriend.innerHTML = "Remove Friend"
             click =1;
        }
        else {
            istatus.innerHTML = "Strangers"
            istatus.style.color = "red"
            addFriend.innerHTML = "Add Friend"
            click =0

        }
  
 })
 
