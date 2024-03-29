// Add your JavaScript code here
function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value.trim();
    if (messageText === '') return;
    var messages = document.getElementById('messages');
    var messageElement = document.createElement('li');
    messageElement.classList.add('message');
    messageElement.classList.add('sender');
    messageElement.textContent = messageText;
    messages.appendChild(messageElement);
    messageInput.value = '';
}
