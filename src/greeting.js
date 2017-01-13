import React from 'react';

// const Greeting = (props) => {
//     return (
//         <div className="greeting">
//             Hello, {this.props.name}
//         </div>
//     );
// }

class Greeting extends React.Component {
    render() {
        return (
            <div className="greeting">
               Hello, {this.props.name}
            </div>
        ) 
    }
}


export default Greeting;