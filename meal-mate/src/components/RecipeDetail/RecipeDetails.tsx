import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Image,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
} from "@chakra-ui/react";

export default function RecipeDetails() {
  const [recipeInfo, setRecipeInfo] = useState<any>(null);
  const [showInstruction, setShowInstruction] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);

  function showCookingIntructions() {
    setShowInstruction(!showInstruction);
  }
  function showCookingIngridents() {
    setShowIngredients(!showInstruction);
  }

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=65493f96d9814a4e82ae17cfc6f9fdf5&includeNutrition=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipeInfo(data);
        console.log(data);
      });
  }, []);

  let { recipeId } = useParams();

  if (!recipeInfo) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 25,
        }}
      >
        <div>
          <Heading mb="10" as="h3" size="sm">
            {recipeInfo.title}{" "}
          </Heading>

          <Image
            borderRadius="20px"
            boxSize="300px"
            src={recipeInfo.image}
            alt="recipe image"
          />
          {/* <img src={recipeInfo.image} alt="" /> */}
        </div>
        <div>
          <h3>Preparation time: {recipeInfo.readyInMinutes}</h3>
          <h4>Summary:</h4>
          <p dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}></p>
        </div>
      </section>

      <Stack direction="row" spacing={4} align="center">
        <Button
          colorScheme="teal"
          onClick={showCookingIntructions}
          variant="outline"
        >
          Steps
        </Button>

        <Button
          colorScheme="teal"
          onClick={showCookingIngridents}
          variant="outline"
        >
          Ingredients
        </Button>
      </Stack>

      <Modal isOpen={showInstruction} onClose={() => setShowInstruction(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Preparation Instruction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h4
              dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
            ></h4>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={showIngredients} onClose={() => setShowIngredients(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ingredients</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul>
              {recipeInfo.extendedIngredients.map((ingredient: any) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* <h4>Instruction:</h4>
      <h4 dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}></h4> */}
      {/* <h4>Steps</h4>
      {recipeInfo.analyzedInstructions[0].steps.map((item: any) => {
        return (
          <div>
            <li>{item.step}</li>
          </div>
        );
      })} */}
      {/* <h4>Ingredients:</h4>
      <ul>
        {recipeInfo.extendedIngredients.map((ingredient: any) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul> */}
    </>
  );
}
