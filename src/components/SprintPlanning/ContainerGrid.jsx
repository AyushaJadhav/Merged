import React from "react";
import SprintViewer from "./SprintViewer";
import GotoToday from "./GotoToday";
import ModeSelector from "./ModeSelector";
import SprintColumn from "./SprintColumn";
import SprintControls from "./SprintControls";
import SprintRow from "./SprintRow";

const ContainerGrid = () => {
  return (
    <SprintViewer>
      <SprintControls>
        <GotoToday></GotoToday>
        <ModeSelector></ModeSelector>
      </SprintControls>
      <SprintColumn>
        <SprintColumn.Header />
        <SprintColumn.Body />
      </SprintColumn>
      <SprintRow>
        <SprintRow.Header></SprintRow.Header>
        {/*<SprintRow.Body></SprintRow.Body>*/}
      </SprintRow>
    </SprintViewer>
  );
};

export default ContainerGrid;
