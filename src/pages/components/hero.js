import { Container, Title, Text, Button } from '@mantine/core';
import classes from '@/styles/hero.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Can't Outpizza Me
            </Title>

            <Text className={classes.description} mt={30}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: '#040404', to: '#040404' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Order Now!
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}