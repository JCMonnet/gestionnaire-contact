// cibler élements du DOM
let aside = document.querySelector('.main_article_aside');
let contacts = [];

/**
 * 
 * @param {string} prenom prenom du contact
 * @param {string} nom nom du contact
 * @returns {object} objet du contact
 */
function creerContact(prenom, nom) {
    return {
        prenom: prenom,
        nom: nom,
        getNomComplet() {
            return prenom + ' ' + nom;
        },
    };
}

// ajouter contact au tableau contactS
let contact = creerContact('Johnny', 'begood');
contacts.push(contact);
// ou 
contacts.push(creerContact('luke', 'skywalker'));
// ou
contacts = [...contacts, creerContact('dark', 'vador')];
contacts = [...contacts, creerContact('dark', 'vador 2')];
contacts = [...contacts, creerContact('dark', 'vador 3')];
contacts = [...contacts, creerContact('dark', 'vador 4')];
contacts = [...contacts, creerContact('dark', 'vador 5')];
contacts = [...contacts, creerContact('dark', 'vador 6')];

function afficheContact() {
    aside.innerHTML = '';
    contacts.forEach((contact, index) => {
        let div = document.createElement('div');
        div.classList.add('main_article_aside_card');
        div.innerHTML = `<p>${contact.getNomComplet()}</p>`;
        div.innerHTML += `<p class="corbeille" id=${index}>&#9851;</p>`
        aside.appendChild(div);
    })
    ecouteurEvent();
}

/**
 * fonction ecouteur evenements
 * @type {function}
 */
function ecouteurEvent() {
    let corbeilles = document.querySelectorAll('.corbeille');
    corbeilles.forEach((corbeille) => {
        corbeille.addEventListener('click', function (evenement) {
            suppressionContact(evenement.target.id)
        });
    });
    let btnAjout = document.querySelector('.main_article_menu_p');
    btnAjout.addEventListener('click', function () {
        ajoutContact()
    });
}

/**
 * fonction supprimer un contact
 * @param {number} id nom du contact
 * @type {function}
 */
function suppressionContact(id) {
    contacts.splice(id, 1);
    afficheContact();
}

function ajoutContact() {
    let champsSaisis = document.querySelectorAll('.main_article_menu_input');
        let nom = '';
        let prenom = '';
        champsSaisis.forEach((champSaisi) => {
            if (champSaisi.id === 'nom') {
                nom = champSaisi.value;
            } else if (champSaisi.id === 'prenom') {
                prenom = champSaisi.value;
            }
            champSaisi.value = '';
        });
        nom && prenom ? (contacts = [...contacts, creerContact(prenom, nom)]) : '';
        afficheContact();
}
afficheContact();


