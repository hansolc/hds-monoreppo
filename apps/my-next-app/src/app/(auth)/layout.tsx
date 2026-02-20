import { Box, Card, CardContent, Container } from "@mui/material";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      component={"main"}
      sx={{ minHeight: "100vh", display: "grid", placeItems: "center", p: 2 }}
    >
      <Container maxWidth="sm">
        <Card variant="outlined">
          <CardContent>{children}</CardContent>
        </Card>
      </Container>
    </Box>
  );
}
