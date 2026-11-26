const paragrafi = document.querySelectorAll(`.paragrafi`);
const primo = document.querySelector(`.primo`);
const secondo = document.querySelector(`.secondo`);
const terzo = document.querySelector(`.terzo`);
const rubrica = document.querySelector(`.rubrica`);

// Primo bottone
primo.addEventListener(`click`, () => {
    paragrafi.forEach((paragrafo) => {
        const r = Math.floor(Math.random() * 255 - 0 + 1);
        const g = Math.floor(Math.random() * 255 - 0 + 1);
        const b = Math.floor(Math.random() * 255 - 0 + 1);
        paragrafo.style.color = `rgb(${r}, ${g}, ${b})`;
    });
});

// Secondo bottone
secondo.addEventListener(`click`, () => {
    paragrafi.forEach((paragrafo) => {
        paragrafo.classList.toggle(`fw-bold`);
    });
});

// Terzo bottone
terzo.addEventListener(`click`, () => {
    paragrafi.forEach((paragrafo) => {
        paragrafo.classList.toggle(`d-none`);
    });
});


// Esercizio 2
const contacts = [
    { 'id': 1, 'name': 'Valerio' },
    { 'id': 2, 'name': 'Donato' },
    { 'id': 3, 'name': 'Lucia' },
    { 'id': 4, 'name': 'Marco' }
];

contacts.forEach((voci) => {
    const li = document.createElement(`li`);
    li.innerHTML = voci.name;
    rubrica.appendChild(li);
});


// Esercizio extra
const txtTitolo = document.querySelector(`#txtTitolo`);
const txtDescrizione = document.querySelector(`#txtDescrizione`);
const buttone = document.querySelector(`#buttone`);
const contenintore = document.querySelector(`#contenitore`);

buttone.addEventListener(`click`, () => {
    const campo1 = txtTitolo.value;
    const campo2 = txtDescrizione.value;
    const date = new Date();

    const div = document.createElement(`div`);
    if (campo1 !== '' && campo2 !== '') {
        const formatDate = date.toLocaleDateString();
        div.classList.add(`col-6`, 'my-2');
        div.innerHTML = `
            <div class="card">
                <div class="card-body coloresfondo">
                    <h4 class="card-title"> ${campo1} </h4>
                    <p class="card-text"> ${campo2} </p>
                    <p> Pubblicato il ${formatDate} </p>
                </div>
            </div>
        `;
        contenintore.appendChild(div);

        txtTitolo.value = ``;
        txtDescrizione.value = ``;
    } else {
        alert(`Compilare entrambi i moduli per favore`);
    }
});
