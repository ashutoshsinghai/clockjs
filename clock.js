function Clock(options){
		if(!options||!options.target){
			console.error("Please set the proper options for the clock")
			console.warn("Mandatory options : target")
			return
		}
		var theme_attributes = ['background','border','fontFamily']
		var themes = [['url(https://www.freeiconspng.com/uploads/roman-numeral-clock-face-png-4.png)',
		window.innerWidth/32+'px outset lightblue',
		"cursive"],
		['linear-gradient(#4fc8e3,#fff)','10px solid #334046','sans-serif']]
		//target into the element
		document.querySelector(options.target).innerHTML = `
		<div class="clock-container">
		<div class="mid-point"></div>
		<div class="clock-time"></div>
		<div class="clock-day"></div>
		<div class="clock">
		<div class="clock-hour clock-needle">
		</div>
		<div class="clock-min clock-needle">
		</div>
		<div class="clock-sec clock-needle">
		</div>
		</div>
		</div>
		`

		var sec = document.querySelector('.clock-sec')
		var clock = document.querySelector('.clock')
		var clock_c = document.querySelector('.clock-container')
		var clock_c_m = document.querySelector('.mid-point')
		var min = document.querySelector('.clock-min')
		var hour = document.querySelector('.clock-hour')
		var time = document.querySelector('.clock-time')
		var day = document.querySelector('.clock-day')

		var target = document.querySelector(options.target)
		clock_c.style.fontSize = parseInt((16/250)*target.offsetWidth)+"px"
		if(target.offsetWidth!=target.offsetHeight){
			let max = Math.max(target.offsetWidth,target.offsetHeight)
			console.log(max)
			target.style.height = (max/window.innerHeight*100)+"vh"
			target.style.width = (max/window.innerWidth*100)+"vw"
		}

		var audio = new Audio('http://soundbible.com/mp3/tolling-bell_daniel-simion.mp3')
		var rangNumberOfTimes = 0
		var tick = new Audio('http://soundbible.com/mp3/Woosh-Mark_DiAngelo-4778593.mp3')
		tick.volume = .5
		var userinteracted = false
		document.onclick = ()=>userinteracted=true
		console.log(window.innerWidth)
		updateTime()
		setInterval(()=>{
			updateTime()
			tick.pause()
			//tick.play()
		},1000)
		function updateTime(){
			var d = new Date()
			day.innerHTML = d.toDateString()
			var hr = d.getHours()
			var mn = d.getMinutes()
			var se = d.getSeconds()
			if(mn==0&&rangNumberOfTimes==0&&userinteracted){
				rangNumberOfTimes++
				audio.play()
				tick.volume = 0
			}
			if(mn>0){
				rangNumberOfTimes=0
				tick.volume = .5
			}
			if(hr!=12)
			hr%=12
			time.innerHTML = `${('0'+(hr)).slice(-2)}:${('0'+mn).slice(-2)} ${AMPM(hr)}`
			var s = (6*se)%360
			var m = (0.1*(se+(mn*60)))%360
			var h = (30*((hr%12)+mn/60))
			sec.style.transform= "rotate("+s+"deg)"
			min.style.transform= "rotate("+m+"deg)"
			hour.style.transform= "rotate("+h+"deg)"
		}
		function AMPM(hrs){
			if(hrs>12)
				return 'PM'
			return 'AM'
		}
		//member functions
		this.scale = scale=>{
			clock_c.style.transform = 'scale('+scale+')'
		}
		this.shape = shape=>{
			switch(shape){
				case 'rounded':
				clock.style.borderRadius = "5%"
				break
				case 'square':
				clock.style.borderRadius = "0%"
				break
				case 'circle':
				clock.style.borderRadius = "50%"
				break
			}
		}
		this.setOuterBackground = back=>{
			clock_c.style.background = back
		}
		this.options = options=>{
			for(let i in options){
				clock.style[i] = options[i]
			}
			backgroundResize()
		}
		function backgroundResize(){
			clock.style.backgroundSize = 'contain'
			clock.style.backgroundPosition = 'center';
			clock.style.backgroundRepeat = 'no-repeat';
		}
		this.second = ob=>{
			for(let i in ob){
				if(i=='background'){
					sec.style.background = 
					'linear-gradient('+ob[i]+' 0%,'+ob[i]+' 60%,transparent 60%,transparent 100%)'
					clock_c_m.style.borderColor = ob[i]
				}
				else
				sec.style[i] = ob[i]
			}
		}
		this.style = a=>{
				for(let i in theme_attributes){
					clock.style[theme_attributes[i]] = themes[a][i]
				}
				backgroundResize()
		}
}

/*window.addEventListener('load',()=>{
			var d = new Clock({target:'#cc'})
			d.scale(2)
			d.options({
				border:'5px solid brown',
				borderRadius:"5% 30% 30% 5%",
				background:'linear-gradient(#fff,orangered)'
			})
			d.second({background:'orangered'})	
})*/