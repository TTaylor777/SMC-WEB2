$(document).ready(function(){
    $('input, label').focus(function(){
        if ( $(this).val() == '' ){
            $('main').append('<p>please fill ' + $(this).attr('id') + ' out!!!</p>');
        }
    });

    $('input, label').blur(function(){
        $('p').remove();
    });

    $('#FX').change(function(){
        var currentselection = $(this).val()

        if ( currentselection === 'show' ){
            $('.box').show(1000)
        }
        if ( currentselection === 'hide' ){
            $('.box').hide(200, function(){
                $('main').append('<p>Cya!</p>')
            })
        }
        if ( currentselection === 'slidedown' ){
            $('.box').slideDown(200)
        }
        if ( currentselection === 'slideup' ){
            $('.box').slideUp(200)
        }
    })
})