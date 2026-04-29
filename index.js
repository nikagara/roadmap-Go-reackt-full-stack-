// Когда страница загрузилась — восстанови сохранённые отметки
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card').forEach(function(card) {
        let key = card.querySelector('h3').textContent
        if (localStorage.getItem(key) == "true") {
            card.classList.add('done')
        }
    })
})

// При клике — переключи отметку и сохрани
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        card.classList.toggle('done')
        let key = card.querySelector('h3').textContent
        localStorage.setItem(key, card.classList.contains('done'))
    })
})