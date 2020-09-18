class Cards {
    constructor() {
        
    }

   calculoScroll() {
       const posicao = document.getElementById("section-atention").getBoundingClientRect()['y'];
        if(posicao <= 550) {
            $(".section-card").addClass("animacao-card");
        }
    }

}

export { Cards }