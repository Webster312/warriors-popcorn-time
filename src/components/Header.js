import "./Header.css";

function Header(props){
    return(
        <div className="Header">
            <h1>This is the Header</h1>
            <h2>We have {props.numberOfMovies} movies</h2>
        </div>
    );
}

export default Header;