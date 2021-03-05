import React from 'react';
import { Link } from "react-router-dom";

function MenuItem(props) {
    console.log(props);
    return (
        <li id={props.item}>
            <Link to={props.tolink} onClick={props.activec}>
                {props.item}
            </Link>
        </li>
    )
}

// class MenuItem extends Component {
//     render() {
//         return (
//             <li id={this.props.item}>
//                 <Link to={this.props.tolink} onClick={this.props.activec.bind(this,this.props.item)}>
//                     {this.props.item}
//                 </Link>
//             </li>
//         )
//     }
// }

export default MenuItem;