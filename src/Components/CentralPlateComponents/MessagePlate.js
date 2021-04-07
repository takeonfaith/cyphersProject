import React, {useEffect, useState} from 'react'

class MessagePlate extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			appear: false
		}
		this.popUpWindow = this.popUpWindow.bind(this)
		this.myRef = React.createRef();
	}
	componentDidUpdate(prevMessage){
		if(prevMessage.message != this.props.message){
			this.popUpWindow()
		}
	}
	popUpWindow(){
		const MessagePlate = this.myRef.current;
		MessagePlate.style.animation = "fadeIn 1s forwards"
		setTimeout(()=>MessagePlate.style.animation = "fadeOut 1s forwards", 1000) 
	}
	render(){
		return(
			<div className="MessagePlate" style={this.state.appear?{opacity:"1"}:{opacity:"0"}} ref = {this.myRef}>
				
				{this.props.message}
			</div>
		)
	}
}

export default MessagePlate
