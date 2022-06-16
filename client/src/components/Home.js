import { QUERY_ALL } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Box, Center, Heading, Image } from "@chakra-ui/react";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ALL, {
    fetchPolicy: "no-cache",
  });
  console.log(data);

  const quotesList = data?.quotes || [];
  const imagesList = data?.images || [];

  // let i = 0;
  // let j = 0;

  // const [imgSrc, setImgSrc] = useState(i);
  // const [qSrc, setQSrc] = useState(i);
  // const [quote, setQuote] = useState();

  // const imageChanger = (e) => {
  //   let currentImage = e.target;
  //   if (i < data.images.length - 1) {
  //     i++;
  //     currentImage.setAttribute("src", data.images[i].imageURL);
  //     setQuote(data.quotes[i].quote);
  //     console.log(i);
  //     return;
  //   }
  //   i = 0;
  //   currentImage.setAttribute("src", data.images[i].imageURL);
  //   setQuote(data.quotes[i].quote);
  //   console.log(i);
  // };

  // const quoteChanger = () => {
  //   if (j < data.quotes.length - 1) {
  //     j++;
  //     setQuote(data.quotes[i].quote);
  //     console.log(j);
  //     return;
  //   }
  //   j = 0;
  //   setQuote(data.quotes[i].quote);
  //   console.log(j);
  // };

  return (
    <div className="App">
      <Center className="head" color="white" fontSize="3rem">
        The Sorrow Work
      </Center>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {imagesList.map((image) => {
            return (
              <div>
                <Center>
                  <Box
                    bg="black"
                    w="fit-content"
                    borderWidth="1rem"
                    borderColor="darkgrey"
                    mb="1rem"
                    borderStyle="groove"
                    boxShadow="dark-lg"
                  >
                    <Image
                      // maxW="90%"
                      fit="cover"
                      src={image.imageURL}
                      className="App-logo"
                      alt="logo"
                    />
                  </Box>
                </Center>
              </div>
            );
          })}
          <Center>
            <Box
              bg="black"
              w="fit-content"
              borderWidth="1rem"
              borderRadius="md"
              borderColor="black"
              mb="1rem"
            >
              {quotesList.map((quote) => {
                return (
                  <div>
                    <Center className="text" color="white" mt="1rem">
                      {quote.quotetext}
                    </Center>
                    <Center className="text" color="lightgrey">
                      -{quote.author}
                    </Center>
                    {quote.source ? (
                      <Center className="text" color="lightgrey" mb="1rem">
                        From "{quote.source}"
                      </Center>
                    ) : (
                      <div></div>
                    )}
                  </div>
                );
              })}
            </Box>
          </Center>
        </div>
      )}
    </div>
  );
};

export default Home;
