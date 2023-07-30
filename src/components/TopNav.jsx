import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const TopNav = ({ title, onOpen }) => {
  return (
    <Box boxShadow="xl" px="4" bg="white">
      <HStack maxW="65rem" h="16" justify="space-between" mx="auto">
        <Icon
          //for responsive
          as={FaBars}
          onClick={onOpen}
          display={{ base: "block", lg: "none" }}
        />
        {/*yattisamm*/}
        <Heading fontSize="28px">{title}</Heading>

        <Menu>
          <MenuButton as={Button}>
            <Icon as={FaRegUser} fontSize="xl" />
          </MenuButton>
          <MenuList>
            <MenuItem>Lgout</MenuItem>
            <MenuItem>Support</MenuItem>
            {/* <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem> */}
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
