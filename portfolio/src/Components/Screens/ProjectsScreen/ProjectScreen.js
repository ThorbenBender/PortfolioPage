import React from "react";
import styled from "styled-components";
import TableBodyRow from "./StyledTableBodyRow";

const Projects = [
  { name: "Pinely", team: 5, duration: 5, createdAt: "22.05.19" },
  { name: "Guidr", team: 5, duration: 1, createdAt: "22.03.19" },
  { name: "Flocks", team: 5, duration: 1, createdAt: "22.04.19" }
];

function ProjectScreen() {
  return (
    <StyledProjectScreen>
      <ProjectsTable>
        <StyledTableHead>
          <tr>
            <StyledTableHeadRow>Name</StyledTableHeadRow>
            <StyledTableHeadRow>Created at</StyledTableHeadRow>
            <StyledTableHeadRow>Team</StyledTableHeadRow>
            <StyledTableHeadRow>Duration</StyledTableHeadRow>
          </tr>
        </StyledTableHead>
        <StyledTableBody>
          {Projects.map(project => (
            <TableBodyRow project={project} />
          ))}
        </StyledTableBody>
      </ProjectsTable>
    </StyledProjectScreen>
  );
}

export default ProjectScreen;

const ProjectsTable = styled.table`
  /* height: 90%;
  width: 100%; */
`;

const StyledProjectScreen = styled.div`
  height: 100%;
  background: white;
`;

const StyledTableHead = styled.thead`
  background: #bfc7c9;
`;

const StyledTableBody = styled.tbody`
  background: white;
  padding: 0;
`;

const StyledTableHeadRow = styled.th`
  border-style: outset;
`;
