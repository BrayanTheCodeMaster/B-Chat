function signUp() {
    // Validate inputs and send signup data to server
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate sending data to server and receiving confirmation code
    alert("A confirmation code has been sent to your email.");
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simulate login process
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('chat-container').style.display = 'block';
}
function toggleMenu() {
    const menu = document.getElementById('menu-content');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
function sendMessage() {
    const messageInput = document.getElementById('message-input').value;
    
    // Append message to messages div
    const messageDiv = document.createElement('div');
    messageDiv.innerText = messageInput;
    document.getElementById('messages').appendChild(messageDiv);
    
    // Clear input
    document.getElementById('message-input').value = '';
}

function logout() {
    // Simulate logout
    document.getElementById('chat-container').style.display = 'none';
    document.getElementById('auth-container').style.display = 'block';
}
