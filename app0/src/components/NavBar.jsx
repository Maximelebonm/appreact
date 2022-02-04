import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <Link className="navbar" to="/">
               logo

             </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link className="nav-link" to="/gender">
                    Gender

                    </Link>
                    </li>
                 
                </ul>
            </div>
        </nav>
    );

}
export default NavBar;