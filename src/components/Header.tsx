import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link as MuiLink,
} from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ width: "100%", top: 0, left: 0, backgroundColor: "#8015c7" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <MuiLink href="/" color="inherit" sx={{ textDecoration: "none" }}>
          <Typography variant="h6" component="div">
            Digit
          </Typography>
        </MuiLink>
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <MuiLink href="/" sx={{ margin: "0 20px", textDecoration: "none" }}>
            Home
          </MuiLink>
          <MuiLink
            href="/about"
            sx={{ margin: "0 20px", textDecoration: "none" }}
          >
            O nama
          </MuiLink>
          <MuiLink
            href="/jobs"
            sx={{ margin: "0 20px", textDecoration: "none" }}
          >
            Posao
          </MuiLink>
          <MuiLink
            href="/news"
            sx={{ margin: "0 20px", textDecoration: "none" }}
          >
            Novosti
          </MuiLink>
          <MuiLink
            href="/contact"
            sx={{ margin: "0 20px", textDecoration: "none" }}
          >
            Kontakt
          </MuiLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
