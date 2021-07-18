const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name === "" && email === "") {
        return alert('Preencha todos os campos');
    }

    let date = {
        name,
        email
    }

    let convertDate = JSON.stringify(date);

    localStorage.setItem("lead", convertDate);

    let mainContent = document.getElementById('main-content');
    let loading = `<img src="./assets/loading.gif" alt="Loading" />`;
    let ready = `<p>Obrigado pelo seu cadastro, em breve você receberá 
    todas as nossas promoções</p>`;

    mainContent.innerHTML = loading;

    setTimeout(() => {
        mainContent.innerHTML = ready;
    }, 2000);
})