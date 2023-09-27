import {
  DatePicker as DP,
  LocalizationProvider,
  ptBR,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormControl } from "@mui/material";
import "dayjs/locale/pt-br.js";

export default function DatePicker({ label, value, onChange }) {
  return (
    <FormControl fullWidth>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale="pt-br"
        localeText={
          ptBR.components.MuiLocalizationProvider.defaultProps.localeText
        }
      >
        <DP
          value={value}
          label={label}
          onChange={onChange}
          InputProps={{
            sx: { "&.MuiInputBase-root": { backgroundColor: "#F5F5F5" } },
          }}
        />
      </LocalizationProvider>
    </FormControl>
  );
}
