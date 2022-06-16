import { useQuery } from "@apollo/client";
import { Box, Center } from "@chakra-ui/react";
import { useState } from "react";
import { QUERY_QUOTES } from "../utils/queries";

const Quotes = () => {
  const { loading, data } = useQuery(QUERY_QUOTES, {
    fetchPolicy: "no-cache",
  });

  const quotesList = data?.quotes || [];

  const [qSrc, setQSrc] = useState(0);

  const quoteChanger = async () => {
    if (qSrc < quotesList.length - 1) {
      await setQSrc(qSrc + 1);
      return;
    }
    await setQSrc(0);
  };

  return (
    <Box minHeight="100vh">
      <Center className="text" color="white" mt="1rem" mb="4rem">
        Please click or tap on the Quote Box below to cycle through the
        collection.
      </Center>
      <Center>
        <Box
          bg="black"
          w="fit-content"
          borderWidth="1rem"
          borderRadius="md"
          borderColor="black"
          mb="1rem"
          onClick={() => quoteChanger()}
        >
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <Center className="text" color="white" mt="1rem">
                {quotesList[qSrc].quotetext}
              </Center>
              <Center className="text" color="lightgrey">
                -{quotesList[qSrc].author}
              </Center>
              {quotesList[qSrc].source ? (
                <Center className="text" color="lightgrey" mb="1rem">
                  From "{quotesList[qSrc].source}"
                </Center>
              ) : (
                <div></div>
              )}
            </div>
          )}
        </Box>
      </Center>
    </Box>
  );
};

export default Quotes;
