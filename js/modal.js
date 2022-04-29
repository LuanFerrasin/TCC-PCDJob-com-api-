'use strict';

const openModal = () => {
    document.getElementById('containerModal').classList.add('active');

}
const closeModal = () => {
    document.getElementById('containerModal').classList.remove('active');
}

export {
    openModal,
    closeModal
}