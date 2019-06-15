import React from "react";
import styled from "styled-components";

function TableBodyRow(props) {
  return (
    <StyledTableBodyRow>
      <StyledTableBodyData>{props.project.name}</StyledTableBodyData>
      <StyledTableBodyData>{props.project.createdAt}</StyledTableBodyData>
      <StyledTableBodyData>{props.project.team}</StyledTableBodyData>
      <StyledTableBodyData>{props.project.duration}</StyledTableBodyData>
    </StyledTableBodyRow>
  );
}

export default TableBodyRow;

const StyledTableBodyRow = styled.tr`
  border-bottom: 1px solid grey;
`;

const StyledTableBodyData = styled.td`
  color: blue;
  height: 1vh;
`;
