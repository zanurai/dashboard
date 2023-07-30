import React from "react";
import Dashboardlayout from "../../components/Dashboardlayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMdMail } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";
const Support = () => {
  return (
    <Dashboardlayout title="Support">
      <Stack spacing={5}>
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title=" Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us"
        />

        <SupportCard
          icon={AiFillMessage}
          leftComponent={
            <InfoCard
              imgUrl="images.png"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum
             accusantium autem doloremque aperiam!"
              tagText="contact"
              inverted={true}
            />
          }
          title=" Life Chat"
          text=" Dont have time to wait for the answer? Chat with us now "
        />
      </Stack>
    </Dashboardlayout>
  );
};

export default Support;
