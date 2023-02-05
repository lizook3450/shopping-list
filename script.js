/* Новые элементы должны добавляться в список по нажатию на Enter */
const newElement = document.querySelector('#input');
const items = document.querySelector('#items');
newElement.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const messageText = newElement.value;
        const newMessage = document.createElement('li');
        newMessage.textContent = messageText;
        newMessage.addEventListener('click', function() {
            newMessage.classList.toggle('done');
        });
        if (messageText != '') {
        items.append(newMessage);
        }
        newElement.value = '';
    }
});
/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
