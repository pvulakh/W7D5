import React from 'react';

class Greeting extends React.Component  {

    render() {
        let greeting;
        if (currentUser.id) {
            greeting = (
                <div>
                    <p>Welcome {currentUser.username}</p>
                    <button onClick={this.props.logout()}>Log Out</button>
                </div>
            );
        } else {
            greeting = (
                <div>
                    <Link to="/signup">Sign Up</Link>;
                    <Link to="/login">Log In</Link>;
                </div>
            );
        }
        return (
            {greeting}
        );
    }
}

export default Greeting;