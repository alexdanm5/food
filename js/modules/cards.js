import { getResurce } from "../services/services";
import { changeToUAH } from "./currency";

class MenuCard {
    constructor({img, altimg, title, descr, price}) {
        this.img = img;
        this.alt = altimg;
        this.title = title;
        this.descr = descr;
        this.price = price;
    }

    createMarkup() {
        return `
            <div class="menu__item">
                <img src="${this.img}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total">
                        <span>${this.price}</span> грн/день
                    </div>
                </div>
            </div>
        `;
    }
}

function renderCards(cards, parentSelector) {
    const parent = document.querySelector(parentSelector);

    cards.forEach(card => {
        parent.insertAdjacentHTML('beforeend', card.createMarkup());
    });
}

function cards () {

    const rate = 41;

    getResurce('http://localhost:3000/menu')
        .then(data => {

            const preparedCards = data.map(item => {
                return new MenuCard({
                    ...item,
                    price: changeToUAH(item.price, rate)
                });
            });

            renderCards(preparedCards, '.menu .container');
        })
        .catch(error => console.error(error));
}



export default cards;