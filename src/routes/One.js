import React, { Component } from "react";
import { connect } from "dva";
import OneList from "../components/OneList";


class One extends Component{
  UNSAFE_componentWillMount ()  {
    console.log("ff")
    this.props.dispatch({
      type: "onelist/getDate"
    });
  };
  render(){
    return (
      <div>
        <h2>List of One</h2>
        {this.props.onelist.menu.map(
          (ele,index)=>{ 
           return <OneList key={index} {...ele}></OneList>
          }
        )}
   
        {/* <p>{this.props.onelist.weather}</p> */}
        {/* <OneList {...this.props.onelist.weather} /> */}
      </div>
    );
  }
}

export default connect(({ onelist }) => ({
  onelist
}))(One);
