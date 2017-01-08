/**
 * Created by taranjeet on 08-01-2017.
 */
import React,{ Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <div>
                <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="http://v4-alpha.getbootstrap.com/examples/dashboard/#">Overview <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://v4-alpha.getbootstrap.com/examples/dashboard/#">Reports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://v4-alpha.getbootstrap.com/examples/dashboard/#">Analytics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://v4-alpha.getbootstrap.com/examples/dashboard/#">Export</a>
                        </li>
                    </ul>

                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="http://v4-alpha.getbootstrap.com/examples/dashboard/#">Nav item</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://v4-alpha.getbootstrap.com/examples/dashboard/#">Nav item again</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://v4-alpha.getbootstrap.com/examples/dashboard/#">One more nav</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://v4-alpha.getbootstrap.com/examples/dashboard/#">Another nav item</a>
                        </li>
                    </ul>

                    <ul className="nav nav-pills flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="http://v4-alpha.getbootstrap.com/examples/dashboard/#">Nav item again</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://v4-alpha.getbootstrap.com/examples/dashboard/#">One more nav</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://v4-alpha.getbootstrap.com/examples/dashboard/#">Another nav item</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default SideBar;