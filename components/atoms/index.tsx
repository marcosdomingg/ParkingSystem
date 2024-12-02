"use client";
import { TextField, styled } from "@mui/material";

export interface CustomTextFieldProps {
  alternate?: number;
}

const CustomTextField = styled(TextField)<CustomTextFieldProps>(
  ({ alternate }) => ({
    backgroundColor: alternate ? "#252525" : "transparent",
    color: alternate ? "#252525" : "transparent",

    "& .MuiOutlinedInput-root": {
      backgroundColor: alternate ? "#252525" : "transparent",
      "& fieldset": {
        borderColor: alternate ? "#252525" : "white",
      },
      "&:hover fieldset": {
        borderColor: alternate ? "#252525" : "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#77c043",
      },
    },

    "& .MuiFormLabel-root": {
      color: alternate ? "#ffffff" : "white",
      "&.Mui-focused": {
        color: alternate ? "#ffffff" : "white",
      },
    },

    "& .MuiInputBase-input": {
      color: alternate ? "#ffffff" : "white",
    },
  })
);

export default CustomTextField;
