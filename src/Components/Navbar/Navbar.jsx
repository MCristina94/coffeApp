import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import logo from "../../assets/images/NatureLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { theme } from "../../style/theme";

const Navbar = ({ height, width, backgroundColor, color, ...rest }) => {
  return (
    <Box display="flex" justifyContent="space-between" margin="31px 65px">
      <img src={logo} style={{ height: "40px" }} />
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        sx={{
          width: "350px",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "20px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.colors.caramel200,
            },
            "& .MuiInputBase-input": {
              color: theme.colors.coffee,
            },
          },
        }}
      />
    </Box>
  );
};

export default Navbar;
