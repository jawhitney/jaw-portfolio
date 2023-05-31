import React from "react";
import { Chip } from "@mui/material";
import { Skill as SkillType, Tag as TagType } from "API";

interface Props {
  skill: SkillType | TagType;
}

export default function Skill({ skill }: Props) {
  return <Chip label={skill.title} />;
}
