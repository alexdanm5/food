'use strict'
import  tabs  from './modules/tabs';
import  modal  from './modules/modal';
import  timer  from './modules/timer';
import  cards  from './modules/cards';
import  calculator  from './modules/calculator';
import  form  from './modules/form';
import  slider from './modules/slider';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
        const modalTaimerId = setTimeout(() => openModal('.modal', modalTaimerId), 5000);

    tabs('.tabheader__item ', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTaimerId);
    timer('.timer', '2026-06-14');
    cards();
    calculator();
    form('form', modalTaimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prewArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

    
    
})





