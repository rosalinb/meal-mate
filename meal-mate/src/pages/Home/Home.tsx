import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Heading } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  const [trivia, setTrivia] = useState("");
  const [joke, setJoke] = useState("");
  const [showFacts, setShowFacts] = useState(false);
  const [showJokes, setShowJokes] = useState(false);

  const ApiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
  // console.log(process)

  function getTrivia() {
    setShowFacts(!showFacts);
    fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=${ApiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setTrivia(data.text);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function getJoke() {
    setShowJokes(!showJokes);
    fetch(`https://api.spoonacular.com/food/jokes/random?apiKey=${ApiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.text);
        // console.log(data)
      });
  }

  return (
    <div>
      <div className="home-page-content">
        <Heading mb="5" as="h1">
          Find you perfect meal <br></br> with MealMate
        </Heading>
        <Heading mb="10" as="h2" size="sm">
          Search from our wide range of meal collections
        </Heading>

        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" onClick={getTrivia} variant="outline">
            Food Trivia
          </Button>

          <Button colorScheme="teal" onClick={getJoke} variant="outline">
            Food Joke
          </Button>
        </Stack>
      </div>

      {/* {showFacts && <p>{trivia}</p>} */}
      {/* {showJokes && <p>{joke}</p>} */}

      <Modal isOpen={showFacts} onClose={() => setShowFacts(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{trivia}</ModalBody>
        </ModalContent>
      </Modal>

      <Modal isOpen={showJokes} onClose={() => setShowJokes(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Joke</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{joke}</ModalBody>
        </ModalContent>
      </Modal>

      {/* <h2>find cuisines from all over the globe</h2>
        <Image
          borderRadius="20px"
          boxSize="150px"
          src="https://familysearch.brightspotcdn.com/dims4/default/055ea1c/2147483647/strip/true/crop/800x500+0+0/resize/1240x775!/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2F89%2F3f%2F1a23c4a6fe52a96d2a6d2586cb90%2Fworld-cuisine.jpg"
          alt="recipe image"
        /> */}
      <section className="homepage-container1">
        <article className="section-article-box">
          <h4>Everything is good, when it is about Food.</h4>
          <p>Select your favourite food from our wide range of cuisine. </p>
          <p>
            Try it out in your kitchen with the our quick guide of your
            favourite recipe.
          </p>
          <p>
            Every recipe details comes with stepwise instruction and
            ingredientlist that helps your to shop your groceries easily.
          </p>

          <div>
            <button className="button" style={{ verticalAlign: "middle" }}>
              <Link to="/cuisine">
                <span>Search ByCuisine</span>
              </Link>
            </button>
          </div>
        </article>

        <div className="section-image-box">
          <img
            className="cuisine-image"
            src="https://i.pinimg.com/originals/c6/3f/19/c63f194cb6616f52548ba51a3572515f.gif"
            alt="recipe image"
          />
        </div>
      </section>

      <section className="homepage-container2">
        <div className="section-image-box">
          <img
            className="calories-image"
            src="https://www.dish-works.com/wp-content/uploads/Rainbow-Rice-Bowls_GIF-1_toppings-min.gif"
            alt="recipe image"
          />
        </div>

        <article className="section-article-box2">
          <h4>Count your memories not your calories.</h4>
          <p>
            Having said that, we all want to keep a check on out daily calorie
            intake.
          </p>
          <p>
            Just give us your daily calories intake and we provide you our 3
            course meal option.
          </p>
          <p>Get full recipe details to give them a go.</p>

          <div>
            <button className="button" style={{ verticalAlign: "middle" }}>
              <Link className="link" to="/calories">
                <span>Search ByCalories</span>
              </Link>
            </button>
          </div>
        </article>
      </section>

      <section className="homepage-container1">
        <article className="section-article-box">
          <h4>From Pantry to Plate</h4>

          <p>
            Have a look at the ingredients you have and turn them into amazing
            recipes.
          </p>
          <p>
            We take a mix of your available ingredients and match them with our
            amazing recipe ideas.
          </p>
          <p>
            Wondering how to prepare! Well check out our details recipe guide.
          </p>
          <div>
            <button className="button" style={{ verticalAlign: "middle" }}>
              <Link className="link" to="/search-by-ingredients">
                <span>Search ByIngredient</span>
              </Link>
            </button>
          </div>
        </article>

        <div className="section-image-box">
          <img
            className="by-ingredient-image"
            // boxSize="300px"
            // objectFit="cover"
            src="https://cdn.dribbble.com/users/590596/screenshots/6200385/a--_converted_.gif"
            alt="recipe image"
          />
        </div>
      </section>
    </div>
  );
}
