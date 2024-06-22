document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('messageForm');
    const messageBoard = document.getElementById('message-board');

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // 创建新的留言元素
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
            <h4>${name}</h4>
            <p>${message}</p >
        `;

        // 将新的留言添加到留言板
        messageBoard.appendChild(messageElement);

        // 清空表单
        messageForm.reset();
    });
});