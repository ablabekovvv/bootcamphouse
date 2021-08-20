import React from "react";
import css from "./flats.module.css";
import {Grid} from "@material-ui/core";
import { Box, Image, Flex, Badge, Text  } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import {Link} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export function Flats() {


  return (
    <div className="body">

      <div className={css.container}>
        <h3 className={css.title}>Рестораны, Отели в вашем городе</h3>
          <Grid container spacing={3} justifyContent={"space-between"}>
              <Link to="/search">
                  <Box p="5" maxW="320px" borderWidth="3px" borderRadius="10px" backgroundColor="#000" mb={50}>
                      <Image width={320} height={240} borderRadius="10px" src="https://api.interior.ru/media/images/DESIGN/Modnoe%20Mesto/Russki_restaurant/cover_RUSKI_interior_5.jpg" />
                      <Flex justifyContent="center" align="baseline" mt={2}>
                          <Text
                              ml={2}
                              textTransform="uppercase"
                              fontSize="sm"
                              fontWeight="bold"
                              color="pink.800"
                          >
                              Проверено &bull; Рестораны
                          </Text>
                      </Flex>
                      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" textAlign="center">
                          Modern, Chic Penthouse with Mountain, City & Sea Views
                      </Text>
                      <Flex justifyContent="center" mb={10}>
                          <Link to="/search">
                              <Button variant="contained">Посмотреть на карте</Button>
                          </Link>
                      </Flex>
                  </Box>
              </Link>
              <Link to="/search">
                  <Box p="5" maxW="320px" borderWidth="3px" borderRadius="10px" backgroundColor="#000" mb={50}>
                      <Image width={320} height={240} borderRadius="10px" src="https://images.squarespace-cdn.com/content/v1/57c99e749de4bb3184279ffc/1625171639429-J905CP3UL32S9CJZ479F/proximity%2Bhotel.png" />
                      <Flex justifyContent="center" align="baseline" mt={2}>
                          <Text
                              ml={2}
                              textTransform="uppercase"
                              fontSize="sm"
                              fontWeight="bold"
                              color="pink.800"
                          >
                              Проверено &bull; Отели
                          </Text>
                      </Flex>
                      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" textAlign="center">
                          Modern, Chic Penthouse with Mountain, City & Sea Views
                      </Text>
                      <Flex justifyContent="center" mb={10}>
                          <Link to="/search">
                              <Button variant="contained">Посмотреть на карте</Button>
                          </Link>
                      </Flex>
                  </Box>
              </Link>
              <Link to="/search">
                  <Box p="5" maxW="320px" borderWidth="3px" borderRadius="10px" backgroundColor="#000" mb={50}>
                      <Image width={320} height={240} borderRadius="10px" src="https://api.interior.ru/media/images/DESIGN/Modnoe%20Mesto/Russki_restaurant/cover_RUSKI_interior_5.jpg" />
                      <Flex justifyContent="center" align="baseline" mt={2}>
                          <Text
                              ml={2}
                              textTransform="uppercase"
                              fontSize="sm"
                              fontWeight="bold"
                              color="pink.800"
                          >
                              Проверено &bull; Развлечения
                          </Text>
                      </Flex>
                      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" textAlign="center">
                          Modern, Chic Penthouse with Mountain, City & Sea Views
                      </Text>
                      <Flex justifyContent="center" mb={10}>
                          <Link to="/search">
                              <Button variant="contained">Посмотреть на карте</Button>
                          </Link>
                      </Flex>
                  </Box>
              </Link>
          </Grid>
      </div>
    </div>
  );
}
