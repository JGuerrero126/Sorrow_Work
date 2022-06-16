import { useQuery } from "@apollo/client";
import { Box, Center, Image } from "@chakra-ui/react";
import { QUERY_IMAGES } from "../utils/queries";

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
      return;
    }
    i = 0;
    currentImage.setAttribute("src", data.images[i].imageURL);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Center minHeight="100vh">
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
                onClick={(e) => imageChanger(e)}
                fit="cover"
                src={imagesList[i].imageURL}
                className="App-logo"
                alt="logo"
              />
            </Box>
          </Center>
        </div>
      )}
    </div>
  );
};

export default Images;
