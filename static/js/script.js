console.log('First Line is executing in javaScript')

 const menu_button_line1 = document.getElementById('menu_button_line1')
 const menu_button_line2 = document.getElementById('menu_button_line2')
 const menu_button_line3 = document.getElementById('menu_button_line3')
 const menu_button_line_wbg_1 = document.getElementById('menu_button_line_wbg_1')
 const menu_button_line_wbg_2 = document.getElementById('menu_button_line_wbg_2')
 const menu_button_line_wbg_3 = document.getElementById('menu_button_line_wbg_3')
 const menu_button = document.getElementById('menu_button')
 const menu_button_white_template_animation_div = document.getElementById('menu_button_white_template_animation_div')
 const menu_button_black_template_animation_div = document.getElementById('menu_button_black_template_animation_div')

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
