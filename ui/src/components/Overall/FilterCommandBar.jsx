import { Stack, DetailsList, values, CommandBar } from "@fluentui/react";
import { OverviewTable } from "./OverallTable";
import { OverviewDatePicker } from "../Shared/PlanningDatePicker";
import { KPITable } from "../Shared/UtilizationTable";
import { Link } from '@fluentui/react/lib/Link';
import { TextField } from '@fluentui/react/lib/TextField';
import { Text } from '@fluentui/react/lib/Text';
import { Announced } from '@fluentui/react/lib/Announced';

const itemsCommandBar = [{

  key: 'newItem',
  text: 'Filter',
  iconProps: { iconName: 'Filter' },

  subMenuProps: {
    items: [
      {
        key: 'utilization', text: 'Utilization', items: [

          { key: 'critical', text: 'Critical' },
          { key: 'solid', text: 'Solid' },

        ]
      },
      {
        key: 'relation', text: 'Relation', iconProps: { iconName: 'Calendar' }, items: [

          { key: 'internal', text: 'Internal' },
          { key: 'external', text: 'External' }

        ]
      },
      {
        key: 'country', text: 'Country', items: [

          { key: 'at', text: 'Austria' },
          { key: 'cz', text: 'Czech Republic' },
          { key: 'ch', text: 'Switzerland' }

        ]
      },
      {
        key: 'team', text: 'Team', items: [

          { key: '1', text: 'Amin Chirazi' },
          { key: '2', text: 'Valentin Ober' }

        ]
      },
      {
        key: 'clearfilter', text: 'Clear Filter'
      }
    ]
  }
}];

export const FilterCommandBar = () => {
  return (<>
    <CommandBar items={itemsCommandBar} />
  </>);
};