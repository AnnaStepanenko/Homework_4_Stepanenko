/*
Задания

В вёрстку можно вносить любые изменения (добавлять классы, дата-артрибуты, id и так далее) без изменения внешнего вида. Нельзя изменять другие JS файлы, подключаемые к HTML

    1.  На первом экране вы видите 3 блока с class="features-content". Они внутри себя содержат <div class="content-hide" ></div>, который
        содержит необходимую информацию. При наведении курсора на div с class="features-content" сделайте так, чтобы <div class="content-hide" ></div>
        показывался, а когда уводили курор, то блок с class="features-content" становился предыдущих размеров. 

        P.S. Нормально, если при наведении на див с class="features-content" он становится оранжевым - это можно не фиксить

    2.  На втором экране вы видите табы:
        а) Best Education
        б) Top Managemen
        в) Quality Meeting
        При нажатии на каждый из этих табов (квадратик или название) сайтик должен показывать соответствующий блок информации
        с нужной фотографией, описанием и заголовком.

        P.S. Сейчас показаны все блоки с описанием

    3. На третьем экране есть отсчёт обратного времени. Сделайте так, чтобы обратный отсчёт был в режиме реального времени (посекундно).
    В качестве дедлайна (крайней даты) возьмите 31.12.2023

    P.S. Подсказка - в Food_upd папке разбирается, как работать со счётчиком - это моя версия проекта Food

    4.  На 4-ом экране есть 5 карточек, заполненные информацией. Сделайте так, чтобы верстка подтягивалась и вставлялась в HTML документа
        из JS, а именно из массива coursesMass. Это значит, в самом HTML не должно быть верстки (вам нужно будет удалить),
        и она должна вставляться только через JS

*/
'use strict'



document.addEventListener('DOMContentLoaded', ()  => {
  const coursesMass = [
    {
      cardImg: {
        src: 'assets/images/courses-01.jpg',
        alt: 'Course #1',
      },
      header: 'Digital Marketing',
      descr:
        'You can get free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.',
      authorImg: {
        src: 'assets/images/author-01.png',
        alt: 'Author #1',
      },
    },
    {
      cardImg: {
        src: 'assets/images/courses-02.jpg',
        alt: 'Course #2',
      },
      header: 'Business World',
      descr:
        'Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.',
      authorImg: {
        src: 'assets/images/author-02.png',
        alt: 'Author #2',
      },
    },
    {
      cardImg: {
        src: 'assets/images/courses-03.jpg',
        alt: 'Course #3',
      },
      header: 'Media Technology',
      descr:
        'Pellentesque ultricies diam magna, auctor cursus lectus pretium nec.',
      authorImg: {
        src: 'assets/images/author-03.png',
        alt: 'Author #3',
      },
    },
    {
      cardImg: {
        src: 'assets/images/courses-04.jpg',
        alt: 'Course #4',
      },
      header: 'Communications',
      descr:
        'Download free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.',
      authorImg: {
        src: 'assets/images/author-04.png',
        alt: 'Author #4',
      },
    },
    {
      cardImg: {
        src: 'assets/images/courses-05.jpg',
        alt: 'Course #5',
      },
      header: 'Business Ethics',
      descr:
        'Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.',
      authorImg: {
        src: 'assets/images/author-05.png',
        alt: 'Author #5',
      },
    },
  ]

  const tabs = document.querySelectorAll('.ui-tabs-link');
  const tabsContent = document.querySelectorAll('.tabs-content article');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      toggleTabs(index);



    })
  })
  function toggleTabs(activeIndex) {
    tabs.forEach((tab, index) => {
      if (index === activeIndex) {
        tab.parentElement.classList.add('ui-tabs-active');
      } else {
        tab.parentElement.classList.remove('ui-tabs-active');
      }
    })
    tabsContent.forEach((tabContent, index) => {
      if (index === activeIndex) {
        tabContent.style.display ='block';
      } else{
        tabContent.style.display ='none';
      }

    })
  }
  toggleTabs(0);

  const daysElement = document.querySelector('.counter .days .value');
  const hoursElement = document.querySelector('.counter .hours .value');
  const minutesElement = document.querySelector('.counter .minutes .value');
  const secElement = document.querySelector('.counter .seconds .value');

  function updateCounter() {
    let dateNow = new Date();
    let dateDedline = new Date(2023, 11, 31);
    let remainingTime = dateDedline - dateNow;

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    remainingTime -= days * (1000 * 60 * 60 * 24);
    let hours = Math.floor(remainingTime  / (1000 * 60 * 60));
    remainingTime -= hours * (1000 * 60 * 60);
    let minutes = Math.floor(remainingTime  / (1000 * 60));
    remainingTime -= minutes * (1000 * 60);
    let sec = Math.floor(remainingTime / 1000 );

    daysElement.innerText= `${Math.floor(days / 10)}${days % 10}`;
    hoursElement.innerText= `${Math.floor(hours / 10)}${hours % 10}`;
    minutesElement.innerText=`${Math.floor(minutes / 10)}${minutes % 10}`;
    secElement.innerText=`${Math.floor(sec / 10)}${sec % 10}`;
    
  }
  setInterval(updateCounter, 1000);

  const carouselWrapper = document.querySelector('.carousel__wrapper');

  coursesMass.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('carousel__item');

    const img = document.createElement('img');
    img.src = course.cardImg.src;
    img.alt = course.cardImg.alt;

    const content = document.createElement('div');
    content.classList.add('carousel__content');

    const header = document.createElement('h4');
    header.textContent = course.header;
    const paragraph = document.createElement('p');
    paragraph.textContent = course.descr;

    const item = document.createElement('div');
    item.classList.add('item__last-row');

    const img2 = document.createElement('img');
    img2.src = course.authorImg.src;
    img2.alt = course.authorImg.alt;

    const payButton = document.createElement('div');
    payButton.classList.add('text-button-pay');

    const payLink = document.createElement('a');
    payLink.href = '#';
    const icon = document.createElement('i');
    icon.classList.add('fa', 'fa-angle-double-right');

    payLink.appendChild(icon);
    payButton.appendChild(payLink);
    item.appendChild(img2);
    item.appendChild(payButton);
    content.appendChild(header);
    content.appendChild(paragraph);
    content.appendChild(item);
    card.appendChild(img);
    card.appendChild(content);
    carouselWrapper.appendChild(card);


  })
  









})