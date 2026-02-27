import { closeModal, openModal } from "./modal";
import { postData } from "../services/services";

function form(formSelector, modalTaimerId) {
    // forms

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }

    forms.forEach(item => {
        bindPostData(item);
    })



    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

// Более удобный способ оьправки с использованием дополнительной функции и операторами async await
            const formData = new FormData(form);
            const json =JSON.stringify(Object.fromEntries(formData.entries()));

        
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThinksModal(message.success);
                statusMessage.remove()
            }).catch(() => {
                showThinksModal(message.failure);
            }).finally(() => {
                form.reset();
            });

            // Отправка с помощю feth простой formData
            // const formData = new FormData(form);
            // fetch('server.php', {
            //     method: "POST",
            //     body: formData
            // }).then(data => data.text())
            // .then(data => {
            //     console.log(data);
            //     showThinksModal(message.success);
            //     statusMessage.remove()
            // }).catch(() => {
            //     showThinksModal(message.failure);
            // }).finally(() => {
            //     form.reset();
            // });

             // Отправка с помощю feth в JSON

            // const formData = new FormData(form);
            // const object = {};
            // formData.forEach(function(value, key) {
            //     object[key] = value;
            // });

            
            // fetch('server.php', {
            //     method: "POST",
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify(object)
            // })
            // .then(data => data.text())
            // .then(data => {
            //     console.log(data);
            //     showThinksModal(message.success);
            //     statusMessage.remove()
            // }).catch(() => {
            //     showThinksModal(message.failure);
            // }).finally(() => {
            //     form.reset();
            // });
            

            // Отправка в формате JSON
            // reqest.setRequestHeader('Content-type', 'application/json');
            // const formData = new FormData(form);

            // const object = {};
            // formData.forEach(function(value, key) {
            //     object[key] = value;
            // });

            // const json = JSON.stringify(object);
            // reqest.send(json);

            // Отправка в формате XMLHttpRequest
            // const reqest = new XMLHttpRequest();
            // reqest.open('POST', 'server.php');

            // const formData = new FormData(form);
            // reqest.send(formData);

            // reqest.addEventListener('load', () => {
            //     if (reqest.status === 200) {
            //         console.log(reqest.response);
            //         showThinksModal(message.success);
            //         form.reset();
                    
            //         statusMessage.remove()
                    
            //     }else {
            //         showThinksModal(message.failure);
            //     }
            // })
        })
    }
    function showThinksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTaimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class=""modal__title>${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000)
    }

}
export default form;