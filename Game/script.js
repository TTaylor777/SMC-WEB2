
var fire = document.getElementById('fire')
var earth = document.getElementById('earth')
var air = document.getElementById('air')
var water = document.getElementById('water')
var space = document.getElementById('space')
var time = document.getElementById('time')

var fireB = document.getElementById('fireB')
var earthB = document.getElementById('earthB')
var airB = document.getElementById('airB')
var waterB = document.getElementById('waterB')
var spaceB = document.getElementById('spaceB')
var timeB = document.getElementById('timeB')

var element = document.getElementById('element')
var card = document.getElementById('card')
var home = document.getElementById('home')

var carcontent = document.getElementById('cardcontent')

// single
var damage = document.getElementById('damage')
var defense = document.getElementById('defense')
var combo = document.getElementById('combo')
var heal = document.getElementById('heal')
var scale = document.getElementById('scale')
var reserve = document.getElementById('reserve')


// double
var reflect = document.getElementById('reflect') // 1,2
var decay = document.getElementById('decay') // 1,3
var lifesteal = document.getElementById('lifesteal') // 1,4
var xdamage = document.getElementById('xdamage') // 1,5
var damagereserve = document.getElementById('damagereserve') // 1,6
var shieldregen = document.getElementById('shieldregen') // 2,3
var absorb = document.getElementById('absorb') // 2,4
var xshield = document.getElementById('xshield') // 2,5
var shieldreserve = document.getElementById('shieldreserve') // 2,6
var regen = document.getElementById('regen') // 3,4
var growth = document.getElementById('growth') // 3,5
var charge = document.getElementById('charge') // 3,6
var xlife = document.getElementById('xlife') // 4,5
var lifereserve = document.getElementById('lifereserve') // 4,6
var xreserve = document.getElementById('xreserve') // 5,6


var repurpose = document.getElementById('repurpose')


var life = document.getElementById('life')
var lplus = document.getElementById('life+')
var lminus = document.getElementById('life-')
var shield = document.getElementById('shield')

var reflectcolor = 'rgb(255, 0, 0)'
var absorbcolor = 'rgb(37, 255, 0)'
var lifestealcolor = 'rgb(255, 0, 255)'
var repurposecolor = 'rgb(255, 224, 144)'
var defensecolor = 'rgb(146, 35, 255)'
var color1 = 'rgb(255, 51, 51)'
var color2 = 'rgb(255, 228, 105)'
var color3 = 'rgb(44, 255, 136)'
var color4 = 'rgb(50, 78, 255)'
var color5 = 'rgb(153, 79, 255)'
var color6 = 'rgb(255, 92, 252)'

var keypad = document.getElementById('keypad')
var input = document.getElementById('keypadvalue')
var key1 = document.getElementById('keypad1')
var key2 = document.getElementById('keypad2')
var key3 = document.getElementById('keypad3')
var key4 = document.getElementById('keypad4')
var key5 = document.getElementById('keypad5')
var key6 = document.getElementById('keypad6')
var key7 = document.getElementById('keypad7')
var key8 = document.getElementById('keypad8')
var key9 = document.getElementById('keypad9')
var key0 = document.getElementById('keypad0')
var keyc = document.getElementById('keypadc')
var keye = document.getElementById('keypade')
var minus = false


// [life, shield, color, combo, scale, reserve]
var pnames = ['', '', '', '', '', '', '', '']
var p1 = [100, 0, '', 0, 1, 0]
var p2 = [100, 0, '', 0, 1, 0]
var p3 = [100, 0, '', 0, 1, 0]
var p4 = [100, 0, '', 0, 1, 0]
var p5 = [100, 0, '', 0, 1, 0]
var p6 = [100, 0, '', 0, 1, 0]
var p7 = [0, 0, '', 0, 1, 0]
var p8 = [0, 0, '', 0, 1, 0]
// var pnames = ['man', 'dude', 'dombis', 'crombis', 'froombis', 'troombis', 'jimbus', 'trimbus']
// var p1 = [100, 0, '']
// var p2 = [100, 0, '']
// var p3 = [100, 0, '']
// var p4 = [0, 0, '']
// var p5 = [0, 0, '']
// var p6 = [0, 0, '']
// var p7 = [100, 0, '']
// var p8 = [0, 0, '']
life.innerHTML = p1[0]
shield.innerHTML = p1[1]

var pname = document.getElementById('playername')

var left = document.getElementById('left')
var mid = document.getElementById('mid')
var right = document.getElementById('right')

var ROLL = document.getElementById('rollbutton')
var ROLLh5 = document.getElementById('ROLL')
var damagemenu = document.getElementById('damagemenu')
var playermenu = document.getElementsByClassName('menuitem')
var p1menu = document.getElementById('p1menu')
var p2menu = document.getElementById('p2menu')
var p3menu = document.getElementById('p3menu')
var p4menu = document.getElementById('p4menu')
var p5menu = document.getElementById('p5menu')
var p6menu = document.getElementById('p6menu')
var p7menu = document.getElementById('p7menu')
var p8menu = document.getElementById('p8menu')

var nmenu1 = document.getElementById('nmenu1')
var lmenu1 = document.getElementById('lmenu1')
var smenu1 = document.getElementById('smenu1')
var nmenu2 = document.getElementById('nmenu2')
var lmenu2 = document.getElementById('lmenu2')
var smenu2 = document.getElementById('smenu2')
var nmenu3 = document.getElementById('nmenu3')
var lmenu3 = document.getElementById('lmenu3')
var smenu3 = document.getElementById('smenu3')
var nmenu4 = document.getElementById('nmenu4')
var lmenu4 = document.getElementById('lmenu4')
var smenu4 = document.getElementById('smenu4')
var nmenu5 = document.getElementById('nmenu5')
var lmenu5 = document.getElementById('lmenu5')
var smenu5 = document.getElementById('smenu5')
var nmenu6 = document.getElementById('nmenu6')
var lmenu6 = document.getElementById('lmenu6')
var smenu6 = document.getElementById('smenu6')
var nmenu7 = document.getElementById('nmenu7')
var lmenu7 = document.getElementById('lmenu7')
var smenu7 = document.getElementById('smenu7')
var nmenu8 = document.getElementById('nmenu8')
var lmenu8 = document.getElementById('lmenu8')
var smenu8 = document.getElementById('smenu8')

var menuitem = document.querySelectorAll('.menuitem')

var d1 = Math.round(Math.random() * 4 + .5)
var d2 = Math.round(Math.random() * 6 + .5)
var d3 = Math.round(Math.random() * 8 + .5)
var d4 = Math.round(Math.random() * 20 + .5)
var d5 = Math.round(Math.random() * 10 + .5)
var d6 = Math.round(Math.random() * 12 + .5)

var d1avg = 2.5
var d2avg = 3.5
var d3avg = 4.5
var d4avg = 10.5
var d5avg = 4.5
var d6avg = 6.5
var avg = 0

var dmin = 2.5

var d1max = 4
var d2max = 6
var d3max = 8
var d4max = 20
var d5max = 10
var d6max = 12
var dmax = 0

var min = document.getElementById('min')
var average = document.getElementById('average')
var max = document.getElementById('max')

var aftermath = document.getElementById('aftermath')
var player1 = document.getElementById('player1')
var player2 = document.getElementById('player2')

var rng = Math.random()
var multiplyer = 1
var accuracy = 1

var acc = document.getElementById('ACC')
var mult = document.getElementById('MULT')

var roll = 0

var info = document.getElementById('info')

fire.addEventListener('click',function(){

    if (document.getElementById('fireB').alt != 'on') {
        document.getElementById('fireB').src = 'fireB.png'
        document.getElementById('fireB').alt = 'on'
    } else {
        document.getElementById('fireB').src = 'voidB.png'
        document.getElementById('fireB').alt = 'off'
    }
})
earth.addEventListener('click',function(){

    if (document.getElementById('earthB').alt != 'on') {
        document.getElementById('earthB').src = 'earthB.png'
        document.getElementById('earthB').alt = 'on'
    } else {
        document.getElementById('earthB').src = 'voidB.png'
        document.getElementById('earthB').alt = 'off'
    }
})
air.addEventListener('click',function(){

    if (document.getElementById('airB').alt != 'on') {
        document.getElementById('airB').src = 'airB.png'
        document.getElementById('airB').alt = 'on'
    } else {
        document.getElementById('airB').src = 'voidB.png'
        document.getElementById('airB').alt = 'off'
    }
})
water.addEventListener('click',function(){

    if (document.getElementById('waterB').alt != 'on') {
        document.getElementById('waterB').src = 'waterB.png'
        document.getElementById('waterB').alt = 'on'
    } else {
        document.getElementById('waterB').src = 'voidB.png'
        document.getElementById('waterB').alt = 'off'
    }
})
space.addEventListener('click',function(){

    if (document.getElementById('spaceB').alt != 'on') {
        document.getElementById('spaceB').src = 'spaceB.png'
        document.getElementById('spaceB').alt = 'on'
    } else {
        document.getElementById('spaceB').src = 'voidB.png'
        document.getElementById('spaceB').alt = 'off'
    }
})
time.addEventListener('click',function(){

    if (document.getElementById('timeB').alt != 'on') {
        document.getElementById('timeB').src = 'timeB.png'
        document.getElementById('timeB').alt = 'on'
    } else {
        document.getElementById('timeB').src = 'voidB.png'
        document.getElementById('timeB').alt = 'off'
    }
})


lplus.addEventListener('click',function(){
    
    keypad.style.display = 'block'
    keypad.style.bottom = '0%'
    keypad.style.top = ''

})
lminus.addEventListener('click',function(){
    
    life.innerHTML = 0

})


key1.addEventListener('click',function(){
    
 
    input.innerHTML += 1

})
key2.addEventListener('click',function(){
    
  
    input.innerHTML += 2

})
key3.addEventListener('click',function(){
    
   
    input.innerHTML += 3

})
key4.addEventListener('click',function(){
    

    input.innerHTML += 4

})
key5.addEventListener('click',function(){
    
  
    input.innerHTML += 5

})
key6.addEventListener('click',function(){
    
  
    input.innerHTML += 6

})
key7.addEventListener('click',function(){
    
   
    input.innerHTML += 7

})
key8.addEventListener('click',function(){
    
   
    input.innerHTML += 8

})
key9.addEventListener('click',function(){
    
  
    input.innerHTML += 9

})
key0.addEventListener('click',function(){
    
   
    input.innerHTML += 0

})
keyc.addEventListener('click',function(){
    
    input.innerHTML = ''

})
keye.addEventListener('click',function(){
    
    if (keypad.style.top == '0%') {

        shield.innerHTML = input.innerHTML
        input.innerHTML = ''
        keypad.style.display = 'none'

    }
    else {
        if (minus == false) {
            life.innerHTML = (Number(life.innerHTML) + Number(input.innerHTML))
            input.innerHTML = ''
            keypad.style.display = 'none'
        } 
        else {
            life.innerHTML = (Number(life.innerHTML) - Number(input.innerHTML))
            input.innerHTML = ''
            keypad.style.display = 'none'
        }
    }

    minus = false

})



pname.addEventListener('blur', function(){

    if (mid.innerHTML == '1') {
        pnames[0] = pname.value
        console.log(pnames[0])
    }
    if (mid.innerHTML == '2') {
        pnames[1] = pname.value
        console.log(pnames[0])
    }
    if (mid.innerHTML == '3') {
        pnames[2] = pname.value
        console.log(pnames[0])
    }
    if (mid.innerHTML == '4') {
        pnames[3] = pname.value
        console.log(pnames[0])
    }
    if (mid.innerHTML == '5') {
        pnames[4] = pname.value
        console.log(pnames[0])
    }
    if (mid.innerHTML == '6') {
        pnames[5] = pname.value
        console.log(pnames[0])
    }
    if (mid.innerHTML == '7') {
        pnames[6] = pname.value
        console.log(pnames[0])
    }
    if (mid.innerHTML == '8') {
        pnames[7] = pname.value
        console.log(pnames[0])
    }

})


right.addEventListener('click',function(){

    aftermath.style.display = 'none'
    document.getElementById('miss').style.display = 'none'
    document.getElementById('l').style.color = 'black'
    player1.innerHTML = ''
    average.style.display = 'none'
    min.style.display = 'none'
    max.style.display = 'none'
    acc.style.display = 'none'
    ROLL.style.display = 'none'
    info.style.display = 'none'
    stat3.style.backgroundColor = 'rgb(255,255,255)'
    stat5.style.backgroundColor = 'rgb(255,255,255)'
    stat6.style.backgroundColor = 'rgb(255,255,255)'
    life.style.color = 'rgb(0,0,0)'
    shield.style.color = 'rgb(0,0,0)'
    stat6.style.border = '3px solid black'

    fireB.src = 'voidB.png'
    fireB.alt = 'off'
            
    earthB.src = 'voidB.png'
    earthB.alt = 'off'
        
    airB.src = 'voidB.png'
    airB.alt = 'off'
        
    waterB.src = 'voidB.png'
    waterB.alt = 'off'
        
    spaceB.src = 'voidB.png'
    spaceB.alt = 'off'
        
    timeB.src = 'voidB.png'
    timeB.alt = 'off'
        

    if ( mid.innerHTML == 1) {
        p1[0] = life.innerHTML
        p1[1] = shield.innerHTML
        p1[2] = shield.style.color
        p1[3] = stat3.innerHTML
        p1[4] = stat5.innerHTML
        p1[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 2) {
        p2[0] = life.innerHTML
        p2[1] = shield.innerHTML
        p2[2] = shield.style.color
        p2[3] = stat3.innerHTML
        p2[4] = stat5.innerHTML
        p2[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 3) {
        p3[0] = life.innerHTML
        p3[1] = shield.innerHTML
        p3[2] = shield.style.color
        p3[3] = stat3.innerHTML
        p3[4] = stat5.innerHTML
        p3[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 4) {
        p4[0] = life.innerHTML
        p4[1] = shield.innerHTML
        p4[2] = shield.style.color
        p4[3] = stat3.innerHTML
        p4[4] = stat5.innerHTML
        p4[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 5) {
        p5[0] = life.innerHTML
        p5[1] = shield.innerHTML
        p5[2] = shield.style.color
        p5[3] = stat3.innerHTML
        p5[4] = stat5.innerHTML
        p5[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 6) {
        p6[0] = life.innerHTML
        p6[1] = shield.innerHTML
        p6[2] = shield.style.color
        p6[3] = stat3.innerHTML
        p6[4] = stat5.innerHTML
        p6[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 7) {
        p7[0] = life.innerHTML
        p7[1] = shield.innerHTML
        p7[2] = shield.style.color
        p7[3] = stat3.innerHTML
        p7[4] = stat5.innerHTML
        p7[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 8) {
        p8[0] = life.innerHTML
        p8[1] = shield.innerHTML
        p8[2] = shield.style.color
        p8[3] = stat3.innerHTML
        p8[4] = stat5.innerHTML
        p8[5] = stat6.innerHTML
    }

    mid.innerHTML++

    if (mid.innerHTML == 2) {
        life.innerHTML = p2[0]
        shield.innerHTML = p2[1]
        pname.value = pnames[1]
        shield.style.color = p2[2]
        stat3.innerHTML = p2[3]
        stat5.innerHTML = p2[4]
        stat6.innerHTML = p2[5]
    }

    if (mid.innerHTML == 3) {
        life.innerHTML = p3[0]
        shield.innerHTML = p3[1]
        pname.value = pnames[2]
        shield.style.color = p3[2]
        stat3.innerHTML = p3[3]
        stat5.innerHTML = p3[4]
        stat6.innerHTML = p3[5]
    }

    if (mid.innerHTML == 4) {
        life.innerHTML = p4[0]
        shield.innerHTML = p4[1]
        pname.value = pnames[3]
        shield.style.color = p4[2]
        stat3.innerHTML = p4[3]
        stat5.innerHTML = p4[4]
        stat6.innerHTML = p4[5]
    }

    if (mid.innerHTML == 5) {
        life.innerHTML = p5[0]
        shield.innerHTML = p5[1]
        pname.value = pnames[4]
        shield.style.color = p5[2]
        stat3.innerHTML = p5[3]
        stat5.innerHTML = p5[4]
        stat6.innerHTML = p5[5]
    }

    if (mid.innerHTML == 6) {
        life.innerHTML = p6[0]
        shield.innerHTML = p6[1]
        pname.value = pnames[5]
        shield.style.color = p6[2]
        stat3.innerHTML = p6[3]
        stat5.innerHTML = p6[4]
        stat6.innerHTML = p6[5]
    }

    if (mid.innerHTML == 7) {
        life.innerHTML = p7[0]
        shield.innerHTML = p7[1]
        pname.value = pnames[6]
        shield.style.color = p7[2]
        stat3.innerHTML = p7[3]
        stat5.innerHTML = p7[4]
        stat6.innerHTML = p7[5]
    }

    if (mid.innerHTML == 8) {
        life.innerHTML = p8[0]
        shield.innerHTML = p8[1]
        pname.value = pnames[7]
        shield.style.color = p8[2]
        stat3.innerHTML = p8[3]
        stat5.innerHTML = p8[4]
        stat6.innerHTML = p8[5]
    }

    if (mid.innerHTML == 9) {
        life.innerHTML = p1[0]
        shield.innerHTML = p1[1]
        pname.value = pnames[0]
        shield.style.color = p1[2]
        stat3.innerHTML = p1[3]
        stat5.innerHTML = p1[4]
        stat6.innerHTML = p1[5]
        mid.innerHTML = 1
    }

    while ( Number(life.innerHTML) <= 0){
        if (Number(life.innerHTML) <= 0 && mid.innerHTML == 8) {
            life.innerHTML = p1[0]
            shield.innerHTML = p1[1]
            pname.value = pnames[0]
            shield.style.color = p1[2]
            stat3.innerHTML = p1[3]
            stat5.innerHTML = p1[4]
            stat6.innerHTML = p1[5]
            mid.innerHTML = 1
        } if (Number(life.innerHTML) <= 0 && mid.innerHTML == 1) {
                life.innerHTML = p2[0]
                shield.innerHTML = p2[1]
                pname.value = pnames[1]
                shield.style.color = p2[2]
                stat3.innerHTML = p2[3]
                stat5.innerHTML = p2[4]
                stat6.innerHTML = p2[5]
                mid.innerHTML = 2
                } if (Number(life.innerHTML) <= 0 && mid.innerHTML == 2) {
                    life.innerHTML = p3[0]
                    shield.innerHTML = p3[1]
                    pname.value = pnames[2]
                    shield.style.color = p3[2]
                    stat3.innerHTML = p3[3]
                    stat5.innerHTML = p3[4]
                    stat6.innerHTML = p3[5]
                    mid.innerHTML = 3
                    } if (Number(life.innerHTML) <= 0 && mid.innerHTML == 3) {
                        life.innerHTML = p4[0]
                        shield.innerHTML = p4[1]
                        pname.value = pnames[3]
                        shield.style.color = p4[2]
                        stat3.innerHTML = p4[3]
                        stat5.innerHTML = p4[4]
                        stat6.innerHTML = p4[5]
                        mid.innerHTML = 4
                        } if (Number(life.innerHTML) <= 0 && mid.innerHTML == 4) {
                                life.innerHTML = p5[0]
                                shield.innerHTML = p5[1]
                                pname.value = pnames[4]
                                shield.style.color = p5[2]
                                mid.innerHTML = 5
                                }  if (Number(life.innerHTML) <= 0 && mid.innerHTML == 5) {
                                    life.innerHTML = p6[0]
                                    shield.innerHTML = p6[1]
                                    pname.value = pnames[5]
                                    shield.style.color = p6[2]
                                    stat3.innerHTML = p6[3]
                                    stat5.innerHTML = p6[4]
                                    stat6.innerHTML = p6[5]
                                    mid.innerHTML = 6
                                    } if (Number(life.innerHTML) <= 0 && mid.innerHTML == 6) {
                                        life.innerHTML = p7[0]
                                        shield.innerHTML = p7[1]
                                        pname.value = pnames[6]
                                        shield.style.color = p7[2]
                                        stat3.innerHTML = p7[3]
                                        stat5.innerHTML = p7[4]
                                        stat6.innerHTML = p7[5]
                                        mid.innerHTML = 7
                                        } if (Number(life.innerHTML) <= 0 && mid.innerHTML == 7) {
                                            life.innerHTML = p8[0]
                                            shield.innerHTML = p8[1]
                                            pname.value = pnames[7]
                                            shield.style.color = p8[2]
                                            stat3.innerHTML = p8[3]
                                            stat5.innerHTML = p8[4]
                                            stat6.innerHTML = p8[5]
                                            mid.innerHTML = 8
                                            }
    }

    damage.style.display = 'none'
    defense.style.display = 'none'
    heal.style.display = 'none'
    combo.style.display = 'none'
    scale.style.display = 'none'
    reserve.style.display = 'none'

})
left.addEventListener('click',function(){

    aftermath.style.display = 'none'
    document.getElementById('miss').style.display = 'none'
    document.getElementById('l').style.color = 'black'
    player1.innerHTML = ''
    average.style.display = 'none'
    min.style.display = 'none'
    max.style.display = 'none'
    acc.style.display = 'none'
    ROLL.style.display = 'none'
    info.style.display = 'none'
    stat3.style.backgroundColor = 'rgb(255,255,255)'
    stat5.style.backgroundColor = 'rgb(255,255,255)'
    stat6.style.backgroundColor = 'rgb(255,255,255)'
    life.style.color = 'rgb(0,0,0)'
    shield.style.color = 'rgb(0,0,0)'
    stat6.style.border = '3px solid black'

    fireB.src = 'voidB.png'
    fireB.alt = 'off'
            
    earthB.src = 'voidB.png'
    earthB.alt = 'off'
        
    airB.src = 'voidB.png'
    airB.alt = 'off'
        
    waterB.src = 'voidB.png'
    waterB.alt = 'off'
        
    spaceB.src = 'voidB.png'
    spaceB.alt = 'off'
        
    timeB.src = 'voidB.png'
    timeB.alt = 'off'
        

    if ( mid.innerHTML == 1) {
        p1[0] = life.innerHTML
        p1[1] = shield.innerHTML
        p1[2] = shield.style.color
        p1[3] = stat3.innerHTML
        p1[4] = stat5.innerHTML
        p1[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 2) {
        p2[0] = life.innerHTML
        p2[1] = shield.innerHTML
        p2[2] = shield.style.color
        p2[3] = stat3.innerHTML
        p2[4] = stat5.innerHTML
        p2[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 3) {
        p3[0] = life.innerHTML
        p3[1] = shield.innerHTML
        p3[2] = shield.style.color
        p3[3] = stat3.innerHTML
        p3[4] = stat5.innerHTML
        p3[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 4) {
        p4[0] = life.innerHTML
        p4[1] = shield.innerHTML
        p4[2] = shield.style.color
        p4[3] = stat3.innerHTML
        p4[4] = stat5.innerHTML
        p4[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 5) {
        p5[0] = life.innerHTML
        p5[1] = shield.innerHTML
        p5[2] = shield.style.color
        p5[3] = stat3.innerHTML
        p5[4] = stat5.innerHTML
        p5[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 6) {
        p6[0] = life.innerHTML
        p6[1] = shield.innerHTML
        p6[2] = shield.style.color
        p6[3] = stat3.innerHTML
        p6[4] = stat5.innerHTML
        p6[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 7) {
        p7[0] = life.innerHTML
        p7[1] = shield.innerHTML
        p7[2] = shield.style.color
        p7[3] = stat3.innerHTML
        p7[4] = stat5.innerHTML
        p7[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 8) {
        p8[0] = life.innerHTML
        p8[1] = shield.innerHTML
        p8[2] = shield.style.color
        p8[3] = stat3.innerHTML
        p8[4] = stat5.innerHTML
        p8[5] = stat6.innerHTML
    }

    mid.innerHTML--

    if (mid.innerHTML == 1) {
        life.innerHTML = p1[0]
        shield.innerHTML = p1[1]
        pname.value = pnames[0]
        shield.style.color = p1[2]
        stat3.innerHTML = p1[3]
        stat5.innerHTML = p1[4]
        stat6.innerHTML = p1[5]
    }

    if (mid.innerHTML == 2) {
        life.innerHTML = p2[0]
        shield.innerHTML = p2[1]
        pname.value = pnames[1]
        shield.style.color = p2[2]
        stat3.innerHTML = p2[3]
        stat5.innerHTML = p2[4]
        stat6.innerHTML = p2[5]
    }

    if (mid.innerHTML == 3) {
        life.innerHTML = p3[0]
        shield.innerHTML = p3[1]
        pname.value = pnames[2]
        shield.style.color = p3[2]
        stat3.innerHTML = p3[3]
        stat5.innerHTML = p3[4]
        stat6.innerHTML = p3[5]
    }

    if (mid.innerHTML == 4) {
        life.innerHTML = p4[0]
        shield.innerHTML = p4[1]
        pname.value = pnames[3]
        shield.style.color = p4[2]
        stat3.innerHTML = p4[3]
        stat5.innerHTML = p4[4]
        stat6.innerHTML = p4[5]
    }

    if (mid.innerHTML == 5) {
        life.innerHTML = p5[0]
        shield.innerHTML = p5[1]
        pname.value = pnames[4]
        shield.style.color = p5[2]
        stat3.innerHTML = p5[3]
        stat5.innerHTML = p5[4]
        stat6.innerHTML = p5[5]
    }

    if (mid.innerHTML == 6) {
        life.innerHTML = p6[0]
        shield.innerHTML = p6[1]
        pname.value = pnames[5]
        shield.style.color = p6[2]
        stat3.innerHTML = p6[3]
        stat5.innerHTML = p6[4]
        stat6.innerHTML = p6[5]
    }

    if (mid.innerHTML == 7) {
        life.innerHTML = p7[0]
        shield.innerHTML = p7[1]
        pname.value = pnames[6]
        shield.style.color = p7[2]
        stat3.innerHTML = p7[3]
        stat5.innerHTML = p7[4]
        stat6.innerHTML = p7[5]
    }

    if (mid.innerHTML == 8) {
        life.innerHTML = p8[0]
        shield.innerHTML = p8[1]
        pname.value = pnames[7]
        shield.style.color = p8[2]
        stat3.innerHTML = p8[3]
        stat5.innerHTML = p8[4]
        stat6.innerHTML = p8[5]
    }

    if (mid.innerHTML == 0) {
        life.innerHTML = p8[0]
        shield.innerHTML = p8[1]
        pname.value = pnames[7]
        shield.style.color = p8[2]
        stat3.innerHTML = p8[3]
        stat5.innerHTML = p8[4]
        stat6.innerHTML = p8[5]
        mid.innerHTML = 8
    }

    damage.style.display = 'none'
    defense.style.display = 'none'
    heal.style.display = 'none'
    combo.style.display = 'none'
    scale.style.display = 'none'
    reserve.style.display = 'none'

})

stat6.addEventListener('click',function(){
    
    if (stat6.style.border != '3px double black') {
        stat6.style.border = '3px double black'
    } else {
        stat6.style.border = '3px solid black'
    }

})

element.addEventListener('click',function(){

    multiplyer = 1
    accuracy = 1
    dmin = 0
    dmin2 = 0
    dmax = 0
    avg = 0
    roll = 0

    ROLL.style.display = 'block'
    info.style.display = 'none'
    acc.innerHTML = ''
    multiplyer.innerHTML = ''
    acc.style.display = 'none'
    min.style.display = 'none'
    average.style.display = 'none'
    max.style.display = 'none'
    ROLLh5.innerHTML = 'ROLL'
    ROLLh5.style.color = 'rgb(0,0,0)'
    stat3.style.backgroundColor = 'rgb(255,255,255)'
    stat5.style.backgroundColor = 'rgb(255,255,255)'
    stat6.style.backgroundColor = 'rgb(255,255,255)'


    if (fireB.alt == 'off' && earthB.alt == 'off' && airB.alt == 'off' && waterB.alt == 'off' && spaceB.alt == 'off' && timeB.alt == 'off'){
        rollbutton.style.display = 'none'
        average.style.display = 'none'
        min.style.display = 'none'
        max.style.display = 'none'
        acc.style.display = 'none'

    } else {
    

        // //Balance Equasion

        // i = avg * .01
        // x = avg * .5

        // while ( avg < 25 ) {
        //     multiplyer = multiplyer + 0.5
        //     avg = avg += x
        // }
    
        // while ( avg > 25) {
        //     accuracy = accuracy - .01
        //     avg -= i
        // }

    }
    
    damage.style.display = 'none'
    repurpose.style.display = 'none'
    reflect.style.display = 'none'
    defense.style.display = 'none'
    heal.style.display = 'none'
    absorb.style.display = 'none'
    lifesteal.style.display = 'none'

    damagemenu.style.display = 'none'

    if (fireB.alt == 'on'){
        avg += d1avg
        dmax += d1max
        dmin++
        dmin2++
    }
    if (earthB.alt == 'on'){
        avg += d2avg
        dmax += d2max
        dmin++
        dmin2++
    }
    if (airB.alt == 'on'){
        avg += d3avg
        dmax += d3max
        dmin++
        dmin2++
    }
    if (waterB.alt == 'on'){
        avg += d4avg
        dmax += d4max
        dmin++
        dmin2++
    }
    if (spaceB.alt == 'on'){
        avg += d5avg
        dmax += d5max
        dmin++
        dmin2++
    }
    if (timeB.alt == 'on'){
        avg += d6avg
        dmax += d6max
        dmin++
        dmin2++
    }

    //Balance Equasion
    console.log(dmin)
    x = avg * 1
    a = Number(avg)

    if (avg != 0){
    while ( a < 25 ) {
        multiplyer += 1
        a += x
    }

    i = a * .01

    while ( a > 25) {
        accuracy -= .01
        a -= i
    }}

    average.style.display = 'inline-block'
    min.style.display = 'inline-block'
    max.style.display = 'inline-block'
    acc.style.display = 'block'

    if (fireB.alt == 'on'){
        damage.style.display = 'inline-block'
    } else {
        damage.style.display = 'none'
    }

    if (earthB.alt == 'on'){
        defense.style.display = 'inline-block'
    } else {
        defense.style.display = 'none'
    }

    if (airB.alt == 'on'){
        combo.style.display = 'inline-block'
    } else {
        combo.style.display = 'none'
    }

    if (waterB.alt == 'on'){
        heal.style.display = 'inline-block'
    } else {
        heal.style.display = 'none'
    }
    
    if (spaceB.alt == 'on'){
        scale.style.display = 'inline-block'
    } else {
        scale.style.display = 'none'
    }

    if (timeB.alt  == 'on'){
        reserve.style.display = 'inline-block'
    } else {
        reserve.style.display = 'none'
    }

    // if (absorb.style.display == 'inline-block' || reflect.style.display == 'inline-block' ){
    //     multiplyer = multiplyer / 1.7
    // }

    // if (lifesteal.style.display == 'inline-block') {
    //     multiplyer = multiplyer / 2
    // }

    // if (defense.style.display == 'inline-block') {
    //     multiplyer = multiplyer / 1
    // }

    // if ( repurpose.style.display == 'inline-block' ){
    //     multiplyer = multiplyer / 1.5
    //     accuracy = accuracy - .2
    // }

    

    avg *= Number(multiplyer)
    if (stat6.style.border == '3px double black') {
        avg += Number(stat6.innerHTML)
    }
    avg /= Number(dmin2)
    avg *= Number(stat5.innerHTML) 
    avg += Number(stat3.innerHTML)
    dmin *= Number(multiplyer)
    if (stat6.style.border == '3px double black') {
        dmin += Number(stat6.innerHTML)
    }
    dmin /= Number(dmin2)
    dmin *= Number(stat5.innerHTML) 
    dmin += Number(stat3.innerHTML)
    dmax *= Number(multiplyer)
    if (stat6.style.border == '3px double black') {
        dmax += Number(stat6.innerHTML)
    }
    dmax /= Number(dmin2)
    dmax *= Number(stat5.innerHTML) 
    dmax += Number(stat3.innerHTML)

    min.innerHTML = dmin.toFixed(0)
    average.innerHTML = Math.round(Number(avg))
    max.innerHTML = dmax.toFixed(0)
    acc.innerHTML = Math.round(accuracy * 100) + '%'

})


// INFO
damage.addEventListener('click',function(){
    info.style.display = 'block'
    info.innerHTML = 'Deals damage to any player'
})
defense.addEventListener('click',function(){
    info.style.display = 'block'
    info.innerHTML = 'Creates a shield that blocks damage'
})
combo.addEventListener('click',function(){
    info.style.display = 'block'
    info.innerHTML = 'Adds to each roll'
})
heal.addEventListener('click',function(){
    info.style.display = 'block'
    info.innerHTML = 'Restores health'
})
scale.addEventListener('click',function(){
    info.style.display = 'block'
    info.innerHTML = 'Increases roll multiplyer'
})
reserve.addEventListener('click',function(){
    info.style.display = 'block'
    info.innerHTML = 'Adds to your reserve, click to use'
})
lifesteal.addEventListener('click',function(){
    info.style.display = 'block'
    info.innerHTML = 'Deals damage and heals you for the amount of damage dealt'
})
absorb.addEventListener('click',function(){
    info.style.display = 'block'
    info.innerHTML = 'Ceates a shield that can heal you'
})
reflect.addEventListener('click',function(){
    info.style.display = 'block'
    info.innerHTML = 'Creates a shield that can reflect damage'
})
repurpose.addEventListener('click',function(){
    info.style.display = 'block'
    info.innerHTML = 'Creates a shield that can heal you and reflect damage'
})
info.addEventListener('click',function(){
    info.style.display = 'none'
})


ROLL.addEventListener('click',function(){
    
    player2.style.display = 'none'
    player1.style.display = 'none'

    console.log(d1, d2, d3, d4, d5, d6)
    roll = 0
    d1 = Math.round(Math.random() * 4 + .5)
    d2 = Math.round(Math.random() * 6 + .5)
    d3 = Math.round(Math.random() * 8 + .5)
    d4 = Math.round(Math.random() * 20 + .5)
    d5 = Math.round(Math.random() * 10 + .5)
    d6 = Math.round(Math.random() * 12 + .5)

    if (fireB.alt == 'on'){
        roll += d1
    }
    if (earthB.alt == 'on'){
        roll += d2
    }
    if (airB.alt == 'on'){
        roll += d3
    }
    if (waterB.alt == 'on'){
        roll += d4
    }
    if (spaceB.alt == 'on'){
        roll += d5
    }
    if (timeB.alt == 'on'){
        roll += d6
    }


    // Roll Calculation
    
    roll *= Number(multiplyer)
    if (stat6.style.border == '3px double black') {
        roll += Number(stat6.innerHTML)
    }
    roll /= dmin2
    roll *= Number(stat5.innerHTML) 
    roll += Number(stat3.innerHTML)

    if (Math.random() > accuracy ) {
        roll = roll * 0
    }
    
    roll = Math.round(roll)



    if (damage.style.display != 'none') {

        damagemenu.style.display = 'block'
        document.getElementById('miss').innerHTML = roll
        player1.style.display = 'flex'
        player2.style.display = 'flex'
        p1menu.style.display = 'none'
        p2menu.style.display = 'none'
        p3menu.style.display = 'none'
        p4menu.style.display = 'none'
        p5menu.style.display = 'none'
        p6menu.style.display = 'none'
        p7menu.style.display = 'none'
        p8menu.style.display = 'none'
        ROLLh5.style.color = color1

        if (Number(p1[0]) > 0 && mid.innerHTML != 1){

            p1menu.style.display = 'block'
            nmenu1.innerHTML = pnames[0]
            lmenu1.innerHTML = p1[0]
            smenu1.innerHTML = p1[1]
            
        }
        if (Number(p2[0]) > 0 && mid.innerHTML != 2){

            p2menu.style.display = 'block'
            nmenu2.innerHTML = pnames[1]
            lmenu2.innerHTML = p2[0]
            smenu2.innerHTML = p2[1]
            
        }
        if (Number(p3[0]) > 0 && mid.innerHTML != 3){

            p3menu.style.display = 'block'
            nmenu3.innerHTML = pnames[2]
            lmenu3.innerHTML = p3[0]
            smenu3.innerHTML = p3[1]
            
        }
        if (Number(p4[0]) > 0 && mid.innerHTML != 4){

            p4menu.style.display = 'block'
            nmenu4.innerHTML = pnames[3]
            lmenu4.innerHTML = p4[0]
            smenu4.innerHTML = p4[1]
            
        }
        if (Number(p5[0]) > 0 && mid.innerHTML != 5){

            p5menu.style.display = 'block'
            nmenu5.innerHTML = pnames[4]
            lmenu5.innerHTML = p5[0]
            smenu5.innerHTML = p5[1]
            
        }
        if (Number(p6[0]) > 0 && mid.innerHTML != 6){

            p6menu.style.display = 'block'
            nmenu6.innerHTML = pnames[5]
            lmenu6.innerHTML = p6[0]
            smenu6.innerHTML = p6[1]
            
        }
        if (Number(p7[0]) > 0 && mid.innerHTML != 7){

            p7menu.style.display = 'block'
            nmenu7.innerHTML = pnames[6]
            lmenu7.innerHTML = p7[0]
            smenu7.innerHTML = p7[1]
            
        }
        if (Number(p8[0]) > 0 && mid.innerHTML != 8){

            p8menu.style.display = 'block'
            nmenu8.innerHTML = pnames[7]
            lmenu8.innerHTML = p8[0]
            smenu8.innerHTML = p8[1]
            
        }
    }

    if (defense.style.display == 'inline-block'){
        shield.innerHTML = Number(shield.innerHTML) + roll
        document.getElementById('miss').innerHTML = roll
        shield.style.color = color2
        if (damage.style.display == 'none'){
            window.scrollTo(0,0)
        }
    }

    if (heal.style.display == 'inline-block'){
        life.innerHTML = Number(life.innerHTML) + roll
        document.getElementById('miss').innerHTML = roll
        life.style.color = color4
        if (damage.style.display == 'none'){
            window.scrollTo(0,0)
        }
    }

    if (combo.style.display == 'inline-block'){
        stat3.innerHTML = Number(stat3.innerHTML) + (roll / 10)
        stat3.innerHTML = Number(stat3.innerHTML).toFixed(0)
        document.getElementById('miss').innerHTML = roll
        stat3.style.backgroundColor = color3
        if (damage.style.display == 'none'){
            window.scrollTo(0,0)
        }
    }

    if (scale.style.display == 'inline-block'){
        stat5.innerHTML = Number(stat5.innerHTML) + (roll / 100)
        stat5.innerHTML = Number(stat5.innerHTML).toFixed(2)
        stat5.style.backgroundColor = color5
        document.getElementById('miss').innerHTML = roll
        if (damage.style.display == 'none'){
            window.scrollTo(0,0)
        }
    }

    if (reserve.style.display == 'inline-block'){
        stat6.innerHTML = Number(stat6.innerHTML) + roll
        stat6.innerHTML = Number(stat6.innerHTML).toFixed(0)
        stat6.style.backgroundColor = color6
        document.getElementById('miss').innerHTML = roll
        if (damage.style.display == 'none'){
            window.scrollTo(0,0)
        }
    }


    if (mid.innerHTML == 1){
        p1[0] = life.innerHTML
        p1[1] = shield.innerHTML
        if (defense.style.display == 'inline-block'){
            smenu1.style.color = defensecolor
        }
        if (reflect.style.display == 'inline-block'){
            smenu1.style.color = reflectcolor
        }
        if (absorb.style.display == 'inline-block'){
            smenu1.style.color = absorbcolor
        }
        if (repurpose.style.display == 'inline-block'){
            smenu1.style.color = repurposecolor
        }
    } if (mid.innerHTML == 2){
        p2[0] = life.innerHTML
        p2[1] = shield.innerHTML
        if (defense.style.display == 'inline-block'){
            smenu2.style.color = defensecolor
        }
        if (reflect.style.display == 'inline-block'){
            smenu2.style.color = reflectcolor
        }
        if (absorb.style.display == 'inline-block'){
            smenu2.style.color = absorbcolor
        }
        if (repurpose.style.display == 'inline-block'){
            smenu2.style.color = repurposecolor
        }
    } if (mid.innerHTML == 3){
        p3[0] = life.innerHTML
        p3[1] = shield.innerHTML
        if (defense.style.display == 'inline-block'){
            smenu3.style.color = defensecolor
        }
        if (reflect.style.display == 'inline-block'){
            smenu3.style.color = reflectcolor
        }
        if (absorb.style.display == 'inline-block'){
            smenu3.style.color = absorbcolor
        }
        if (repurpose.style.display == 'inline-block'){
            smenu3.style.color = repurposecolor
        }
    } if (mid.innerHTML == 4){
        p4[0] = life.innerHTML
        p4[1] = shield.innerHTML
        if (defense.style.display == 'inline-block'){
            smenu4.style.color = defensecolor
        }
        if (reflect.style.display == 'inline-block'){
            smenu4.style.color = reflectcolor
        }
        if (absorb.style.display == 'inline-block'){
            smenu4.style.color = absorbcolor
        }
        if (repurpose.style.display == 'inline-block'){
            smenu4.style.color = repurposecolor
        }
    } if (mid.innerHTML == 5){
        p5[0] = life.innerHTML
        p5[1] = shield.innerHTML
        if (defense.style.display == 'inline-block'){
            smenu5.style.color = defensecolor
        }
        if (reflect.style.display == 'inline-block'){
            smenu5.style.color = reflectcolor
        }
        if (absorb.style.display == 'inline-block'){
            smenu5.style.color = absorbcolor
        }
        if (repurpose.style.display == 'inline-block'){
            smenu5.style.color = repurposecolor
        }
    } if (mid.innerHTML == 6){
        p6[0] = life.innerHTML
        p6[1] = shield.innerHTML
        if (defense.style.display == 'inline-block'){
            smenu6.style.color = defensecolor
        }
        if (reflect.style.display == 'inline-block'){
            smenu6.style.color = reflectcolor
        }
        if (absorb.style.display == 'inline-block'){
            smenu6.style.color = absorbcolor
        }
        if (repurpose.style.display == 'inline-block'){
            smenu6.style.color = repurposecolor
        }
    } if (mid.innerHTML == 7){
        p7[0] = life.innerHTML
        p7[1] = shield.innerHTML
        if (defense.style.display == 'inline-block'){
            smenu7.style.color = defensecolor
        }
        if (reflect.style.display == 'inline-block'){
            smenu7.style.color = reflectcolor
        }
        if (absorb.style.display == 'inline-block'){
            smenu7.style.color = absorbcolor
        }
        if (repurpose.style.display == 'inline-block'){
            smenu7.style.color = repurposecolor
        }
    } if (mid.innerHTML == 8){
        p8[0] = life.innerHTML
        p8[1] = shield.innerHTML
        if (defense.style.display == 'inline-block'){
            smenu8.style.color = defensecolor
        }
        if (reflect.style.display == 'inline-block'){
            smenu8.style.color = reflectcolor
        }
        if (absorb.style.display == 'inline-block'){
            smenu8.style.color = absorbcolor
        }
        if (repurpose.style.display == 'inline-block'){
            smenu8.style.color = repurposecolor
        }
    }
    
    if (Number(shield.innerHTML) == 0){
        shield.style.color = 'black'
    }

    document.getElementById('miss').style.display = 'inline-block'
    ROLLh5.innerHTML = Math.round(roll)
    aftermath.style.display = 'block'

    document.getElementById('n').innerHTML = pname.value
    document.getElementById('l').innerHTML = life.innerHTML
    document.getElementById('s').innerHTML = shield.innerHTML
    document.getElementById('s').style.color = shield.style.color

    

    if (heal.style.display == 'inline-block' || shield.style.display == 'inline-block' || absorb.style.display == 'inline-block'|| reflect.style.display == 'inline-block' || repurpose.style.display == 'inline-block') {
        player1.innerHTML = ''
    }

    if (roll == 0) {
        window.scrollTo(0,0)
        player1.innerHTML = ''
        document.getElementById('n').innerHTML = ''
        document.getElementById('l').innerHTML = ''
        document.getElementById('s').innerHTML = ''
        document.getElementById('miss').innerHTML = '- X -'
    }

})


p1menu.addEventListener('click',function(){
        
    if (roll > Number(p1[1])) {
        p1[1] = 0
        p1[0] = Number(p1[0]) - roll
        smenu1.style.color = 'rgb(0, 0, 0)'
        lmenu1.style.color = color1
    }

    lmenu1.innerHTML = p1[0]
    smenu1.innerHTML = p1[1]

    aftermath.style.display = 'block'
    player1.innerHTML = p1menu.innerHTML

})
p2menu.addEventListener('click',function(){
        
    if (roll > Number(p2[1])) {
        p2[1] = 0
        smenu2.style.color = 'rgb(0, 0, 0)'
        p2[0] = Number(p2[0]) - roll
        lmenu2.style.color = color1
    }

    lmenu2.innerHTML = p2[0]
    smenu2.innerHTML = p2[1]

    aftermath.style.display = 'block'
    player1.innerHTML = p2menu.innerHTML

})
p3menu.addEventListener('click',function(){
        
    if (roll > Number(p3[1])) {
        p3[1] = 0
        p3[0] = Number(p3[0]) - roll
        smenu3.style.color = 'rgb(0, 0, 0)'
        lmenu3.style.color = color1
    }

    lmenu3.innerHTML = p3[0]
    smenu3.innerHTML = p3[1]

    aftermath.style.display = 'block'
    player1.innerHTML = p3menu.innerHTML
})
p4menu.addEventListener('click',function(){
        
    if (roll > Number(p4[1])) {
        p4[1] = 0
        p4[0] = Number(p4[0]) - roll
        smenu4.style.color = 'rgb(0, 0, 0)'
        lmenu4.style.color = color1
    }

    lmenu4.innerHTML = p4[0]
    smenu4.innerHTML = p4[1]

    aftermath.style.display = 'block'
    player1.innerHTML = p4menu.innerHTML

})
p5menu.addEventListener('click',function(){
        
    if (roll > Number(p5[1])) {
        p5[1] = 0
        p5[0] = Number(p5[0]) - roll
        smenu5.style.color = 'rgb(0, 0, 0)'
        lmenu5.style.color = color1
    }

    lmenu5.innerHTML = p5[0]
    smenu5.innerHTML = p5[1]

    aftermath.style.display = 'block'
    player1.innerHTML = p5menu.innerHTML

})
p6menu.addEventListener('click',function(){
        
    if (roll > Number(p6[1])) {
        p6[1] = 0
        p6[0] = Number(p6[0]) - roll
        smenu6.style.color = 'rgb(0, 0, 0)'
        lmenu6.style.color = color1
    }

    lmenu6.innerHTML = p6[0]
    smenu6.innerHTML = p6[1]

    aftermath.style.display = 'block'
    player1.innerHTML = p6menu.innerHTML

})
p7menu.addEventListener('click',function(){
        
    if (roll > Number(p7[1])) {
        p7[1] = 0
        p7[0] = Number(p7[0]) - roll
        smenu7.style.color = 'rgb(0, 0, 0)'
        lmenu7.style.color = color1
    }

    lmenu7.innerHTML = p7[0]
    smenu7.innerHTML = p7[1]

    aftermath.style.display = 'block'
    player1.innerHTML = p7menu.innerHTML
})
p8menu.addEventListener('click',function(){
        
    if (roll > Number(p8[1])) {
        p8[1] = 0
        p8[0] = Number(p8[0]) - roll
        smenu8.style.color = 'rgb(0, 0, 0)'
        lmenu8.style.color = color1
    }

    lmenu8.innerHTML = p8[0]
    smenu8.innerHTML = p8[1]

    aftermath.style.display = 'block'
    player1.innerHTML = p8menu.innerHTML

})



damagemenu.addEventListener('click',function(){
    
    damagemenu.style.display = 'none'
    player1.style.display = 'flex'
    ROLLh5.innerHTML = 'ROLL'
    window.scrollTo(0,0)

    document.getElementById('l').innerHTML = life.innerHTML
    
    
    menuitem[0].style.display = 'none'
    menuitem[1].style.display = 'none'
    menuitem[2].style.display = 'none'
    menuitem[3].style.display = 'none'
    menuitem[4].style.display = 'none'
    menuitem[5].style.display = 'none'
    menuitem[6].style.display = 'none'
    menuitem[7].style.display = 'none'
    
    if (mid.innerHTML == 1){
        p1[0] = life.innerHTML
        p1[1] = shield.innerHTML
    } if (mid.innerHTML == 2){
        p2[0] = life.innerHTML
        p2[1] = shield.innerHTML
    } if (mid.innerHTML == 3){
        p3[0] = life.innerHTML
        p3[1] = shield.innerHTML
    } if (mid.innerHTML == 4){
        p4[0] = life.innerHTML
        p4[1] = shield.innerHTML
    } if (mid.innerHTML == 5){
        p5[0] = life.innerHTML
        p5[1] = shield.innerHTML
    } if (mid.innerHTML == 6){
        p6[0] = life.innerHTML
        p6[1] = shield.innerHTML
    } if (mid.innerHTML == 7){
        p7[0] = life.innerHTML
        p7[1] = shield.innerHTML
    } if (mid.innerHTML == 8){
        p8[0] = life.innerHTML
        p8[1] = shield.innerHTML
    }

    
})

aftermath.addEventListener('click',function(){
   
    aftermath.style.display = 'none'
    document.getElementById('miss').style.display = 'none'
    player1.innerHTML = ''
    average.style.display = 'none'
    min.style.display = 'none'
    max.style.display = 'none'
    acc.style.display = 'none'
    ROLL.style.display = 'none'
    info.style.display = 'none'
    stat3.style.backgroundColor = 'rgb(255,255,255)'
    stat5.style.backgroundColor = 'rgb(255,255,255)'
    stat6.style.backgroundColor = 'rgb(255,255,255)'
    life.style.color = 'rgb(0,0,0)'
    shield.style.color = 'rgb(0,0,0)'
    stat6.style.border = '3px solid black'

    lmenu1.style.color = 'rgb(0,0,0)'
    lmenu2.style.color = 'rgb(0,0,0)'
    lmenu3.style.color = 'rgb(0,0,0)'
    lmenu4.style.color = 'rgb(0,0,0)'
    lmenu5.style.color = 'rgb(0,0,0)'
    lmenu6.style.color = 'rgb(0,0,0)'
    lmenu7.style.color = 'rgb(0,0,0)'
    lmenu8.style.color = 'rgb(0,0,0)'

    fireB.src = 'voidB.png'
    fireB.alt = 'off'
            
    earthB.src = 'voidB.png'
    earthB.alt = 'off'
        
    airB.src = 'voidB.png'
    airB.alt = 'off'
        
    waterB.src = 'voidB.png'
    waterB.alt = 'off'
        
    spaceB.src = 'voidB.png'
    spaceB.alt = 'off'
        
    timeB.src = 'voidB.png'
    timeB.alt = 'off'
        

    if ( mid.innerHTML == 1) {
        p1[0] = life.innerHTML
        p1[1] = shield.innerHTML
        p1[2] = shield.style.color
        p1[3] = stat3.innerHTML
        p1[4] = stat5.innerHTML
        p1[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 2) {
        p2[0] = life.innerHTML
        p2[1] = shield.innerHTML
        p2[2] = shield.style.color
        p2[3] = stat3.innerHTML
        p2[4] = stat5.innerHTML
        p2[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 3) {
        p3[0] = life.innerHTML
        p3[1] = shield.innerHTML
        p3[2] = shield.style.color
        p3[3] = stat3.innerHTML
        p3[4] = stat5.innerHTML
        p3[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 4) {
        p4[0] = life.innerHTML
        p4[1] = shield.innerHTML
        p4[2] = shield.style.color
        p4[3] = stat3.innerHTML
        p4[4] = stat5.innerHTML
        p4[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 5) {
        p5[0] = life.innerHTML
        p5[1] = shield.innerHTML
        p5[2] = shield.style.color
        p5[3] = stat3.innerHTML
        p5[4] = stat5.innerHTML
        p5[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 6) {
        p6[0] = life.innerHTML
        p6[1] = shield.innerHTML
        p6[2] = shield.style.color
        p6[3] = stat3.innerHTML
        p6[4] = stat5.innerHTML
        p6[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 7) {
        p7[0] = life.innerHTML
        p7[1] = shield.innerHTML
        p7[2] = shield.style.color
        p7[3] = stat3.innerHTML
        p7[4] = stat5.innerHTML
        p7[5] = stat6.innerHTML
    }

    if (mid.innerHTML == 8) {
        p8[0] = life.innerHTML
        p8[1] = shield.innerHTML
        p8[2] = shield.style.color
        p8[3] = stat3.innerHTML
        p8[4] = stat5.innerHTML
        p8[5] = stat6.innerHTML
    }

    mid.innerHTML++

    if (mid.innerHTML == 2) {
        life.innerHTML = p2[0]
        shield.innerHTML = p2[1]
        pname.value = pnames[1]
        shield.style.color = p2[2]
        stat3.innerHTML = p2[3]
        stat5.innerHTML = p2[4]
        stat6.innerHTML = p2[5]
    }

    if (mid.innerHTML == 3) {
        life.innerHTML = p3[0]
        shield.innerHTML = p3[1]
        pname.value = pnames[2]
        shield.style.color = p3[2]
        stat3.innerHTML = p3[3]
        stat5.innerHTML = p3[4]
        stat6.innerHTML = p3[5]
    }

    if (mid.innerHTML == 4) {
        life.innerHTML = p4[0]
        shield.innerHTML = p4[1]
        pname.value = pnames[3]
        shield.style.color = p4[2]
        stat3.innerHTML = p4[3]
        stat5.innerHTML = p4[4]
        stat6.innerHTML = p4[5]
    }

    if (mid.innerHTML == 5) {
        life.innerHTML = p5[0]
        shield.innerHTML = p5[1]
        pname.value = pnames[4]
        shield.style.color = p5[2]
        stat3.innerHTML = p5[3]
        stat5.innerHTML = p5[4]
        stat6.innerHTML = p5[5]
    }

    if (mid.innerHTML == 6) {
        life.innerHTML = p6[0]
        shield.innerHTML = p6[1]
        pname.value = pnames[5]
        shield.style.color = p6[2]
        stat3.innerHTML = p6[3]
        stat5.innerHTML = p6[4]
        stat6.innerHTML = p6[5]
    }

    if (mid.innerHTML == 7) {
        life.innerHTML = p7[0]
        shield.innerHTML = p7[1]
        pname.value = pnames[6]
        shield.style.color = p7[2]
        stat3.innerHTML = p7[3]
        stat5.innerHTML = p7[4]
        stat6.innerHTML = p7[5]
    }

    if (mid.innerHTML == 8) {
        life.innerHTML = p8[0]
        shield.innerHTML = p8[1]
        pname.value = pnames[7]
        shield.style.color = p8[2]
        stat3.innerHTML = p8[3]
        stat5.innerHTML = p8[4]
        stat6.innerHTML = p8[5]
    }

    if (mid.innerHTML == 9) {
        life.innerHTML = p1[0]
        shield.innerHTML = p1[1]
        pname.value = pnames[0]
        shield.style.color = p1[2]
        stat3.innerHTML = p1[3]
        stat5.innerHTML = p1[4]
        stat6.innerHTML = p1[5]
        mid.innerHTML = 1
    }

    while ( Number(life.innerHTML) <= 0){
        if (Number(life.innerHTML) <= 0 && mid.innerHTML == 8) {
            life.innerHTML = p1[0]
            shield.innerHTML = p1[1]
            pname.value = pnames[0]
            shield.style.color = p1[2]
            stat3.innerHTML = p1[3]
            stat5.innerHTML = p1[4]
            stat6.innerHTML = p1[5]
            mid.innerHTML = 1
        } if (Number(life.innerHTML) <= 0 && mid.innerHTML == 1) {
                life.innerHTML = p2[0]
                shield.innerHTML = p2[1]
                pname.value = pnames[1]
                shield.style.color = p2[2]
                stat3.innerHTML = p2[3]
                stat5.innerHTML = p2[4]
                stat6.innerHTML = p2[5]
                mid.innerHTML = 2
                } if (Number(life.innerHTML) <= 0 && mid.innerHTML == 2) {
                    life.innerHTML = p3[0]
                    shield.innerHTML = p3[1]
                    pname.value = pnames[2]
                    shield.style.color = p3[2]
                    stat3.innerHTML = p3[3]
                    stat5.innerHTML = p3[4]
                    stat6.innerHTML = p3[5]
                    mid.innerHTML = 3
                    } if (Number(life.innerHTML) <= 0 && mid.innerHTML == 3) {
                        life.innerHTML = p4[0]
                        shield.innerHTML = p4[1]
                        pname.value = pnames[3]
                        shield.style.color = p4[2]
                        stat3.innerHTML = p4[3]
                        stat5.innerHTML = p4[4]
                        stat6.innerHTML = p4[5]
                        mid.innerHTML = 4
                        } if (Number(life.innerHTML) <= 0 && mid.innerHTML == 4) {
                                life.innerHTML = p5[0]
                                shield.innerHTML = p5[1]
                                pname.value = pnames[4]
                                shield.style.color = p5[2]
                                mid.innerHTML = 5
                                }  if (Number(life.innerHTML) <= 0 && mid.innerHTML == 5) {
                                    life.innerHTML = p6[0]
                                    shield.innerHTML = p6[1]
                                    pname.value = pnames[5]
                                    shield.style.color = p6[2]
                                    stat3.innerHTML = p6[3]
                                    stat5.innerHTML = p6[4]
                                    stat6.innerHTML = p6[5]
                                    mid.innerHTML = 6
                                    } if (Number(life.innerHTML) <= 0 && mid.innerHTML == 6) {
                                        life.innerHTML = p7[0]
                                        shield.innerHTML = p7[1]
                                        pname.value = pnames[6]
                                        shield.style.color = p7[2]
                                        stat3.innerHTML = p7[3]
                                        stat5.innerHTML = p7[4]
                                        stat6.innerHTML = p7[5]
                                        mid.innerHTML = 7
                                        } if (Number(life.innerHTML) <= 0 && mid.innerHTML == 7) {
                                            life.innerHTML = p8[0]
                                            shield.innerHTML = p8[1]
                                            pname.value = pnames[7]
                                            shield.style.color = p8[2]
                                            stat3.innerHTML = p8[3]
                                            stat5.innerHTML = p8[4]
                                            stat6.innerHTML = p8[5]
                                            mid.innerHTML = 8
                                            }
    }

    damage.style.display = 'none'
    defense.style.display = 'none'
    heal.style.display = 'none'
    combo.style.display = 'none'
    scale.style.display = 'none'
    reserve.style.display = 'none'
})


// copy

// if (mid.innerHTML == 1){
    
// } if (mid.innerHTML == 2){
    
// } if (mid.innerHTML == 3){
    
// } if (mid.innerHTML == 4){
    
// } if (mid.innerHTML == 5){
    
// } if (mid.innerHTML == 6){
    
// } if (mid.innerHTML == 7){
    
// } if (mid.innerHTML == 8){
    
// }
