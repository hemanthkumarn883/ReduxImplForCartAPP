import React,{Component} from 'react';
import { connect } from 'react-redux'


class Card extends Component {
  constructor(props){
    super(props)
    this.state={qty: 0}
  }
  
  
  
  render(){
    return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex customMobile">
      <div className=" flex-column pr-2 p-2 justify-content-between align-items-center card rounded-0 w-100 m-3 shadow">
        <img className="d-flex " style={{'width':'60px','height':'60px','borderRadius':'50%'}} src={this.props.item.avatar} alt="alternate-text"/>
        <div className="d-flex my-auto p-1" style={{"fontSize":'14px'}} />
        {/* {this.showMatchingName()} */}
        {/* {this.props.item.first_name+' '+this.props.item.last_name} */}
        {/* </div> */}
        <span className="ml-2" style={{'fontSize':'10px','color':'#bebebe'}}>{this.props.item.email}</span>
        <div className="w-100 mt-2">
          <button className="btn btn-outline-secondary w-100" onClick={()=>{this.props.dispatch(this.props.onClick(this.props.index))}}>
            {!this.props.item.isSelected?'Add to Cart':'Remove Item'}
            <i class="fa fa-cart-plus pl-3" aria-hidden="true"></i>
          </button>
          {this.props.item.isSelected && 
            <button className="btn btn-outline-secondary w-100" onClick={()=>{this.setState({qty: this.state.qty + 1})}}>
              Add Quantity {this.state.qty}
              <i class="fa fa-cart-plus pl-3" aria-hidden="true"></i>
            </button>
          }
        </div>
      </div>

    </div>
  )
}
}

export default connect()(Card);