// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
function simulateClick(containerId, message) {
    addElementToDOM(containerId, message);
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const simulateBtn = document.getElementById('simulate-click');
        if (simulateBtn) {
            simulateBtn.addEventListener('click', () => {
                simulateClick('dynamic-content', 'Button Clicked');
            });
        }

        const userForm = document.getElementById('user-form');
        if (userForm) {
            userForm.addEventListener('submit', (e) => {
                e.preventDefault();
                handleFormSubmit('user-form', 'dynamic-content');
            });

        }
    });
}

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

function addElementToDOM(containerId, text) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const p = document.createElement('p');
    p.textContent = text;
    container.appendChild(p);
}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId);
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

function handleFormSubmit(formId, containerId) {
    const form = document.getElementById(formId);
    const input = form ? form.querySelector('input[type="text"]') : null;
    const errorMsg = document.getElementById('error-message');

    if (!form || !input || !errorMsg) return;

    const value = input.value.trim();

    if (!value) {
        errorMsg.textContent = 'Input cannot be empty';
        errorMsg.classList.remove('hidden');
        return;
    }

    errorMsg.textContent = '';
    errorMsg.classList.add('hidden');
    addElementToDOM(containerId, value);
    input.value = '';
}

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.



if (typeof module !== 'undefined') {
    module.exports = {
        addElementToDOM,
        removeElementFromDOM,
        simulateClick,
        handleFormSubmit,
    };
}

