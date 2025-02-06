const styles = [
    { name: 'color', value: 'blue' },
    { name: 'font-size', value: '20px' },
    { name: 'text-align', value: 'center' },
    { name: 'text-decoration', value: 'underline' }
];


function applyStyles(stylesArray, text) {

    const styleString = stylesArray.map(style => `${style.name}: ${style.value};`).join(' ');


    document.write(`<p style="${styleString}">${text}</p>`);
}

