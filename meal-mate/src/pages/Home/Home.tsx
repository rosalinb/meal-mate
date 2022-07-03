import React, { useState } from "react";
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
    fetch(
      `https://api.spoonacular.com/food/trivia/random?apiKey=65493f96d9814a4e82ae17cfc6f9fdf5`
    )
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
    fetch(
      `https://api.spoonacular.com/food/jokes/random?apiKey=65493f96d9814a4e82ae17cfc6f9fdf5`
    )
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
    </div>
  );
}
