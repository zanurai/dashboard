import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const Dashboardlayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <Flex>
        <Box display={{ base: "none", lg: "flex" }}>
          {/* sidenav ma responsive banauxa*/}
          <Sidenav />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={6}>
          <TopNav title={title} onOpen={onOpen} />
          <Container
            overflowX="hidden"
            overflowY="auto"
            h="calc(100vh-64px)"
            maxW="65rem"
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </div>
  );
};

export default Dashboardlayout;
