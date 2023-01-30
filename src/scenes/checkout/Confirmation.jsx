// import React from "react";
// import { Button } from '@mantine/core';
// import { Link } from "react-router-dom";

// import { Box } from "@mui/material";
// import Alert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";

// const Confirmation = () => {
//   return (
//     <Box m="90px auto" width="80%" height="50vh">
//       <Alert severity="success">
//         <AlertTitle>Success</AlertTitle>
//         Du har gjort en beställning till Volvo Cars —{" "}
//         <strong>Grattis till ditt köp</strong>
        
//           <Link to ="/">
//             <Button color="dark" fz="md">Hitta din nästa bil på våran store</Button> 
//           </Link>
//       </Alert>
//     </Box>
//   );
// };

// export default Confirmation;



import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  List,
  ThemeIcon,
} from '@mantine/core';
// import { Link } from '@mui/material';
import { Link } from "react-router-dom";
import { IconCheck } from '@tabler/icons';
import image from '../../assets/volvo.png';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export default function Confirmation() {
  const { classes } = useStyles();
  return (
    <div>
      <Container mt={80} ml={320} mr={320}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
            Du har gjort <span className={classes.highlight}>en beställning</span> till Hyr Online | VolvoCars
            </Title>
  
            <List
              
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Välkommen att kontakta oss med dina frågor. Vi finns tillgängliga via telefon eller e-post. För frågor som handlar om bilen och bilens funktioner rekommenderar vi ett besök på vår supportsida.</b>  
              </List.Item>
              <List.Item>
                <b>Kundcenter</b> – Vi finns här för dig.
              </List.Item>
              <List.Item>
                <b>Telefon:</b> 076 587-0000 
              </List.Item>
              <List.Item>
                <b>E-post:</b> hyronline@volvocars.com 
              </List.Item>
              
            </List>

            <Group mt={30}>
              <Link to = "/ContactUs">
              <Button radius="xl" size="md" className={classes.control}>
              Besök vår supportsida
              </Button>
              </Link>
              <Link to ="/">
              <Button variant= "default" radius="xl" size="md" className={classes.control}>
              Förtsätta hyra på Hyr Online | VolvoCars
              </Button>
              </Link>
            </Group>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}