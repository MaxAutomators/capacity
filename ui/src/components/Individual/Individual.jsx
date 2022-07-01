import { Stack, DetailsList, SelectionMode, Dropdown, DetailsListLayoutMode, ColumnActionsMode } from "@fluentui/react";
import { Children } from "react";
import { PlanningDatePicker } from "../Shared/PlanningDatePicker";
import { UtilizationTable } from "../Shared/UtilizationTable";

export const Individual = () => {

    return (<>
        <Stack>
            <PlanningDatePicker/>
            <UtilizationTable/>
            <DetailsList columns={planningColumns}
                items={planningItems}
                selectionMode={SelectionMode.none}
                // layoutMode={DetailsListLayoutMode.justified}
                isHeaderVisible={false}
                onRenderItemColumn={renderItemColumn}
                styles={detailsListStyles}
            />
        </Stack>
    </>);
};

const detailsListStyles = {
    width: 2000

}
var dropdownStyles = {
    title: {

        border: 'none',
    },
    dropdown:
    {

        maxWidth: 70,
        maxWidth: 70,
    }
};

const renderItemColumn = (item, index, column) => {
    switch (column.key) {

        case "project":
            return item.project;

        default: return <Dropdown options={dropDownOptions} styles={dropdownStyles} />;
    }

}

//  onContextualMenuDismissed = () => {
//     setState({
//         contextualMenuProps: undefined,
//     });
// }

//  onColumnContextMenu = (column, ev) => {
//     if (column.columnActionsMode !== ColumnActionsMode.disabled) {
//         this.setState({
//             contextualMenuProps: this.getContextualMenuProps(ev, column),
//         });
//     }
// };

// getContextualMenuProps = (ev, column) => {
//     const items = [
//         {
//             key: 'aToZ',
//             name: 'A to Z',
//             iconProps: { iconName: 'SortUp' },
//             canCheck: true,
//             checked: column.isSorted && !column.isSortedDescending,
//         },
//         {
//             key: 'zToA',
//             name: 'Z to A',
//             iconProps: { iconName: 'SortDown' },
//             canCheck: true,
//             checked: column.isSorted && column.isSortedDescending,
//         }
//     ];

//     return {
//         items: items,
//         target: ev.currentTarget,
//         directionalHint: DirectionalHint.bottomLeftEdge,
//         gapSpace: 10,
//         isBeakVisible: true,
//         onDismiss: this.onContextualMenuDismissed,
//     }
// }

const planningItems = [
    {
        project: "BOE0101",
        month0: 3,
        month1: 4,
        month2: 3,
        month3: 4,
        month4: 3,
        month5: 4,
        month6: 3,
        month7: 4,
        month8: 3,
        month9: 4,
        month0: 3,
        month10: 4,
        month11: 4
    },
    {
        project: "DZB0205",
        month0: 3,
        month1: 4,
        month2: 3,
        month3: 4,
        month4: 3,
        month5: 4,
        month6: 3,
        month7: 4,
        month8: 3,
        month9: 4,
        month0: 3,
        month10: 4,
        month11: 4
    }
]

const planningColumns = [
    {
        key: 'project',
        ariaLabel: 'Name of the Consultant',
        fieldName: 'project',
        name: 'Amin Chirazi',
        minWidth: 200,
        maxWidth: 200,
        columnActionsMode: ColumnActionsMode.hasDropdown,
        // onColumnClick: (ev, column) => {
        //     onColumnContextMenu(column, ev);
        // },
    },
    {
        key: 'month0',
        name: 'Jan',
        ariaLabel: '',
        fieldName: 'month0',
        minWidth: 150,
        maxWidth: 150,
    }, {
        key: 'month1',
        name: 'Feb',
        ariaLabel: '',
        fieldName: 'month1',
        minWidth: 150,
        maxWidth: 150

    }, {
        key: 'month2',
        name: 'Mar',
        ariaLabel: '',
        fieldName: 'month2',
        minWidth: 150,
        maxWidth: 150
    }, {
        key: 'month3',
        name: 'Apr',
        ariaLabel: '',
        fieldName: 'month3',
        minWidth: 150,
        maxWidth: 150
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
        maxWidth: 150
    }
];

const dropDownOptions = [
    { key: '1', text: '1' },
    { key: '2', text: '2' },
    { key: '3', text: '3' },
    { key: '4', text: '4' },
    { key: '5', text: '5' },
    { key: '6', text: '6' },
    { key: '7', text: '7' },
    { key: '8', text: '8' },
    { key: '9', text: '9' },
    { key: '10', text: '10' },
    { key: '11', text: '11' },
    { key: '12', text: '12' },
    { key: '13', text: '13' },
    { key: '14', text: '14' },
    { key: '15', text: '15' },
    { key: '16', text: '16' },
    { key: '17', text: '17' },
    { key: '18', text: '18' },
    { key: '19', text: '19' },
    { key: '20', text: '20' },
    { key: '21', text: '21' },
    { key: '22', text: '22' },
    { key: '23', text: '23' },
    { key: '24', text: '24' },
    { key: '25', text: '25' }
]
