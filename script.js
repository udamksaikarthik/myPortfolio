console.log('First Line is executing in javaScript')

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('onscroll_animation_show')
        }else{
            entry.target.classList.remove('onscroll_animation_show')
        }
    });
});

const observer_one_time = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('onscroll_animation_show')
        }
    });
});

const onscroll_elements = document.querySelectorAll('.onscroll_animation_hidden')
const onscroll_right_elements = document.querySelectorAll('.onscroll_animation_hidden_right')
onscroll_elements.forEach((element) => observer_one_time.observe(element));
onscroll_right_elements.forEach((element) => observer_one_time.observe(element));


const main_container_id = document.getElementById('main_container')
const main_container_id_mobile_verion = document.getElementById('main_container_id_mobile_verion')
const preloader_container_id = document.getElementById('preloader_container_id')
const body_container_id = document.getElementById('body_container_id')
const portfolio_picture_id = document.getElementById('portfolio_picture_id')
const onscroll_animation_hidden_right_onetime_tags = document.querySelectorAll('.onscroll_animation_hidden_right_onetime')

window.addEventListener('load',function(){
    console.log('The page has been loaded!')
    main_container_id.classList.add('unhide')
    main_container_id_mobile_verion.classList.add('unhide')
    preloader_container_id.classList.add('hide')
    body_container_id.classList.add('unhide_overflow_y')
    portfolio_picture_id.classList.add('onscroll_animation_show')
    onscroll_animation_hidden_right_onetime_tags.forEach((element) => observer_one_time.observe(element));
})

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
    setTimeout(function() {
        main_container_id.classList.toggle('bodyhidden')
        body_container_id.classList.toggle('hide')
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

function aboutMe(){
    setTimeout(function(){
        sliderAnimationAboutMe()},1500)
}

const home_canvas_id = document.getElementById('home_canvas_id');
const home_canvas_ctx = home_canvas_id.getContext('2d');
const skill_canvas_id = document.getElementById('skill_canvas_id');
const skill_canvas_ctx = skill_canvas_id.getContext('2d');
const journey_canvas_id = document.getElementById('journey_canvas_id');
const journey_canvas_ctx = journey_canvas_id.getContext('2d');
const home_image_width = 1920;
const home_image_height = 1080;
const journey_image_width = 826;
const journey_image_height = 712;
const home_background_width = home_canvas_id.width = home_canvas_id.offsetWidth;
const home_background_height = home_canvas_id.height = home_canvas_id.offsetHeight;
const skill_background_width = skill_canvas_id.width = skill_canvas_id.offsetWidth;
const skill_background_height = skill_canvas_id.height = skill_canvas_id.offsetHeight;
const journey_background_width = journey_canvas_id.width = journey_canvas_id.offsetWidth;
const journey_background_height = journey_canvas_id.height = journey_canvas_id.offsetHeight;

const home_canvas_background_image = new Image();
home_canvas_background_image.src = 'Images/sky.png'
const home_canvas_background_cloud_image = new Image();
home_canvas_background_cloud_image.src = 'Images/clouds_1.png'
const home_canvas_background_cloud_2_image = new Image();
home_canvas_background_cloud_2_image.src = 'Images/clouds_2.png'
const home_canvas_background_cloud_3_image = new Image();
home_canvas_background_cloud_3_image.src = 'Images/clouds_3.png'
const home_canvas_background_cloud_4_image = new Image();
home_canvas_background_cloud_4_image.src = 'Images/clouds_4.png'
const home_canvas_background_rock_image = new Image();
home_canvas_background_rock_image.src = 'Images/rocks_1.png'
const home_canvas_background_journey_sky_image = new Image();
home_canvas_background_journey_sky_image.src = 'Images/ground_journey_sky.png'
const home_canvas_background_journey_image = new Image();
home_canvas_background_journey_image.src = 'Images/ground.png'

const images = [home_canvas_background_image, home_canvas_background_cloud_image, home_canvas_background_cloud_2_image, home_canvas_background_cloud_3_image, home_canvas_background_cloud_4_image, home_canvas_background_rock_image, home_canvas_background_journey_sky_image, home_canvas_background_journey_image]

class Layer{
    constructor(image,image_width, image_height,home_background_width,home_background_height, flag, ctx){
        this.sx = 0;
        this.sy = 0;
        this.width = image_width;
        this.height = image_height;
        this.flag = flag;
        this.dx = 0;
        this.dy = 0;
        this.ctx = ctx;
        this.image = image;
        this.dx2 = home_background_width;
        this.d_width = home_background_width;
        this.d_height = home_background_height;
    }
    update(){
        if(this.dx <= - this.d_width){
            this.dx = this.d_width
        }
        if(this.dx2 <= -this.d_width){
            this.dx2 = this.d_width;
        }
        if(this.flag){
            this.dx = this.dx - 0.5;
            this.dx2 = this.dx2 - 0.5;
        }
    }
    draw(){
        this.ctx.drawImage(this.image,this.sx,this.sy,this.width,this.height,this.dx,this.dy,this.d_width,this.d_height);
        if(this.flag){
        this.ctx.drawImage(this.image,this.sx,this.sy,this.width,this.height,this.dx2,this.dy,this.d_width,this.d_height);
        }
    }
}

// Home
const layer_1 = new Layer(home_canvas_background_image, home_image_width, home_image_height,home_background_width,home_background_height, false, home_canvas_ctx)
const layer_2 = new Layer(home_canvas_background_cloud_image, home_image_width, home_image_height,home_background_width,home_background_height, true, home_canvas_ctx)
const layer_3 = new Layer(home_canvas_background_cloud_4_image, home_image_width, home_image_height,home_background_width,home_background_height, true, home_canvas_ctx)
const layer_5 = new Layer(home_canvas_background_rock_image, home_image_width, home_image_height, home_background_width,home_background_height,false, home_canvas_ctx)
// Skill
const layer_6 = new Layer(home_canvas_background_image, home_image_width, home_image_height,skill_background_width,skill_background_height, false, skill_canvas_ctx)
const layer_7 = new Layer(home_canvas_background_cloud_image, home_image_width, home_image_height,skill_background_width,skill_background_height, true, skill_canvas_ctx)
const layer_8 = new Layer(home_canvas_background_cloud_2_image, home_image_width, home_image_height,skill_background_width,skill_background_height, true, skill_canvas_ctx)
const layer_9 = new Layer(home_canvas_background_cloud_3_image, home_image_width, home_image_height,skill_background_width,skill_background_height, true, skill_canvas_ctx)
const layer_10 = new Layer(home_canvas_background_cloud_4_image, home_image_width, home_image_height,skill_background_width,skill_background_height, true, skill_canvas_ctx)
// Journey
const layer_11 = new Layer(home_canvas_background_journey_sky_image, home_image_width, home_image_height,journey_background_width,journey_background_height, false, journey_canvas_ctx)
const layer_12 = new Layer(home_canvas_background_cloud_image, home_image_width, home_image_height,skill_background_width,skill_background_height, true, journey_canvas_ctx)
const layer_13 = new Layer(home_canvas_background_journey_image, home_image_width, home_image_height,journey_background_width,journey_background_height, false, journey_canvas_ctx)
const layer_14 = new Layer(home_canvas_background_cloud_3_image, home_image_width, home_image_height,journey_background_width,journey_background_height, true, journey_canvas_ctx)

const layer_objects = [layer_1,layer_2,layer_3,layer_5,layer_6,layer_7,layer_8,layer_9,layer_10,layer_11,layer_12, layer_13]


function animate(){
    home_canvas_ctx.clearRect(0,0,home_background_width,home_background_height)
    layer_objects.forEach(object => {
        object.update();
        object.draw();
    })
    requestAnimationFrame(animate)
}

const imgCount = images.length;
let imagesLoaded = 0;

console.log('outside for loop')

for(let i=0;i<images.length;i++){
    console.log('Inside for loop')
    images[i].onload = function(){
        imagesLoaded++;
        console.log('imagesLoaded: '+imagesLoaded)
        if(imagesLoaded == imgCount){
            console.log('Images have been successfully loaded!!!')
            animate();
        }
    }
}

const informatica_mdm_project_div_slide_id = document.getElementById('informatica_mdm_project_div_slide')

function openInfaProjectDetails(){
    informatica_mdm_project_div_slide_id.classList.add('show')
    main_container_id.classList.add('bodyhidden')
    window.location.href = '#informatica_mdm_project_div_slide'
}

function CloseCross(){
    informatica_mdm_project_div_slide_id.classList.remove('show')
    main_container_id.classList.remove('bodyhidden')
    window.location.href= '#projects'
}

const black_container_div_about_me_animation_slide_id = document.getElementById('black_container_div_about_me_animation_slide_id');
const white_container_div_about_me_animation_slide_id = document.getElementById('white_container_div_about_me_animation_slide_id')
const fixed_header_about_me_id = document.getElementById('fixed_header_about_me_id')

function sliderAnimationAboutMe(){
    window.location.href = '#body_id'
    black_container_div_about_me_animation_slide_id.classList.add('slide_in')
    setTimeout(function(){
        white_container_div_about_me_animation_slide_id.classList.add('slide_in')
    },1000)
    setTimeout(function(){
        main_container_id.classList.add('bodyhidden')
        fixed_header_about_me_id.classList.add('show')
    },2000)
    
    const content_container_about_me_id = document.getElementById('content_container_about_me_id')
    const namasthe_logo_id = document.getElementById('namasthe_logo_id')

    let font_size = window.getComputedStyle(content_container_about_me_id).fontSize;
    namasthe_logo_id.style.height = font_size;
    namasthe_logo_id.style.width = font_size;

    console.log('fontSize: ',font_size)
    
    const about_me_pic_common_id = document.getElementById('about_me_pic_common_id')
    const about_me_grad__pic_id = document.getElementById('about_me_grad__pic_id')
    const about_me_accenture_employee__pic_id = document.getElementById('about_me_accenture_employee__pic_id')

    let about_me_pic_common_id_width = about_me_pic_common_id.offsetWidth;

    if(window.innerWidth>window.innerHeight){
        about_me_grad__pic_id.style.marginTop = '5px'
    }else{
        about_me_pic_common_id.style.height = (about_me_pic_common_id_width-60) + 'px'
        about_me_grad__pic_id.style.height = (about_me_pic_common_id_width-60) + 'px'
        about_me_accenture_employee__pic_id.style.height = (about_me_pic_common_id_width-60) + 'px'
    }

}

function closeAboutMe(){
    window.location.href ='#white_container_div_about_me_animation_slide_id'
    white_container_div_about_me_animation_slide_id.classList.remove('slide_in')
    fixed_header_about_me_id.classList.remove('show')
    setTimeout(function(){
        black_container_div_about_me_animation_slide_id.classList.remove('slide_in')
    },1000)
    setTimeout(function(){
        main_container_id.classList.remove('bodyhidden')
    },1000)
}

