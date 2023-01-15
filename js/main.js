//select

const element = document.querySelector('.js-choice');
const choices = new Choices(element, {

  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,

});

//map

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [48.87, 2.35],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,

    //controls: [] удаление управлением карты
  });

  var myPlacemark = new ymaps.Placemark([48.87, 2.35], {}, {
    iconLayout: 'default#image', //  значение для меток соответственно без текста
    iconImageHref: '../img/map.svg', // путь к картинке
    iconImageSize: [28, 40], //размеры
    iconImageOffset: [-3, -42], //сдвиг значка в пикселах относительно точки
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);

}

//form

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

let validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#FF5C00'
  }
});

validation.addField('#name', [
  {
    rule: 'required', // проверяем ввели ли мы в поле "Имя" что- либо
    errorMessage: 'Вы не ввели имя' // всплывающая ошибка
  },

  {
    rule: 'minLength', // проверяем ввели ли в поле нужное кол- во символов
    value: 2, // минимальное количество символов
    errorMessage: 'Минимум 2 символа' // всплывающая ошибка
  }

])

  .addField('#tel', [

    {
      validator: (value) => {
        const tel = selector.inputmask.unmaskedvalue()
        return Boolean(Number(tel) && tel.length > 0)
      },
      errorMessage: 'Вы не ввели телефон' // всплывающая ошибка
    },

    {
      validator: (value) => {
        const tel = selector.inputmask.unmaskedvalue()
        return Boolean(Number(tel) && tel.length === 10)
      },
      errorMessage: 'Введите телефон полностью' // всплывающая ошибка
    }

  ])

  .addField('#email', [

    {
      rule: 'required', // проверяем ввели ли мы в  поле "Имя" что- либо
      errorMessage: 'Вы не ввели e-mail' // всплывающая ошибка
    },

    {
      rule: 'email', // тип ввода почта с собачкой, доменом и прочим.
      errorMessage: 'Ошибка в почте' // всплывающая ошибка
    }

  ])


// tooltip

tippy('.help', {

  content: 'Глава 2, страница 176',
  maxWidth: 172,

});



