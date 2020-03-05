import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from "react-router-dom";

class Navigation extends React.Component{
    render(){
        return(
             <div>
                 <NavLink to="/"></NavLink>
                 <NavLink to="/book1">Two states hELLO</NavLink>
                 <NavLink to="/book2">I too had a love story</NavLink>
                 <NavLink to="/book3">Goddan</NavLink>
                 <NavLink to="/book4">Carrie</NavLink>
            </div>
        )
    }
}

export default Navigation;