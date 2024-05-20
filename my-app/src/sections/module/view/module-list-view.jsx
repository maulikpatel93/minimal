import { useState, useEffect, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
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
import ModuleTableToolbar from '../module-table-toolbar';
import ModuleTableFiltersResult from '../module-table-filters-result';
// import {
//   RenderCellStock,
//   RenderCellPrice,
//   RenderCellPublish,
//   RenderCellModule,
//   RenderCellCreatedAt,
// } from '../module-table-row';
import { ModuleDeleteApi, ModuleDetailApi, ModuleListApi } from 'src/redux/slices/moduleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Tab, Tabs, TextField, Typography, alpha } from '@mui/material';
import TableHeader from './table-header';
import { useTranslation } from 'react-i18next';
import { isEqual } from 'lodash';
import { RenderCellCreatedAt, RenderCellStatus } from '../module-table-row';

// ----------------------------------------------------------------------

const STATUS_OPTIONS = [
  { value: "all", label: 'All' },
  { value: 1, label: 'Active' },
  { value: 0, label: 'InActive' },
];

const STATUS_OPTIONS_INLINE = [
  { value: 1, label: 'Active' },
  { value: 0, label: 'InActive' },
];

const defaultFilters = {
  q: '',
  status: { value: "all", label: 'All' },
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

  // const [status, setStatus] = useState('');
  const [pageSize, setPageSize] = useState(1);
  const [page, setPage] = useState(1);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [sort, setSort] = useState([]);
  const [filter, setFilter] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);

  const dispatch = useDispatch();
  const moduleList = useSelector((state) => state.module.list);
  const loadingList = useSelector((state) => state.module.loading.list);
  const totalRows = moduleList ? moduleList.total : 0;
  const currentPage = moduleList ? moduleList.current_page : 1;

  useEffect(() => {
    dispatch(
      ModuleListApi({
        limit: pageSize,
        page: page,
        sort: sort,
        filter: filter,
        filters: filters,
      })
    );
  }, [dispatch, pageSize, page, sort, filters, filter]);


  const canReset = !isEqual(defaultFilters, filters);

  const handleFilters = useCallback((name, value) => {
    setPage(1)
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const handleEditRow = useCallback(
    (id) => {
      dispatch(ModuleDetailApi({ id: id })).then((action) => {
        if (action.meta.requestStatus === 'fulfilled') {
          router.push(paths.dashboard.roleManagement.module.edit(id));
        } else if (action.meta.requestStatus === 'rejected') {
          enqueueSnackbar(t(`error-messages.no-data-record`));
        }
      });
    },
    [router]
  );

  const columns = [
    {
      field: 'title',
      headerName: t(`role-management.modules.columns.title`),
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
      headerName: t(`role-management.modules.columns.route`),
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
      headerName: t(`role-management.modules.columns.icon`),
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
      headerName: t(`role-management.modules.columns.panel`),
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
      headerName: t(`role-management.modules.columns.status`),
      flex: 1,
      width: 50,
      sortable: false,
      filterable: false,
      type: 'singleSelect',
      editable: true,
      valueOptions: STATUS_OPTIONS_INLINE,
      onchange: (e) => {
        console.log('eddd', e);
      },
      renderCell: (params) => <RenderCellStatus params={params} />,
    },
    {
      field: 'created_at',
      headerName: 'Create at',
      width: 160,
      renderCell: (params) => <RenderCellCreatedAt params={params} />,
    },
    {
      type: 'actions',
      field: 'actions',
      headerName: t(`role-management.modules.columns.actions`),
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
          label={t(`role-management.modules.button.edit`)}
          onClick={() => handleEditRow(params.row.id)}
        />,
        <GridActionsCellItem
          showInMenu
          icon={<Iconify icon="solar:trash-bin-trash-bold" />}
          label={t(`role-management.modules.button.delete`)}
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

  console.log(filters);
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
          heading={t(`role-management.modules.list`)}
          links={[
            { name: t(`dashboard.title`), href: paths.dashboard.root },
            {
              name: t(`role-management.modules.title`),
              href: paths.dashboard.roleManagement.module.list,
            },
            { name: t(`role-management.modules.list`) },
          ]}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.roleManagement.module.new}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
              {t(`role-management.modules.button.new`)}
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
          <ModuleTableToolbar
            filters={filters}
            onFilters={handleFilters}
            statusOptions={STATUS_OPTIONS}
          />
          {canReset && (
            <ModuleTableFiltersResult
              filters={filters}
              onFilters={handleFilters}
              //
              onResetFilters={handleResetFilters}
              //
              // results={dataFiltered.length}
              sx={{ p: 2.5, pt: 0 }}
            />
          )}
          <DataGrid
            checkboxSelection
            disableRowSelectionOnClick
            rows={moduleList && moduleList?.data ? moduleList.data : []}
            columns={columns}
            loading={loadingList}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
            // getRowHeight={() => '150'}
            autoHeight
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
              const cNewPage = newPageSize.page + 1;
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
              setPage(1);
              setFilter(newOnFilterModelChange);
            }}
            slots={{
              toolbar: () => (
                <>
                  <GridToolbarContainer mt="0">
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
                          {t(`role-management.modules.button.delete`)} ({selectedRowIds.length})
                        </Button>
                      )}
                      <GridToolbarColumnsButton />
                      <GridToolbarDensitySelector />
                      <GridToolbarFilterButton />
                    </Stack>
                  </GridToolbarContainer>
                </>
              ),
              noRowsOverlay: () => <EmptyContent title={t(`error-messages.no-data`)} />,
              noResultsOverlay: () => <EmptyContent title={t(`error-messages.no-results-found`)} />,
            }}
            slotProps={{
              toolbar: {
                showQuickFilter: false,
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
        title={t(`role-management.modules.button.delete`)}
        content={
          <>
            <p dangerouslySetInnerHTML={{ __html: t(`role-management.modules.messages.delete-confirmation`, { count: selectedRowIds.length }) }} />
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
                      limit: pageSize,
                      page: 1
                    })
                  ).then(() => {
                    const message =
                      action.payload && action.payload.data && action.payload.data.message
                        ? action.payload.data.message
                        : '';
                    enqueueSnackbar(message || t(`success-messages.deleted`));
                  });
                } else if (action.meta.requestStatus === 'rejected') {
                  const message =
                    action.payload && action.payload.data && action.payload.data.message
                      ? action.payload.data.message
                      : '';
                  enqueueSnackbar(message || t(`error-messages.error`), { variant: 'error' });
                }
              });
              confirmRows.onFalse();
            }}
          >
            {t(`role-management.modules.button.delete`)}
          </Button>
        }
      />
    </>
  );
}
