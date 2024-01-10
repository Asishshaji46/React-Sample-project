import React from "react";
import "../styles/body.css";
import ListItems from "../components/list";
import Tools from "../components/tools";
import Details from "./details";


let arr = [
  {
    id: 1,
    title: "i phone 12",
    descri: "Made in US",
    isAvailable: true,
    imgage: <img src="D:\Pictures\img\phone-pic\download (1).jpeg" alt="" />,
  },
  {
    id: 2,
    title: "POCO M2 Pro",
    descri: "Made in China",
    isAvailable: false,
    imgage: <img src="D:\Pictures\img\phone-pic\download.jpeg" alt="" />,
  },
  {
    id: 3,
    title: "Galaxy S23 Ultra",
    descri: "Made in US",
    isAvailable: true,
    imgage: <img src="D:\Pictures\img\phone-pic\download (2).jpeg" alt="" />,
  },
];

class BodyItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: arr,
      activeState: "all",
      
    };
  }



  Delete = (item) => {
    console.log("delete cliked", item);

    const newList = this.state.data.filter((element) => element.id !== item.id);

    this.setState({
      data: newList,
    });
  };



  BtClick = () => {
   console.log('bt clicked');
   const changePage  = this.state.isAvailable ? (<Details/>) : (<BodyItems/>)

   return changePage;
  };




  Select = (event) => {
    console.log(event.target.value);

    const value = event.target.value;

    this.setState({
      activeState: value,
    });
  };



  render()
  {
    const { data, activeState } = this.state;

    const newList = data.filter((item) => {
      if (activeState === "all") {
        return true;
      }
      if (activeState === "available") {
        return item.isAvailable === true;
      }
      if (activeState === "not-available") {
        return item.isAvailable === false;
      } else {
        return false;
      }
    });


    return (
      <Tools boxSelect={this.Select}>
        <div>
          {newList.map((obj) => {
            return (
              <ListItems
                key={obj.title}
                title={obj.title}
                descri={obj.descri}
                isAvailable={obj.isAvailable}
                onBtclick={this.BtClick}
                onDelete={() => {
                  this.Delete(obj);
                }}
              />
            );
          })}
        </div>
      </Tools>
    );
  }
}

export default BodyItems;
