import { Cards } from './cards.js';
import { Icones } from './icon.js';
import { Footer } from './footer.js';

window.onload = () => {
    let animaCards = new Cards();
    document.addEventListener('scroll', animaCards.calculoScroll.bind());
    
    let animaIcones = new Icones();
    animaIcones.animaIcones();

    let animaBoaViagem = new Footer();
    animaBoaViagem.animacaoMare();
}
