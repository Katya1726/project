document.addEventListener('DOMContentLoaded', () => {

    // Функция для переключения фильтров на странице курсов
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Фильтруем курсы
            const filter = button.dataset.filter;

            courseCards.forEach(card => {
                const category = card.querySelector('.course-category').textContent.toLowerCase();

                if (filter === 'all' || category.toLowerCase() === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Слайдер отзывов
    const prevButton = document.querySelector('.control-prev');
    const nextButton = document.querySelector('.control-next');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    const showTestimonial = (index) => {
        testimonialItems.forEach((item, i) => {
            item.style.display = (i === index) ? 'block' : 'none';
        });
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? testimonialItems.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === testimonialItems.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    // Изначально показываем первый отзыв
    showTestimonial(currentIndex);

    // FAQ раскрывающиеся ответы
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const toggleButton = item.querySelector('.faq-toggle');
        const answer = item.querySelector('.faq-answer');

        toggleButton.addEventListener('click', () => {
            answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        });
    });

    // Обработка отправки формы
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Предотвращаем отправку формы

            // Можно добавить валидацию и отправку данных через AJAX или FormData
            const formData = new FormData(contactForm);

            // Псевдопроцесс отправки формы
            alert('Форма отправлена!');

            // Очистка формы
            contactForm.reset();
        });
    }

});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Страница загружена");
});


document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Переключаем активный класс для текущего вопроса
            item.classList.toggle('active');

            // Закрываем остальные вопросы, если нужен аккордеон с одиночным открытием
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
});
