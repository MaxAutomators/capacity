import { DetailsList, Label, SelectionMode } from "@fluentui/react";
const planningItems = [
  {
    name: "Utilization",
    month0: "80",
    month1: "80",
    month2: "30",
    month3: "95",
    month4: "35",
    month5: "50",
    month6: "45",
    month7: "100",
    month8: "75",
    month9: "70",
    month0: "60",
    month10: "30",
    month11: "50"
  }

]

const planningColumns = [
  {
    key: 'name',
    name: 'Name',
    ariaLabel: 'Name of the Consultant',
    fieldName: 'name',
    minWidth: 200,
    maxWidth: 200,
  },
  {
    key: 'month0',
    name: 'Jan',
    ariaLabel: '',
    fieldName: 'month0',
    minWidth: 150,
    maxWidth: 150,
  },
  {
    key: 'month1',
    name: 'Feb',
    ariaLabel: '',
    fieldName: 'month1',
    minWidth: 150,
    maxWidth: 150,
  }, {
    key: 'month2',
    name: 'Mar',
    ariaLabel: '',
    fieldName: 'month2',
    minWidth: 150,
    maxWidth: 150,
  }, {
    key: 'month3',
    name: 'Apr',
    ariaLabel: '',
    fieldName: 'month3',
    minWidth: 150,
    maxWidth: 150,
  }, {
    key: 'month4',
    name: 'May',
    ariaLabel: '',
    fieldName: 'month4',
    minWidth: 150,
    maxWidth: 150,
  }, {
    key: 'month05',
    name: 'Jun',
    ariaLabel: '',
    fieldName: 'month5',
    minWidth: 150,
    maxWidth: 150,
  }
];

const renderItemColumn = (item, index, column) => {
  switch (column.key) {

    case 'name': { return item[column.fieldName]; }

    default: {
      if (item[column.fieldName] <= 50)
        return <Label style={{ background: '#B64B36', color: 'white', textAlign: 'center' }}> {item[column.fieldName]}%</Label>
      if (item[column.fieldName] < 90)
        return <Label style={{ background: '#E6953F', color: 'white', textAlign: 'center' }}> {item[column.fieldName]}%</Label>
      if (item[column.fieldName] >= 90)
        return <Label style={{ background: '#44A578', color: 'white', textAlign: 'center' }}> {item[column.fieldName]}%</Label>
    }
  }
}

export const UtilizationTable = () => {

  return (<>
    <DetailsList
      columns={planningColumns}
      items={planningItems}
      selectionMode={SelectionMode.none}
      // layoutMode={DetailsListLayoutMode.justified}
      isHeaderVisible={true}
      onRenderItemColumn={renderItemColumn}
      
    />
  </>);
};
