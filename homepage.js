const Hamburger = document.querySelector('.hamburger-menu');
const Navigation = document.querySelector('.navigation');
const remove = document.querySelectorAll('.nav-link');

Hamburger.addEventListener('click', () => {
  Hamburger.classList.toggle('active');
  Navigation.classList.toggle('active');
});

const removeList = [...remove];
removeList.forEach((list) => {
  list.addEventListener('click', () => {
    Hamburger.classList.toggle('active');
    Navigation.classList.toggle('active');
  });
});

const speaker = [
  {
    img: './images/Ritah.jpg',
    names: 'Ritah Uwera',
    experience: 'Toddle care managing director',
    job: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat omnis officiis quod sunt ratione iusto quasi mollitia aliquam magni, maiores ducimus harum consequatur! Deserunt velit quam consequuntur reprehenderit laudantium.',
    display: '',
  },

  {
    img: './images/QYLC1611.JPEG',
    names: 'Roland Ntwali',
    experience: 'Wood and Words founder',
    job: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat omnis officiis quod sunt ratione iusto quasi mollitia aliquam magni, maiores ducimus harum consequatur! Deserunt velit quam consequuntur reprehenderit laudantium.',
    display: '',
  },

  {
    img: './images/IMG_5771.JPG',
    names: 'Sandrine Uwase',
    experience: 'Expert in Risk management',
    job: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat omnis officiis quod sunt ratione iusto quasi mollitia aliquam magni, maiores ducimus harum consequatur! Deserunt velit quam consequuntur reprehenderit laudantium.',
    display: 'hide',
  },

  {
    img: './images/Ritah.jpg',
    names: 'Ritah Uwera',
    experience: 'Toddle care managing director',
    job: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat omnis officiis quod sunt ratione iusto quasi mollitia aliquam magni, maiores ducimus harum consequatur! Deserunt velit quam consequuntur reprehenderit laudantium.',
    display: 'hide',
  },

  {
    img: './images/Ritah.jpg',
    names: 'Ritah Uwera',
    experience: 'Toddle care managing director',
    job: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat omnis officiis quod sunt ratione iusto quasi mollitia aliquam magni, maiores ducimus harum consequatur! Deserunt velit quam consequuntur reprehenderit laudantium.',
    display: 'hide',
  },

  {
    img: './images/s6.jpg',
    names: 'Mushikiwabo Luise',
    experience: 'Organisation internationale de la Francophonie.',
    job: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat omnis officiis quod sunt ratione iusto quasi mollitia aliquam magni, maiores ducimus harum consequatur! Deserunt velit quam consequuntur reprehenderit laudantium.',
    display: 'hide',
  },

];

const speakers = document.querySelector('.speaker');
speaker.forEach((speak) => {
  const divElem = document.createElement('div');
  divElem.innerHTML = `
    <div class="home-speaker ${speak.display}">
    <div class="speaker-img">
    <img src=${speak.img} alt="">
    </div>
    <div class="speaker-details">
        <h3 class="speaker-name">${speak.names}</h3>
        <p class="speaker-pos">
        ${speak.experience}
        </p>
        <hr class="speaker-line">
        <p class="speaker-para">
            ${speak.job}
        </p>
        </div>
    </div>
    `;
  divElem.classList.add('speakerz');
  speakers.append(divElem);
});

const hide = document.querySelectorAll('.hide');
const more = document.querySelector('.more-button');

more.addEventListener('click', () => {
  hide.forEach((item) => {
    item.classList.toggle('hide');
  });
  // document.querySelectorAll('.btn').forEach((item)=>{
  //   item.classList.toggle('hide')
  // })
  document.querySelector('.btn-1').classList.toggle('hide');
  document.querySelector('btn-2').classList.toggle('hide');
});