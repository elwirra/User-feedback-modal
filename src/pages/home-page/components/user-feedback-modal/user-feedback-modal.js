import Swal from 'sweetalert2';

export const UserFeedbackModal = () => {
    let userFeedbackModalClosedTimestamp = localStorage.getItem("userFeedbackModalClosedTimestamp");

    if (userFeedbackModalClosedTimestamp) {
        const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;
        const currentDate = new Date();

        const threeDaysAgo = currentDate.getTime() - threeDaysInMilliseconds;

        // if (userFeedbackModalClosedTimestamp >= threeDaysAgo) {
        //     return;
        // }
    }

    Swal.fire({
        template: '#user-feedback-modal',
        showConfirmButton: false,
        width: '492px',
        padding: 0,
        customClass: {
            container: 'user-feedback-modal',
        },
        background: 'var(--background-color)',
        color: 'var(--on-background-color)',
        showCloseButton: true,
        allowEnterKey: false,
        closeButtonHtml: '<img src="/assets/icons/close-icon.svg" alt="X" />',
        // didClose: () => {
        //     localStorage.setItem("userFeedbackModalClosedTimestamp", Date.now());
        // },
    });
};