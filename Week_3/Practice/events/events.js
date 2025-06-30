//event
//event handling
//event listening 
//syntax: element.addEventListener(eventType,handleFunction)

const button = document.getElementById('submit_button');
//element.addEventListener(eventType, handlerFunction);
button.addEventListener('click', () => {
    alert('You have clicked me');
});
