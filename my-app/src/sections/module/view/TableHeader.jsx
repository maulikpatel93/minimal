// ** MUI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';

const TableHeader = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  // ** Props
  // const { handleFilter, toggle, value, selectedRows } = props
  const { handleFilter, value } = props;
  // const [openDialog, setOpenDialog] = useState(false);
  // const [selectedValue, setSelectedValue] = useState('');
  // const handleChange = (event) => {
  //     const optvalue = event.target.value;
  //     setSelectedValue(optvalue);
  //     if (optvalue) {
  //         setOpenDialog(true);
  //     }
  // }

  // const handleCancelDelete = () => {
  //     setSelectedValue('Actions');
  //     setOpenDialog(false);
  // };

  // const handleConfirmDelete = () => {
  //     if (selectedValue == "Delete") {
  //         dispatch(ModuleDeleteApi({ ids: selectedRows })).then(action => {
  //             if (action.meta.requestStatus == "fulfilled") {
  //                 toast.success((t) => (
  //                     <div onClick={() => toast.dismiss(t.id)}>
  //                         Delete Successfully.
  //                     </div>
  //                 ), {
  //                     position: 'bottom-center',
  //                     border: `1px solid ${theme.palette.success.main}`,
  //                     cursor: 'pointer',
  //                 })
  //             }
  //         });
  //     } else if (selectedValue == "Active" || selectedValue == "Inactive") {
  //         dispatch(ModuleUpdateApi({ ids: selectedRows, is_active: selectedValue == "Active" ? 1 : 0, apiCall: 'status' }))
  //             .then(action => {
  //                 if (action.meta.requestStatus == "fulfilled") {
  //                     const msg = action.payload.apiCall == "status" ? action.payload.status : "Updated";
  //                     toast.success((t) => (
  //                         <div onClick={() => toast.dismiss(t.id)}>
  //                             {msg} Successfully.
  //                         </div>
  //                     ), {
  //                         position: 'bottom-center',
  //                         style: {
  //                             padding: '16px',
  //                             border: `1px solid ${theme.palette.success.main}`,
  //                             cursor: 'pointer',
  //                         },
  //                     })
  //                 }
  //             });
  //     }
  //     setSelectedValue('Actions');
  //     setOpenDialog(false);
  // };
  return (
    <>
      <TextField
          size="small"
          value={value}
          sx={{ mr: 6, mb: 2 }}
          placeholder="Search User"
          onChange={(e) => handleFilter(e.target.value)}
        />
    </>
  );
};

export default TableHeader;
