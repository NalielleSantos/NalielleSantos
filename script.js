document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    successMessage.textContent = 'Mensagem enviada com sucesso!';
    // Limpa os campos do formulário após o envio bem-sucedido (opcional)
    document.getElementById('contactForm').reset();
});