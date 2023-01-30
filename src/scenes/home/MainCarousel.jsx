import React from "react";
import { createStyles, Image, Card, Text, Group, Button} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Link } from "react-router-dom";


const useStyles = createStyles((theme, _params, getRef) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  

  carousel: {
   
    '&:hover': {
      [`& .${getRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
   
  },

  carouselIndicator: {
   width: 7,
   height: 4,
   transition: 'width 250ms ease',
   

    '&[data-active]': {
      width: 20,
     

    },
    
  },
}));

const images = [
  'https://www.volvocars.com/images/v/-/media/applications/pdpspecificationpage/my24/ex90-electric/reveal/hero/desktop/02-top-open.jpg?iar=0&w=1920',
  'https://vod-production.imgix.net/sites/2/2022/08/hGgGjR42-RentalBanner@2x.png?auto=format&fit=max&w=3840&q=75',
  'https://www.volvocars.com/images/v/-/media/market-assets/sweden/applications/dotcom/images/homepage/promotion/ste-280recharge_notalent_desktop_21x9.jpg?iar=0&w=1440',
  'https://www.volvocars.com/images/v/-/media/applications/pdpspecificationpage/my24/ex90-electric/reveal/overviewmediaitem-1-6-16x9.jpg?iar=0&w=1920',
 
  

];

export default function CarouselCard() {
  const { classes } = useStyles();

  const slides = images.map((image) => (
    
    <Carousel.Slide key={image}  >
      
      <Image src={image} height={420}  />
    
    </Carousel.Slide>
    
  ));

  return (
    <Card radius="md" height="90" width="80%" mt={90}> 
    
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
          
          
        </Carousel>
        
      </Card.Section>

      <Group position="apart" mt="md" >
        <Text weight={500} size="lg">
        Mot vår nya och helt elektriska SUV
        </Text>
        <Group spacing={14}>
        <Link to ="/">
            <Button radius="md" color="dark">Hyr bil medan du väntar</Button> 
        </Link>
        <Link to ="/Lasmer">
            <Button radius="md" color="dark">LÄS MER</Button> 
        </Link>
       
        </Group>
      </Group>
      

      
      <Text weight={900} size="lg">Volvo EX90 </Text>

      <Group position="apart" mt="md">
        <div>
          <Text size="xl" span weight={500} className={classes.price}>
            
          </Text>
          <Text span size="sm" color="dimmed">
            {' '}
          </Text>
        </div>
      </Group>
    </Card>
  );
}