let axis_button = document.getElementById('axis');
let axis = 'horizontal';

axis_button.addEventListener('click', () => {
    console.log('clicked');
    if (axis_button.textContent == 'Horizontal') {
        axis_button.textContent = 'Vertical';
        axis = 'vertical';
    } else {
        axis_button.textContent = 'Horizontal';
        axis = 'horizontal';
    }
});




