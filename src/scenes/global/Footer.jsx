import React from "react";
import { Flex } from '@mantine/core';
import { createStyles, Container,Text } from '@mantine/core';
import { Button } from '@mantine/core';
import { Link } from "react-router-dom";


const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: "#EAE6E3",
    marginTop: 80,
  },
 

  inner: {
    maxWidth:1100,
    display: 'flex', 
    flexWrap:"wrap",
    justify: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    }

    
  },
  button: {
    flexWrap:'wrap',
    backgroundColor:"#7F9593",
    display: 'flex',
    justify: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },


  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
   
      <Container className={classes.inner}>
        <Text sx= {{paddingBottom:"0px", paddingTop:"20px"}} align="center"> 
          <Text>  Avbildade funktioner är inte alltid standard eller tillgängliga för alla modeller, motoralternativ och regioner.
          
          </Text>
        </Text>
        <Flex sx={{width:"288px" ,justifyContent:"space-around", paddingLeft: "3px"}}> 
          <Link to ="/">
            <Button color="dark">Store</Button> 
          </Link>

          <Link to ="/Lasmer">
            <Button  color="dark">Läs mer</Button>
          </Link>
        </Flex>  
      </Container>
      <Container>
      
        <Text sx ={{paddingBottom:"30px"}} color="EAE6E3" size="md" align="center" >
          <Text> Karossvägen 2, 418 78 Göteborg </Text>
          Copyright © 2023 Volvo Car Corporation (eller dess dotterbolag/licensgivare).
        </Text >
         
      </Container>
      
    </div>
    
  );
}


