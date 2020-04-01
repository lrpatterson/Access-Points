var bd = document.getElementById('main')

bd.addEventListener('click', function(e){
  
    if (e.target.id == "accept-button"){
        //pass
    } else if(e.target.id == "terms-use-trig"){
        document.getElementById('terms-modal').classList.toggle('is-active')
        document.getElementById('main-modal').classList.toggle('is-active')
    } else if(e.target.id == "close-terms-modal"){
        document.getElementById('terms-modal').classList.toggle('is-active')
        document.getElementById('main-modal').classList.toggle('is-active')
    }
    
})