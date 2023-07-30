import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
// import { AiOutlineArrowDown } from "react-icon/ai";
const PortfolioSection = () => {
  return (
    <>
      <HStack
        justify="space-between"
        bg="white"
        borderRadius="xl"
        p="6"
        mt="20px"
        align={{
          //responsive ko lagi
          base: "flex-direction",
          xl: "center",
        }}
        flexDirection={{
          base: "column",
          xl: "row",
        }}
        spacing={{
          base: "4",
          xl: "0", //yaha samma
        }}
      >
        <HStack
          // spacing={45} thiyo
          spacing={{
            //yo chai responsive ko lagi
            base: "0",
            xl: "45",
          }}
          align={{
            //responsive ko lagi
            base: "flex-direction",
            xl: "center",
          }}
          flexDirection={{
            base: "column",
            xl: "row", //yaha samma
          }}
        >
          <Stack>
            <HStack color="gray">
              <Text fontSize="sm">Total Portfolio Value</Text>
              <Icon as={AiOutlineInfoCircle} />
            </HStack>
            <Text textStyle="h2" fontWeight="medium">
              ₹ 112,312.24
            </Text>
          </Stack>

          <Stack>
            <HStack color="gray">
              <Text fontSize="sm">Wallet Balance</Text>
            </HStack>
            <HStack
              spacing={4}
              align={{
                //responsive ko lagi
                base: "flex-direction",
                xl: "center",
              }}
              flexDirection={{
                base: "column",
                lg: "row",
              }} //yaha samma
            >
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>
              <Tag fontWeight="medium">BTC</Tag>
              <Text textStyle="h2" fontWeight="medium">
                ₹ 1,300.00
              </Text>
              <Tag>INR</Tag>
            </HStack>
          </Stack>
        </HStack>
        <HStack>
          <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
          <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
        </HStack>
      </HStack>
    </>
  );
};

export default PortfolioSection;
