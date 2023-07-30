import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Flex,
  Icon,
  Stack,
  Text,
  Grid,
  Divider,
  Button,
} from "@chakra-ui/react";
import { BsCurrencyRupee, BsCurrencyBitcoin } from "react-icons/bs";
import { Fragment } from "react";

const Transaction = () => {
  const transactions = [
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: BsCurrencyBitcoin,
      text: "BTC Sell",
      amount: "-12.48313391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text fontSize="sm" color="gray">
        Recent Transactions
      </Text>
      <Stack spacing={4} mt="5">
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider mt="4" />}
            {/* bichako line*/}
            <Flex gap="15px">
              <Grid
                placeItems="center"
                bg="rgb(204, 202, 202)"
                boxSize="10"
                borderRadius="full"
              >
                <Icon
                  as={transaction.icon}
                  fontSize="20px"
                  bg="black"
                  borderRadius="full"
                  color="white"
                />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing="0">
                  <Text textStyle="h6">{transaction.text}</Text>

                  <Text fontSize="sm" color="gray">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" bg="rgb(204, 202, 202)" mt="30px" color="black">
        view all
      </Button>
    </CustomCard>
  );
};

export default Transaction;
