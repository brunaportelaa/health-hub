import { styled } from "@mui/material/styles";
import { FormControl, Select as MUISelect, MenuItem } from "@mui/material";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(1),
  },
  "& .MuiInputBase-input": {
    borderRadius: 8,
    position: "relative",
    backgroundColor: "#F5F5F5",
    fontSize: 16,
    height: 40,
    padding: "10px 26px 10px 12px",
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 8,
      borderColor: "#000",
    },
  },
}));

export default function Select({
  label,
  id,
  value,
  onChange,
  options,
  required,
}) {
  return (
    <FormControl fullWidth variant="filled">
      <label id={`${id}-label`}>{label}</label>
      <MUISelect
        labelId={`${id}-label`}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        input={<BootstrapInput />}
        required={required}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "#F5F5F5",
              "& .MuiMenuItem-root": {
                fontSize: 16,
              },
            },
          },
        }}
      >
        {options.map((o) => (
          <MenuItem value={o.value} key={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
}
export { BootstrapInput };
