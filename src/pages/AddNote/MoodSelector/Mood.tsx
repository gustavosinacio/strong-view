import { Checkbox, Icon, Tooltip } from "@mui/material";
import { useMemo } from "react";
import { useMood } from "../../../contexts/moods";

interface MoodProps {
  name: string;
  iconName: string;
}

export const Mood = ({ name, iconName }: MoodProps) => {
  const iconFontSize = useMemo<"inherit" | "large" | "medium" | "small">(
    () => "large",
    []
  );

  const [moods, dispatch] = useMood();

  const handleChangeMood = (event: any, checked: boolean) => {
    if (checked) {
      dispatch({ type: "addMood", payload: name });
    } else {
      dispatch({ type: "removeMood", payload: name });
    }
  };

  return (
    <Tooltip title={name}>
      <Checkbox
        checked={moods.indexOf(name) >= 0}
        onChange={handleChangeMood}
        name={name}
        icon={<Icon fontSize={iconFontSize}>{iconName}</Icon>}
        checkedIcon={<Icon fontSize={iconFontSize}>{iconName}</Icon>}
      />
    </Tooltip>
  );
};
