import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <>
      <Box>
      <AppBar position="static" sx={{ background: "#fff", boxShadow: "none" }}>
        <Toolbar>
          <Typography 
          variant="h6"
          component="div" 
          sx={{ flexGrow: 1 }}
          textAlign="center"
          >
            &copy; 2023-Now KhaneBetoni | Aryan Salemabadi | 09215531809
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        
        </>
  )
}

export default Footer;