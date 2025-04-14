import React from "react";
import { Box, SelectChangeEvent, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

import { useIntl } from "react-intl";



export const TimePeriodSelection: React.FC<{ period: number, setPeriod: (value: number) => void }> = ({ period, setPeriod }) => {
  const intl = useIntl();
  const handleChange = (event: SelectChangeEvent<number>) => {
    setPeriod(event.target.value as number);
  };


  return (
    <Box width="100%" mb={3} display='flex'>
      <FormControl fullWidth>
        <InputLabel>{intl.formatMessage({ id: 'events.filter' })}</InputLabel>
        <Select
          value={period}
          label={intl.formatMessage({ id: 'events.filter' })}
          onChange={handleChange}
        >
          <MenuItem value={1}>{intl.formatMessage({ id: 'events.today' })}</MenuItem>
          <MenuItem value={7}>{intl.formatMessage({ id: 'events.nextSevenDays' })}</MenuItem>
          <MenuItem value={14}>{intl.formatMessage({ id: 'events.nextFourteenDays' })}</MenuItem>
          <MenuItem value={30}>{intl.formatMessage({ id: 'events.nextThirtyDays' })}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}