console.log('First Line is executing in javaScript')

 const menu_button_line1 = document.getElementById('menu_button_line1')
 const menu_button_line2 = document.getElementById('menu_button_line2')
 const menu_button_line3 = document.getElementById('menu_button_line3')
 const main_container = document.getElementById('main_container')
 const menu_button_line_wbg_1 = document.getElementById('menu_button_line_wbg_1')
 const menu_button_line_wbg_2 = document.getElementById('menu_button_line_wbg_2')
 const menu_button_line_wbg_3 = document.getElementById('menu_button_line_wbg_3')
 const menu_button = document.getElementById('menu_button')
 const menu_button_white_template_animation_div = document.getElementById('menu_button_white_template_animation_div')
 const menu_button_black_template_animation_div = document.getElementById('menu_button_black_template_animation_div')
const loading_div_container_id = document.getElementById('loading_div_container_id');
const main_container_id = document.getElementById('main_container');

window.addEventListener('onload',()=>{
    main_container_id.classList.add('hidden');
});

window.addEventListener('load',()=>{
    loading_div_container_id.classList.add('hidden');
    main_container_id.classList.add('active');
});

 function menuButtonAnimation(){
     console.log('Inside menuButtonAnimation')
     menu_button_line1.classList.toggle('active')
     menu_button_line2.classList.toggle('active')
     menu_button_line3.classList.toggle('active')
     console.log('Removing reverse class from white and black BG')
     menu_button_white_template_animation_div.classList.remove('reverse')
     menu_button_black_template_animation_div.classList.remove('reverse')
     console.log("Removing active from wbg BG's")
     menu_button_line_wbg_1.classList.remove('active')
    menu_button_line_wbg_2.classList.remove('active')
    menu_button_line_wbg_3.classList.remove('active')
     console.log('Adding active class to white and black BG')
     menu_button_black_template_animation_div.classList.toggle('active')
     menu_button_white_template_animation_div.classList.toggle('active')
     setTimeout(function() {
        main_container.classList.toggle('active')
      }, 1000);
 }

 function reverseMenuButtonAnimation(){
    console.log('Inside reverseMenuButtonAnimation')
    menu_button.click();
    console.log('Adding reverse class to white and black BG')
    menu_button_white_template_animation_div.classList.add('reverse')
    menu_button_black_template_animation_div.classList.add('reverse')
    menu_button_line_wbg_1.classList.add('active')
    menu_button_line_wbg_2.classList.add('active')
    menu_button_line_wbg_3.classList.add('active')
}

function home(){
    setTimeout(function(){
        window.location.href = '#home';
    },1500)
}
function skills(){
    setTimeout(function(){
        window.location.href = '#skills';
    },1500)
}
function journey(){
    setTimeout(function(){
        window.location.href = '#journey';
    },1500)
}
function projects(){
    setTimeout(function(){
        window.location.href = '#projects';
    },1500)
}
function contact(){
    setTimeout(function(){
        window.location.href = '#contact';
    },1500)
}
