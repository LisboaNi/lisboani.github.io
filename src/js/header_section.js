const header = document.querySelector('.header_opcoes');

        window.onscroll = function() {
            if (window.scrollY > 10) {
                header.classList.add('shrink'); 
            } else {
                header.classList.remove('shrink'); 
            }
        };