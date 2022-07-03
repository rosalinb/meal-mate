import "./NavBar.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="logo-container">
          <img src="" alt="logo" />
          <Link to="/" style={{ textDecoration: "none" }}>
            MealMate
          </Link>
        </div>

        <div className="other-nav-component">
          <Link to="/">Home</Link>
          <Link to="/cuisine">Cuisine</Link>
          <Link to="/calories">Calories</Link>
          <Link to="/search-by-ingredients">Whats in your Pantry</Link>
          <Button colorScheme="teal">Find</Button>
        </div>
      </nav>
    </header>
  );
}
