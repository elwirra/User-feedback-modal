import iconFeedback from '/assets/icons/user-feedback-icon.svg';
import iconLoader from '/assets/icons/animated-loader.svg';
import iconClose from '/assets/icons/close-icon.svg';

export const UserFeedbackComponent = () => {
    let currentRating = null;
    let feedbackInputIsEmpty = 1;

    const userFeedbackComponent = document.querySelector('.user-feedback-component');
    const allRatesTiles = userFeedbackComponent.querySelectorAll('.user-feedback-component__single-rate-tile');
    const confirmButton = userFeedbackComponent.querySelector('.user-feedback-component__confirm-button');
    const feedbackContainer = userFeedbackComponent.querySelector('.user-feedback-component__input-container');
    const feedbackInput = feedbackContainer.querySelector('.user-feedback-component__input');

    // hack for webpack to build static assets since html reference is inside <template> tag
    userFeedbackComponent.querySelector('[data-icon="icon-feedback"]').src = iconFeedback;
    userFeedbackComponent.querySelector('[data-icon="icon-loader"]').src = iconLoader;
    document.querySelector('[data-icon="icon-close"]').src = iconClose;

    addListenersToAllRatesTiles();

    confirmButton.addEventListener('click', () => {
        confirmButton.setAttribute('data-loading', '1')
    })

    function addListenersToAllRatesTiles() {
        allRatesTiles.forEach((singleRateTile) => {
            singleRateTile.addEventListener('click', () => {
                singleRateTile.toggleAttribute('data-selected');

                if (singleRateTile.hasAttribute('data-selected')) {
                    currentRating = singleRateTile.getAttribute('data-rate');
                } else {
                    currentRating = null;
                }
                
                checkIfInputIsEmpty();
                afterRatingChanged(singleRateTile);
            });
        });
    }

    function afterRatingChanged(singleRateTile) {
        disselectOtherRatings(singleRateTile);
        setProperButtonState(currentRating);
        toggleFeedbackInput(currentRating);
    }

    function toggleFeedbackInput(currentRating) {
        switch (currentRating) {
            case '1':
                feedbackContainer.setAttribute('data-feedback', 1);
                break;
            case '2':
                feedbackContainer.setAttribute('data-feedback', 1);
                break;
            case '3':
                feedbackContainer.setAttribute('data-feedback', 1);
                break;
            case '4':
                feedbackContainer.setAttribute('data-feedback', 0);
                break;
            case '5':
                feedbackContainer.setAttribute('data-feedback', 0);
                break;
          }
    }

    function setProperButtonState() {
        // remove disabled button when 4 & 5 stars are marked
        if (currentRating === '4' || currentRating === '5') {
            confirmButton.removeAttribute('disabled'); 

        // remove disabled button when feedback input is already filled
        } else if (currentRating && !feedbackInputIsEmpty) {
            confirmButton.removeAttribute('disabled');
        } else {
            confirmButton.setAttribute('disabled', true);
        }

        // remove disabled button when user type feedback
        feedbackInput.addEventListener("input", function() {
            feedbackInputIsEmpty = !feedbackInput.value.trim().length;
            
            if (!feedbackInputIsEmpty) {
                confirmButton.removeAttribute('disabled');
            } else {
                confirmButton.setAttribute('disabled', true);
            }
        });
    }

    function checkIfInputIsEmpty() {
        feedbackInputIsEmpty = !feedbackInput.value.trim().length;
    }

    function disselectOtherRatings(clickedTile) {
        allRatesTiles.forEach((singleRateTile) => {
            if (singleRateTile != clickedTile) {
                singleRateTile.removeAttribute('data-selected');
            }
        });
    }
}