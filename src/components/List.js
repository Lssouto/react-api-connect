import React, { Component } from 'react';
import OrderBy from './orderBy'
import _ from 'lodash';

class List extends Component { 
	constructor(props){
		super(props)
		this.state = {
			list : this.props.data
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			list : nextProps.data
		})
	}
	orderBy(field,value){
		const orderedArray =  _.sortBy(this.props.data, field)
		this.setState({
			list : orderedArray
		})
	}
	render (){
		const list = this.state.list;
		let itemList = list.map(function(item){
			return (
				<li key={item.id}>
				 <div className="item">{item.id}</div> 
				 <div className="item">{item.name}</div>
				 <div className="item">{item.username}</div>
				 <div className="item">{item.email}</div>
				 <div className="item">{item.phone}</div>
				 <div className="item">{item.website}</div>
				</li>
				);
		})
		return (
			<div>
				<span className="order-by">Click to order: </span>
				<ul className="list-itens">
					<li>
						<div><OrderBy value="Id" onClick={() => this.orderBy('id')}/></div>
						<div><OrderBy value="Nome" onClick={() => this.orderBy('name')}/></div>
						<div><OrderBy value="Username" onClick={() => this.orderBy('username')}/></div>
						<div><OrderBy value="E-mail" onClick={() => this.orderBy('email')}/></div>
						<div><OrderBy value="Telefone" onClick={() => this.orderBy('phone')}/></div>
						<div><OrderBy value="Website" onClick={() => this.orderBy('website')}/></div>
					</li>
					{itemList}
				</ul>
			</div>
		);
	}
}
export default List;