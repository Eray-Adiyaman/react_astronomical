import { Box,Text } from "@chakra-ui/react"

export default function News({news}) {

    return (
      <>
            {news.map(news => (
              <Box border="1px solid gray" margin="5px" h="120px" w="350px">
                <Text textAlign="center">{news.title}</Text>
              </Box>
              ))}
       
      </>
    )
}
