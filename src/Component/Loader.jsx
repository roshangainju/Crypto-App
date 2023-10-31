import React from 'react'
import {Box, Spinner, VStack} from "@chakra-ui/react"

const Loader = () => {
  return (
    <div>
      <VStack h="90vh" justifyContent={"center"}>
        <Box transofrm={"scale(3)"}>
          <Spinner size={"xl"}></Spinner>

        </Box>

      </VStack>
    </div>
  )
}

export default Loader