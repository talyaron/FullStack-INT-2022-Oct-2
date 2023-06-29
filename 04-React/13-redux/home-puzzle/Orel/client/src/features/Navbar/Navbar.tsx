// import { AddImage } from "../ImgBox/ImgBox";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AddImage } from "../images/AddImage";
import LinkSrc from '../LinkSrc/LinkSrc';
// import ControllableStates from '../Search/Search';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{
                  display:"flex" ,
                 justifyContent:"space-between"
                }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{
                        display: {
                            md: "flex",
                            sm: "none",
                            xs: "none",
                           
                        },
    
                        flexGrow: 4
                    }}>
                        התמונות שלי
                    </Typography>
                    <Box sx={{ 
                        display: "flex",
                         alignItems: "center" }}>
                        <AddImage />
                        <LinkSrc />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}