import Api from './Api.js'

const ApiServices = {
	read : function(){
		return fetch(Api().url).then(response=>{
			return response.json();
		}).then(response =>{
			return response
		}) 
	}
}

export default ApiServices;


