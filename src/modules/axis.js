export default function axisChange(vari) {
    let axis_button = document.getElementById('axis');
    axis_button.addEventListener('click', () => {
        console.log('clicked');
        if (axis_button.textContent == 'Horizontal') {
            axis_button.textContent = 'Vertical';
            vari = 'vertical';
        } else {
            axis_button.textContent = 'Horizontal';
            vari = 'horizontal';
        }
        console.log(vari);
    });
}