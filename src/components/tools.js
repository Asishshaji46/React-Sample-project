import React from "react";



function Tools(props){

const {
    children,
    boxSelect
}=props


const onlyChild = React.Children.only(children);

const count = React.Children.count(onlyChild.props.children)


    return (
        <div>
            <div className="select-div">
                <select className="select-box" onChange={boxSelect}  >
                    <option value="all" key="all">All</option>
                    <option value="available" key="avail">Availble</option>
                    <option value="not-available" key="not">Not-Available</option>
                </select>

                <h3 className="count">Total Products  : {count}</h3>
            </div>
            {children}
        </div>
    )
};

export default Tools;