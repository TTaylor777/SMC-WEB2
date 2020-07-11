$(document).ready(function(){

    audio = document.getElementById('audio')
    music1 = document.getElementById('music1')
    music2 = document.getElementById('music2')
    music3 = document.getElementById('music3')
    music4 = document.getElementById('music4')
    music5 = document.getElementById('music5')
    music6 = document.getElementById('music6')
    music7 = document.getElementById('music7')

    audio.volume = 0.35
    audio.loop = true
    music1.volume = 0.05
    music1.loop = true
    music2.volume = 0.05
    music2.loop = true
    music3.volume = 0.05
    music3.loop = true
    music4.volume = 0.05
    music4.loop = true
    music5.volume = 0.05
    music5.loop = true
    music6.volume = 0.05
    music6.loop = true
    music7.volume = 0.05
    music7.loop = true

    new Image('bg1.jpg')
    new Image('bg2.jpg')
    new Image('bg3.jpg')
    new Image('bg4.jpg')
    new Image('bg5.jpg')
    new Image('bg6.jpg')
    new Image('bg7.jpg')
    new Image('bg8.jpg')
    new Image('bg9.jpg')

    music1.load()
    music1.pause()
    music2.load()
    music2.pause()
    music3.load()
    music3.pause()
    music4.load()
    music4.pause()
    music5.load()
    music5.pause()
    music6.load()
    music6.pause()
    music7.load()
    music7.pause()



    // Variables


    var combo = 0
    var fire = 0
    var earth = 0
    var air = 0
    var water = 0
    var space = 0
    var time = 0

    var dicetotal = 0

    var fireroll = 0
    var earthroll = 0
    var airroll = 0
    var waterroll = 0
    var spaceroll = 0
    var timeroll = 0
    var total = 0

    var primary = 1

    var min = 0
    var avg = 0
    var max = 0

    var p1 = [100, 0, 0, 0, 0, 10, 3]
    var p2 = [100, 0, 0, 0, 0, 10, 3]
    var p3 = [100, 0, 0, 0, 0, 10, 3]
    var p4 = [100, 0, 0, 0, 0, 10, 3]
    var p5 = [100, 0, 0, 0, 0, 10, 3]
    var p6 = [100, 0, 0, 0, 0, 10, 3]

    var a = 0
    var b = 0
    var c = 0
    var d = 0
    var e = 0
    var f = 0

    var rng1 = 0
    var rng2 = 0
    var rng3 = 0
    var rng4 = 0
    var rng5 = 0
    var rng6 = 0

    var musicrng = 0

    var aireffect = 0
    var timeeffect = 0

    var speedtotal = 0
    var speed1 = 0
    var speed2 = 0
    var speed3 = 0
    var speed4 = 0
    var speed5 = 0
    var speed6 = 0
    var rng = Math.random()

    var energy = 0
    var rolldisable = 0

    var statmax = 10
    var turn = 1
    var playertotal = 0
    var i = 0

    var bg1 = 'url("bg1.jpg")'
    var bg2 = 'url("bg2.jpg")'
    var bg3 = 'url("bg3.jpg")'
    var firebg = 'url("bg4.jpg")'
    var earthbg = 'url("bg5.jpg")'
    var airbg = 'url("bg6.jpg")'
    var waterbg = 'url("bg7.jpg")'
    var spacebg = 'url("bg8.jpg")'
    var timebg = 'url("bg9.jpg")'


    // Functions



    function musicset(){
        
        
        music1.pause()
        
        music2.pause()
        
        music3.pause()
        
        music4.pause()
        
        music5.pause()
        
        music6.pause()
        
        music7.pause()


        musicrng = Math.round(Math.random() * 7 + 0.5)

        if (musicrng == 1){
            music1.load()
            music1.play()
        }
        if (musicrng == 2){
            music2.load()
            music2.play()
        }
        if (musicrng == 3){
            music3.load()
            music3.play()
        }
        if (musicrng == 4){
            music4.load()
            music4.play()
        }
        if (musicrng == 5){
            music5.load()
            music5.play()
        }
        if (musicrng == 6){
            music6.load()
            music6.play()
        }
        if (musicrng == 7){
            music7.load()
            music7.play()
        }

    }

    function damage(){

        if ($('#player1name').html() != $('#mainplayername').html()){
            if (Number($('#status1').html()) - p1[2] >= 0){
                p1[0] -= (Number($('#status1').html()) - p1[2])
            }
        }
        if ($('#player2name').html() != $('#mainplayername').html()){
            if (Number($('#status1').html()) - p2[2] >= 0){
                p2[0] -= (Number($('#status1').html()) - p2[2])
            }
        }
        if ($('#player3name').html() != $('#mainplayername').html()){
            if (Number($('#status1').html()) - p3[2] >= 0){
                p3[0] -= (Number($('#status1').html()) - p3[2])
            }
        }
        if ($('#player4name').html() != $('#mainplayername').html()){
            if (Number($('#status1').html()) - p4[2] >= 0){
                p4[0] -= (Number($('#status1').html()) - p4[2])
            }
        }
        if ($('#player5name').html() != $('#mainplayername').html()){
            if (Number($('#status1').html()) - p5[2] >= 0){
                p5[0] -= (Number($('#status1').html()) - p5[2])
            }
        }
        if ($('#player6name').html() != $('#mainplayername').html()){
            if (Number($('#status1').html()) - p6[2] >= 0){
                p6[0] -= (Number($('#status1').html()) - p6[2])
            }
        }

        if (p1[0] <= 0 && $('#p1name').val() != ''){
            $('#p1name').val('')
            $('#player1').css('display', 'none')
            p1[0] = 0
            p1[1] = 0
            p1[2] = 0
            p1[3] = 0
            p1[4] = 0
            p1[5] = 0
            p1[6] = 0

            $('#eliminations').append('<h1 class="elimination">' + $('#player1name').html() + '</h1>')

            $('#eliminationview').css('display', 'flex')

        }
        if (p2[0] <= 0 && $('#p2name').val() != ''){
            $('#p2name').val('')
            $('#player2').css('display', 'none')
            p2[0] = 0
            p2[1] = 0
            p2[2] = 0
            p2[3] = 0
            p2[4] = 0
            p2[5] = 0
            p2[6] = 0

            $('#eliminations').append('<h1 class="elimination">' + $('#player2name').html() + '</h1>')

            $('#eliminationview').css('display', 'flex')
        }
        if (p3[0] <= 0 && $('#p3name').val() != ''){
            $('#p3name').val('')
            $('#player3').css('display', 'none')
            p3[0] = 0
            p3[1] = 0
            p3[2] = 0
            p3[3] = 0
            p3[4] = 0
            p3[5] = 0
            p3[6] = 0

            $('#eliminations').append('<h1 class="elimination">' + $('#player3name').html() + '</h1>')

            $('#eliminationview').css('display', 'flex')
        }
        if (p4[0] <= 0 && $('#p4name').val() != ''){
            $('#p4name').val('')
            $('#player4').css('display', 'none')
            p4[0] = 0
            p4[1] = 0
            p4[2] = 0
            p4[3] = 0
            p4[4] = 0
            p4[5] = 0
            p4[6] = 0

            $('#eliminations').append('<h1 class="elimination">' + $('#player4name').html() + '</h1>')

            $('#eliminationview').css('display', 'flex')
        }
        if (p5[0] <= 0 && $('#p5name').val() != ''){
            $('#p5name').val('')
            $('#player5').css('display', 'none')
            p5[0] = 0
            p5[1] = 0
            p5[2] = 0
            p5[3] = 0
            p5[4] = 0
            p5[5] = 0
            p5[6] = 0

            $('#eliminations').append('<h1 class="elimination">' + $('#player5name').html() + '</h1>')

            $('#eliminationview').css('display', 'flex')
        }
        if (p6[0] <= 0 && $('#p6name').val() != ''){
            $('#p6name').val('')
            $('#player6').css('display', 'none')
            p6[0] = 0
            p6[1] = 0
            p6[2] = 0
            p6[3] = 0
            p6[4] = 0
            p6[5] = 0
            p6[6] = 0



            $('#eliminations').append('<h1 class="elimination">' + $('#player6name').html() + '</h1>')

            $('#eliminationview').css('display', 'flex')
        }

    }

    function primaryreset(){
        if (dicetotal != 1){
            if (fire == 1){
                primary = 1
                $('.primary').css('background-image', bg1)
                $('#primary1').css('background-image', firebg)
                $('#combobox').css('background-image', firebg)
            } else {
                if (earth == 1){
                    primary = 2
                    $('.primary').css('background-image', bg1)
                    $('#primary2').css('background-image', earthbg)
                    $('#combobox').css('background-image', earthbg)
                } else {
                    if (air == 1){
                        primary = 3
                        $('.primary').css('background-image', bg1)
                        $('#primary3').css('background-image', airbg)
                        $('#combobox').css('background-image', airbg)
                    } else {
                        if (water == 1){
                            primary = 4
                            $('.primary').css('background-image', bg1)
                            $('#primary4').css('background-image', waterbg)
                            $('#combobox').css('background-image', waterbg)
                        } else {
                            if (space == 1){
                                primary = 5
                                $('.primary').css('background-image', bg1)
                                $('#primary5').css('background-image', spacebg)
                                $('#combobox').css('background-image', spacebg)
                            } else {
                                if (time == 1){
                                    primary = 6
                                    $('.primary').css('background-image', bg1)
                                    $('#primary6').css('background-image', timebg)
                                    $('#combobox').css('background-image', timebg)
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function primarymath(){

        if (primary == 1){

            $('#status1').html(Number($('#status1').html()) + total)

            if (Number($('#status1').html()) > Number($('#status5').html())){
                $('#status1').html(Number($('#status5').html()))
            }

            $('#totalprimary').attr('src', 'F.png')

        }

        if (primary == 2){
            
            $('#status2').html(Number($('#status2').html()) + total)

            if (Number($('#status2').html()) > Number($('#status5').html())){
                $('#status2').html(Number($('#status5').html()))
            }

            $('#totalprimary').attr('src', 'E.png')

        }

        if (primary == 3){
            
            $('#status3').html(Number($('#status3').html()) + total)

            if (Number($('#status3').html()) > Number($('#status5').html())){
                $('#status3').html(Number($('#status5').html()))
            }

            $('#totalprimary').attr('src', 'A.png')

        }

        if (primary == 4){
            
            $('#status4').html(Number($('#status4').html()) + total)

            if (Number($('#status4').html()) > Number($('#status5').html())){
                $('#status4').html(Number($('#status5').html()))
            }

            $('#totalprimary').attr('src', 'W.png')

        }

        if (primary == 5){
            
            $('#status5').html(Number($('#status5').html()) + total)

            $('#totalprimary').attr('src', 'S.png')

        }

        if (primary == 6){
            
            $('#status6').html(Number($('#status6').html()) + total)

            if (Number($('#status6').html()) > Number($('#status5').html())){
                $('#status6').html(Number($('#status5').html()))
            }

            $('#totalprimary').attr('src', 'T.png')

        }

    }

    function energymath(){
        energy = 0

        if (fire == 1){
            energy += 3
        }
        if (earth == 1){
            energy += 3
        }
        if (air == 1){
            energy += 3
        }
        if (water == 1){
            energy += 3
        }
        if (space == 1){
            energy += 3
        }
        if (time == 1){
            energy += 3
        }

        if (Number($('#status6').html()) < 3){
            $('#firebox').css('opacity', '30%')
            $('#earthbox').css('opacity', '30%')
            $('#airbox').css('opacity', '30%')
            $('#waterbox').css('opacity', '30%')
            $('#spacebox').css('opacity', '30%')
            $('#timebox').css('opacity', '100%')
        }

        if (energy + 3 > Number($('#status6').html())){

            if (fire != 1){
                $('#firebox').css('opacity', '30%')
            }
            if (earth != 1){
                $('#earthbox').css('opacity', '30%')
            }
            if (air != 1){
                $('#airbox').css('opacity', '30%')
            }
            if (water != 1){
                $('#waterbox').css('opacity', '30%')
            }
            if (space != 1){
                $('#spacebox').css('opacity', '30%')
            }
            if (time != 1){
                $('#timebox').css('opacity', '30%')
            }
            
        } else {
            $('#firebox').css('opacity', '100%')
            $('#earthbox').css('opacity', '100%')
            $('#airbox').css('opacity', '100%')
            $('#waterbox').css('opacity', '100%')
            $('#spacebox').css('opacity', '100%')
            $('#timebox').css('opacity', '100%')
        }
        
        if (energy > Number($('#status6').html())){

            rolldisable = 1

        } else {
            rolldisable = 0
        }

        if (time == 1 && fire == 0 && earth == 0 && air == 0 && water == 0 && space == 0){
            $('#timebox').css('opacity', '100%')
            rolldisable = 0
        }

        if (Number($('#status6').html()) < 3){
            $('#timebox').css('opacity', '100%')
        }

        if (energy == 0 && Number($('#status6').html()) < 3){
            $('#firebox').css('opacity', '30%')
            $('#earthbox').css('opacity', '30%')
            $('#airbox').css('opacity', '30%')
            $('#waterbox').css('opacity', '30%')
            $('#spacebox').css('opacity', '30%')
        }

        console.log(rolldisable)
    
    }

    function diceroll(){

        total = 0

        fireroll = Math.round(Math.random() * 4 + 0.5)
        earthroll = Math.round(Math.random() * 6 + 0.5)
        airroll = Math.round(Math.random() * 8 + 0.5)
        waterroll = Math.round(Math.random() * 20 + 0.5)
        spaceroll = Math.round(Math.random() * 10 + 0.5)
        timeroll = Math.round(Math.random() * 12 + 0.5)
        

        if (fire == 1){
            total += fireroll
        }
        if (earth == 1){
            total += earthroll
        }
        if (air == 1){
            total += airroll
        }
        if (water == 1){
            total += waterroll
        }
        if (space == 1){
            total += spaceroll
        }
        if (time == 1){
            total += timeroll
        }

        $('#roll1').html(fireroll)
        $('#roll2').html(earthroll)
        $('#roll3').html(airroll)
        $('#roll4').html(waterroll)
        $('#roll5').html(spaceroll)
        $('#roll6').html(timeroll)
        

    }

    function effectroll(){

        rng1 = Math.random() * 100
        rng2 = Math.random() * 100
        rng3 = Math.random() * 100
        rng4 = Math.random() * 100
        rng5 = Math.random() * 100
        rng6 = Math.random() * 100

        
        if (air == 1 && rng3 <= $('#effect').html()){
            
            $('#roll3box').css('background-image', airbg)
            aireffect = 1

        }
        if (space == 1 && rng5 <= $('#effect').html()){
            total = 0

            fireroll = 4
            earthroll = 6
            airroll = 8
            waterroll = 20
            spaceroll = 10
            timeroll = 12

            if (fire == 1){
                total += fireroll
            }
            if (earth == 1){
                total += earthroll
            }
            if (air == 1){
                total += airroll
            }
            if (water == 1){
                total += waterroll
            }
            if (space == 1){
                total += spaceroll
            }
            if (time == 1){
                total += timeroll
            }

            $('#roll1').html(fireroll)
            $('#roll2').html(earthroll)
            $('#roll3').html(airroll)
            $('#roll4').html(waterroll)
            $('#roll5').html(spaceroll)
            $('#roll6').html(timeroll)

            $('#roll5box').css('background-image', spacebg)

        }
        if (time == 1 && rng6 <= $('#effect').html()){
            
            $('#roll6box').css('background-image', timebg)
            timeeffect = 1

        }
        if (fire == 1 && rng1 <= $('#effect').html()){
            total *= 2
            $('#roll1box').css('background-image', firebg)
        }
        if (earth == 1 && rng2 <= $('#effect').html()){
            
            $('#roll2box').css('background-image', earthbg)

            total += Number($('#status2').html())

        }
        if (water == 1 && rng4 <= $('#effect').html()){
            
            $('#roll4box').css('background-image', waterbg)
            $('#mainplayerlife').html(Number($('#mainplayerlife').html()) + total)

        }

        $('#total').html(total)

    }

    function combomath(){

        dicetotal = 0

        $('#primary1').css('display', 'none')
        $('#primary2').css('display', 'none')
        $('#primary3').css('display', 'none')
        $('#primary4').css('display', 'none')
        $('#primary5').css('display', 'none')
        $('#primary6').css('display', 'none')

        if(fire == 1){
            dicetotal += 1
            $('#primary1').css('display', 'flex')
            
        }
        if(earth == 1){
            dicetotal += 1
            $('#primary2').css('display', 'flex')
            
        }
        if(air == 1){
            dicetotal += 1
            $('#primary3').css('display', 'flex')
            
        }
        if(water == 1){
            dicetotal += 1
            $('#primary4').css('display', 'flex')
            
        }
        if(space == 1){
            dicetotal += 1
            $('#primary5').css('display', 'flex')
            
        }
        if(time == 1){
            dicetotal += 1
            $('#primary6').css('display', 'flex')
            
        }

        if (dicetotal == 1 && fire == 1){
                primary = 1
                $('.primary').css('background-image', bg1)
                $('#primary1').css('background-image', firebg)
                $('#combobox').css('background-image', firebg)
            }
        if (dicetotal == 1 && earth == 1){
                primary = 2
                $('.primary').css('background-image', bg1)
                $('#primary2').css('background-image', earthbg)
                $('#combobox').css('background-image', earthbg)
            }
        if (dicetotal == 1 && air == 1){
                primary = 3
                $('.primary').css('background-image', bg1)
                $('#primary3').css('background-image', airbg)
                $('#combobox').css('background-image', airbg)
            }
        if (dicetotal == 1 && water == 1){
                primary = 4
                $('.primary').css('background-image', bg1)
                $('#primary4').css('background-image', waterbg)
                $('#combobox').css('background-image', waterbg)
            }
        if (dicetotal == 1 && space == 1){
                primary = 5
                $('.primary').css('background-image', bg1)
                $('#primary5').css('background-image', spacebg)
                $('#combobox').css('background-image', spacebg)
            }
        if (dicetotal == 1 && time == 1){
                primary = 6
                $('.primary').css('background-image', bg1)
                $('#primary6').css('background-image', timebg)
                $('#combobox').css('background-image', timebg)
            }
        
        if (primary == 1 && fire != 1){
            primaryreset()
        }
        if (primary == 2 && earth != 1){
            primaryreset()
        }
        if (primary == 3 && air != 1){
            primaryreset()
        }
        if (primary == 4 && water != 1){
            primaryreset()
        }
        if (primary == 5 && space != 1){
            primaryreset()
        }
        if (primary == 6 && time != 1){
            primaryreset()
        }
        

        if (dicetotal == 1){
            $('#effect').html(100)
        }
        if (dicetotal == 2){
            $('#effect').html(50)
        }
        if (dicetotal == 3){
            $('#effect').html(33)
        }
        if (dicetotal == 4){
            $('#effect').html(25)
        }
        if (dicetotal == 5){
            $('#effect').html(20)
        }
        if (dicetotal == 6){
            $('#effect').html(15)
        }
        if (dicetotal == 0){
            $('#effect').html(0)
        }

        if (combo == 110000){
            $('#combo').attr('src', '110000.png')
            
        }
        if (combo == 101000){
            $('#combo').attr('src', '101000.png')
            
        }
        if (combo == 100100){
            $('#combo').attr('src', '100100.png')
            
        }
        if (combo == 100010){
            $('#combo').attr('src', '100010.png')
            
        }
        if (combo == 100001){
            $('#combo').attr('src', '100001.png')
            
        }
        if (combo == 11000){
            $('#combo').attr('src', '011000.png')
            
        }
        if (combo == 10100){
            $('#combo').attr('src', '010100.png')
            
        }
        if (combo == 10010){
            $('#combo').attr('src', '010010.png')
            
        }
        if (combo == 10001){
            $('#combo').attr('src', '010001.png')
            
        }
        if (combo == 1100){
            $('#combo').attr('src', '001100.png')
            
        }
        if (combo == 1010){
            $('#combo').attr('src', '001010.png')
            
        }
        if (combo == 1001){
            $('#combo').attr('src', '001001.png')
            
        }
        if (combo == 110){
            $('#combo').attr('src', '000110.png')
            
        }
        if (combo == 101){
            $('#combo').attr('src', '000101.png')
            
        }
        if (combo == 11){
            $('#combo').attr('src', '000011.png')
            
        }


        if (combo == 111000){
            $('#combo').attr('src', '111000.png')
            
        }
        if (combo == 110100){
            $('#combo').attr('src', '110100.png')
            
        }
        if (combo == 110010){
            $('#combo').attr('src', '110010.png')
            
        }
        if (combo == 110001){
            $('#combo').attr('src', '110001.png')
            
        }
        if (combo == 101100){
            $('#combo').attr('src', '101100.png')
            
        }
        if (combo == 101010){
            $('#combo').attr('src', '101010.png')
            
        }
        if (combo == 101001){
            $('#combo').attr('src', '101001.png')
            
        }
        if (combo == 100110){
            $('#combo').attr('src', '100110.png')
            
        }
        if (combo == 100101){
            $('#combo').attr('src', '100101.png')
            
        }
        if (combo == 100011){
            $('#combo').attr('src', '100011.png')
            
        }
        if (combo == 11100){
            $('#combo').attr('src', '011100.png')
            
        }
        if (combo == 11010){
            $('#combo').attr('src', '011010.png')
            
        }
        if (combo == 11001){
            $('#combo').attr('src', '011001.png')
            
        }
        if (combo == 10110){
            $('#combo').attr('src', '010110.png')
            
        }
        if (combo == 10101){
            $('#combo').attr('src', '010101.png')
            
        }
        if (combo == 10011){
            $('#combo').attr('src', '010011.png')
            
        }
        if (combo == 1110){
            $('#combo').attr('src', '001110.png')
            
        }
        if (combo == 1101){
            $('#combo').attr('src', '001101.png')
            
        }
        if (combo == 1011){
            $('#combo').attr('src', '001011.png')
            
        }
        if (combo == 111){
            $('#combo').attr('src', '000111.png')
            
        }


        if (combo == 111100){
            $('#combo').attr('src', '111100.png')
            
        }
        if (combo == 111010){
            $('#combo').attr('src', '111010.png')
            
        }
        if (combo == 111001){
            $('#combo').attr('src', '111001.png')
            
        }
        if (combo == 110110){
            $('#combo').attr('src', '110110.png')
            
        }
        if (combo == 110101){
            $('#combo').attr('src', '110101.png')
            
        }
        if (combo == 110011){
            $('#combo').attr('src', '110011.png')
            
        }
        if (combo == 101110){
            $('#combo').attr('src', '101110.png')
            
        }
        if (combo == 101101){
            $('#combo').attr('src', '101101.png')
            
        }
        if (combo == 101011){
            $('#combo').attr('src', '101011.png')
            
        }
        if (combo == 100111){
            $('#combo').attr('src', '100111.png')
            
        }
        if (combo == 11110){
            $('#combo').attr('src', '011110.png')
            
        }
        if (combo == 11101){
            $('#combo').attr('src', '011101.png')
            
        }
        if (combo == 11011){
            $('#combo').attr('src', '011011.png')
            
        }
        if (combo == 10111){
            $('#combo').attr('src', '010111.png')
            
        }
        if (combo == 1111){
            $('#combo').attr('src', '001111.png')
            
        }


        if (combo == 111110){
            $('#combo').attr('src', '111110.png')
            
        }
        if (combo == 111101){
            $('#combo').attr('src', '111101.png')
            
        }
        if (combo == 111011){
            $('#combo').attr('src', '111011.png')
            
        }
        if (combo == 110111){
            $('#combo').attr('src', '110111.png')
            
        }
        if (combo == 101111){
            $('#combo').attr('src', '101111.png')
            
        }
        if (combo == 11111){
            $('#combo').attr('src', '011111.png')
            
        }


        if (combo == 111111){
            $('#combo').attr('src', '111111.png')
            
        }


        if (combo == 100000){
            $('#combo').attr('src', 'fire.png')
            
        }
        if (combo == 10000){
            $('#combo').attr('src', 'earth.png')
            
        }
        if (combo == 1000){
            $('#combo').attr('src', 'air.png')
            
        }
        if (combo == 100){
            $('#combo').attr('src', 'water.png')
            
        }
        if (combo == 10){
            $('#combo').attr('src', 'space.png')
            
        }
        if (combo == 1){
            $('#combo').attr('src', 'time.png')
            
        }
        if (combo == 0){
            $('#combo').attr('src', '')
            $('#combobutton').fadeOut(200)
            $('#combobox').css('background-image', bg1)
        }
        if (combo != 0){
            $('#combobutton').fadeIn(200)
            $('#combobutton').css('display', 'flex')
        }

    }

    function rangemath(){

        min = 0
        avg = 0
        max = 0

        if (fire == 1){
            min += 1
            avg += 2.5
            max += 4
        }

        if (earth == 1){
            min += 1
            avg += 3.5
            max += 6
        }

        if (air == 1){
            min += 1
            avg += 4.5
            max += 8
        }

        if (water == 1){
            min += 1
            avg += 10.5
            max += 20
        }

        if (space == 1){
            min += 1
            avg += 5.5
            max += 10
        }

        if (time == 1){
            min += 1
            avg += 6.5
            max += 12
        }

        $('#min').html(min)
        $('#avg').html(avg)
        $('#max').html(max)

    }

    function playerturn(){
        
        i = 1

        while (i == 1){

        turn += 1
        if (turn >= 7){
            turn = 1
        }

        if (turn == 1 && $('#p1name').val() != ''){
            $('#mainplayername').html($('#player1name').html())
            $('#mainplayerlife').html(p1[0])
            $('#status1').html(p1[1])
            $('#status2').html(p1[2])
            $('#status3').html(p1[3])
            $('#status4').html(p1[4])
            $('#status5').html(p1[5])
            $('#status6').html(p1[6])
            i = 0
        }
        if (turn == 2 && $('#p2name').val() != ''){
            $('#mainplayername').html($('#player2name').html())
            $('#mainplayerlife').html(p2[0])
            $('#status1').html(p2[1])
            $('#status2').html(p2[2])
            $('#status3').html(p2[3])
            $('#status4').html(p2[4])
            $('#status5').html(p2[5])
            $('#status6').html(p2[6])
            i = 0
        }
        if (turn == 3 && $('#p3name').val() != ''){
            $('#mainplayername').html($('#player3name').html())
            $('#mainplayerlife').html(p3[0])
            $('#status1').html(p3[1])
            $('#status2').html(p3[2])
            $('#status3').html(p3[3])
            $('#status4').html(p3[4])
            $('#status5').html(p3[5])
            $('#status6').html(p3[6])
            i = 0
        }
        if (turn == 4 && $('#p4name').val() != ''){
            $('#mainplayername').html($('#player4name').html())
            $('#mainplayerlife').html(p4[0])
            $('#status1').html(p4[1])
            $('#status2').html(p4[2])
            $('#status3').html(p4[3])
            $('#status4').html(p4[4])
            $('#status5').html(p4[5])
            $('#status6').html(p4[6])
            i = 0
        }
        if (turn == 5 && $('#p5name').val() != ''){
            $('#mainplayername').html($('#player5name').html())
            $('#mainplayerlife').html(p5[0])
            $('#status1').html(p5[1])
            $('#status2').html(p5[2])
            $('#status3').html(p5[3])
            $('#status4').html(p5[4])
            $('#status5').html(p5[5])
            $('#status6').html(p5[6])
            i = 0
        }
        if (turn == 6 && $('#p6name').val() != ''){
            $('#mainplayername').html($('#player6name').html())
            $('#mainplayerlife').html(p6[0])
            $('#status1').html(p6[1])
            $('#status2').html(p6[2])
            $('#status3').html(p6[3])
            $('#status4').html(p6[4])
            $('#status5').html(p6[5])
            $('#status6').html(p6[6])
            i = 0
        }

        

        }

    }

    function speedmath(){

        if (Math.random() * 100 <= Number($('#status3').html())){
            aireffect = 1
        }

        if (aireffect != 1){

        playerturn()

        } else {
            aireffect = 0
        }

        $('#mainplayerlife').html(Number($('#mainplayerlife').html()) + Number($('#status4').html()))

        if (Number($('#mainplayerlife').html()) > (Number($('#status5').html()) + 100)){
            $('#mainplayerlife').html(Number($('#status5').html()) + 100)
        }

        if($('#mainplayername').html() == $('#player1name').html()){
            p1[0] = Number($('#mainplayerlife').html())
            $('#player1life').html(p1[0])
        }
        if($('#mainplayername').html() == $('#player2name').html()){
            p2[0] = Number($('#mainplayerlife').html())
            $('#player2life').html(p2[0])
        }
        if($('#mainplayername').html() == $('#player3name').html()){
            p3[0] = Number($('#mainplayerlife').html())
            $('#player3life').html(p3[0])
        }
        if($('#mainplayername').html() == $('#player4name').html()){
            p4[0] = Number($('#mainplayerlife').html())
            $('#player4life').html(p4[0])
        }
        if($('#mainplayername').html() == $('#player5name').html()){
            p5[0] = Number($('#mainplayerlife').html())
            $('#player5life').html(p5[0])
        }
        if($('#mainplayername').html() == $('#player6name').html()){
            p6[0] = Number($('#mainplayerlife').html())
            $('#player6life').html(p6[0])
        }

    }

    function reset(){

        if($('#mainplayername').html() == $('#player1name').html()){
            p1[0] = Number($('#mainplayerlife').html())
            p1[1] = Number($('#status1').html())
            p1[2] = Number($('#status2').html())
            p1[3] = Number($('#status3').html())
            p1[4] = Number($('#status4').html())
            p1[5] = Number($('#status5').html())
            p1[6] = Number($('#status6').html())
        }
        if($('#mainplayername').html() == $('#player2name').html()){
            p2[0] = Number($('#mainplayerlife').html())
            p2[1] = Number($('#status1').html())
            p2[2] = Number($('#status2').html())
            p2[3] = Number($('#status3').html())
            p2[4] = Number($('#status4').html())
            p2[5] = Number($('#status5').html())
            p2[6] = Number($('#status6').html())
        }
        if($('#mainplayername').html() == $('#player3name').html()){
            p3[0] = Number($('#mainplayerlife').html())
            p3[1] = Number($('#status1').html())
            p3[2] = Number($('#status2').html())
            p3[3] = Number($('#status3').html())
            p3[4] = Number($('#status4').html())
            p3[5] = Number($('#status5').html())
            p3[6] = Number($('#status6').html())
        }
        if($('#mainplayername').html() == $('#player4name').html()){
            p4[0] = Number($('#mainplayerlife').html())
            p4[1] = Number($('#status1').html())
            p4[2] = Number($('#status2').html())
            p4[3] = Number($('#status3').html())
            p4[4] = Number($('#status4').html())
            p4[5] = Number($('#status5').html())
            p4[6] = Number($('#status6').html())
        }
        if($('#mainplayername').html() == $('#player5name').html()){
            p5[0] = Number($('#mainplayerlife').html())
            p5[1] = Number($('#status1').html())
            p5[2] = Number($('#status2').html())
            p5[3] = Number($('#status3').html())
            p5[4] = Number($('#status4').html())
            p5[5] = Number($('#status5').html())
            p5[6] = Number($('#status6').html())
        }
        if($('#mainplayername').html() == $('#player6name').html()){
            p6[0] = Number($('#mainplayerlife').html())
            p6[1] = Number($('#status1').html())
            p6[2] = Number($('#status2').html())
            p6[3] = Number($('#status3').html())
            p6[4] = Number($('#status4').html())
            p6[5] = Number($('#status5').html())
            p6[6] = Number($('#status6').html())
        }

        damage()

        $('#player1life').html(p1[0])
        $('#p1s1').html(p1[1])
        $('#p1s2').html(p1[2])
        $('#p1s3').html(p1[3])
        $('#p1s4').html(p1[4])
        $('#p1s5').html(p1[5])
        $('#p1s6').html(p1[6])

        $('#player2life').html(p2[0])
        $('#p2s1').html(p2[1])
        $('#p2s2').html(p2[2])
        $('#p2s3').html(p2[3])
        $('#p2s4').html(p2[4])
        $('#p2s5').html(p2[5])
        $('#p2s6').html(p2[6])

        $('#player3life').html(p3[0])
        $('#p3s1').html(p3[1])
        $('#p3s2').html(p3[2])
        $('#p3s3').html(p3[3])
        $('#p3s4').html(p3[4])
        $('#p3s5').html(p3[5])
        $('#p3s6').html(p3[6])

        $('#player4life').html(p4[0])
        $('#p4s1').html(p4[1])
        $('#p4s2').html(p4[2])
        $('#p4s3').html(p4[3])
        $('#p4s4').html(p4[4])
        $('#p4s5').html(p4[5])
        $('#p4s6').html(p4[6])

        $('#player5life').html(p5[0])
        $('#p5s1').html(p5[1])
        $('#p5s2').html(p5[2])
        $('#p5s3').html(p5[3])
        $('#p5s4').html(p5[4])
        $('#p5s5').html(p5[5])
        $('#p5s6').html(p5[6])

        $('#player6life').html(p6[0])
        $('#p6s1').html(p6[1])
        $('#p6s2').html(p6[2])
        $('#p6s3').html(p6[3])
        $('#p6s4').html(p6[4])
        $('#p6s5').html(p6[5])
        $('#p6s6').html(p6[6])

        $('#roll1box').css('display', 'none')
        $('#roll2box').css('display', 'none')
        $('#roll3box').css('display', 'none')
        $('#roll4box').css('display', 'none')
        $('#roll5box').css('display', 'none')
        $('#roll6box').css('display', 'none')

        $('#postroll').css('display', 'none')

        $('#fade1').fadeIn()
        $('#fade2').fadeIn()
        $('#fade3').fadeIn()
        $('#fade4').fadeIn()
        $('#fade5').fadeIn()
        $('#fade6').fadeIn()

        $('#total').html(0)

        fire = 0
        earth = 0
        air = 0
        water = 0
        space = 0
        time = 0
        energy = 0

        fireroll = 0
        earthroll = 0
        airroll = 0
        waterroll = 0
        spaceroll = 0
        timeroll = 0

        $('#firebox').css('background-image', bg1)
        $('#earthbox').css('background-image', bg1)
        $('#airbox').css('background-image', bg1)
        $('#waterbox').css('background-image', bg1)
        $('#spacebox').css('background-image', bg1)
        $('#timebox').css('background-image', bg1)

        $('#roll1box').css('background-image', bg1)
        $('#roll2box').css('background-image', bg1)
        $('#roll3box').css('background-image', bg1)
        $('#roll4box').css('background-image', bg1)
        $('#roll5box').css('background-image', bg1)
        $('#roll6box').css('background-image', bg1)

        $('#combo').attr('src', '')
        $('#combobutton').fadeOut()
        $('#comboview').fadeOut(1)

        a = 0
        b = 0
        c = 0
        d = 0
        e = 0
        f = 0

        combo = 0

        $('#combobox').css('background-image', bg1)

        speedmath()
        energymath()

    }

    

    // Starting Sequence

    

    $('#mainscreen').click(function(){
        $('#mainscreen').fadeOut(500)
        $('#playerselect').css('display', 'flex')  
        audio.play()
    })

    $('#startbutton').click(function(){

        p1 = [100, 0, 0, 0, 0, 10, 3]
        p2 = [100, 0, 0, 0, 0, 10, 3]
        p3 = [100, 0, 0, 0, 0, 10, 3]
        p4 = [100, 0, 0, 0, 0, 10, 3]
        p5 = [100, 0, 0, 0, 0, 10, 3]
        p6 = [100, 0, 0, 0, 0, 10, 3]

        $('#player1name').html($('#p1name').val())
        $('#player2name').html($('#p2name').val())
        $('#player3name').html($('#p3name').val())
        $('#player4name').html($('#p4name').val())
        $('#player5name').html($('#p5name').val())
        $('#player6name').html($('#p6name').val())

        if ($('#p1name').val() == ''){
            $('#player1').css('display', 'none')
            p1[3] = 0
            p1[0] = 0
        }
        if ($('#p2name').val() == ''){
            $('#player2').css('display', 'none')
            p2[3] = 0
            p2[0] = 0
        }
        if ($('#p3name').val() == ''){
            $('#player3').css('display', 'none')
            p3[3] = 0
            p3[0] = 0
        }
        if ($('#p4name').val() == ''){
            $('#player4').css('display', 'none')
            p4[3] = 0
            p4[0] = 0
        }
        if ($('#p5name').val() == ''){
            $('#player5').css('display', 'none')
            p5[3] = 0
            p5[0] = 0
        }
        if ($('#p6name').val() == ''){
            $('#player6').css('display', 'none')
            p6[3] = 0
            p6[0] = 0
        }


        if ($('#p1name').val() != ''){
            playertotal += 1
        }
        if ($('#p2name').val() != ''){
            playertotal += 1
        }
        if ($('#p3name').val() != ''){
            playertotal += 1
        }
        if ($('#p4name').val() != ''){
            playertotal += 1
        }
        if ($('#p5name').val() != ''){
            playertotal += 1
        }
        if ($('#p6name').val() != ''){
            playertotal += 1
        }

        turn = Math.round(Math.random() * playertotal + 0.5)

        speedmath()

        reset()

        $('#playerselect').fadeOut()
        setTimeout(function(){
            $('#gameview').css('display', 'flex')
        }, 500)

        audio.pause()
        musicset()
        
    })

    $('#statusbutton').click(function(){
        $('#playerview').fadeOut()
        $('#comboview').fadeOut()
        $('#statusview').slideToggle()
        $('#statusview').css('display', 'flex')
    })

    $('#playerviewbutton').click(function(){
        $('#statusview').fadeOut()
        $('#playerview').slideToggle()
        $('#comboview').fadeOut()
        $('#playerview').css('display', 'flex')
    })

    $('#combobutton').click(function(){
        $('#statusview').fadeOut()
        $('#playerview').fadeOut()
        $('#comboview').slideToggle()
        $('#comboview').css('display', 'flex')
    })

    $('#eliminationview').click(function(){

        $('#eliminationview').fadeOut(500)

        if (p1[0] > 0 && p2[0] <= 0 && p3[0] <= 0 && p4[0] <= 0 && p5[0] <= 0 && p6[0] <= 0){
            $('#gameview').fadeOut(1)
            setTimeout(function(){
                $('#winner').html($('#p1name').val())
                $('#winnerview').fadeIn(500)
                $('#winnerview').css('display', 'flex')
            }, 500)
        }
        if (p2[0] > 0 && p1[0] <= 0 && p3[0] <= 0 && p4[0] <= 0 && p5[0] <= 0 && p6[0] <= 0){
            $('#gameview').fadeOut(1)
            setTimeout(function(){
                $('#winner').html($('#p2name').val())
                $('#winnerview').fadeIn(500)
                $('#winnerview').css('display', 'flex')
            }, 500)
        }
        if (p3[0] > 0 && p2[0] <= 0 && p1[0] <= 0 && p4[0] <= 0 && p5[0] <= 0 && p6[0] <= 0){
            $('#gameview').fadeOut(1)
            setTimeout(function(){
                $('#winner').html($('#p3name').val())
                $('#winnerview').fadeIn(500)
                $('#winnerview').css('display', 'flex')
            }, 500)
        }
        if (p4[0] > 0 && p2[0] <= 0 && p3[0] <= 0 && p1[0] <= 0 && p5[0] <= 0 && p6[0] <= 0){
            $('#gameview').fadeOut(1)
            setTimeout(function(){
                $('#winner').html($('#p4name').val())
                $('#winnerview').fadeIn(500)
                $('#winnerview').css('display', 'flex')
            }, 500)
        }
        if (p5[0] > 0 && p2[0] <= 0 && p3[0] <= 0 && p4[0] <= 0 && p1[0] <= 0 && p6[0] <= 0){
            $('#gameview').fadeOut(1)
            setTimeout(function(){
                $('#winner').html($('#p5name').val())
                $('#winnerview').fadeIn(500)
                $('#winnerview').css('display', 'flex')
            }, 500)
        }
        if (p6[0] > 0 && p2[0] <= 0 && p3[0] <= 0 && p4[0] <= 0 && p5[0] <= 0 && p1[0] <= 0){
            $('#gameview').fadeOut(1)
            setTimeout(function(){
                $('#winner').html($('#p6name').val())
                $('#winnerview').fadeIn(500)
                $('#winnerview').css('display', 'flex')
            }, 500)
        }

        setTimeout(function(){
            $('.elimination').remove()
        },500)

    })

    $('#resetbutton').click(function(){

        playertotal = 0

        p1 = [100, 0, 0, 0, 0, 10, 3]
        p2 = [100, 0, 0, 0, 0, 10, 3]
        p3 = [100, 0, 0, 0, 0, 10, 3]
        p4 = [100, 0, 0, 0, 0, 10, 3]
        p5 = [100, 0, 0, 0, 0, 10, 3]
        p6 = [100, 0, 0, 0, 0, 10, 3]

        $('#player1life').html(p1[0])
        $('#p1s1').html(p1[1])
        $('#p1s2').html(p1[2])
        $('#p1s3').html(p1[3])
        $('#p1s4').html(p1[4])
        $('#p1s5').html(p1[5])
        $('#p1s6').html(p1[6])

        $('#player2life').html(p2[0])
        $('#p2s1').html(p2[1])
        $('#p2s2').html(p2[2])
        $('#p2s3').html(p2[3])
        $('#p2s4').html(p2[4])
        $('#p2s5').html(p2[5])
        $('#p2s6').html(p2[6])

        $('#player3life').html(p3[0])
        $('#p3s1').html(p3[1])
        $('#p3s2').html(p3[2])
        $('#p3s3').html(p3[3])
        $('#p3s4').html(p3[4])
        $('#p3s5').html(p3[5])
        $('#p3s6').html(p3[6])

        $('#player4life').html(p4[0])
        $('#p4s1').html(p4[1])
        $('#p4s2').html(p4[2])
        $('#p4s3').html(p4[3])
        $('#p4s4').html(p4[4])
        $('#p4s5').html(p4[5])
        $('#p4s6').html(p4[6])

        $('#player5life').html(p5[0])
        $('#p5s1').html(p5[1])
        $('#p5s2').html(p5[2])
        $('#p5s3').html(p5[3])
        $('#p5s4').html(p5[4])
        $('#p5s5').html(p5[5])
        $('#p5s6').html(p5[6])

        $('#player6life').html(p6[0])
        $('#p6s1').html(p6[1])
        $('#p6s2').html(p6[2])
        $('#p6s3').html(p6[3])
        $('#p6s4').html(p6[4])
        $('#p6s5').html(p6[5])
        $('#p6s6').html(p6[6])

        $('#winnerview').fadeOut(500)
        setTimeout(function(){
            $('#playerselect').fadeIn(500)
            $('#playerselect').css('display', 'flex')
            
            music1.pause()
            music2.pause()
            music3.pause()
            music4.pause()
            music5.pause()
            music6.pause()
            music7.pause()

            audio.load()
            audio.play()

            $('#player1').css('display', 'flex')
            $('#player2').css('display', 'flex')
            $('#player3').css('display', 'flex')
            $('#player4').css('display', 'flex')
            $('#player5').css('display', 'flex')
            $('#player6').css('display', 'flex')

            $('#mainplayername').html('')

        }, 500)

    })

    $('#fire').click(function(){

        if(fire == 1) {
            $('#firebox').css('background-image', bg1)
            combo -= 100000
            fire = 0
        } else {
        if (fire == 0 && energy + 3 <= Number($('#status6').html())){
            $('#firebox').css('background-image', firebg)
            combo += 100000
            fire = 1
        }}
        
        
    })

    $('#earth').click(function(){
        
        if(earth == 1) {
            $('#earthbox').css('background-image', bg1)
            combo -= 10000
            earth = 0
        } else {
        if (earth == 0 && energy + 3 <= Number($('#status6').html())){
            $('#earthbox').css('background-image', earthbg)
            combo += 10000
            earth = 1
        }}
        
        
    })

    $('#air').click(function(){
        
        if(air == 1) {
            $('#airbox').css('background-image', bg1)
            combo -= 1000
            air = 0
        } else {
        if (air == 0 && energy + 3 <= Number($('#status6').html())){
            $('#airbox').css('background-image', airbg)
            combo += 1000
            air = 1
        }}
        
    })

    $('#water').click(function(){
        
        if(water == 1) {
            $('#waterbox').css('background-image', bg1)
            combo -= 100
            water = 0
        } else {
        if (water == 0 && energy + 3 <= Number($('#status6').html())){
            $('#waterbox').css('background-image', waterbg)
            combo += 100
            water = 1
        }}
        
    })

    $('#space').click(function(){
        
        if(space == 1) {
            $('#spacebox').css('background-image', bg1)
            combo -= 10
            space = 0
        } else {
        if (space == 0 && energy + 3 <= Number($('#status6').html())){
            $('#spacebox').css('background-image', spacebg)
            combo += 10
            space = 1
        }}
        
    })

    $('#time').click(function(){
        
        if(time == 1) {
            $('#timebox').css('background-image', bg1)
            combo -= 1
            time = 0
        } else {
        if (time == 0 && energy + 3 <= Number($('#status6').html()) || time == 0 && energy < 3){
            $('#timebox').css('background-image', timebg)
            combo += 1
            time = 1
        }}
        
    })

    $('.element').click(function(){

        energymath()

        rangemath()

        combomath()

    })

    $('#primary1').click(function(){
        
        $('.primary').css('background-image', bg1)
        $('#primary1').css('background-image', firebg)
        $('#combobox').css('background-image', firebg)
        primary = 1
        
    })

    $('#primary2').click(function(){
        
        $('.primary').css('background-image', bg1)
        $('#primary2').css('background-image', earthbg)
        $('#combobox').css('background-image', earthbg)
        primary = 2
        
    })

    $('#primary3').click(function(){
        
        $('.primary').css('background-image', bg1)
        $('#primary3').css('background-image', airbg)
        $('#combobox').css('background-image', airbg)
        primary = 3
        
    })

    $('#primary4').click(function(){
        
        $('.primary').css('background-image', bg1)
        $('#primary4').css('background-image', waterbg)
        $('#combobox').css('background-image', waterbg)
        primary = 4
        
    })

    $('#primary5').click(function(){
        
        $('.primary').css('background-image', bg1)
        $('#primary5').css('background-image', spacebg)
        $('#combobox').css('background-image', spacebg)
        primary = 5
        
    })

    $('#primary6').click(function(){
        
        $('.primary').css('background-image', bg1)
        $('#primary6').css('background-image', timebg)
        $('#combobox').css('background-image', timebg)
        primary = 6
        
    })

    $('#combobox').click(function(){

        if (rolldisable == 0 || combo == 1){
        
        diceroll()
        effectroll()

        $('#total').html(total)

        primarymath()

        if (Number($('#mainplayerlife').html()) > (Number($('#status5').html()) + 100)){
            $('#mainplayerlife').html(Number($('#status5').html()) + 100)
        }

        if (timeeffect != 1){

            $('#status6').html(Number($('#status6').html()) - energy)

        } else {
            timeeffect = 0
        }

        $('#gameview').fadeOut()
        $('#rollview').css('display', 'flex')

        if (fire == 1){
            $('#roll1box').css('display', 'flex')
            a = 700
        }
        if (earth == 1){
            $('#roll2box').css('display', 'flex')
            b = 700
        }
        if (air == 1){
            $('#roll3box').css('display', 'flex')
            c = 700
        }
        if (water == 1){
            $('#roll4box').css('display', 'flex')
            d = 700
        }
        if (space == 1){
            $('#roll5box').css('display', 'flex')
            e = 700
        }
        if (time == 1){
            $('#roll6box').css('display', 'flex')
            f = 700
        }

        setTimeout(function(){
            if (fire == 1){
                $('#fade1').fadeOut(500)
            }

            setTimeout(function(){

                if (earth == 1){
                    $('#fade2').fadeOut(500)
                }

                setTimeout(function(){

                    if (air == 1){
                        $('#fade3').fadeOut(500)
                    }

                    setTimeout(function(){

                        if (water == 1){
                            $('#fade4').fadeOut(500)
                        }

                        setTimeout(function(){

                            if (space == 1){
                                $('#fade5').fadeOut(500)
                            }                          

                            setTimeout(function(){

                                if (time == 1){
                                    $('#fade6').fadeOut(500)
                                }

                                setTimeout(function(){

                                    setTimeout(function(){
                                        $('.rollbox').fadeOut(500)
                                        setTimeout(function(){
                                            $('#postroll').fadeIn(500)
                                            $('#postroll').css('display', 'flex')
                                        }, 500)
                                        
                                    }, 700)
                                    
                                }, f);
                            }, e);
                        }, d);
                    }, c);
                }, b);
            }, a);
        }, 700);

        }
        
    })

    $('#postroll').click(function(){

        reset()

        $('#rollview').fadeOut(500)
        setTimeout(function(){
            $('#gameview').fadeIn(500)
        },500)
        


    })

})