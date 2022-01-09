import {
  EmojiEmotions,
  EmojiEmotionsOutlined,
  Favorite,
  FavoriteBorder,
  FitnessCenter,
  LocalDining,
  MenuBook,
  MenuBookOutlined,
  Sick,
  SickOutlined,
} from "@mui/icons-material";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

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
  return (
    <Box>
      <Typography variant="h6">How's your mood?</Typography>

      <Box sx={{ textAlign: "center" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={moods.indexOf("loving") >= 0}
              onChange={handleChangeMood}
              name="loving"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          }
          label="loving"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={moods.indexOf("studying") >= 0}
              onChange={handleChangeMood}
              name="studying"
              icon={<MenuBookOutlined />}
              checkedIcon={<MenuBook />}
            />
          }
          label="studying"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={moods.indexOf("happy") >= 0}
              onChange={handleChangeMood}
              name="happy"
              icon={<EmojiEmotionsOutlined />}
              checkedIcon={<EmojiEmotions />}
            />
          }
          label="happy"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={moods.indexOf("sick") >= 0}
              onChange={handleChangeMood}
              name="sick"
              icon={<SickOutlined />}
              checkedIcon={<Sick />}
            />
          }
          label="sick"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={moods.indexOf("fit") >= 0}
              onChange={handleChangeMood}
              name="fit"
              icon={<FitnessCenter />}
              checkedIcon={<FitnessCenter />}
            />
          }
          label="fit"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={moods.indexOf("hungry") >= 0}
              onChange={handleChangeMood}
              name="hungry"
              icon={<LocalDining />}
              checkedIcon={<LocalDining />}
            />
          }
          label="hungry"
        />
      </Box>
    </Box>
  );
};
