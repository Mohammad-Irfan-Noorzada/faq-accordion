const accordionBtns = document.querySelectorAll('.main__btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        accordionBtns.forEach(otherBtn => {
            if (otherBtn !== this) {
                otherBtn.classList.remove('active');
                otherBtn.nextElementSibling.style.maxHeight = null;
                otherBtn.querySelector('.main__plus-icon').style.display = 'block';
                otherBtn.querySelector('.main__minus-icon').style.display = 'none';
            }
        });

        this.classList.toggle('active');
        const accordionDescription = this.nextElementSibling;
        const plusIcon = this.querySelector('.main__plus-icon');
        const minusIcon = this.querySelector('.main__minus-icon');

        if (accordionDescription.style.maxHeight) {
            accordionDescription.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        }
    })
})