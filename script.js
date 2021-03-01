$(function() {
    let objForSelectColor = 'text';

    const textColorArr = [0, 0, 0];
    const backgroundColorArr = [255, 255, 255];
    
    const sliderRed = $('#sliderRed');
    const sliderGreen = $('#sliderGreen');
    const sliderBlue = $('#sliderBlue');
    const textEl = $('#text');

    changeColor = (arr, obj) => {
        if (obj === 'text') {
            textEl.css('color', `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`);
        } else {
            textEl.css('background-color', `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`)
        }
    }

    $('input[type="radio"]').checkboxradio({
        icon: false,
    }).change(function() {

        objForSelectColor = $(this).val(); 
        if (objForSelectColor === 'text') {
            sliderRed.slider('value', textColorArr[0]);
            sliderGreen.slider('value', textColorArr[1]);
            sliderBlue.slider('value', textColorArr[2]);
        } else {
            sliderRed.slider('value', backgroundColorArr[0]);
            sliderGreen.slider('value', backgroundColorArr[1]);
            sliderBlue.slider('value', backgroundColorArr[2]); 
        }
            
    })

    $('.slider').slider({
        max: 255,
        min: 0,
        step: 1
    });



    sliderRed.slider({
        classes: { 
            'ui-slider': 'slider_red',
            'ui-slider-handle': 'slider__handle_red',
        },
        change: function(event, ui) {
            if (objForSelectColor === 'text') {
                textColorArr[0] = ui.value;
                changeColor(textColorArr, objForSelectColor);
            } else {
                //аналогично с фоном
                backgroundColorArr[0] = ui.value;
                changeColor(backgroundColorArr, objForSelectColor);
            }
        }  
    })

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
