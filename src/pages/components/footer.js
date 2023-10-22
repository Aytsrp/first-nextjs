import { Container, Text } from "@mantine/core"
import classes from "@/styles/footer.module.css"

export function FooterSimple() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <img src="assets/logo-horizontal-white.png" height="50"/>
        <Text c="dimmed" size="sm">
          © 2023 Pizza Hut. All rights reserved.
        </Text>
      </Container>
    </div>
  )

}