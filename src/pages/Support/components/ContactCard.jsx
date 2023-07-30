import React from "react";
import {
  Box,
  Card,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
  Button,
  Checkbox,
} from "@chakra-ui/react";
const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem">
      <Stack spacing={4}>
        <Text fontSize="sm" fontWeight="medium">
          You will recevie response within 24 hours of time of submit
        </Text>

        <HStack
          flexDir={{
            //for responsive
            base: "column",
            md: "row",
          }}
        >
          <FormControl fontSize="sm">
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your Name.." />
          </FormControl>

          <FormControl fontSize="sm">
            <FormLabel>Surname</FormLabel>
            <Input placeholder="Enter Your Surname.." />
          </FormControl>
        </HStack>
        <FormControl fontSize="sm">
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter Your Email.." />
        </FormControl>

        <FormControl fontSize="sm">
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter Your message.." />
        </FormControl>
        <Checkbox defaultChecked>
          <Text fontSize="sm">
            I agree with
            <Box as="span" color="purple">
              Terms & Condation
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm">Send a Message</Button>
          <Button fontSize="sm" bg="lightgray" color="black">
            Book a meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
