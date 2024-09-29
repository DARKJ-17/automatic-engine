// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];

    // Mostrar el modal  automáticamente al cargar la página
    modal.style.display = 'block';
    setTimeout(() => { modal.style.opacity = '1'; }, 10); // Pequeño retraso para activar la transición

    // Cuando el usuario haga clic en <span> (x), cerrar el modal
    span.onclick = function() {
        modal.style.opacity = '0';
        setTimeout(() => { modal.style.display = 'none'; }, 300); // Coincidir con la duración de la transición
    }

    // Cuando el usuario haga clic fuera del modal, cerrar el modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.opacity = '0';
            setTimeout(() => { modal.style.display = 'none'; }, 300); // Coincidir con la duración de la transición
        }
    }

    // Código para animaciones al hacer scroll
    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.animate');
        const screenHeight = window.innerHeight;

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            if (elementPosition < screenHeight - 100) {
                element.classList.add('slide-in');
            }
        });
    });

    

    // Manejo de recomendaciones
    const recommendationForm = document.getElementById('recommendationForm');
    const recommendationList = document.getElementById('recommendationList');

    recommendationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('recommendationName').value;
        const recommendation = document.getElementById('recommendationText').value;

        if (name && recommendation) {
            const recommendationItem = document.createElement('div');
            recommendationItem.className = 'recommendation-item';
            recommendationItem.innerHTML = `
                <h4>${name}</h4>
                <p>${recommendation}</p>
            `;
            recommendationList.appendChild(recommendationItem);

            // Limpiar el formulario
            recommendationForm.reset();
        }
    });
});
