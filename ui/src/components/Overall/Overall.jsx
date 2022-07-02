import { Stack} from "@fluentui/react";
import { OverallTable } from "./OverallTable";
import { PlanningDatePicker } from "../Shared/PlanningDatePicker";
import { UtilizationTable } from "../Shared/UtilizationTable";
import { FilterCommandBar } from "./FilterCommandBar"

export const Overall = () => {

  return (<>
  <Stack>
    <Stack horizontal>
      <PlanningDatePicker />
      <FilterCommandBar />

    </Stack>
    <Stack>
      <UtilizationTable />
      <OverallTable />
    </Stack>
    </Stack>
  </>);
};