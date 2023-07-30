import {
  Button,
  Card,
  HStack,
  Icon,
  Stack,
  Text,
  Flex,
  Image,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  TabList,
} from "@chakra-ui/react";
import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  const tabs = ["1H", "1D", "1W", "1M"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
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
            <HStack fontWeight="medium">
              <Icon as={BsArrowUpRight}></Icon>
              <Text fontSize="sm" fontWeight="medium" color="green">
                22%
              </Text>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="#c7c7c6" p="3px">
            {tabs.map((tab, text) => (
              <Tab
                // _active={{
                //   bg: "white"
                _selected={{ bg: "white" }}
                // }}
                key={tab.id || text}
                p="6px"
                borderRadius="4px"
              >
                {tab}
              </Tab>
            ))}
            {/* <Tab fontSize="sm" p="6px" borderRadius="4px">
              Tab 1
            </Tab>
            <Tab fontSize="sm" p="6px" borderRadius="4px">
              Tab 2
            </Tab> */}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="/graphs.png" w="100%" />
            <HStack justify="space-between">
              {timestamps.map((timestamp, text) => (
                <Text key={`timestamp_${text}`} fontSize="sm" color="gray">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
