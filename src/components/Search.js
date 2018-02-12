import React, { Component } from 'react';

class Search extends Component {
	constructor(props){
		super(props)

		this.updateUrl = this.updateUrl.bind(this);
	}
	componentDidMount(){
		this.updateUrl({
			target : {
				value : (window.location.search).split('=')[1]
			}
		})
	}
	updateUrl(e){
		const newValue = e.target.value;
		if(!!newValue)
			window.history.pushState({},'', "?search="+newValue);
			else
				window.history.pushState({},'', "?");	
		this.props.updateData(newValue)
	}
	render(){
		return (
			<div className="input-container">
				<input type="text" className="search-input" onChange={this.updateUrl} placeholder="Digite o que procura"/>
			</div>
		);
	}
}

export default Search;