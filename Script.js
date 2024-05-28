console.log("Script.js, initialize");

function getrandomcolor() {
    let val1 = Math.floor(Math.random() * 256);
    let val2 = Math.floor(Math.random() * 256);
    let val3 = Math.floor(Math.random() * 256);

    return {
        color: `rgb(${val1}, ${val2}, ${val3})`,
        code: `#${val1.toString(16).padStart(2, '0')}${val2.toString(16).padStart(2, '0')}${val3.toString(16).padStart(2, '0')}`
    };
}

function changeColors() {
    let boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        let randomColor = getrandomcolor();
        box.style.backgroundColor = randomColor.color;
        box.style.color = randomColor.color;
        box.querySelector('.color-code').innerText = randomColor.code;
    });
}

function copyColorCode(boxId) {
    const colorCode = document.getElementById(boxId).querySelector('.color-code').innerText;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = colorCode;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    const tooltip = document.getElementById(boxId).querySelector('.tooltip');
    tooltip.style.opacity = '1';
    setTimeout(() => {
        tooltip.style.opacity = '0';
    }, 1500);
}

document.getElementById("bt").addEventListener("click", changeColors);
changeColors();
