import { Center, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <div>
      <Center className="head" color="white" fontSize="3rem">
        <Link textDecoration="none" href="/">
          The Sorrow Work
        </Link>
      </Center>
    </div>
  );
};

export default Header;
