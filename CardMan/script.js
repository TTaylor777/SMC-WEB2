
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

var one = "fireB.alt == 'on'"
var two = "earthB.alt == 'on'"
var three = "airB.alt == 'on'"
var four = "waterB.alt == 'on'"
var five = "spaceB.alt == 'on'"
var six = "timeB.alt == 'on'"

var element = document.getElementById('element')
var card = document.getElementById('card')
var home = document.getElementById('home')

var damage = document.getElementById('damage')
var defense = document.getElementById('defense')
var heal = document.getElementById('heal')
var lifesteal = document.getElementById('lifesteal')
var reflect = document.getElementById('reflect')
var absorb = document.getElementById('absorb')
var repurpose = document.getElementById('repurpose')

var life = document.getElementById('life')
var lplus = document.getElementById('life+')
var lminus = document.getElementById('life-')
var shield = document.getElementById('shield')
var splus = document.getElementById('shield+')
var sminus = document.getElementById('shield-')

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

var pnames = ['', '', '', '', '', '', '', '']
var p1 = [0, 0]
var p2 = [0, 0]
var p3 = [0, 0]
var p4 = [0, 0]
var p5 = [0, 0]
var p6 = [0, 0]
var p7 = [0, 0]
var p8 = [0, 0]
// var pnames = ['man', 'dude', 'dombis', 'crombis', 'froombis', 'troombis', 'jimbus', 'trimbus']
// var p1 = [100, 0]
// var p2 = [90, 10]
// var p3 = [33, 5]
// var p4 = [75, 0]
// var p5 = [29, 0]
// var p6 = [1, 10]
// var p7 = [29, 20]
// var p8 = [19, 30]
life.innerHTML = 0
shield.innerHTML = 0

var pname = document.getElementById('playername')

var left = document.getElementById('left')
var mid = document.getElementById('mid')
var right = document.getElementById('right')

var dice1 = document.getElementById('dice1')
var dice2 = document.getElementById('dice2')
var dice3 = document.getElementById('dice3')
var dice4 = document.getElementById('dice4')
var dice5 = document.getElementById('dice5')
var dice6 = document.getElementById('dice6')

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

var multiplyer = 1
var accuracy = 0

var roll = 0 // = (d4 + d6 + d8 + d20 + d10 + d12) * multiplyer + 
console.log(roll)


fire.addEventListener('click',function(){

    if (document.getElementById('fireB').alt != 'on') {
        document.getElementById('fireB').src = 'fireB.png'
        document.getElementById('fireB').alt = 'on'
        dice1.style.display = 'inline-block'
    } else {
        document.getElementById('fireB').src = 'voidB.png'
        document.getElementById('fireB').alt = 'off'
        dice1.style.display = 'none'
    }
})
earth.addEventListener('click',function(){

    if (document.getElementById('earthB').alt != 'on') {
        document.getElementById('earthB').src = 'earthB.png'
        document.getElementById('earthB').alt = 'on'
        dice2.style.display = 'inline-block'
    } else {
        document.getElementById('earthB').src = 'voidB.png'
        document.getElementById('earthB').alt = 'off'
        dice2.style.display = 'none'
    }
})
air.addEventListener('click',function(){

    if (document.getElementById('airB').alt != 'on') {
        document.getElementById('airB').src = 'airB.png'
        document.getElementById('airB').alt = 'on'
        dice3.style.display = 'inline-block'
    } else {
        document.getElementById('airB').src = 'voidB.png'
        document.getElementById('airB').alt = 'off'
        dice3.style.display = 'none'
    }
})
water.addEventListener('click',function(){

    if (document.getElementById('waterB').alt != 'on') {
        document.getElementById('waterB').src = 'waterB.png'
        document.getElementById('waterB').alt = 'on'
        dice4.style.display = 'inline-block'
    } else {
        document.getElementById('waterB').src = 'voidB.png'
        document.getElementById('waterB').alt = 'off'
        dice4.style.display = 'none'
    }
})
space.addEventListener('click',function(){

    if (document.getElementById('spaceB').alt != 'on') {
        document.getElementById('spaceB').src = 'spaceB.png'
        document.getElementById('spaceB').alt = 'on'
        dice5.style.display = 'inline-block'
    } else {
        document.getElementById('spaceB').src = 'voidB.png'
        document.getElementById('spaceB').alt = 'off'
        dice5.style.display = 'none'
    }
})
time.addEventListener('click',function(){

    if (document.getElementById('timeB').alt != 'on') {
        document.getElementById('timeB').src = 'timeB.png'
        document.getElementById('timeB').alt = 'on'
        dice6.style.display = 'inline-block'
    } else {
        document.getElementById('timeB').src = 'voidB.png'
        document.getElementById('timeB').alt = 'off'
        dice6.style.display = 'none'
    }
})


splus.addEventListener('click',function(){
    
    keypad.style.display = 'block'
    keypad.style.bottom = ''
    keypad.style.top = '0%'

})
sminus.addEventListener('click',function(){
    
    shield.innerHTML = 0

})
lplus.addEventListener('click',function(){
    
    keypad.style.display = 'block'
    keypad.style.bottom = '0%'
    keypad.style.top = ''

})
lminus.addEventListener('click',function(){
    
    keypad.style.display = 'block'
    keypad.style.bottom = '0%'
    keypad.style.top = ''
    minus = true

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

    if (mid.innerHTML == 1) {
        p1[0] = life.innerHTML
        p1[1] = shield.innerHTML
    }

    if (mid.innerHTML == 2) {
        p2[0] = life.innerHTML
        p2[1] = shield.innerHTML
    }

    if (mid.innerHTML == 3) {
        p3[0] = life.innerHTML
        p3[1] = shield.innerHTML
    }

    if (mid.innerHTML == 4) {
        p4[0] = life.innerHTML
        p4[1] = shield.innerHTML
    }

    if (mid.innerHTML == 5) {
        p5[0] = life.innerHTML
        p5[1] = shield.innerHTML
    }

    if (mid.innerHTML == 6) {
        p6[0] = life.innerHTML
        p6[1] = shield.innerHTML
    }

    if (mid.innerHTML == 7) {
        p7[0] = life.innerHTML
        p7[1] = shield.innerHTML
    }

    if (mid.innerHTML == 8) {
        p8[0] = life.innerHTML
        p8[1] = shield.innerHTML
    }



    if (Number(mid.innerHTML) != 8){
        mid.innerHTML++
    }

    if (mid.innerHTML == 2) {
        life.innerHTML = p2[0]
        shield.innerHTML = p2[1]
        pname.value = pnames[1]
        left.style.display = 'inline-block'
    }

    if (mid.innerHTML == 3) {
        life.innerHTML = p3[0]
        shield.innerHTML = p3[1]
        pname.value = pnames[2]
    }

    if (mid.innerHTML == 4) {
        life.innerHTML = p4[0]
        shield.innerHTML = p4[1]
        pname.value = pnames[3]
    }

    if (mid.innerHTML == 5) {
        life.innerHTML = p5[0]
        shield.innerHTML = p5[1]
        pname.value = pnames[4]
    }

    if (mid.innerHTML == 6) {
        life.innerHTML = p6[0]
        shield.innerHTML = p6[1]
        pname.value = pnames[5]
    }

    if (mid.innerHTML == 7) {
        life.innerHTML = p7[0]
        shield.innerHTML = p7[1]
        pname.value = pnames[6]
    }

    if (mid.innerHTML == 8) {
        life.innerHTML = p8[0]
        shield.innerHTML = p8[1]
        pname.value = pnames[7]
        right.style.display = 'none'
    }

})
left.addEventListener('click',function(){

    if (mid.innerHTML == 1) {
        p1[0] = life.innerHTML
        p1[1] = shield.innerHTML
    }

    if (mid.innerHTML == 2) {
        p2[0] = life.innerHTML
        p2[1] = shield.innerHTML
    }

    if (mid.innerHTML == 3) {
        p3[0] = life.innerHTML
        p3[1] = shield.innerHTML
    }

    if (mid.innerHTML == 4) {
        p4[0] = life.innerHTML
        p4[1] = shield.innerHTML
    }

    if (mid.innerHTML == 5) {
        p5[0] = life.innerHTML
        p5[1] = shield.innerHTML
    }

    if (mid.innerHTML == 6) {
        p6[0] = life.innerHTML
        p6[1] = shield.innerHTML
    }

    if (mid.innerHTML == 7) {
        p7[0] = life.innerHTML
        p7[1] = shield.innerHTML
    }

    if (mid.innerHTML == 8) {
        p8[0] = life.innerHTML
        p8[1] = shield.innerHTML
    }

    if (Number(mid.innerHTML) != 1){
        mid.innerHTML--
    }

    if (mid.innerHTML == 1) {
        life.innerHTML = p1[0]
        shield.innerHTML = p1[1]
        pname.value = pnames[0]
        left.style.display = 'none'
    }

    if (mid.innerHTML == 2) {
        life.innerHTML = p2[0]
        shield.innerHTML = p2[1]
        pname.value = pnames[1]
    }

    if (mid.innerHTML == 3) {
        life.innerHTML = p3[0]
        shield.innerHTML = p3[1]
        pname.value = pnames[2]
    }

    if (mid.innerHTML == 4) {
        life.innerHTML = p4[0]
        shield.innerHTML = p4[1]
        pname.value = pnames[3]
    }

    if (mid.innerHTML == 5) {
        life.innerHTML = p5[0]
        shield.innerHTML = p5[1]
        pname.value = pnames[4]
    }

    if (mid.innerHTML == 6) {
        life.innerHTML = p6[0]
        shield.innerHTML = p6[1]
        pname.value = pnames[5]
    }

    if (mid.innerHTML == 7) {
        life.innerHTML = p7[0]
        shield.innerHTML = p7[1]
        pname.value = pnames[6]
        right.style.display = 'inline-block'
    }

})


element.addEventListener('click',function(){

    ROLL.style.display = 'block'
    ROLLh5.innerHTML = 'ROLL'
    
    if (one) {
        damage.style.display = 'inline-block'
    }
    else {
        damage.style.display = 'none'
    }

    if (earthB.alt =='on') {
        defense.style.display = 'inline-block'
    }
    else {
        defense.style.display = 'none'
    }

    if (waterB.alt == 'on') {
        heal.style.display = 'inline-block'
    }
    else {
        heal.style.display = 'none'
    }

    if (fireB.alt == 'on' && earthB.alt =='on') {
        reflect.style.display = 'inline-block'
        damage.style.display = 'none'
        defense.style.display = 'none'
        heal.style.display = 'none'
        absorb.style.display = 'none'
        lifesteal.style.display = 'none'
        repurpose.style.display = 'none'
    }
    else {
        reflect.style.display = 'none'
    }

    if ( fireB.alt == 'on' && waterB.alt == 'on' ) {
        lifesteal.style.display = 'inline-block'
        damage.style.display = 'none'
        defense.style.display = 'none'
        heal.style.display = 'none'
        reflect.style.display = 'none'
        absorb.style.display = 'none'
        repurpose.style.display = 'none'
    }
    else {
        lifesteal.style.display = 'none'
    }

    if ( earthB.alt =='on' && waterB.alt == 'on' ) {
        absorb.style.display = 'inline-block'
        reflect.style.display = 'inline-block'
        damage.style.display = 'none'
        defense.style.display = 'none'
        heal.style.display = 'none'
        reflect.style.display = 'none'
        lifesteal.style.display = 'none'
        repurpose.style.display = 'none'
    }
    else {
        absorb.style.display = 'none'
    }

    if ( fireB.alt == 'on' && earthB.alt =='on' && waterB.alt == 'on' ) {
        repurpose.style.display = 'inline-block'
        reflect.style.display = 'inline-block'
        damage.style.display = 'none'
        defense.style.display = 'none'
        heal.style.display = 'none'
        reflect.style.display = 'none'
        absorb.style.display = 'none'
        lifesteal.style.display = 'none'
    }

    if (fireB.alt == 'off'){
        damage.style.display = 'none'
    }

})


ROLL.addEventListener('click',function(){
    roll = 0
    d1 = Math.round(Math.random() * 4 + .5)
    d2 = Math.round(Math.random() * 6 + .5)
    d3 = Math.round(Math.random() * 8 + .5)
    d4 = Math.round(Math.random() * 20 + .5)
    d5 = Math.round(Math.random() * 10 + .5)
    d6 = Math.round(Math.random() * 12 + .5)

    if (dice1.style.display == 'inline-block'){
        roll += d1
    }
    if (dice2.style.display == 'inline-block'){
        roll += d2
    }
    if (dice3.style.display == 'inline-block'){
        roll += d3
    }
    if (dice4.style.display == 'inline-block'){
        roll += d4
    }
    if (dice5.style.display == 'inline-block'){
        roll += d5
    }
    if (dice6.style.display == 'inline-block'){
        roll += d6
    }
    console.log(d1, d2, d3, d4, d5, d6)


    if (dice1.style.display != 'none' || dice3.style.display != 'none') {

        damagemenu.style.display = 'block'

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
    

    ROLLh5.innerHTML = roll
})


p1menu.addEventListener('click',function(){
        
    if (roll > Number(p1[1])) {
        p1[1] = 0
        p1[0] = Number(p1[0]) - roll
    }

})
p2menu.addEventListener('click',function(){
        
    if (roll > Number(p2[1])) {
        p2[1] = 0
        console.log (Number(p2[0]) - roll)
        p2[0] = Number(p2[0]) - roll
    }

})
p3menu.addEventListener('click',function(){
        
    if (roll > Number(p3[1])) {
        p3[1] = 0
        p3[0] = Number(p3[0]) - roll
    }

})
p4menu.addEventListener('click',function(){
        
    if (roll > Number(p4[1])) {
        p4[1] = 0
        p4[0] = Number(p4[0]) - roll
    }

})
p5menu.addEventListener('click',function(){
        
    if (roll > Number(p5[1])) {
        p5[1] = 0
        p5[0] = Number(p5[0]) - roll
    }

})
p6menu.addEventListener('click',function(){
        
    if (roll > Number(p6[1])) {
        p6[1] = 0
        p6[0] = Number(p6[0]) - roll
    }

})
p7menu.addEventListener('click',function(){
        
    if (roll > Number(p7[1])) {
        p7[1] = 0
        p7[0] = Number(p7[0]) - roll
    }

})
p8menu.addEventListener('click',function(){
        
    if (roll > Number(p8[1])) {
        p8[1] = 0
        p8[0] = Number(p8[0]) - roll
    }

})


damagemenu.addEventListener('click',function(){
    
    damagemenu.style.display = 'none'
    ROLLh5.innerHTML = 'ROLL'
    window.scrollTo(0,0)
    
    menuitem[0].style.display = 'none'
    menuitem[1].style.display = 'none'
    menuitem[2].style.display = 'none'
    menuitem[3].style.display = 'none'
    menuitem[4].style.display = 'none'
    menuitem[5].style.display = 'none'
    menuitem[6].style.display = 'none'
    menuitem[7].style.display = 'none'

})



        // p1menu = document.getElementById('p1menu')
        // p2menu = document.getElementById('p2menu')
        // p3menu = document.getElementById('p3menu')
        // p4menu = document.getElementById('p4menu')
        // p5menu = document.getElementById('p5menu')
        // p6menu = document.getElementById('p6menu')
        // p7menu = document.getElementById('p7menu')
        // p8menu = document.getElementById('p8menu')

        //     damagemenu.style.display = 'none'
        //     damagemenu.innerHTML = ''

        //     fireB.src = 'voidB.png'
        //     fireB.alt = 'off'
            
        //     earthB.src = 'voidB.png'
        //     earthB.alt = 'off'
        
        //     airB.src = 'voidB.png'
        //     airB.alt = 'off'
        
        //     waterB.src = 'voidB.png'
        //     waterB.alt = 'off'
        
        //     spaceB.src = 'voidB.png'
        //     spaceB.alt = 'off'
        
        //     timeB.src = 'voidB.png'
        //     timeB.alt = 'off'
        
        //     repurpose.style.display = 'none'
        //     reflect.style.display = 'none'
        //     damage.style.display = 'none'
        //     defense.style.display = 'none'
        //     heal.style.display = 'none'
        //     reflect.style.display = 'none'
        //     absorb.style.display = 'none'
        //     lifesteal.style.display = 'none'
        //     dice1.style.display = 'none'
        //     dice2.style.display = 'none'
        //     dice3.style.display = 'none'
        //     dice4.style.display = 'none'
        //     dice5.style.display = 'none'
        //     dice6.style.display = 'none'
        
        //     if (roll > Number(p1[1])) {
        //         p1[1] = 0
        //         p1[0] -= roll
        //         console.log(roll, p1)
        //     }
        //     p1menu = ''
        //     p2menu = ''
        //     p3menu = ''
        //     p4menu = ''
        //     p5menu = ''
        //     p6menu = ''
        //     p7menu = ''
        //     p8menu = ''
        



