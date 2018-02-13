
var nameFromList = document.querySelectorAll('.conversation-meta');
var messageBox = document.querySelector('.threads-container');
var closeMessageBox = document.querySelector('.closeMobile');

if(window.innerWidth < 920) {
        for(i = 0; i<nameFromList.length; i++) {
            nameFromList[i].addEventListener('click', function() {
                messageBox.classList.toggle('messagesActive');
            console.log('ok');
        })
        
    }
    closeMessageBox.addEventListener('click', function() {
            messageBox.classList.toggle('messagesActive');
            console.log('okkkk');
        })
}


