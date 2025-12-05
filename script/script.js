
        const menuToggle = document.getElementById('menu-toggle');
        const mainHeader = document.getElementById('main-header');

        menuToggle.addEventListener('click', () => {
            mainHeader.classList.toggle('active');
        }
    )
    let indexRecenze = 1;
    zobrazRecenzi(indexRecenze);

    
    function zmenitRecenzi(n) {
        zobrazRecenzi(indexRecenze += n);
    }

    function zobrazRecenzi(n) {
        let i;
        let recenze = document.getElementsByClassName("recenze-karta");
        if (n > recenze.length) {indexRecenze = 1}
        if (n < 1) {indexRecenze = recenze.length}
        for (i = 0; i < recenze.length; i++) {
            recenze[i].classList.remove("aktivni");
        }
        recenze[indexRecenze - 1].classList.add("aktivni");
        
    }
  