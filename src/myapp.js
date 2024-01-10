import React from "react";
import Header from "./components/header";
import BodyItems from "./pages/bodyitems";
import Footer from "./components/footer";
import Details from "./pages/details"
import Settings from "./pages/settings"
import Logout from "./pages/logout"



class Myapp extends React.Component{


    constructor(props){

        super(props);
         
        this.state={
            currentstate:'home'
        }
        
    }

  onMenuselect=(value)=>{

    console.log(value);

    this.setState({
        currentstate:value
    })
 }

getpage(){

    const{
        currentstate
    }=this.state


    switch(currentstate){
         case 'home':
         return  <BodyItems/>
         case 'details':
         return <Details/>
         case 'settings':
            return <Settings/>
            case 'logout':
                return <Logout/>
                default:
                    break;
    }
}
  


     render(){
    
        return(
    
            <div className="main-sec">
            <div className="header-sec">
             <Header Menuselect={this.onMenuselect}  />
            </div>
            <div className="body-sec">
            
            {this.getpage()}
          
            </div>
            <div className="footer-sec">
             <Footer/>
            </div>
          </div>
         )  }      
};




export default Myapp;