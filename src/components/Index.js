import React, { Component } from 'react';
import Search from './Search.js'
import List from './List.js'
import ApiServices from '../services/ApiConnect'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Main",
      data : [],
      backupData: [],
      params: ''
    }
    this.updateData = this.updateData.bind(this);
  }
  async componentDidMount(){
    const response = await this.getApiData()
    this.setState({
      backupData: response
    })
    this.filterData(this.state.params,response)
  }
  async getApiData (){
    return await ApiServices.read();
  }
  filterData(search,value){
    if(!!search){
      let data = value.filter(item=>{
        return item.id == search || 
        (item.name).indexOf(search) !== -1 || 
        (item.username).indexOf(search) !== -1 ||
        (item.email).indexOf(search) !== -1 || 
        (item.phone).indexOf(search) !== -1 || 
        (item.website).indexOf(search) !== -1;

      })
      this.setState({
        data : data
      })
    }
    else {  
      this.setState({
        data: value
      })  
    }
  }
  async updateData(search){
    await this.setState({
      params : search
    })
    this.filterData(this.state.params,this.state.backupData)
  }
  render() {

    return (
      <div className="container">
        <Search updateData={this.updateData} />
        <List data={this.state.data}/>
      </div>
    );
  }
}

export default App;
