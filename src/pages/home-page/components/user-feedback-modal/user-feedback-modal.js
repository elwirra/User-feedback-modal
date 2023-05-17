import Swal from 'sweetalert2';

export const UserFeedbackModal = () => {

    let userFeedbackModalClosedTimestamp = localStorage.getItem("userFeedbackModalClosedTimestamp");

    if (userFeedbackModalClosedTimestamp) {
        const halfMinuteInMilliseconds = 30 * 1000;
        const currentDate = new Date();

        const whileAgo = currentDate.getTime() - halfMinuteInMilliseconds;

        if (userFeedbackModalClosedTimestamp >= whileAgo) {
            return;
        }
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
        closeButtonHtml: '<img src="/assets/icons/close-icon.svg" data-icon="icon-close" alt="X" />',
        didClose: () => {
            localStorage.setItem("userFeedbackModalClosedTimestamp", Date.now());
        },
    });
};