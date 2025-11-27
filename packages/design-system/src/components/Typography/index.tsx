import { Typography } from "./Typography";
import { Display } from "./Display";
import { Headline } from "./Headline";
import { Title } from "./Title";

const Compound = Object.assign(Typography, {
  Display,
  Headline,
  Title,
});

export { Compound as Typography };
