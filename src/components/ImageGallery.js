import React, { useState } from 'react'
import { useEffect } from 'react'
import { Box, Image, Grid, Input, FormControl, FormLabel, Button} from '@chakra-ui/react';


export default function ImageGallery() {
    const [images,setImages] = useState()
    const [search,setSearch] = useState("nebula");

    const handleSubmit = async (e) => {
      e.preventDefault();
      
     await fetch(`https://images-api.nasa.gov/search?q=${search}`)
        .then(res => res.json())
        .then(data =>setImages(data))
        
    }

    // useEffect(() => {
    //     fetch(`https://images-api.nasa.gov/search?q=nebula`)
    //     .then(res => res.json())
    //     .then(data =>setImages(data))
            
    // }, [])
    
    // console.log(search)
    //console.log(images)


  return (
    
        <Box>
          <form onSubmit={handleSubmit}>
            <FormControl  >
              <FormLabel>Search Images from NASA</FormLabel>
              <Input type="text" placeholder="Search" value={search} onChange={(e)=> setSearch(e.target.value)}></Input>
              <Button type="submit">Search</Button>
            </FormControl>
        </form>
         <Grid padding={10} gridGap="2px" gridAutoRows="150px" gridTemplateColumns='repeat(auto-fit,minmax(300px,1fr))' gridAutoFlow="dense">
          
                  {images && images.collection.items.map((image,i) => (<Image key={i} gridColumn="span 2" gridRow="span 2" width="100%" height="100%" objectFit="cover" src={`${image.links[0].href}`} />))}

          </Grid>
        </Box>
  )
}
