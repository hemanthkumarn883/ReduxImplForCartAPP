import React from 'react';
import './index.css';
import Card from './Card';
import data from './data.json';

class Home extends React.Component {
  constructor(props){
    super(props);
    // data.map((item) => { item.isSelected = false})
    this.state = {
      // data: sessionStorage.getItem('selected') && JSON.parse(sessionStorage.getItem('selected')) || data.map((item) => { item.isSelected = false; return item;})
      data:data.map((item) => { item.isSelected = false; item.qty = 0;  return item;})
    }
  }
  
  changeStatus = (index) => {
    // console.log("Liked: ", data[index])
    var tempArr = this.state.data;
    tempArr[index].isSelected = true;
    this.setState({data: tempArr});
    sessionStorage.setItem('selected',JSON.stringify(tempArr));
  }
  
  
  render(){
    return(
      <div className="d-flex flex-wrap container">

        {/* {

          for(var i = 0; i< 5; i++){
            arr[i] == item
          }
          var  s = [1,2, 3];
          var a = s.map((item, index) => {
            s[index] = item
          })
          .map(function(item) {
            return

          })
        } */}
        {this.state.data.map((item, index) =>   !item.isSelected &&
          <Card 
            item={item}
            onClick = {this.changeStatus}
            index={index}
          />
        )
        }
      </div>

    )
  }
  
  
}

export default Home;