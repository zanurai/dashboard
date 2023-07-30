import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  //props taneko
  return (
    <CustomCard
      bgImage={imgUrl}
      bgRepeat="no-repeat"
      bgSize="cover"
      bg={inverted ? "purple" : "white"}
    >
      <Tag
        color={inverted ? "purple" : "white"}
        bg={inverted ? "white" : "purple"}
        borderRadius="full"
      >
        {tagText}
      </Tag>
      <Text
        mt="4"
        fontSize="15p"
        fontWeight="medium"
        color={inverted ? "white" : "black"} //inverted le chai ulto ma kam jsati inverted ma means yakside ma white vaya arkoma black
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
