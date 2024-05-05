import React, { Component } from "react"; 
import "./Imgc.css"; // Import the CSS file 
 
class Ref extends Component { 
    constructor(props) { 
        super(props); 
        this.state = { 
            inputValue: "" 
        }; 
        this.inputRef = React.createRef(); 
    } 
 
    componentDidMount() { 
        this.inputRef.current.focus(); 
    } 
 
    handleChange = (event) => { 
        this.setState({ inputValue: event.target.value }); 
    } 
 
    render() { 
        const { inputValue } = this.state; 
        let divClass ;  
        if (inputValue === "box1" || inputValue === "box2" || inputValue === "box3" || inputValue === "box4" || inputValue === "box5") { 
            divClass = inputValue;  
        } 
 
        return ( 
            <React.StrictMode><div className="container"> 
                <div className={divClass}></div> 
                <input  
                    type="text"  
                    className=""  
                    name=""  
                    ref={this.inputRef}  
                    onChange={this.handleChange}  
                    placeholder="Enter text to change the class of the box." 
                    style={{width:"300px", marginBottom:"20px", padding:"10px"}} 
                /> 
                <button onClick={this.clickHandle} style={{padding:"10px"}}>Click me</button> 
                </div> 
            </React.StrictMode> 
        ); 
    } 
} 
 
export default Ref;