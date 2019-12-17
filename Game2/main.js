$(document).ready(function (){

    var bank = document.getElementById('bank')
    var rewardtotal = document.getElementById('rewardtotal')

    var reward1 = document.getElementById('reward1')
    var reward2 = document.getElementById('reward2')
    var reward3 = document.getElementById('reward3')

    var game1 = document.getElementById('game1')
    var reward11 = document.getElementById('reward11')
    var reward12 = document.getElementById('reward12')
    var reward13 = document.getElementById('reward13')
    var reward14 = document.getElementById('reward14')
    var reward15 = document.getElementById('reward15')
    var reward16 = document.getElementById('reward16')
    var reward17 = document.getElementById('reward17')

    var game2 = document.getElementById('game2')
    var reward21 = document.getElementById('reward21')
    var reward22 = document.getElementById('reward22')
    var reward23 = document.getElementById('reward23')
    var reward24 = document.getElementById('reward24')
    var reward25 = document.getElementById('reward25')
    var reward26 = document.getElementById('reward26')
    var reward27 = document.getElementById('reward27')

    var reward31 = document.getElementById('reward31')
    var reward32 = document.getElementById('reward32')
    var reward33 = document.getElementById('reward33')
    var reward34 = document.getElementById('reward34')
    var reward35 = document.getElementById('reward35')
    var reward36 = document.getElementById('reward36')
    var reward37 = document.getElementById('reward37')

    var reward41 = document.getElementById('reward41')
    var reward42 = document.getElementById('reward42')
    var reward43 = document.getElementById('reward43')
    var reward44 = document.getElementById('reward44')
    var reward45 = document.getElementById('reward45')
    var reward46 = document.getElementById('reward46')
    var reward47 = document.getElementById('reward47')

    var reward51 = document.getElementById('reward51')
    var reward52 = document.getElementById('reward52')
    var reward53 = document.getElementById('reward53')
    var reward54 = document.getElementById('reward54')
    var reward55 = document.getElementById('reward55')
    var reward56 = document.getElementById('reward56')
    var reward57 = document.getElementById('reward57')

    var reward61 = document.getElementById('reward61')
    var reward62 = document.getElementById('reward62')
    var reward63 = document.getElementById('reward63')
    var reward64 = document.getElementById('reward64')
    var reward65 = document.getElementById('reward65')
    var reward66 = document.getElementById('reward66')
    var reward67 = document.getElementById('reward67')

    var reward71 = document.getElementById('reward71')
    var reward72 = document.getElementById('reward72')
    var reward73 = document.getElementById('reward73')
    var reward74 = document.getElementById('reward74')
    var reward75 = document.getElementById('reward75')
    var reward76 = document.getElementById('reward76')
    var reward77 = document.getElementById('reward77')

    

    var tier = document.getElementById('tier')
    var left = document.getElementById('left')
    var right = document.getElementById('right')

    var multiplyer = document.getElementById('multiplyer')

    var t = 0
    var subtract = false

    function tiermath(){

        rng = Math.random()

        t = 1

        if ( rng > 0 && rng < .13 ) {
            t = 1
        }
        if ( rng > .13 && rng < .26 ) {
            t = 2
        }
        if ( rng > .26 && rng < .39 ) {
            t = 3
        }
        if ( rng > .39 && rng < .52 ) {
            t = 4
        }
        if ( rng > .52 && rng < .65 ) {
            t = 5
        }
        if ( rng > .65 && rng < .78 ) {
            t = 6
        }
        if ( rng > .78 && rng < .91 ) {
            t = 7
        }
        if ( rng > .91 && rng < 1 ) {
            t = 8
        }
        return t
    }

    function endmath(){

        rng = Math.random()

        if (rng < .55) {
            subtract = true
        } else {
            subtract = false
        }

        if (subtract == true) {
            rewardtotal.style.background = 'radial-gradient( rgb(255, 248, 160), rgb(255, 0, 0))'
            rewardtotal.style.webkitBackgroundClip = 'text'
            rewardtotal.style.webkitTextFillColor = 'transparent'
            bank.innerHTML = Number(bank.innerHTML) - Number(rewardtotal.innerHTML)
        } else {
            rewardtotal.style.background = 'radial-gradient( rgb(255, 248, 160), rgb(78, 233, 0))'
            rewardtotal.style.webkitBackgroundClip = 'text'
            rewardtotal.style.webkitTextFillColor = 'transparent'
            bank.innerHTML = Number(bank.innerHTML) + Number(rewardtotal.innerHTML)
        }

    }

    function gametoggle(){

        rewardtotal.innerHTML = 0
        reward1.innerHTML = 0
        reward2.innerHTML = 0
        reward3.innerHTML = 0
        left.style.display = 'none'
        right.style.display = 'none'
        multiplyer.innerHTML = 0
        tier.style.display = 'none'
        multiplyer.style.display = 'none'
        reward1.style.display = 'none'
        reward2.style.display = 'none'
        reward3.style.display = 'none'

    }

    function gamea(){
        
        $('#game1').fadeToggle(1000)
        game1.style.display = 'flex'

        reward11.innerHTML = 1 * 1 * Number(tier.innerHTML)
        reward12.innerHTML = 1 * 2 * Number(tier.innerHTML)
        reward13.innerHTML = 1 * 3 * Number(tier.innerHTML)
        reward14.innerHTML = 1 * 4 * Number(tier.innerHTML)
        reward15.innerHTML = 1 * 5 * Number(tier.innerHTML)
        reward16.innerHTML = 1 * 6 * Number(tier.innerHTML)
        reward17.innerHTML = 1 * 7 * Number(tier.innerHTML)

    }


    $('.intro').click(function(){

        $('.intro').fadeToggle(500);
        $('.game').fadeToggle(1300);
        // gamea()
        
    })

    $('#left').click(function(){

        if (tier.innerHTML != 1) {
            tier.innerHTML--
        }

    })

    $('#right').click(function(){

        if (tier.innerHTML != 7) {
            tier.innerHTML++
        }

    })

    $('#tier').click(function(){

        multiplyer.style.display = 'none'

        reward1.style.display = 'none'
        reward2.style.display = 'none'
        reward3.style.display = 'none'

        rewardtotal.style.background = 'radial-gradient( rgb(255, 248, 160), rgb(78, 233, 0))'
        rewardtotal.style.webkitBackgroundClip = 'text'
        rewardtotal.style.webkitTextFillColor = 'transparent'

        subtract = false

        reward1.innerHTML = 0
        reward2.innerHTML = 0
        reward3.innerHTML = 0

        multiplyer.innerHTML = 1
        rewardtotal.innerHTML = 1

        rng = Math.random()

        if ( rng >= .7 ) {

            $('#multiplyer').fadeToggle(100)

            tiermath()

            multiplyer.innerHTML = t

            if ( t == 8 ){
                multiplyer.innerHTML = 10
            }
        }

        rng = Math.random()
        if (rng > 0) {
            reward1.style.display = 'block'
            reward1.innerHTML = 1
            reward1.innerHTML = Number(reward1.innerHTML) * Number(tier.innerHTML)
            reward1.innerHTML = Number(reward1.innerHTML) * Number(multiplyer.innerHTML)
        }

        rng = Math.random()
        if (rng > .7) {
            reward2.innerHTML = 1
            reward2.style.display = 'block'
            reward2.innerHTML = Number(reward2.innerHTML) * Number(tier.innerHTML)
            reward2.innerHTML = Number(reward2.innerHTML) * Number(multiplyer.innerHTML)
        }

        rng = Math.random()
        if (rng > .7) {
            reward3.style.display = 'block'
            reward3.innerHTML = 1
            reward3.innerHTML = Number(reward3.innerHTML) * Number(tier.innerHTML)
            reward3.innerHTML = Number(reward3.innerHTML) * Number(multiplyer.innerHTML)
        }

        if (t == 8) {
            gametoggle()
            setTimeout(function(){gamea()}, 1000);
        }

        if (rewardtotal.innerHTML != 0 ) {
            
            reward1.innerHTML = Math.round(Number(reward1.innerHTML))
            reward2.innerHTML = Math.round(Number(reward2.innerHTML))
            reward3.innerHTML = Math.round(Number(reward3.innerHTML))

            rewardtotal.innerHTML = Number(reward1.innerHTML) + Number(reward2.innerHTML) + Number(reward3.innerHTML)
        
            endmath()

            if (Number(bank.innerHTML) <= 0){
                bank.innerHTML = 0
                $('#tier').fadeToggle(1)
                $('.game').fadeToggle(1000)
                $('#dumb').fadeToggle(20000)
            }
        }
        
        
        
    })

    $('#reward11').click(function(){
        rewardtotal.innerHTML = reward11.innerHTML
    })
    $('#reward12').click(function(){
        rewardtotal.innerHTML = reward12.innerHTML
    })
    $('#reward13').click(function(){
        rewardtotal.innerHTML = reward13.innerHTML
    })
    $('#reward14').click(function(){
        rewardtotal.innerHTML = reward14.innerHTML
    })
    $('#reward15').click(function(){
        rewardtotal.innerHTML = reward15.innerHTML
    })
    $('#reward16').click(function(){
        rewardtotal.innerHTML = reward16.innerHTML
    })
    $('#reward17').click(function(){
        rewardtotal.innerHTML = reward17.innerHTML
    })

    $('#game1').click(function(){
        game1.style.display = 'none'
        tier.style.display = 'block'
        left.style.display = 'block'
        right.style.display = 'block'
        multiplyer.style.display = 'block'
        reward1.style.display = 'block'
        reward2.style.display = 'block'
        reward3.style.display = 'block'
        t = 0
        endmath()
    })

})