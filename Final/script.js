$(document).ready(function(){

    var HBM = document.getElementById('HBM')
    var UL = document.getElementById('UL')
    var donate = document.getElementById('donate')
    var donateform = document.getElementById('donateForm')
    var donatesubmit = document.getElementById('donateSubmit')

    $('#HBM').click(function(){

        if (HBM.alt == 'on') {
            HBM.style.backgroundColor = 'rgb(255,255,255)'
            $('#UL').slideToggle()
            HBM.alt = 'off'
        } else {
            HBM.style.backgroundColor = 'rgb(150,150,150)'
            $('#UL').slideToggle()
            HBM.alt = 'on'
        }
        
    })

    $('#donate').click(function(){

        $('#donateForm').slideToggle()
        
    })

    $('#donateSubmit').click(function(){

        donateform.innerHTML = '<h3>Thank You!</h3>'
        
    })

})