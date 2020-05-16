import React from 'react';
import styled from 'styled-components';
import TableBodyRow from './StyledTableBodyRow';
import ProjectFolder from './ProjectFolder';

const Projects = [
  { name: 'Pinely', team: 5, duration: 5, createdAt: '22.05.19' },
  { name: 'Guidr', team: 5, duration: 1, createdAt: '22.03.19' },
  { name: 'Flocks', team: 5, duration: 1, createdAt: '22.04.19' }
];

function ProjectScreen(props) {
  console.log(props);
  if (props.openFolder === 'Pinely') {
    return (
      <ProjectFolder
        githubLink="https://github.com/labseu1-db"
        websiteLink="https://pinely.app/"
        closeFolder={props.closeFolder}
        showModal={props.showModal}
        folder={props.openFolder}
      />
    );
  } else if (props.openFolder === 'Guidr') {
    return (
      <ProjectFolder
        githubLink="https://github.com/guidrbuildweek"
        websiteLink="https://guidr-9ca16.web.app/login"
        closeFolder={props.closeFolder}
        showModal={props.showModal}
        folder={props.openFolder}
      />
    );
  } else if (props.openFolder === 'Flocks') {
    return (
      <ProjectFolder
        githubLink="https://github.com/flocks1"
        closeFolder={props.closeFolder}
        showModal={props.showModal}
        folder={props.openFolder}
      />
    );
  }
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
          {Projects.map((project, idx) => (
            <TableBodyRow
              project={project}
              openFolder={() => props.openFolder(project.name)}
              key={idx}
            />
          ))}
        </StyledTableBody>
      </ProjectsTable>
    </StyledProjectScreen>
  );
}

export default ProjectScreen;

const ProjectsTable = styled.table`
  width: 100%;
`;

const StyledProjectScreen = styled.div`
  height: 100%;
  background: white;
`;

const StyledTableHead = styled.thead`
  background: #bfc7c9;
  width: 100%;
  height: 10%;
`;

const StyledTableBody = styled.tbody`
  background: white;
  padding: 0;
`;

const StyledTableHeadRow = styled.th`
  border-style: outset;
`;
