import React, { useState } from 'react';
import {
  Box,
  Image,
  Grid,
  Input,
  FormControl,
  FormLabel,
  Button,
  Divider
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const axios = require('axios').default;

export default function ImageGallery() {
  const [images, setImages] = useState();
  const [search, setSearch] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    await axios
      .get(`https://images-api.nasa.gov/search?q=${search}`)
      .then(res => {
        if (res.status === 200) {
          setImages(
            res.data.collection.items.filter(image => image.href[31] === 'i')
          );
        }
      })
      .catch(err => console.log(err));
  };

  // console.log(images);

  return (
    <Box margin={5}>
    <Box width="30%" margin="0 auto" alignItems="center">
        <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Search Images from NASA</FormLabel>
          <Input
            position="relative" 
            type="text"
            placeholder="Search ex: Nebula"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button position="absolute" type="submit">Search</Button>
        </FormControl>
      </form>
      </Box>
      <Divider marginTop={5}/>
      <Grid
        padding={10}
        gridGap="5px"
        gridAutoRows="auto"
        gridTemplateColumns="repeat(auto-fit,minmax(300px,1fr))"
        gridAutoFlow="dense"
      >
        {images && images.length > 0
          ? images.map((image, i) => (
              <Link to="/">
              <Image
                key={i}
                gridColumn="span 1"
                gridRow="span 1"
                width="100%"
                height="100%"
                objectFit="cover"
                src={`${image.links[0].href}`}
              />
              </Link>
            )
            )
          : "" }
      </Grid>
      </Box>
    
  );
}
