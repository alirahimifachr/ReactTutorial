import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">TestUseMemo</Link>
                    </li>
                    <li>
                        <Link to="/testUseEffect">TestUseEffect</Link>
                    </li>
                    <li>
                        <Link to="/testUseCallback">TestUseCallback</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;