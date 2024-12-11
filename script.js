//----ПЕРЕХОД ПО СТРАНИЦАМ САЙТА----
let curPage = 6;
let pages = document.getElementsByClassName('page')
let header_buttons = document.querySelectorAll('.header_container button, #sun, #log_out_acc');

document.getElementById('logo_btn').addEventListener('click', () => {
    pages[curPage].classList.add('no')
    pages[0].classList.remove('no')

    header_buttons[curPage].classList.remove('you_here')
    header_buttons[0].classList.add('you_here')
    curPage = 0
})

document.getElementById('main_header').addEventListener('click', () => {
    pages[curPage].classList.add('no')
    pages[0].classList.remove('no')

    header_buttons[curPage].classList.remove('you_here')
    header_buttons[0].classList.add('you_here')
    curPage = 0
})
document.getElementById('dictionary').addEventListener('click', () => {
    pages[curPage].classList.add('no')
    pages[1].classList.remove('no')

    header_buttons[curPage].classList.remove('you_here')
    header_buttons[1].classList.add('you_here')

    curPage = 1
})
document.getElementById('gallery').addEventListener('click', () => {
    pages[curPage].classList.add('no')
    pages[2].classList.remove('no')

    header_buttons[curPage].classList.remove('you_here')
    header_buttons[2].classList.add('you_here')

    curPage = 2

})
document.getElementById('test').addEventListener('click', () => {
    pages[curPage].classList.add('no')
    pages[3].classList.remove('no')

    header_buttons[curPage].classList.remove('you_here')
    header_buttons[3].classList.add('you_here')

    curPage = 3

})
document.getElementById('personal_acc').addEventListener('click', () => {
    pages[curPage].classList.add('no')
    pages[4].classList.remove('no')

    header_buttons[curPage].classList.remove('you_here')
    header_buttons[4].classList.add('you_here')

    curPage = 4

})
document.getElementById('sun').addEventListener('click', () => {
    pages[curPage].classList.add('no')
    pages[5].classList.remove('no')

    header_buttons[curPage].classList.remove('you_here')
    header_buttons[5].classList.add('you_here')

    curPage = 5

})



const log_in_success = document.querySelector('.log_in_success');

document.getElementById('log_out').addEventListener('click', () => {
    pages[curPage].classList.add('no')
    pages[6].classList.remove('no')

    header_buttons[curPage].classList.remove('you_here')
    header_buttons[6].classList.add('you_here')

    curPage = 6

    document.getElementById("person_data").innerText = 'Необходимо авторизоваться';
    document.getElementById('person_name_header').innerText = '';

    document.getElementById('test_results_acc').innerText = 'Результаты теста: Тест еще не пройден'
    form1.reset();
    form2.reset();

    if (log_in_success) {
        log_in_success.classList.add('no');
    }
    

    if (header) {
        header.classList.add('no');
    }

})
 // кнопка "выйти" в личном кабинете 
document.getElementById('log_out_acc').addEventListener('click', () => {
    pages[curPage].classList.add('no')
    pages[6].classList.remove('no')

    header_buttons[curPage].classList.remove('you_here')
    header_buttons[6].classList.add('you_here')

    curPage = 6

    document.getElementById("person_data").innerText = 'Необходимо авторизоваться';
    document.getElementById('person_name_header').innerText = '';

    document.getElementById('test_results_acc').innerText = 'Результаты теста: Тест еще не пройден'
    form1.reset();
    form2.reset();

    if (log_in_success) {
        log_in_success.classList.add('no');
    }


    if (header) {
        header.classList.add('no');
    }
})


// ----СЛОВАРЬ ТЕРМИНОВ----

let items = [
    {
        name: "Смешарик",
        definition: 'Это персонаж из анимационного проекта "Смешарики", представляющий собой круглое, милое и добродушное существо. Их простая и яркая форма делает их легкими для рисования детьми. Каждый смешарик обладает уникальными чертами и характером, что добавляет разнообразия в их взаимодействие.'
    },
    {
        name: 'Страна смешариков',
        definition: "Вымышленная страна, где живут Смешарики и другие персонажи. В Стране смешариков разворачивается действие почти всех мультфильмов, только изредка смешарики выходят за её границы, например, в случае с их путешествием в Мегаполис или космос. Помимо Мегаполиса рядом со Страной находится Город из азбук. Характеризуется разнообразными природными ландшафтами. "
    },
    {
        name: 'Ромашковая долина',
        definition: "Альтернативное название для места, где происходят события мультфильма. Это живописная местность, наполненная цветами и природой."
    },
    {
        name: 'Пин-код',
        definition: "Спин-офф мультсериала «Смешарики», целью которого является развитие интереса к изобретательству, программированию и науке у детей. В центре сюжета находится изобретённый Пином корабль «Шаролёт» и его экипаж, состоящий из основных персонажей оригинального мультсериала. Серии посвящены различным ситуациям: как нелепым, так и чрезвычайно опасным, а в процессе решения героями возникающих задач раскрываются и объясняются интересные факты о мире и его устройстве."
    },
    {
        name: "Сластёны",
        definition: 'Первоначальное название мультфильма. Всего "сластён" было около двадцати, однако в окончательную версию мультсериала попали только шесть: Крош, Ёжик, Бараш, Лосяш, Кар-Карыч и Совунья. Ещё несколько персонажей, прошедших на поздние стадии производства (Гусений, Бурёнка, Диджей Робкий и Буль-до), впоследствии были заменены на Пина, Нюшу и Копатыча.'
    },
    {
        name: "Салават Шайхинуров",
        definition: "Автор и создатель мультфильма 'Смешарики', который внес значительный вклад в развитие анимации в России. В 2001 году нарисовал 12 забавных круглых персонажей, девять из которых превратились в смешариков — самых популярных и узнаваемых отечественных мультгероев. Член Союза дизайнеров России (2008), член Союза художников России (2009). Лауреат Государственной премии Российской Федерации области литературы и искусства (2008)."
    },
    {
        name: "От винта!",
        definition: "Самая популярная песня из мультфильма (авторы Марина Ланда и Сергей Васильев), которая стала символом веселья и дружбы среди Смешариков. Также звучит в финальных титрах полнометражного мультфильма «Смешарики. Начало»."
    },
    {
        name: "Баламут и обормот",
        definition: "Другая популярная песня из мультфильма.  Песня, исполняемая в сериях «Верь в меня, Ёжик!», «Австралия» основного сериала, а также в сериях «Жажда скорости» и «Бортовой дневник 2» мультсериала «Пин-Код» и в конце титров полнометражного фильма «Смешарики. Дежавю». Музыка из песни звучит в сериях «За секунду до…» и «День археолога». В рамках блока «Смешалости» к песне был создан клип. "
    },
    {
        name: "Крош",
        definition: "Один из главных персонажей, который представляет собой энергичного и веселого кролика, всегда готового к приключениям. Крош, в силу своей активности, очень спортивен. Его любимое занятие — прыжки куда угодно. Крош крайне прыгучий, часто заменяет ходьбу прыжками. Кроме того, Крош умеет стоять на ушах, прыгать на ушах и закручивать уши.  В одной из серий, из-за того что ему закрутило уши, он взлетел, используя уши как пропеллер. При этом Крош очень плохо бегает на дальние расстояния."
    },
    {
        name: "Ёжик",
        definition: "Персонаж, который является другом Кроша. Он умный и спокойный, часто выступает голосом разума в группе. Ёжик очень любит коллекционирование. У Ёжика есть свои коллекции: коллекция фантиков и коллекция кактусов. Ёжику очень дороги эти коллекции, он очень дорожит ими и ухаживает за ними. В частности, Ёжик не мог расстаться ни с одним кактусом, выбирая его в подарок Нюше. Свои коллекции Ёжик держит в строгом порядке, всегда знает, что у него есть, а что нет."
    },
    {
        name: "Нюша",
        definition: "Персонаж, представляющий собой розовую свинку. Она мечтательна и романтична, часто интересуется модой и красотой. В Стране смешариков она — лучший знаток моды. Как только что-то выходит из моды, она очень огорчается и сжигает это (серия «Новогодняя почта») или убирает в шкаф в надежде, что это еще войдет в моду. Но кроме того, Нюша очень хорошо пишет стихи. Она была так увлечена этим делом, что Бараш не мог её никак отвлечь. Нюша хороший вратарь, когда смешарики играют в футбол и хоккей, ворота становятся её зоной. Помимо этого Нюша хорошо разбирается в технике, в серии «Библиотека» она собрала ветрогенератор. Также свинка вместе с Барашем смогла построить маяк («Большие планы»)."
    },
    {
        name: "Бараш",
        definition: "Один из главных персонажей мультипликационной франшизы «Смешарики», сентиментальный меланхоличный баран-романтик и поэт-лирик. Его тонкую натуру легко обидеть, поэтому Бараш требует много внимания от окружающих, которое он привлекает своей ранимостью и загадочностью. Таким образом, Бараш — легко ранимый, в трудной ситуации он даже может заплакать. Но он не желает, да и не способен причинить кому-нибудь зла. Всячески пытается выразить свою любовь к Нюше, хоть она и редко отвечает ему взаимностью. Он умеет читать по-французки и уходить по-англиски."
    },
    {
        name: "Лосяш",
        definition: "Один из главных персонажей мультипликационной франшизы «Смешарики», интеллигентный лось-учёный. Интересуется многими науками: химией, астрономией, биологией, физикой и другими. Из-за сильной увлечённости Лосяша научной деятельностью в его доме царит беспорядок, да и вид его самого довольно неряшливый."
    },
    {
        name: "Копатыч",
        definition: 'Один из главных персонажей мультипликационной франшизы «Смешарики», добрый и хозяйственный медведь-огородник, который выращивает продукты для своих друзей. Раньше жил в Мегаполисе. Копатыч очень много трудится, устает, но он точно знает, что он один может обеспечить продуктами Смешариков, а отдохнуть он всегда успеет. Ведь, как и любой медведь, наш огородник впадает в спячку зимой, хотя и не во всех сериях. Он - самая настоящая звезда "Диско"!'
    },
    {
        name: "Кар-Карыч",
        definition: "Один из главных персонажей мультипликационной франшизы «Смешарики», пожилой ворон. Самый артистичный среди главных героев. В молодости много путешествовал. Играет на рояле, виолончели («Наказуха») и даёт уроки пения другим смешарикам («Ля»)."
    },
    {
        name: "Совунья",
        definition: "Одна из главных персонажей мультипликационной франшизы «Смешарики», старая и мудрая сова, которая одновременно и главная спортсменка, и главный врач страны смешариков. В сериях не раз говорится, что она уже далеко не молодая, однако благодаря своей спортивной форме она выглядит не такой уж и старой. Совунья — достаточно стойкий и энергичный смешарик."
    },
    {
        name: "Пин",
        definition: "Один из главных персонажей мультипликационной франшизы «Смешарики», изобретатель-самоучка. Виртуоз в своих железных изобретениях. Пин — иностранец, поэтому и говорит он с заметным немецким акцентом. Сдержан в эмоциях, он чопорен и щепетилен даже в мелочах и любит учиться на ошибках («Последняя ошибка Пина»). Впустую говорить не любит, считает, что если что-то сказать, то обязательно к месту."
    },
    {
        name: "Биби",
        definition: "Один из главных персонажей мультипликационной франшизы «Смешарики», маленький робот-смешарик, которого создал Пин. Очень любит учиться, летал на Луну, Сатурн, в Египет и другие места. Запрограммирован, предположительно на языке программирования фортран."
    },
    {
        name: "Панди",
        definition: "Одна из главных персонажей мультипликационной франшизы «Смешарики», племянница Копатыча. Приехала погостить на лето к Копатычу. Её полное имя — Степанида, но так её называют только старшие смешарики. Все остальные зовут её Панди или Стешей. В свои годы Панди уже слушает различную музыку (в частности, рок) и украшает комнату плакатами любимых певцов. Умеет кататься на скейтборде."
    }
];


const search_btn = document.getElementById("search_btn");

const vvod = document.getElementById("vvod");
const vyvod = document.getElementById("vyvod");
const the_word = document.getElementById("the_word");
const meaning_word = document.getElementById("meaning_word");


// Поиск элементов
search_btn.addEventListener("click", () => {
    vyvod.innerHTML = "";
    the_word.innerHTML = "";
    meaning_word.innerHTML = "Увидел незнакомое слово? Нажми на него, чтобы появилось определение!";// Очищаем предыдущие результаты
    items.forEach((item) => {
        if (item.name.toLowerCase().includes(vvod.value.toLowerCase())) {
            const li = document.createElement("li");
            li.textContent = item.name;
            //Вывод слова и определения в div "meaning"
            li.addEventListener("click", () => {
                the_word.innerText = item.name; // Вывод слова
                meaning_word.innerText = item.definition; // Вывод определения
            });
            vyvod.appendChild(li);
        }
    });
});

// Вывод списка с самого начала
vyvod.innerHTML = "";
items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.addEventListener("click", () => {
        the_word.innerText = item.name;
        meaning_word.innerText = item.definition;
    });
    vyvod.appendChild(li);
});

// ---- ГАЛЕРЕЯ ----

function update_slide_counter() {
    document.getElementById('slide_counter').innerText = `${x + 1} / ${car.length}`;
}

function funPlus() {
    if (x < car.length - 1) {
        x += 1
    }
    
    document.documentElement.style.setProperty('--transfX', x * (-300) + 'px');
    update_slide_counter()
}

function funMinus() {
    if (x > 0) {
        x -= 1
    }
    document.documentElement.style.setProperty('--transfX', x * (-300) + 'px');
    update_slide_counter()
}

let car = document.getElementsByClassName('def_gal');
let x = 0;

const btn = document.getElementById('btn-left')
btn.addEventListener('click', funMinus)

const bt = document.getElementById('bt-right')
bt.addEventListener('click', funPlus)


//----ТЕСТ----
let form2 = document.forms.form2;

document.getElementById('check_answers').addEventListener('click', function (event) {
    event.preventDefault();
    let result2 = 0;
    let result_answers = '';

    let answ_krosh_name = '';
    if (form2.krosh_name.validity.valid) {
        result2 += 1;
        answ_krosh_name = '1. Правильный ответ';
    } else {
        result2 += 0;
        answ_krosh_name = '1. Неправильный ответ. Правильный ответ - Крош';
    }
    result_answers += answ_krosh_name + '\n';

    let answ_bibi_name = '';
    if (form2.bibi_name.validity.valid) {
        result2 += 1;
        answ_bibi_name = '2. Правильный ответ';
    } else {
        result2 += 0;
        answ_bibi_name = '2. Неправильный ответ. Правильный ответ - Биби';
    }
    result_answers += answ_bibi_name + '\n'


    let dialog = Number(form2.dialog.value);
    let answ_dialog = '';
    if (dialog === 1) {
        answ_dialog = '3. Правильный ответ';
    } else {
        answ_dialog = '3. Неправильный ответ. Правильный ответ - 1. Бараш. 2. Крош ';
    }
    result2 += dialog;
    result_answers += answ_dialog + '\n';

    let pin_accent = Number(form2.pin_accent.value);
    let answ_pin_accent = '';
    if (pin_accent === 1) {
        answ_pin_accent = '4. Правильный ответ';
    } else {
        answ_pin_accent = '4. Неправильный ответ. Правильный ответ - Немецкий';
    }
    result2 += pin_accent;
    result_answers += answ_pin_accent + '\n';

    let Yozik = Number(form2.Yozik.value);
    let answ_Yozik = '';
    if (Yozik === 1) {
        answ_Yozik = '5. Правильный ответ';
    } else {
        answ_Yozik = '5. Неправильный ответ. Правильный ответ - Ёжик';
    }
    result2 += Yozik;
    result_answers += answ_Yozik + '\n';

    let disco = Number(form2.disco.value);
    let answ_disco = '';
    if (disco === 1) {
        answ_disco = '6. Правильный ответ';
    } else {
        answ_disco = '6. Неправильный ответ. Правильный ответ - Копатыч';
    }
    result2 += disco;
    result_answers += answ_disco + '\n';

    let answ_panda = '';
    if (form2.pandi.validity.valid) {
        result2 += 1;
        answ_panda = '7. Правильный ответ';
    } else {
        result2 += 0;
        answ_panda = '7. Неправильный ответ. Правильный ответ - Панди';
    }

    result_answers += answ_panda + '\n';

    //результаты в блок с результатами
    document.getElementById('test_res').innerText = `Количество правильных ответов: ${result2} из 7`;
    document.getElementById('test_res_check_answ').innerText = result_answers;

    // кнопка перепройти тест
    
    if (retake_test) {
        retake_test.classList.remove('no');
    } 

    //результаты в личный кабинет
    document.getElementById('test_results_acc').innerText = `Количество правильных ответов: ${result2} из 7`;

});

const retake_test = document.querySelector('.retake_test'); 

document.getElementById('retake_test_btn').addEventListener('click', () => {
    form2.reset();
    if (retake_test) {
        retake_test.classList.add('no');
    }

    document.getElementById('test_res').innerText = 'В этом блоке появятся результаты теста, когда Вы его пройдете.';
    document.getElementById('test_res_check_answ').innerText = '';

})


//----Регистрация----

let form1 = document.forms.form1;
let submit_button = document.getElementById('submit_button');

submit_button.addEventListener('click', function (event) {
    event.preventDefault();

    let result_for_header = '';
    let result = '';
    let test = true;

    // Проверка имени
    if (form1.person_name.validity.valid) {
        result += 'Имя:  ' + form1.person_name.value + '\n';
        result_for_header += 'Имя:  ' + form1.person_name.value + '\n';
        document.getElementById("log_error").innerText = '';
    } else {
        document.getElementById("log_error").innerText = 'Имя введено неверно.';
        test = false;
    }

    // Проверка даты рождения
    if (form1.birthday.validity.valid) {
        result += 'Дата рождения: ' + form1.birthday.value + '\n';
        document.getElementById("date_error").innerText = '';
    } else {
        document.getElementById("date_error").innerText = 'Некорректная дата';
        test = false;
    }

    // Пол
    const person_gender = document.querySelector('input[name="gender"]:checked');

    if (person_gender) {
        result += 'Пол: ' + person_gender.value + '\n';
        document.getElementById("gender_error").innerText = '';
    } else {
        document.getElementById("gender_error").innerText = 'Ошибка! Не указан пол.';
        test = false;
    }

    if (test) {
        document.getElementById("person_data").innerText = result;
        document.getElementById('person_name_header').innerText = result_for_header;

        if (log_in_success) {
            log_in_success.classList.remove('no');
        }
        

        pages[curPage].classList.add('no')
        pages[0].classList.remove('no')

        header_buttons[curPage].classList.remove('you_here')
        header_buttons[0].classList.add('you_here')
        curPage = 0

        if (header) {
            header.classList.remove('no');
        }
    }
});

const header = document.querySelector('header');

