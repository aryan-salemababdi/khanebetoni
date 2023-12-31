import Link from "next/link";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from '@mui/icons-material/Email';
import "./Contactus.css";

const Contactus = () => {
  const mystyle = {
    backgroundImage: `url(images/bg-contactus.webp)`,
    margin: "55px 0px",
    height: "50vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "#fff",
    opacity: 1,
  };

  return (
    <Box>
      <Typography
        textAlign="center"
        color="#EA6B00"
        fontWeight="bold"
        variant="h6"
      >
        راه های ارتباطی
      </Typography>
      <Box
        sx={mystyle}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Link
          href="https://instagram.com/khane_betoni?igshid=MmU2YjMzNjRlOQ=="
          className="contact-link"
        >
          <div className="contact-tooltip-instagram">@khane_betoni</div>
          <InstagramIcon sx={{ fontSize: "50px" }} />
        </Link>
        <Box className="contact-link">
          <div className="contact-tooltip">
            09121597912
            <br />
            09016442595
          </div>
          <StayPrimaryPortraitIcon sx={{ fontSize: "50px" }} />
        </Box>
        <Box className="contact-link">
          <div className="contact-tooltip-email">khanebetoni@gmail.com</div>
          <EmailIcon sx={{ fontSize: "50px" }} />
        </Box>
        <Box className="contact-link">
          <div className="contact-tooltip-telephone">02177487165</div>
          <LocalPhoneIcon sx={{ fontSize: "50px" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Contactus;
