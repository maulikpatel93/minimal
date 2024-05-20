import isEqual from 'lodash/isEqual';
import { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {
  DataGrid,
  GridToolbarExport,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import EmptyContent from 'src/components/empty-content';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { Icon } from '@iconify/react';
// import ModuleTableToolbar from '../module-table-toolbar';
// import ModuleTableFiltersResult from '../module-table-filters-result';
// import {
//   RenderCellStock,
//   RenderCellPrice,
//   RenderCellPublish,
//   RenderCellModule,
//   RenderCellCreatedAt,
// } from '../module-table-row';
import { ModuleDeleteApi, ModuleDetailApi, ModuleListApi } from 'src/redux/slices/moduleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Typography } from '@mui/material';
import TableHeader from './table-header';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

const PUBLISH_OPTIONS = [
  { value: 'published', label: 'Published' },
  { value: 'draft', label: 'Draft' },
];

const defaultFilters = {
  publish: [],
  stock: [],
};

const HIDE_COLUMNS = {
  id: false,
};
const HIDE_COLUMNS_TOGGLABLE = ['id', 'actions'];
// ----------------------------------------------------------------------

export default function ModuleListView() {
  const { enqueueSnackbar } = useSnackbar();

  const confirmRows = useBoolean();

  const router = useRouter();

  const settings = useSettingsContext();
  const { t } = useTranslation();

  const [columnVisibilityModel, setColumnVisibilityModel] = useState(HIDE_COLUMNS);
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [sort, setSort] = useState([]);
  const [filter, setFilter] = useState([]);
  const [addUserOpen, setAddUserOpen] = useState(false);

  const dispatch = useDispatch();
  const moduleList = useSelector((state) => state.module.list);
  const loadingList = useSelector((state) => state.module.loading.list);
  const totalRows = moduleList ? moduleList.total : 0;
  const currentPage = moduleList ? moduleList.current_page : 1;

  useEffect(() => {
    dispatch(
      ModuleListApi({
        q: value,
        limit: pageSize,
        page: page + 1,
        sort: sort,
        filter: filter,
      })
    );
  }, [dispatch, value, pageSize, page, sort, filter]);

  const handleFilter = useCallback((val) => {
    setValue(val);
  }, []);

  const handleStatusChange = useCallback((e) => {
    setStatus(e.target.value);
  }, []);

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen);

  // useEffect(() => {
  //   if (modules.length) {
  //     setTableData(modules);
  //   }
  // }, [modules]);

  // const dataFiltered = applyFilter({
  //   inputData: tableData,
  //   filters,
  // });

  // const canReset = !isEqual(defaultFilters, filters);

  // const handleFilters = useCallback((name, value) => {
  //   setFilters((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // }, []);

  // const handleResetFilters = useCallback(() => {
  //   setFilters(defaultFilters);
  // }, []);

  // const handleDeleteRow = useCallback(
  //   (id) => {
  //     const deleteRow = tableData.filter((row) => row.id !== id);

  //     enqueueSnackbar('Delete success!');

  //     setTableData(deleteRow);
  //   },
  //   [enqueueSnackbar, tableData]
  // );

  const handleEditRow = useCallback(
    (id) => {
      dispatch(ModuleDetailApi({ id: id })).then((action) => {
        if (action.meta.requestStatus === 'fulfilled') {
          router.push(paths.dashboard.roleManagement.module.edit(id));
        } else if (action.meta.requestStatus === 'rejected') {
          enqueueSnackbar(t('Data not found'));
        }
      });
    },
    [router]
  );

  const columns = [
    {
      field: 'title',
      headerName: t('title'),
      flex: 1,
      minWidth: 180,
      hideable: false,
      renderCell: (params) => (
        <Stack spacing={2} direction="row" alignItems="center" sx={{ minWidth: 0 }}>
          <Typography component="span" variant="body2" noWrap>
            {params.row.title}
          </Typography>
        </Stack>
      ),
    },
    {
      field: 'route',
      headerName: t('route'),
      flex: 1,
      minWidth: 120,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="icon">
            {row.route}
          </Typography>
        );
      },
    },
    {
      field: 'icon',
      headerName: t('icon'),
      width: 120,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="body2">
            {row.icon}
          </Typography>
        );
      },
    },
    {
      field: 'panel',
      headerName: t('panel'),
      flex: 1,
      minWidth: 120,
      renderCell: ({ row }) => {
        return (
          <Typography noWrap variant="icon">
            {row.panel}
          </Typography>
        );
      },
    },
    {
      field: 'is_active',
      headerName: t('status'),
      flex: 1,
      width: 50,
      renderCell: ({ row }) => {
        // return row.is_active;
        return (
          <>
            {row.is_active === 1 ? (
              <Icon icon="bi:check-circle-fill" style={{ color: '#198754' }} />
            ) : (
              <Icon icon="bi:x-circle-fill" style={{ color: '#dc3545' }} />
            )}
          </>
        );
        // return (
        //     <CustomChip
        //         skin="light"
        //         size="small"
        //         label={row.is_active == 1 ? "Active" : "Inactive"}
        //         color={
        //             listStatusObj[
        //             row.is_active == 1 ? "active" : "inactive"
        //             ]
        //         }
        //         sx={{
        //             textTransform: "capitalize",
        //             "& .MuiChip-label": { lineHeight: "18px" },
        //         }}
        //     />
        // );
      },
    },
    {
      type: 'actions',
      field: 'actions',
      headerName: t('actions'),
      align: 'right',
      headerAlign: 'right',
      width: 80,
      flex: 1,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      getActions: (params) => [
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:pen-bold" />}
          label={t('edit')}
          onClick={() => handleEditRow(params.row.id)}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:trash-bin-trash-bold" />}
          label={t('delete')}
          onClick={(e) => {
            const id = [params.row.id];
            setSelectedRowIds(id);
            confirmRows.onTrue();
          }}
          sx={{ color: 'error.main' }}
        />,
      ],
    },
  ];

  const getTogglableColumns = () =>
    columns
      .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
      .map((column) => column.field);

  return (
    <>
      <Container
        maxWidth={settings.themeStretch ? false : 'lg'}
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CustomBreadcrumbs
          heading="List"
          links={[
            { name: t('dashboard'), href: paths.dashboard.root },
            {
              name: t('module'),
              href: paths.dashboard.roleManagement.module.list,
            },
            { name: t('list') },
          ]}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.roleManagement.module.new}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
              {t('new module')}
            </Button>
          }
          sx={{
            mb: {
              xs: 3,
              md: 5,
            },
          }}
        />

        <Card
          sx={{
            width: '100%',
            height: { xs: 800, md: 2 },
            flexGrow: { md: 1 },
            display: { md: 'flex' },
            flexDirection: { md: 'column' },
          }}
        >
          <TableHeader handleFilter={handleFilter} value={value} />
          <DataGrid
            checkboxSelection
            disableRowSelectionOnClick
            rows={moduleList && moduleList?.data ? moduleList.data : []}
            columns={columns}
            loading={loadingList}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
            getRowHeight={() => '150'}
            filterMode="server"
            filterDebounceMs={150}
            sortingMode="server"
            paginationMode="server"
            pageSizeOptions={[10, 25, 50]}
            pagination
            pageSize={pageSize} // Number of rows per page
            rowCount={totalRows}
            paginationModel={{
              page: currentPage - 1,
              pageSize: pageSize,
            }}
            rowSelectionModel={selectedRowIds}
            onPaginationModelChange={(newPageSize) => {
              const cNewPage = newPageSize.page;
              const cPageSize = newPageSize.pageSize;
              setPageSize(cPageSize);
              setPage(cNewPage);
            }}
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setSelectedRowIds(newRowSelectionModel);
            }}
            onSortModelChange={(newOnSortModelChange) => {
              setSort(newOnSortModelChange);
            }}
            onFilterModelChange={(newOnFilterModelChange) => {
              setFilter(newOnFilterModelChange);
            }}
            slots={{
              toolbar: () => (
                <>
                  <GridToolbarContainer mt="0">
                    {/* <GridToolbarQuickFilter debounceMs={150} /> */}

                    <Box sx={{ flexGrow: 1 }} />

                    <Stack
                      spacing={1}
                      flexGrow={1}
                      direction="row"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      {!!selectedRowIds.length && (
                        <Button
                          size="small"
                          color="error"
                          startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
                          onClick={confirmRows.onTrue}
                        >
                          Delete ({selectedRowIds.length})
                        </Button>
                      )}

                      <GridToolbarColumnsButton />
                      {/* <GridToolbarFilterButton /> */}
                      <GridToolbarDensitySelector />
                      <GridToolbarExport />
                    </Stack>
                  </GridToolbarContainer>
                </>
              ),
              noRowsOverlay: () => <EmptyContent title="No Data" />,
              noResultsOverlay: () => <EmptyContent title="No results found" />,
            }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
              columnsPanel: {
                getTogglableColumns,
              },
            }}
          />
        </Card>
      </Container>

      <ConfirmDialog
        open={confirmRows.value}
        onClose={confirmRows.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {selectedRowIds.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              dispatch(ModuleDeleteApi(selectedRowIds)).then((action) => {
                if (action.meta.requestStatus === 'fulfilled') {
                  dispatch(
                    ModuleListApi({
                      q: value,
                      limit: pageSize,
                      page: page,
                      sort: sort,
                      filter: filter,
                    })
                  ).then(() => {
                    const message =
                      action.payload && action.payload.data && action.payload.data.message
                        ? action.payload.data.message
                        : '';
                    enqueueSnackbar(message || 'Successfully deleted');
                  });
                } else if (action.meta.requestStatus === 'rejected') {
                  const message =
                    action.payload && action.payload.data && action.payload.data.message
                      ? action.payload.data.message
                      : '';
                  enqueueSnackbar(message || 'Something went wrong', { variant: 'error' });
                }
              });
              confirmRows.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}
