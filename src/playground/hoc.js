/* eslint-disable */
//  Higher order componenet HOC - a component that renders another components
//  Reuse code
//  Render hijacking
//  Prop manipulation
//  Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info:</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='There are the details'/>, document.getElementById('app'));
//-------------------------------------------------------------------//

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>            
            {props.isAuthenticated ? 
                <WrappedComponent {...props}/> :
                 <p>Please log in</p>}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info='There are the details'/>, document.getElementById('app'));


//------------------------------------------------------------//
// const Authetification = (props) => (
//     <div>
//         <h1>Hi There</h1>
//         <p>authentification: {props.authentific}</p>
//     </div>
// );

// const requireAuthentification = (WrappedComponent) => {
//     return (props) => (
//         <div>            
//             <WrappedComponent {...props}/>
//             {(props.isAuthenticated && <p>Success</p>) || <p>Please log in</p>}
//         </div>
//     );
// };

// const AuthInfo = requireAuthentification(Authetification);

// ReactDOM.render(<AuthInfo isAuthenticated={true} authentific='See result below'/>, document.getElementById('app'));