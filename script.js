$(function() {
    //переменная для переключателя, по умолчанию равно 'text'
    let objForSelectColor = 'text';

    //цвета по дефолту, служат для сохранения состояния текущего цвета
    const textColorArr = [0, 0, 0];
    const backgroundColorArr = [255, 255, 255];
    
    //переменные для элементов страницы
    const sliderRed = $('#sliderRed');
    const sliderGreen = $('#sliderGreen');
    const sliderBlue = $('#sliderBlue');
    const textEl = $('#text');

    //функция, меняющая цвет, текста или фона
    changeColor = (arr, obj) => {
        if (obj === 'text') {
            textEl.css('color', `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`);
        } else {
            textEl.css('background-color', `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`)
        }
    }


    //jqeury ui для радиобоксов
    $('input[type="radio"]').checkboxradio({
        icon: false,
    }).change(function() {
        //функция вызывающаяся при переключении настроек текста
        objForSelectColor = $(this).val(); //меняем переменную в зависимости от настроек
        if (objForSelectColor === 'text') {
            //если меняем текст, то значения слайдеров возвращаются
            sliderRed.slider('value', textColorArr[0]);
            sliderGreen.slider('value', textColorArr[1]);
            sliderBlue.slider('value', textColorArr[2]);
        } else {
            //аналогично и с фоном
            sliderRed.slider('value', backgroundColorArr[0]);
            sliderGreen.slider('value', backgroundColorArr[1]);
            sliderBlue.slider('value', backgroundColorArr[2]); 
        }
            
    })

    //делаем слайдеры с jquery ui
    $('.slider').slider({
        max: 255,
        min: 0,
        step: 1
    });


    //функцоинал отдельно для каждого слайдера
    sliderRed.slider({
        classes: { // определям классы
            'ui-slider': 'slider_red',
            'ui-slider-handle': 'slider__handle_red',
        },
        change: function(event, ui) { //вызываем функцию при движении слайдера
            if (objForSelectColor === 'text') {
                textColorArr[0] = ui.value; //сохраняем значение первого цвета в массиве
                changeColor(textColorArr, objForSelectColor); //изменяем текст с помощью функции changecolor
            } else {
                //аналогично с фоном
                backgroundColorArr[0] = ui.value;
                changeColor(backgroundColorArr, objForSelectColor);
            }
        }  
    })
    //далее так же с остальными слайдами 

    sliderGreen.slider({
        classes: {
            'ui-slider': 'slider_green',
            'ui-slider-handle': 'slider__handle_green',
        },
        change: function(event, ui) {
            if (objForSelectColor === 'text') {
                textColorArr[1] = ui.value;
                changeColor(textColorArr, objForSelectColor);
            } else {
                backgroundColorArr[1] = ui.value;
                changeColor(backgroundColorArr, objForSelectColor);
            }
        }  
    })

    sliderBlue.slider({
        classes: {
            'ui-slider': 'slider_blue',
            'ui-slider-handle': 'slider__handle_blue',
        },
        change: function(event, ui) {
            if (objForSelectColor === 'text') {
                textColorArr[2] = ui.value;
                changeColor(textColorArr, objForSelectColor);
            } else {
                backgroundColorArr[2] = ui.value;
                changeColor(backgroundColorArr, objForSelectColor);
            }
        }  
    })
})