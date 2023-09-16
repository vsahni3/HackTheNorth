import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './NavBar.css'

export default function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" >
                <p className="navbar_title">Put Title Here</p>
            </Link>

            {/* <Link to="/" className="navbar_title">
                TechTutor
            </Link> */}
            <ul>
                <CustomLink className='navbar_chat' to="/dragdrop">Upload</CustomLink>
                <CustomLink className='navbar_prompt' to="/visual">Visualizer</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}