// Botão WhatsApp
document.getElementById('whatsapp-btn').addEventListener('click', function () {
    const phoneNumber = '5545999244569'; // Número no formato internacional
    const message = 'Olá, gostaria de falar com um atendente!';
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
});

// Sistema de Feedbacks (com localStorage)
document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const feedback = {
        name,
        message,
        date: new Date().toLocaleDateString()
    };

    let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(feedback);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    displayFeedbacks();
    document.getElementById('feedback-form').reset();
});

function displayFeedbacks() {
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    const container = document.getElementById('feedbacks');

    container.innerHTML = '';

    feedbacks.forEach(fb => {
        const div = document.createElement('div');
        div.className = 'feedback-item';
        div.innerHTML = `<strong>${fb.name}</strong> (${fb.date}): ${fb.message}`;
        container.appendChild(div);
    });
}

// Carregar feedbacks ao iniciar
displayFeedbacks();
