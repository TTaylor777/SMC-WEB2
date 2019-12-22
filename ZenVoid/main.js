$(document).ready(function(){

    var hbmclose = document.getElementById('hbmclose')
    var hbmopen = document.getElementById('hbmopen')
    var homeimg = document.getElementById('homeimg')

    // window.addEventListener('resize',function(){

    //     if (window.innerWidth > 800){
    //         $('.hbm').css('display','none')
    //         $('ul').css('display','flex')
    //     } else {
    //         $('#hbmclose').css('display','block')
    //         $('#hbmopen').css('display','none')
    //         $('ul').css('display','none')
    //     }

    //     if (homeimg.style.display == 'block'){
    //         $('#hbmclose').css('display','none')
    //         $('#hbmopen').css('display','none')
    //         $('ul').css('display','flex')
    //     }

    // })

    $('.hbm').click(function(){

        $('.hbm').fadeToggle(0)
        if ($('#mainul').css('display') == 'none'){

            $('#mainul').css('display', 'flex')
            $('#mainul').slideToggle(0)
            $('#mainul').slideToggle(500)

        } else {
            $('#mainul').slideToggle(500)
        }
        

    })

})