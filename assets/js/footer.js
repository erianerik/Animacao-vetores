class Footer {
    constructor() {
        this.filtroOnda = $("#efeito-mare");
    }

    animacaoMare() {
        TweenMax.to(this.filtroOnda, 20,  {
            attr: { 
                baseFrequency: 0.03
            },
            repeat: -1, 
            yoyo: true
         });
    }
}

export { Footer }