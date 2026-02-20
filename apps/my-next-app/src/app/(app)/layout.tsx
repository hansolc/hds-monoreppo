import {
  AppBar,
  Container,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "@/components/Link";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <AppBar position="static">
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">My App</Typography>
          <List sx={{ display: "flex" }}>
            {["products", "about"].map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  href={"/products"}
                  component={Link}
                >
                  {item}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Container>
      </AppBar>
      <Container maxWidth="xl" sx={{ py: 2 }} component={"main"}>
        {children}
      </Container>
    </Stack>
  );
}
