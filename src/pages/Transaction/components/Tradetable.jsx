import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";
const TransactionWithdraw = () => {
  const tableData = [
    {
      id: "HD82NA3H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "Transfer",
      },
      amount: "+$71.4563",
      status: "processing",
    },

    {
      id: "HD82NA5H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "Sonam",
      },
      amount: "+$91.325",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "",
      },
      amount: "+$61.903",
      status: "completed",
    },
    {
      id: "HD82NA6H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "Sonam",
      },
      amount: "+$61.903",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "",
      },
      amount: "+$30.38384",
      status: "processing",
    },
    {
      id: "HD82NA6H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "GuChi",
      },
      amount: "+$2000",
      status: "completed",
    },
    {
      id: "HD82NA6H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "Sonam",
      },
      amount: "+$400",
      status: "processing",
    },
    {
      id: "HD82NA6H",
      date: "2023-6-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "Guchi",
      },
      amount: "+$51.903",
      status: "panding",
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

export default TransactionWithdraw;
