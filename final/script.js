$(document).ready(function(){

        var forms = document.querySelectorAll('.needs-validation')
        let x = 0

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

        $('.navbar-toggler-icon').click(function(){

            if (x == 0){
                $('.navbar-toggler-icon').css('transform', 'rotate(30deg)')
                x = 1
            } else {
                $('.navbar-toggler-icon').css('transform', 'rotate(0deg)')
                x = 0
            }

            
    
        })

        $('.check').click(function(){

            $('.check').remove()
            $('.checkoutform').slideToggle()
    
        })

        $('.cartadd').click(function(){

            $('#cartcount').fadeIn()
            $('#cartcount').html( Number($('#cartcount').html()) + 1 )
            $(this).stop()
            $(this).animate({opacity: 0}, 200)
            $(this).animate({opacity: 100}, 200)

        })

        $('.cartadd').mouseover(function(){

            $(this).css('background-color', 'black')
    
        })

        $('.cartadd').mouseout(function(){

            $(this).css('background-color', 'rgb(114, 73, 124)')
    
        })

        $('.col-lg-4').mouseover(function(){

            $(this).css('background-color', 'rgba(0,0,0,0.1)')
    
        })

        $('.col-lg-4').mouseout(function(){

            $(this).css('background-color', 'rgba(0,0,0,0)')
    
        })
    
        $('.productimg').click(function(){

            $('.itemwindow').slideToggle()
        
        })

        $('.itemwindow').click(function(){

            $('.itemwindow').slideToggle()
        
        })

    $('#a').click(function(){

        $('.mainimg').css('background-image', 'url("rock1.jpg")')
        $('.imga').css('background-image', 'url("rock01.jpg")')
        $('.imgb').css('background-image', 'url("rock02.jpg")')
        $('.imgc').css('background-image', 'url("rock03.jpg")')
        $('.itemname').html('Bismuth - $50')
        $('.itemp').html('Bismuth is a chemical element with the symbol Bi and atomic number 83. It is a pentavalent post-transition metal and one of the pnictogens with chemical properties resembling its lighter group 15 siblings arsenic and antimony. Elemental bismuth may occur naturally.')
        $('.pageadd').attr('id', 'rock1')

    })

    $('#b').click(function(){

        $('.mainimg').css('background-image', 'url("rock6.jpg")')
        $('.imga').css('background-image', 'url("rock04.jpg")')
        $('.imgb').css('background-image', 'url("rock05.jpg")')
        $('.imgc').css('background-image', 'url("rock06.jpg")')
        $('.itemname').html('Silicon - $30')
        $('.itemp').html('Silicon is a chemical element with the symbol Si and atomic number 14. It is a hard, brittle crystalline solid with a blue-grey metallic lustre, and is a tetravalent metalloid and semiconductor. It is a member of group 14 in the periodic table.')
        $('.pageadd').attr('id', 'rock2')

    })

    $('#c').click(function(){

        $('.mainimg').css('background-image', 'url("rock5.jpg")')
        $('.imga').css('background-image', 'url("rock07.jpg")')
        $('.imgb').css('background-image', 'url("rock08.jpg")')
        $('.imgc').css('background-image', 'url("rock09.jpg")')
        $('.itemname').html('Selenite - $35')
        $('.itemp').html('All varieties of gypsum, including selenite and alabaster, are composed of calcium sulfate dihydrate (meaning that it has two molecules of water), with the chemical formula CaSO4·2H2O.')
        $('.pageadd').attr('id', 'rock3')

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

        $('.cartbox').prepend('<div class="cartitem"><h1 class="cartitemname">Selenite</h1><h1 class="cartitemprice">35</h1></div>')
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