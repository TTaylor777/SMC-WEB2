$(document).ready(function(){

        var forms = document.querySelectorAll('.needs-validation')
      
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })


          $('#cartimg').click(function(){

            $('.cartwindow').slideToggle()
    
        })

        $('.check').click(function(){

            $('.check').remove()
            $('.checkoutform').slideToggle()
    
        })

        $('.cartadd').click(function(){

            $(this).stop()
            $(this).animate({opacity: 0}, 300, 'swing')
            $(this).animate({opacity: 100}, 300, 'swing')
    
        })

        $('.cartadd').mouseover(function(){

            $(this).css('color', 'rgb(114, 73, 124)')
    
        })

        $('.cartadd').mouseout(function(){

            $(this).css('color', 'black')
    
        })

        $('.col-lg-4').mouseover(function(){

            $(this).css('background-color', 'rgba(0,0,0,0.1)')
    
        })

        $('.col-lg-4').mouseout(function(){

            $(this).css('background-color', 'rgba(0,0,0,0)')
    
        })

    $('#rock1').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Bismuth</h1><h1 class="cartitemprice">50</h1></div>')

        $('.total').html(Number($('.total').html()) + 50)

    })

    $('#rock2').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Silicon</h1><h1 class="cartitemprice">30</h1></div>')

        $('.total').html(Number($('.total').html()) + 30)

    })

    $('#rock3').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Celenite</h1><h1 class="cartitemprice">35</h1></div>')
        $('.total').html(Number($('.total').html()) + 35)
    })

    $('#rock4').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Calcite</h1><h1 class="cartitemprice">40</h1></div>')
        $('.total').html(Number($('.total').html()) + 40)
    })

    $('#rock5').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Azurite</h1><h1 class="cartitemprice">100</h1></div>')
        $('.total').html(Number($('.total').html()) + 100)
    })

    $('#rock6').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Stibnite</h1><h1 class="cartitemprice">70</h1></div>')
        $('.total').html(Number($('.total').html()) + 70)
    })

    $('#rock7').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Pyrite</h1><h1 class="cartitemprice">60</h1></div>')
        $('.total').html(Number($('.total').html()) + 60)
    })

    $('#rock8').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Halite</h1><h1 class="cartitemprice">25</h1></div>')
        $('.total').html(Number($('.total').html()) + 25)
    })

    $('#rock9').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Fluorite</h1><h1 class="cartitemprice">20</h1></div>')
        $('.total').html(Number($('.total').html()) + 20)
    })

    $('#rock10').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Magnetite</h1><h1 class="cartitemprice">40</h1></div>')
        $('.total').html(Number($('.total').html()) + 40)
    })

    $('#rock11').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Hematite</h1><h1 class="cartitemprice">50</h1></div>')
        $('.total').html(Number($('.total').html()) + 50)
    })

    $('#rock12').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Malachite</h1><h1 class="cartitemprice">15</h1></div>')
        $('.total').html(Number($('.total').html()) + 15)
    })

    $('#rock13').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Amethyst</h1><h1 class="cartitemprice">60</h1></div>')
        $('.total').html(Number($('.total').html()) + 60)
    })

    $('#rock14').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Ruby</h1><h1 class="cartitemprice">90</h1></div>')
        $('.total').html(Number($('.total').html()) + 90)
    })  

    $('#rock15').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Quartz</h1><h1 class="cartitemprice">30</h1></div>')
        $('.total').html(Number($('.total').html()) + 30)
    })

    $('#rock16').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Emerald</h1><h1 class="cartitemprice">90</h1></div>')
        $('.total').html(Number($('.total').html()) + 90)
    })

    $('#rock17').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Sapphire</h1><h1 class="cartitemprice">95</h1></div>')
        $('.total').html(Number($('.total').html()) + 95)
    })

    $('#rock18').click(function(){

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Garnet</h1><h1 class="cartitemprice">60</h1></div>')
        $('.total').html(Number($('.total').html()) + 60)
    })  

})