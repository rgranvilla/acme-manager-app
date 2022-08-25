/* eslint-disable @typescript-eslint/no-unsafe-call */
import { MdKeyboardArrowRight } from "react-icons/md";

import { useNavigate } from "react-router-dom";

import { TABLE, TR, TH, THEAD, TD } from "./table.styles";
import { TablePropsDTO } from "./tableDTO";

export function Table({ data, header }: TablePropsDTO) {
  const navigate = useNavigate();

  const handleSelectPatient = (path: string) => {
    navigate(path);
  };

  return (
    <TABLE>
      <THEAD>
        <tr>
          {header.columns.map(
            ({ id, label, vert_Align, hor_Align, isBolded, capitalize }) => {
              return (
                <TH
                  key={id}
                  hor_Align={hor_Align}
                  isBolded={isBolded}
                  vert_Align={vert_Align}
                >
                  {capitalize ? label.toUpperCase() : label}
                </TH>
              );
            },
          )}
        </tr>
      </THEAD>
      <tbody>
        {!!data &&
          data.map(
            ({ id, name, bornDate, documentId, genre, address, status }) =>
              id ? (
                <TR key={id} isInactivated={!status}>
                  <TD vert_Align="middle">
                    <button
                      type="button"
                      onClick={() => handleSelectPatient(`/profile/edit/${id}`)}
                    >
                      <MdKeyboardArrowRight size={24} />
                    </button>
                  </TD>
                  <TD vert_Align="middle" hor_Align="left" isBolded>
                    {name}
                  </TD>
                  <TD vert_Align="middle" hor_Align="center">
                    {bornDate}
                  </TD>
                  <TD vert_Align="middle" hor_Align="center">
                    {documentId}
                  </TD>
                  <TD vert_Align="middle" hor_Align="center">
                    {genre}
                  </TD>
                  <TD vert_Align="middle" hor_Align="left">
                    {address}
                  </TD>
                  <TD vert_Align="middle" hor_Align="center">
                    {status ? "Ativo" : "Inativo"}
                  </TD>
                </TR>
              ) : (
                <TR key={id} isInactivated={!status}>
                  <TD vert_Align="middle" />
                  <TD vert_Align="middle" hor_Align="left" isBolded>
                    {name}
                  </TD>
                  <TD vert_Align="middle" hor_Align="center">
                    {bornDate}
                  </TD>
                  <TD vert_Align="middle" hor_Align="center">
                    {documentId}
                  </TD>
                  <TD vert_Align="middle" hor_Align="center">
                    {genre}
                  </TD>
                  <TD vert_Align="middle" hor_Align="left">
                    {address}
                  </TD>
                  <TD vert_Align="middle" hor_Align="center">
                    {status ? "Ativo" : "Inativo"}
                  </TD>
                </TR>
              ),
          )}
      </tbody>
    </TABLE>
  );
}
