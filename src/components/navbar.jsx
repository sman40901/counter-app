import React, { Component } from 'react';
/* stateless function component
const NavBar = (props) => {
    return (

        <nav className="navbar navbar-light bg-light">

            <a class="navbar-brand mb-0 h1">
                Navbar &nbsp;
                <span className='badge badge-pill badge-secondary'>
                    {props.totalCounters}
                </span>
              </a>
        </nav>
    );
}
*/

class NavBar extends Component {

    render() {
        console.log('navbar - rendered');
        // object destructure example
        const { totalCounters,totalValue } = this.props;
        return (

            <nav className="navbar navbar-light bg-light">

                <a className="navbar-brand mb-0 h1">
                    Counter App &nbsp;<br></br>
                    <span> Number of Counters </span>
                    &nbsp;
                    <span className='badge badge-pill badge-secondary'>
                        {totalCounters}
                    </span>
                    &nbsp;
                    <span> Total value </span>
                    &nbsp;
                    <span className='badge badge-pill badge-secondary'>
                        {totalValue}
                    </span>
                </a>
            </nav>
        );
    }
}

export default NavBar;