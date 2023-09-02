"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement, ReactNode } from "react";
import { useRouter as useNextRouter, usePathname } from "next/navigation";
import {
  AppBar,
  Grid,
  Typography,
  useScrollTrigger,
  Slide,
  Button,
  List,
  ListItem,
  Menu,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { NextPage } from "next";

interface HeaderProps {
  window?: () => Window;
  children: ReactElement | ReactNode | any;
}

type Router = ReturnType<typeof useNextRouter>;

function HideOnScroll(props: HeaderProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header: NextPage<HeaderProps> = ({ children }) => {
  const router: Router = useNextRouter();

  const currentPath = usePathname();

  const [scroll, setScroll] = useState<number>(0);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={{
            background: scroll > 30 || currentPath !== "/" ? "#fff" : "none",
            boxShadow:
              scroll > 30 || currentPath !== "/"
                ? "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"
                : "none",
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item p={1}>
              <Image
                src="/images/logo/2.jpg"
                alt="logo"
                width={70}
                height={70}
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <Grid item>
              <List>
                <Grid container alignItems="center">
                  <Grid
                    item
                    sx={{ display: { md: "none", sm: "block", xs: "block" } }}
                  >
                    <ListItem>
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        sx={{color:scroll > 30 || currentPath !== "/" ? "black" : "#fff"}}
                      >
                        <MenuIcon />
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <Link
                          href="/"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <MenuItem onClick={handleClose}>
                            <Typography fontWeight="bold" variant="h6">
                              خانه
                            </Typography>
                          </MenuItem>
                        </Link>
                        <Link
                          href="/menu"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <MenuItem onClick={handleClose}>
                            <Typography fontWeight="bold" variant="h6">
                              پروژه ها
                            </Typography>
                          </MenuItem>
                        </Link>
                        <Link
                          href="/categorys"
                          style={{ textDecoration: "none", color: "black" }}
                        ></Link>
                        <Link
                          href="/"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <MenuItem onClick={handleClose}>
                            <Typography fontWeight="bold" variant="h6">
                              تماس با ما
                            </Typography>
                          </MenuItem>
                        </Link>
                      </Menu>
                    </ListItem>
                  </Grid>
                  <Grid
                    item
                    sx={{ display: { md: "block", sm: "none", xs: "none" } }}
                  >
                    <ListItem>
                      <Link
                        href="/"
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        <Typography
                          fontWeight="bold"
                          variant="h6"
                          color={
                            scroll > 30 || currentPath !== "/"
                              ? "black"
                              : "white"
                          }
                        >
                          تماس با ما
                        </Typography>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid
                    item
                    sx={{ display: { md: "block", sm: "none", xs: "none" } }}
                  >
                  </Grid>
                  <Grid
                    item
                    sx={{ display: { md: "block", sm: "none", xs: "none" } }}
                  >
                    <ListItem>
                      <Link
                        href="/project"
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        <Typography
                          fontWeight="bold"
                          variant="h6"
                          color={
                            scroll > 30 || currentPath !== "/"
                              ? "black"
                              : "white"
                          }
                        >
                        پروژه ها
                        </Typography>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid
                    item
                    sx={{ display: { md: "block", sm: "none", xs: "none" } }}
                  ></Grid>
                  <Grid
                    item
                    sx={{ display: { md: "block", sm: "none", xs: "none" } }}
                  >
                    <ListItem>
                      <Link
                        href="/"
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        <Typography
                          fontWeight="bold"
                          variant="h6"
                          color={
                            scroll > 30 || currentPath !== "/"
                              ? "black"
                              : "white"
                          }
                        >
                          خانه
                        </Typography>
                      </Link>
                    </ListItem>
                  </Grid>
                  <Grid
                    item
                    sx={{ display: { md: "block", sm: "none", xs: "none" } }}
                  ></Grid>
                </Grid>
              </List>
            </Grid>
          </Grid>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
export default Header;
