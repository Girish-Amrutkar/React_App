import React from "react";
const UpdateComponent=(OriginalComopnent)=>{
    class NewComponent extends React.Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count : 0,
          }
        }
        incrementCount=()=>{
            this.setState((prevState)=>{
                return {count:prevState.count + 1}
            })
        }
        render(){
            return <OriginalComopnent name="Girish" count1={this.state.count} incrementCount1={this.incrementCount}/>
        } 
    }
    return NewComponent;
}
export default UpdateComponent