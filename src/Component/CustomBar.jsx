import { Badge, HStack, Progress, Text, VStack } from '@chakra-ui/react'
import React from 'react'


const CustomBar=({high,low})=>{

    return(
        <>
    <VStack w={"full"}>
      <Progress value={50} colorScheme={'teal'} w={"full"}/>
      <HStack justifyContent={"space-between"} wide={"full"}>
        <Badge children={"low"} colorScheme={"red"}></Badge>
        <Text fontSize={"sm"}>24h range</Text>
        <Badge children={"high"} colorScheme={"green"}></Badge>

      </HStack>
    </VStack>
    </>
    )
}

export default CustomBar