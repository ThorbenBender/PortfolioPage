import React from "react";
import styled from "styled-components";
import SmallClosedFolder from "../../Icons/smallClosedFolder.png";

function TableBodyRow(props) {
  return (
    <StyledTableBodyRow onClick={() => props.openFolder(props.project.name)}>
      <StyledTableBodyData>
        <StyledClosedFolderIcon src={SmallClosedFolder} alt="Project Folder Icon" />
        {props.project.name}
      </StyledTableBodyData>
      <StyledTableBodyData>{props.project.createdAt}</StyledTableBodyData>
      <StyledTableBodyData>{props.project.team}</StyledTableBodyData>
      <StyledTableBodyData>{props.project.duration}</StyledTableBodyData>
    </StyledTableBodyRow>
  );
}

export default TableBodyRow;

const StyledTableBodyRow = styled.tr`
  border: none;
  cursor: pointer;
`;

const StyledTableBodyData = styled.td`
  height: 1vh;
  text-align: start;
  vertical-align: center;
`;

const StyledClosedFolderIcon = styled.img`
  margin-right: 0.2vw;
`;
