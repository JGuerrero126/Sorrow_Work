import { useQuery } from "@apollo/client";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { QUERY_IMAGES } from "../utils/queries";
import { useEffect } from "react";

const Images = () => {
  const { loading, data } = useQuery(QUERY_IMAGES, {
    fetchPolicy: "no-cache",
  });

  const imagesList = data?.images || [];

  let i = 0;

  const imageChanger = (e) => {
    let currentImage = e.target;
    if (i < data.images.length - 1) {
      i++;
      currentImage.setAttribute("src", data.images[i].imageURL);
      document.getElementById("artist").textContent =
        "Work Created By: " + data.images[i].artist;
      return;
    }
    i = 0;
    currentImage.setAttribute("src", data.images[i].imageURL);
    document.getElementById("artist").textContent =
      "Work Created By: " + data.images[i].artist;
  };

  useEffect(() => {
    console.log(imagesList);
  }, [imagesList]);

  return (
    <div>
      <Center className="text" color="white" mt="1rem">
        Please click or tap on the Image below to cycle through the collection.
      </Center>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Box minH="100vh">
          <Center>
            <Box>
              <Image
                bg="black"
                w="fit-content"
                borderWidth="1rem"
                borderColor="darkgrey"
                mb="1rem"
                borderStyle="groove"
                boxShadow="dark-lg"
                onClick={(e) => imageChanger(e)}
                fit="cover"
                src={imagesList[i].imageURL}
                className="App-logo"
                alt="logo"
              />
            </Box>
          </Center>
          <Text textAlign="center" id="artist" color="snow">
            Work Created By: {imagesList[i].artist}
          </Text>
        </Box>
      )}
    </div>
  );
};

export default Images;
