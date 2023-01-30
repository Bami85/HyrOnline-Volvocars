import { createStyles, Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import image from '../../assets/c40.png';
import {Link} from "react-router-dom";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

export default function NotFound() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
        <HelmetProvider>
         <Helmet>
          <title> Not found page</title>
         </Helmet> 
        </HelmetProvider>
      {/* <SimpleGrid  spacing={80} cols={2}   breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}> */}
      <SimpleGrid align="center" mt={80} mb="250px">
        <Image src={image} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Page not found error 405</Title>
          <Text  color="dimmed" size="lg">
         
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Link to ="/">
          <Button variant="outline" size="md" mt="xl" className={classes.control}>
            Get back to home page
          </Button>
          </Link>
        </div>
        <Image src={image.src} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}