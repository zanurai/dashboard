import React from "react";
import Dashboardlayout from "../../components/Dashboardlayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transaction from "./components/Transaction";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <Dashboardlayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          // md: "repeat(2, 1fr)",first ma thiyo
          xl: "repeat(2, 1fr)", //yo chai responsiveko lagi
        }}
        gap="20px"
      >
        <GridItem
          //colSpan={2}yexto thiyo
          colSpan={{
            base: 1, //responsive ko lagi
            xl: 2,
          }}
        >
          <PortfolioSection />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>

        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="dot.jpg"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum
        accusantium autem doloremque aperiam!"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>

        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="images.png"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum
             accusantium autem doloremque aperiam!"
            tagText="contact"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </Dashboardlayout>
  );
};

export default Dashboard;
