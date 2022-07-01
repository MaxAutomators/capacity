import * as React from 'react';
import { DatePicker, addDays, mergeStyleSets, DateRangeType, Stack, Calendar } from '@fluentui/react';
import { DefaultButton } from '@fluentui/react/lib/Button';

const datePickerStyle = {
  width: 220
};

// const [selectedDate, setSelectedDate] = useState();

// const onSelectDate = React.useCallback((date) => {
//   setSelectedDate(date);
// });

export const PlanningDatePicker = () => {

  return (

    <div>
      <Stack horizontal tokens={tokens}>
        <DefaultButton text="Previous" style={buttonStyles} />


        <DatePicker 
        style={datePickerStyle}
        calendarAs={()=><Calendar
            isDayPickerVisible={false}
            dateRangeType={DateRangeType.Month}

        />}
        />

        <DefaultButton text="Next" style={buttonStyles} />
      </Stack>
    </div>

  );
};

const buttonStyles = {
  width: 100
}

const tokens = {

  childrenGap: "30"
}