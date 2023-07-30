import {
  Button,
  Card,
  Flex,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  InputGroup,
  InputLeftElement,
  Input,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import Dashboardlayout from "../../components/Dashboardlayout";
import { AiOutlineDownload } from "react-icons/ai";
import TransactionTable from "./components/TransactionTable";
import TransactionWithdraw from "./components/TransactionWithdraw";
import TransactionDeposit from "./components/TransactionDeposit";
import Tradetable from "./components/Tradetable";
const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },

    {
      name: "Deposit",
      count: 114,
    },

    {
      name: "Widthdraw",
      count: 55,
    },

    {
      name: "Trade",
      count: 50,
    },
  ];
  return (
    <Dashboardlayout title="Transaction">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList py="2" display="flex" justifyContent="space-between">
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="3" pb="4">
                  {tab.name}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px" justifySelf="end" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsTelephone} />
              </InputLeftElement>
              <Input type="search" placeholder="Search" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionDeposit />
            </TabPanel>
            <TabPanel>
              <TransactionWithdraw />
            </TabPanel>
            <TabPanel>
              <Tradetable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Dashboardlayout>
  );
};

export default TransactionPage;
