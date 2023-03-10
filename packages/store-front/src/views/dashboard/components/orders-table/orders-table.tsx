import { OrderInterface } from '@brockhaus/interfaces';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem } from '@mui/material';
// eslint-disable-next-line import/no-named-as-default
import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableMeta, MUIDataTableOptions } from 'mui-datatables';
import React from 'react';

import dataTableConfig from '../../../../config/datatables';
import { useOrderActions } from '../../../../hooks';
import { formatCurrency, formatNumber } from '../../../../libs/format-lib';

export interface OrdersTableProps {
  orders: OrderInterface[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
  const [menuAnchor, setMenuAnchor] = React.useState<{ [key: string]: Element }>({});

  const { updateOrderPayStatus, getOrders } = useOrderActions();

  const updatePayStatusHandler = (order: OrderInterface) => {
    updateOrderPayStatus(order.id, !order.payed, () => {
      getOrders().catch((err) => console.log(err));
    }).catch((err) => console.log(err));
  };

  const menuSelectHandler = (tableMeta: MUIDataTableMeta, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Types are not correct
    const { index } = tableMeta.currentTableData[tableMeta.rowIndex] as unknown as { index: number };
    setMenuAnchor({ [index]: event.currentTarget });
  };
  const getIndex = (tableMeta: MUIDataTableMeta): number => {
    // Types are not correct for version 3.7.7
    const { index } = tableMeta.currentTableData[tableMeta.rowIndex] as unknown as { index: number };
    return index;
  };

  const getOrder = (tableMeta: MUIDataTableMeta): OrderInterface => {
    // Types are not correct for version 3.8.5
    const { index } = tableMeta.currentTableData[tableMeta.rowIndex] as unknown as { index: number };
    return orders[index];
  };

  const options: MUIDataTableOptions = {
    ...dataTableConfig,
    selectableRows: 'none',
    viewColumns: false,
    rowsPerPageOptions: [10, 25, 50, 100],
  };

  const columns: MUIDataTableColumnDef[] = [
    'id',
    'Name',
    'Bestellung',
    'Preis',
    'Bezahlt',
    'Assistent',
    'Guthaben',
    {
      name: 'Aktionen',
      options: {
        filter: false,
        sort: false,
        empty: false,
        // eslint-disable-next-line react/display-name
        customBodyRender: (value: string, tableMeta) => (
          <>
            <IconButton
              type="button"
              size="small"
              aria-label="actions"
              onClick={(event) => {
                menuSelectHandler(tableMeta, event);
              }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchor[getIndex(tableMeta)]}
              keepMounted
              open={!!menuAnchor[getIndex(tableMeta)]}
              onClose={() => setMenuAnchor({})}
            >
              {/*TODO @Emad connect after implementing endpoints*/}
              <MenuItem
                onClick={() => {
                  setMenuAnchor({});
                }}
              >
                Preis festlegen
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setMenuAnchor({});
                  updatePayStatusHandler(getOrder(tableMeta));
                }}
              >
                Bezahlstatus ??ndern
              </MenuItem>
            </Menu>
          </>
        ),
      },
    },
  ];

  const orderList: string[][] = orders.map((order: OrderInterface): string[] => [
    formatNumber(order.id),
    order.customerName,
    order.orderDescription,
    order.orderPrice ? formatCurrency(order.orderPrice) : '',
    order.payed ? 'Ja' : 'Nein',
    order.assistant ? 'Ja' : 'Nein',
    formatCurrency(order.credit),
    `${order.id}`,
  ]);

  return <MUIDataTable columns={columns} data={orderList} title={'Bestellungen'} options={options} />;
};

export default OrdersTable;
