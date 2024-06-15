import PropTypes from 'prop-types';
import { useCallback } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
// components
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { OpenModuleImportToolbar } from 'src/redux/slices/moduleSlice';
import { openModal } from 'src/redux/slices/commonSlice';

// ----------------------------------------------------------------------

export default function ModuleTableToolbar({ filters, onFilters, statusOptions }) {
  const popover = usePopover();

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleFilterName = useCallback(
    (event) => {
      onFilters('q', event.target.value);
    },
    [onFilters]
  );

  const handleFilterStatus = useCallback(
    (event) => {
      const selectedOption = event.target.value;
      onFilters('status', selectedOption);
    },
    [onFilters]
  );
  return (
    <>
      <Stack
        spacing={2}
        alignItems={{ xs: 'flex-end', md: 'center' }}
        direction={{
          xs: 'column',
          md: 'row',
        }}
        sx={{
          p: 2.5,
          pr: { xs: 2.5, md: 1 },
        }}
      >
        <FormControl
          sx={{
            flexShrink: 0,
            width: { xs: 1, md: 200 },
          }}
        >
          <InputLabel>{t(`status`)}</InputLabel>

          <Select
            value={filters.status}
            onChange={handleFilterStatus}
            input={<OutlinedInput label={t(`status`)} />}
            renderValue={(selected) => {
              const option = statusOptions.find(opt => opt.value === selected.value);
              return option ? option.label : '';
            }}
            MenuProps={{
              PaperProps: {
                sx: { maxHeight: 240 },
              },
            }}
          >
            {statusOptions.map((option) => (
              <MenuItem key={option.value} value={option}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack direction="row" alignItems="center" spacing={2} flexGrow={1} sx={{ width: 1 }}>
          <TextField
            fullWidth
            value={filters.q}
            onChange={handleFilterName}
            placeholder={t(`search`)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />

          <IconButton onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </Stack>
      </Stack>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:printer-minimalistic-bold" />
          {t(`print`)}
        </MenuItem>

        <MenuItem
          onClick={() => {
            dispatch(openModal({title:"Import Module",description:"Upload a file or export file file type must be excell",modalFrom:"module_list_view"}));
          }}
        >
          <Iconify icon="solar:import-bold" />
          {t(`import`)}
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
          }}
        >
          <Iconify icon="solar:export-bold" />
          {t(`export`)}
        </MenuItem>
      </CustomPopover>
    </>
  );
}

ModuleTableToolbar.propTypes = {
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  statusOptions: PropTypes.array,
};
