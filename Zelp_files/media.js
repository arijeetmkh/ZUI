
var nameFromList = document.querySelectorAll('.conversation-meta');
var messageBox = document.querySelector('.threads-container');
var closeMessageBox = document.querySelector('.threads-container .open-close');


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



