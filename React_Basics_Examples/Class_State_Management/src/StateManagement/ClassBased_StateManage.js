import React from "react";
import '../StateManagement/state.css';

class Employee extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            employees:[
                {
                    name:"Lohit",
                    age:34
                },
                {
                    name:"Chadrakant",
                    age:34
                }
            ]
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="navbar2">
                    <span>
                        Welcome to State Management in Class Based Component
                    </span>
                </div>
                <div className="card2">
                    <div>
                        Name:{this.state.employees[0].name}
                    </div>
                    <div>
                        Age:{this.state.employees[0].age}
                    </div>
                </div>
                <div className="card2">
                    <div>
                        Name:{this.state.employees[1].name}
                    </div>
                    <div>
                        Age:{this.state.employees[1].age}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Employee;