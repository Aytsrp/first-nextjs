import { Card, Overlay, Button, Text } from "@mantine/core";
import classes from "@/styles/banner.module.css";

import cheesePizza from '../../../public/assets/menu/CheesePizza.png'


export function ImageActionBanner() {
  const pizzaMenu = [
    {
      image: cheesePizza,
      title: "Cheese Pizza",
      description:
        "Your favorite cheese pizza, with your choice of crust covered in classic marinara sauce and topped with gooey mozzarella cheese. It's anything but plain.",
    },
    {
      image: "assets/menu/PepperoniPizza.png",
      title: "Pepperoni Pizza",
      description:
        "You literally can't go wrong with pepperoni and mozzarella cheese. Classic for a reason.",
    },
    {
      image: "assets/menu/SupremePizza.png",
      title: "Supreme Pizza",
      description:
        "This loaded pizza is the perfect choice for family dinner or a lunch with your crew. Includes pepperoni, seasoned pork, beef, mushrooms, green bell peppers and onions.",
    },
    {
      image: "assets/menu/MeatLoversPizza.png",
      title: "Meat Lover's Pizza",
      description:
        "Packed with pepperoni, Italian sausage, ham, bacon, seasoned pork and beef, this pizza is NOT messing around.",
    },
    {
      image: "assets/menu/PepperoniLoversPizza.png",
      title: "Pepperoni Lover's Pizza",
      description:
        "Ever wished your pepperoni pizza had more pepperoni? Of course you did. This oven-hot pizza has 50% more pepperoni than our average pizza pie.",
    },
    {
      image: "assets/menu/VeggieLoversPizza.png",
      title: "Veggie Lover's Pizza",
      description:
        "Pizza is officially a vegetable. This garden delight has all the fresh veggie toppings you love: mushrooms, red onions, green bell peppers, Roma tomatoes and black olives.",
    },
    {
      image: "assets/menu/BackyardBBQChickenPizza.png",
      title: "Backyard BBQ Chicken Pizza",
      description:
        "This BBQ pizza comes topped with grilled chicken, bacon and red onion. Who's the grillmaster now?",
    },
    {
      image: "assets/menu/BuffaloChickenPizza.png",
      title: "Buffalo Chicken Pizza",
      description:
        "We took your favorite food and put it on a pizza. With tangy buffalo sauce, tender chicken and banana peppers, this beautiful masterpiece tastes like a football game feels.",
    },
    {
      image: "assets/menu/HawaiianChickenPizza.png",
      title: "Hawaiian Chicken Pizza",
      description:
        "Give your taste buds a tropical vacation with this amped up Hawaiian pizza. It's got tasty chicken, ham, pineapple AND green peppers.",
    },
  ];

  return (
    <div>
      {pizzaMenu.map((item) => (
        <Card radius="md" className={classes.card} style={{backgroundImage: 'url({$item.image})',}}>
          <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />
          <div className={classes.content}>
            <Text size="lg" fw={700} className={classes.title}>
              {item.title}
            </Text>
            <Text size="sm" className={classes.description}>
              {item.description}
            </Text>
            <Button
              className={classes.action}
              variant="white"
              color="dark"
              size="xs"
            >
              Order Now!
            </Button>
          </div>
        </Card>
      ))}
      ;
    </div>
  );
}
