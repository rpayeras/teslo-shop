import { Chip, Grid, Link, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import NextLink from "next/link";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "fullname",
    headerName: "Name",
    width: 300,
    sortable: false,
  },
  {
    field: "paid",
    headerName: "Paid",
    description: "Show info if it was paid",
    width: 200,
    renderCell: (params: any) =>
      params.row.paid ? (
        <Chip color="success" label="Paid" variant="outlined" />
      ) : (
        <Chip color="error" label="Not paid" variant="outlined" />
      ),
  },
  {
    field: "order",
    headerName: "See order",
    description: "Show info if it was paid",
    width: 200,
    renderCell: (params: any) => {
      return (
        <NextLink href="/orders/123124" passHref>
          <Link>See order</Link>
        </NextLink>
      );
    },
    sortable: false,
  },
];

const rows = [
  {
    id: 1,
    fullname: "Roberto Payeras",
    paid: true,
  },
  {
    id: 2,
    fullname: "Roberto Payeras 2",
    paid: true,
  },
  {
    id: 3,
    fullname: "Rpnnn pas",
    paid: true,
  },
  {
    id: 4,
    fullname: "Nati pali",
    paid: true,
  },
  {
    id: 5,
    fullname: "No flipes",
    paid: false,
  },
  {
    id: 6,
    fullname: "Material",
    paid: false,
  },
];

const HistoryPage = () => {
  return (
    <ShopLayout title="Order history" pageDescription="Orders" imageFullUrl="">
      <Typography variant="h1" component="h1">
        Order history
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
