import {
  AcUnit,
  Favorite,
  FavoriteBorder,
  FitnessCenter,
  LocalDining,
  MenuBook,
  MenuBookOutlined,
  MusicNote,
  MusicNoteOutlined,
  SelfImprovement,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied,
  SentimentVerySatisfiedOutlined,
  Sick,
  SickOutlined,
  Tv,
  TvTwoTone,
  Whatshot,
  WhatshotOutlined,
} from "@mui/icons-material";
import { Box, Checkbox, Tooltip, Typography } from "@mui/material";
import { useMemo } from "react";
import { SelectorArea } from "./MoodSelector.styles";

interface MoodSelectorProps {
  moods: string[];
  handleChangeMood: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

export const MoodSelector = ({
  moods,
  handleChangeMood,
}: MoodSelectorProps) => {
  const iconFontSize = useMemo<"inherit" | "large" | "medium" | "small">(
    () => "large",
    []
  );

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography marginBottom={1} variant="h5">
        How's your "mood"?
      </Typography>

      <SelectorArea>
        <Tooltip title="loving">
          <Checkbox
            checked={moods.indexOf("loving") >= 0}
            onChange={handleChangeMood}
            name="loving"
            icon={<FavoriteBorder fontSize={iconFontSize} />}
            checkedIcon={<Favorite fontSize={iconFontSize} />}
          />
        </Tooltip>
        <Tooltip title="studying">
          <Checkbox
            checked={moods.indexOf("studying") >= 0}
            onChange={handleChangeMood}
            name="studying"
            icon={<MenuBookOutlined fontSize={iconFontSize} />}
            checkedIcon={<MenuBook fontSize={iconFontSize} />}
          />
        </Tooltip>
        <Tooltip title="happy">
          <Checkbox
            checked={moods.indexOf("happy") >= 0}
            onChange={handleChangeMood}
            name="happy"
            icon={<SentimentVerySatisfied fontSize={iconFontSize} />}
            checkedIcon={
              <SentimentVerySatisfiedOutlined fontSize={iconFontSize} />
            }
          />
        </Tooltip>
        <Tooltip title="sick">
          <Checkbox
            checked={moods.indexOf("sick") >= 0}
            onChange={handleChangeMood}
            name="sick"
            icon={<SickOutlined fontSize={iconFontSize} />}
            checkedIcon={<Sick fontSize={iconFontSize} />}
          />
        </Tooltip>
        <Tooltip title="fit">
          <Checkbox
            checked={moods.indexOf("fit") >= 0}
            onChange={handleChangeMood}
            name="fit"
            icon={<FitnessCenter fontSize={iconFontSize} />}
            checkedIcon={<FitnessCenter fontSize={iconFontSize} />}
          />
        </Tooltip>
        <Tooltip title="hungry">
          <Checkbox
            checked={moods.indexOf("hungry") >= 0}
            onChange={handleChangeMood}
            name="hungry"
            icon={<LocalDining fontSize={iconFontSize} />}
            checkedIcon={<LocalDining fontSize={iconFontSize} />}
          />
        </Tooltip>
        <Tooltip title="sad">
          <Checkbox
            checked={moods.indexOf("sad") >= 0}
            onChange={handleChangeMood}
            name="sad"
            icon={<SentimentVeryDissatisfied fontSize={iconFontSize} />}
            checkedIcon={<SentimentVeryDissatisfied fontSize={iconFontSize} />}
          />
        </Tooltip>
        <Tooltip title="cold">
          <Checkbox
            checked={moods.indexOf("cold") >= 0}
            onChange={handleChangeMood}
            name="cold"
            icon={<AcUnit fontSize={iconFontSize} />}
            checkedIcon={<AcUnit fontSize={iconFontSize} />}
          />
        </Tooltip>
        <Tooltip title="hot">
          <Checkbox
            checked={moods.indexOf("hot") >= 0}
            onChange={handleChangeMood}
            name="hot"
            icon={<WhatshotOutlined fontSize={iconFontSize} />}
            checkedIcon={<Whatshot fontSize={iconFontSize} />}
          />
        </Tooltip>
        <Tooltip title="zen">
          <Checkbox
            checked={moods.indexOf("zen") >= 0}
            onChange={handleChangeMood}
            name="zen"
            icon={<SelfImprovement fontSize={iconFontSize} />}
            checkedIcon={<SelfImprovement fontSize={iconFontSize} />}
          />
        </Tooltip>
        <Tooltip title="TV">
          <Checkbox
            checked={moods.indexOf("tv") >= 0}
            onChange={handleChangeMood}
            name="tv"
            icon={<Tv fontSize={iconFontSize} />}
            checkedIcon={<TvTwoTone fontSize={iconFontSize} />}
          />
        </Tooltip>
        <Tooltip title="music">
          <Checkbox
            checked={moods.indexOf("music") >= 0}
            onChange={handleChangeMood}
            name="music"
            icon={<MusicNoteOutlined fontSize={iconFontSize} />}
            checkedIcon={<MusicNote fontSize={iconFontSize} />}
          />
        </Tooltip>
      </SelectorArea>
    </Box>
  );
};
