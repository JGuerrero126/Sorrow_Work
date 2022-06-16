import { Box, Button, Center, Link } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box w="100%" minHeight="100vh">
      <Center className="text" color="white" mt="1rem">
        Welcome to The Sorrow Work.
      </Center>
      <Center className="text" color="white" mt="1rem" mr="4rem" ml="4rem">
        The Sorrow Work is a collection of Images and Quotes meant to evoke a
        feeling of sadness or sorrow. This project was built due to a time in my
        life where I was struggling hard to keep going. Losing all hope and
        feeling like I was lost and drowning every day. If you are struggling
        with your own hard time please use this project as a means to get those
        feelings out and push past them, do not dwell on them. Don't lose hope.
        You are loved and you are important.
      </Center>
      <Center mt="5rem">
        <Button size="lg" mr="3rem">
          <Link href="/Images">Go To Images</Link>
        </Button>
        <Button size="lg">
          <Link href="/Quotes">Go To Quotes</Link>
        </Button>
      </Center>
    </Box>
  );
};

export default Home;
