import React, { useState, useRef, ReactElement, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetail/RecipeDetails";
import { Center, Heading } from "@chakra-ui/react";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
  Text,
  Divider,
  Stack,
  Skeleton,
  Image,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const CUISINES = [
  "American",
  "British",
  "Chinese",
  "Eastern European",
  "French",
  "Greek",
  "Indian",
  "Italian",
  "Japanese",
  "Korean",
  "Mexican",
  "Middle Eastern",
  "Spanish",
  "Thai",
  "Vietnamese",
];

const CUISINES_ = [
  {
    name: "American",
    image:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "British",
    image:
      "https://images.unsplash.com/photo-1606946144557-0d04974df266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJpdGlzaCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Chinese",
    image:
      "https://images.pexels.com/photos/688803/pexels-photo-688803.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Eastern European",
    image:
      "https://images.pexels.com/photos/6252725/pexels-photo-6252725.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "French",
    image:
      "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Greek",
    image:
      "https://images.pexels.com/photos/709823/pexels-photo-709823.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Indian",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Italian",
    image:
      "https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Korean",
    image:
      "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Japanese",
    image:
      "https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Mexican",
    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Middle Eastern",
    image:
      "https://images.pexels.com/photos/8286779/pexels-photo-8286779.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Spanish",
    image:
      "https://images.pexels.com/photos/4765652/pexels-photo-4765652.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Thai",
    image:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Vietnamese",
    image:
      "https://images.pexels.com/photos/2059151/pexels-photo-2059151.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function Cuisine() {
  const resultRef = useRef<any>(null);
  const [cuisineData, setCuisineData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  // const ApiKey = process.env.REACT_APP_SPOONACULAR_API_KEY

  function getCuisineData(cuisineType: any) {
    setIsFetching(true);
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=65493f96d9814a4e82ae17cfc6f9fdf5&cuisine=${cuisineType}&instructionsRequired=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setCuisineData(data.results);
        setIsFetching(false);

        // if (resultRef && resultRef.current) {
        //   resultRef.current.scrollIntoView();
        // }
      });
  }

  function handleCuisineType(event: any) {
    getCuisineData(event.target.alt);
  }

  useEffect(() => {
    if (resultRef && resultRef.current) {
      resultRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [cuisineData]);

  return (
    <div>
      <Heading mb="5" as="h1" size="lg">
        Cuisine From Around the word
      </Heading>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gap: 15,
          marginBottom: 100,
        }}
      >
        {CUISINES_.map((cuisine) => {
          return (
            <>
              <WrapItem
                key={cuisine.name}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  border: "1px solid teal",
                  borderRadius: 5,
                }}
              >
                <button
                  disabled={isFetching}
                  onClick={handleCuisineType}
                  value={cuisine.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    size="md"
                    name={cuisine.name}
                    // src="https://bit.ly/dan-abramov"
                    src={cuisine.image}
                    mb={2}
                    mt={3}
                  />
                  <Divider width={50} mb={1}></Divider>
                  <Text color="teal" fontSize="xs" fontWeight="semibold" mb={2}>
                    {cuisine.name}
                  </Text>
                </button>
              </WrapItem>
            </>
          );
        })}
        {/* <button disabled={isFetching} onClick={handleCuisineType}>
          American
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          British
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          Chinese
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          Eastern European
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          French
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          Greek
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          Indian
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          Italian
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          Japanese
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          Korean
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          Mexican
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          Middle Eastern
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          Spanish
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          Thai
        </button>
        <button disabled={isFetching} onClick={handleCuisineType}>
          Vietnamese
        </button> */}
      </section>

      <section
        ref={resultRef}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
          gap: 25,
          marginBottom: 100,
        }}
      >
        {/* {isFetching && <h1>Loading</h1>} */}
        {isFetching && (
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        )}

        {cuisineData &&
          cuisineData.map((item: any) => {
            return (
              <>
                <WrapItem
                  key={item.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    border: "1px solid teal",
                    borderRadius: 5,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      color="teal"
                      fontSize="xs"
                      fontWeight="semibold"
                      mb={2}
                    >
                      {item.title}
                    </Text>
                    <Image
                      borderRadius="20px"
                      boxSize="150px"
                      src={item.image}
                      alt="recipe image"
                    />
                    {/* <Avatar size="lg" src={item.image} mb={2} mt={3} /> */}
                    <Divider width={50} mb={1}></Divider>

                    <Link to={`/recipe-details/${item.id}`}>
                      View Detail Recipe
                      <ArrowRightIcon mx="2px" />
                    </Link>
                  </div>
                </WrapItem>
              </>
            );
          })}

        {/* {cuisineData &&
          cuisineData.map((item: any) => {
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <img src={item.image} alt="" />
                <Link to={`/recipe-details/${item.id}`}>get recipe</Link>
              </div>
            );
          })} */}
      </section>
    </div>
  );
}
