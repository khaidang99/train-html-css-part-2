$(document).ready(function(){
    var slick =  $('.about-slider-image').slick({
        infinite: true,
        speed: 900,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots :true,
        autoplay:true,
        autoplaySpeed: 1500,
        prevArrow: false,
        nextArrow: false
    })

    // add element right about 
    var aboutSliderImage = document.getElementById('about-slider-image');
    var botWrapContent = document.getElementById('bot-wrap-content');
    var aboutBotDark = document.getElementById('about-bot-dark')
    aboutSliderImage.appendChild(aboutBotDark);
    aboutSliderImage.appendChild(botWrapContent);
     
    // add btn pause play
    var slickList = document.getElementsByClassName('slick-dots');
    var btnAboutPausePlay = document.createElement('button');
    var iconPause = document.createElement('i');
    iconPause.classList.add('fas');
    iconPause.classList.add('fa-pause');
    btnAboutPausePlay.classList.add("btn-pause-play");
    btnAboutPausePlay.id = 'btn-pause-play';
    btnAboutPausePlay.appendChild(iconPause);
    slickList[0].appendChild(btnAboutPausePlay);
    
    // event click btn pause/play
    btnAboutPausePlay.onclick  = ()=>{
        var child = btnAboutPausePlay.childNodes;
        var nameClassChild = child[0].classList[1];
        if(nameClassChild==="fa-pause")
        {
            btnAboutPausePlay.innerHTML = '<i class="fas fa-play"></i>';
            $('.about-slider-image').slick('slickPause');
        }
        else{
            btnAboutPausePlay.innerHTML = '<i class="fas fa-pause"></i>';
            $('.about-slider-image').slick('slickPlay');
        }
    }


    // slider book
    var slick =  $('.book-list').slick({
        infinite: true,
        speed: 900,
        slidesToScroll: 1,
        slidesToShow: 4,
        dots :true,
        autoplay:true,
        autoplaySpeed: 1500,
        nextArrow:'<span class="next"><i class="fas fa-angle-right"></i></span>',
        prevArrow:'<span class="prev"><i class="fas fa-angle-left"></i></span>',
        slickPause:'<button class="my-btn" id="my-btn"><i class="fas fa-pause"></i></button>'
    })
    var btnBookPausePlay = document.createElement('button');
    var iconPause = document.createElement('i');
    iconPause.classList.add('fas');
    iconPause.classList.add('fa-pause');
    btnBookPausePlay.classList.add("btn-pause-play");
    btnBookPausePlay.id = 'btn-pause-play';
    btnBookPausePlay.appendChild(iconPause);
    slickList[1].appendChild(btnBookPausePlay);

    btnBookPausePlay.onclick  = ()=>{
        var child = btnBookPausePlay.childNodes;
        var nameClassChild = child[0].classList[1];
        if(nameClassChild==="fa-pause")
        {
            btnBookPausePlay.innerHTML = '<i class="fas fa-play"></i>';
            $('.book-list').slick('slickPause');
        }
        else{
            btnBookPausePlay.innerHTML = '<i class="fas fa-pause"></i>';
            $('.book-list').slick('slickPlay');
        }
    }


    $('.category-item').on('click',function(){
        // $(this).removeClass('avtive'); 
        $('.category-item').not(this).removeClass('active');

        $(this).addClass('active');
    })

    //feel
    $('.feel-slider').slick({
        infinite: true,
        speed: 900,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots :true,
        autoplay:true,
        autoplaySpeed: 1500,
        nextArrow:'<span class="next"><i class="fas fa-angle-right"></i></span>',
        prevArrow:'<span class="prev"><i class="fas fa-angle-left"></i></span>',
        slickPause:'<button class="my-btn" id="my-btn"><i class="fas fa-pause"></i></button>'
    })

    var feelComtainer = document.getElementById('feel-container')
    var feelWapper = document.getElementById('feel-wrapper')
    var feelBtnPrev = document.querySelector('.feel-slider .prev')
    var feelBtnNext = document.querySelector('.feel-slider .next')
    var feelSlickDots = document.querySelector('.feel-slider .slick-dots')
    feelComtainer.appendChild(feelBtnPrev)
    feelComtainer.appendChild(feelBtnNext)
    feelWapper.appendChild(feelSlickDots)
    
    var btnFeelPausePlay = document.createElement('button');
    var iconPause = document.createElement('i');
    iconPause.classList.add('fas');
    iconPause.classList.add('fa-pause');
    btnFeelPausePlay.classList.add("btn-pause-play");
    btnFeelPausePlay.id = 'btn-pause-play';
    btnFeelPausePlay.appendChild(iconPause);
    slickList[2].appendChild(btnFeelPausePlay);

    btnFeelPausePlay.onclick  = ()=>{
        var child = btnFeelPausePlay.childNodes;
        var nameClassChild = child[0].classList[1];
        if(nameClassChild==="fa-pause")
        {
            btnFeelPausePlay.innerHTML = '<i class="fas fa-play"></i>';
            $('.feel-slider').slick('slickPause');
        }
        else{
            btnFeelPausePlay.innerHTML = '<i class="fas fa-pause"></i>';
            $('.feel-slider').slick('slickPlay');
        }
    }
})