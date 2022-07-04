import "./NavBar.css";
import { Link } from "react-router-dom";
import { Button, Avatar } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="logo-container">
          <Avatar
            size="md"
            // src="https://bit.ly/dan-abramov"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif"
            mb={2}
            mt={3}
          />
          <Link to="/" className="app-name">
            MealMate
          </Link>
        </div>

        <div className="other-nav-component">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/cuisine">
            ByCuisine
          </Link>
          <Link className="link" to="/calories">
            ByCalories
          </Link>
          <Link className="link" to="/search-by-ingredients">
            Whats in your Pantry
          </Link>
          {/* <Button colorScheme="teal">Find</Button> */}
        </div>
      </nav>
    </header>
  );
}
