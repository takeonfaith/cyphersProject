import React from 'react'

function ThemeToggle(props) {
	function changeTheme(){
		props.themeCallBackFunc(!props.darkTheme)
	}
	return (
		<div className="ThemeToggle" onClick = {changeTheme}>
			<div className="imgsWrapper" >
				<img 
					style = {props.darkTheme?{transform:"translateY(0%)", opacity:"1"}:{transform:"translateY(100%)", opacity:"1"}}
					src="https://cdn3.iconfinder.com/data/icons/meteocons/512/sun-symbol-256.png" alt=""/>
				<img
					style = {props.darkTheme?{transform:"translateY(0%)", opacity:"1"}:{transform:"translateY(100%)", opacity:"0"}} 
					src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/moon-o-256.png" alt=""/>
			</div>
			
		</div>
	)
}

export default ThemeToggle
