import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transaction",
      link: "/transactions",
    },
  ];
  return (
    <Stack justify="space-between" boxShadow="lg" w="16rem" h="full" bg="white">
      <Box>
        <Heading textAlign="center" fontSize="18px" as="h6" pt="56px">
          @DOSOMECODING
        </Heading>
        <Box mx="12px" mt="30px">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                mx="12px"
                py="3"
                px="4"
                color="rgb(168, 167, 167)"
                _hover={{
                  bg: "rgb(204, 203, 203)",
                  color: "black",
                }}
                borderRadius="10px"
              >
                <Icon as={nav.icon} />
                <Text fontSize="15px" fontWeight="550">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mx="12px" mt="30px" mb="6">
        <Link to="/support">
          <HStack
            mx="12px"
            py="3"
            px="4"
            color="rgb(168, 167, 167)"
            _hover={{
              bg: "rgb(204, 203, 203)",
              color: "black",
            }}
            borderRadius="10px"
          >
            <Icon as={BiSupport} />
            <Text fontSize="15px">Support</Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
