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
  SentimentSatisfiedAlt,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied,
  SentimentVerySatisfiedOutlined,
  Sick,
  SickOutlined,
  Tv,
  TvTwoTone,
  Whatshot,
  WhatshotOutlined,
  Work,
  WorkOutline,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { Mood } from "./Mood";
import { SelectorArea } from "./MoodSelector.styles";

export const MoodSelector = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography marginBottom={1} variant="h5">
        How's your "mood"?
      </Typography>

      <SelectorArea>
        <Mood name="loving" iconName="favorite_border" />
        <Mood name="studying" iconName="menu_book" />
        <Mood name="happy" iconName="sentiment_very_satisfied" />
        <Mood name="satisfied" iconName="sentiment_satisfied_alt" />
        <Mood name="sick" iconName="sick" />
        <Mood name="fit" iconName="fitness_center" />
        <Mood name="hungry" iconName="local_dining" />
        <Mood name="sad" iconName="sentiment_very_dissatisfied" />
        <Mood name="cold" iconName="ac_unit" />
        <Mood name="hot" iconName="whatshot" />
        <Mood name="zen" iconName="self_improvement" />
        <Mood name="TV" iconName="tv" />
        <Mood name="music" iconName="music_note" />
        <Mood name="work" iconName="work" />
        <Mood name="neutral" iconName="sentiment_neutral" />
      </SelectorArea>
    </Box>
  );
};
