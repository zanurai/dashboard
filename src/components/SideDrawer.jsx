import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import Sidenav from "./Sidenav";
const SideDrawer = ({ isOpen, onClose }) => {
  //Drawer means side bata sidebar aaune
  // const {isOpen, onOpen, onClose} = useDisclosure()
  //  const btnRef = React.useRef()
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        {/* responsive ma onClose ma tyosideko dashbord hasauxa*/}
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Sidenav />
            {/*sidebar ko sbai dekhauxa*/}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
