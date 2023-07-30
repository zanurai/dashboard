import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+$81.123",
      status: "panding",
    },
    {
      id: "HD82NA3H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+$71.4563",
      status: "processing",
    },
    {
      id: "HD82NA4H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "INR Withdraw",
        tag: "Transfer",
      },
      amount: "+$678.123",
      status: "completed",
    },
    {
      id: "HD82NA5H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "E-Transfer",
      },
      amount: "+$91.325",
      status: "panding",
    },
    {
      id: "HD82NA6H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+$61.903",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "+$961.000",
      status: "cancelled",
    },
    {
      id: "HD82NA8H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "INR withdraw",
        tag: "Wire-Transfer",
      },
      amount: "+$900.053",
      status: "processing",
    },
  ];
  const statusColor = {
    panding: "gray",
    processing: "yellow",
    completed: "green",
    cancelled: "red",
  };

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>DATE & TIME</Th>
            <Th>TYPE</Th>
            <Th>AMOUNT</Th>
            <Th>STATUS</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td fontSize="sm" fontWeight="medium">
                {data.id}
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.date}
                  </Text>
                  <Text fontSize="xs" color="gray">
                    {data.time}
                  </Text>
                </Stack>
              </Td>
              <Td>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.type.name}
                  </Text>
                  <Text fontSize="xs" color="gray">
                    {data.type?.tag}
                  </Text>
                </Stack>
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                {data.amount}
              </Td>
              <Td fontSize="sm" fontWeight="medium">
                <Tag
                  bg={statusColor[data.status]}
                  color="white"
                  borderRadius="full"
                >
                  {data.status}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
