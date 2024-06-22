    let colors = ['btn-success', 'btn-warning', 'btn-danger'];
    let clickContor = 0;
    let button = document.getElementById('colorButton');

    function colorChange() {
        button.classList.remove('btn-danger', 'btn-warning', 'btn-success');
        button.classList.add(colors[clickContor++]);
        if (clickContor === 3) {
            clickContor = 0;
        }
    }
    setInterval(colorChange, 1000);