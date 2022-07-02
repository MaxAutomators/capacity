import { DetailsList, Link, DetailsListLayoutMode, SelectionMode } from "@fluentui/react";


const planningItems = [
  {
    name: "Amin Chirazi",
    month0: 3,
    month1: 4,
    month2: 3,
    month3: 4,
    month4: 3,
    month5: 4,

  },
  {
    name: 'John Doe',
    month0: 8,
    month1: 3,
    month2: 1,
    month3: 4,
    month4: 3,
    month5: 4,
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


export const OverallTable = () => {

  return (<>
    <DetailsList
      columns={planningColumns}
      items={planningItems}
      onRenderItemColumn={renderItemColumn}
      selectionMode={SelectionMode.none}
      layoutMode={DetailsListLayoutMode.justified}
      isHeaderVisible={false}
    />
  </>);
};

const spanStyleRed = {
  color: "white",
  fontWeight: "bold",
  background: "#B64B36",
  textAlign: "center"
}

const spanStyleGreen = {
  color: "white",
  fontWeight: "bold",
  background: "#44a578",
  textAlign: "center"
}

const spanStyleOrange = {
  color: "white",
  fontWeight: "bold",
  background: "#e6953f",
  textAlign: "center"
}

function renderItemColumn(item, index, column) {
  const fieldContent = item[column.fieldName];

  switch (column.key) {

    case 'name':
      return <Link href="#">{fieldContent}</Link>;

    default:
      return (
        <center>{fieldContent}</center>
      );

  }

};
