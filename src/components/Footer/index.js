import { GitHub } from "@mui/icons-material";
import { Container, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Container
      sx={{ justifyContent: "space-between", display: "flex", padding: 5 }}
    >
      <Typography sx={{ display: "flex" }}>
        This website is created by
        {
          <Typography color={"primary"}>
            &nbsp;Jarupak Srisuchat&nbsp;
          </Typography>
        }
        using React.js
      </Typography>
      <>
        <Link href="https://github.com/ppenter" target={"_blank"}>
          <GitHub />
        </Link>
      </>
    </Container>
  );
};
