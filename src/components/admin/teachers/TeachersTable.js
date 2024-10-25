import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import teacher from "../../../assets/images/add-teacher.png";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import avatar from "../../../assets/images/profile.png";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const rows = [
  {
    name: "Alison David",
    class: "JSS1 ",
    phoneNumber: "08142449997",
    email: "alisondavid@gmail.com",
    action: <BiDotsVerticalRounded />,
    subject: "French",
    gender: "Female",
    profile: <img src={avatar} alt="profile" className="table-profile" />,
  },
];

const TeachersTable = () => {
  const navigate = useNavigate();
  return (
    <article>
      {rows.length === 0 ? (
        <section className="zero-teachers">
          <div className="zero-teacher-container">
            <div className="teacher-img">
              <img src={teacher} alt="teacher" />
            </div>
            <h2>No Teachers at this time</h2>
            <p>Teachers will appear here after they enroll in your school.</p>
            <div>
              <button
                className="add-teacher"
                onClick={() => navigate("/admin/add-teacher")}
              >
                Add Staff
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="tcontainer-wrapper">
          <TableContainer sx={{ maxWidth: "100%" }} component={Paper}>
            <Table
              style={{ fontSize: "16px", fontWeight: 300 }}
              aria-label="a dense table"
            >
              <TableHead className="th-row">
                <TableRow className="thead">
                  <TableCell className="thead name" align="left">
                    <input type="checkbox" width={"200px"} />
                    Name
                  </TableCell>
                  <TableCell className="thead" align="left">
                    Class
                  </TableCell>
                  <TableCell className="thead" align="left">
                    Phone Number
                  </TableCell>
                  <TableCell className="thead" align="left">
                    Subjects
                  </TableCell>
                  <TableCell className="thead" align="left">
                    Gender
                  </TableCell>
                  <TableCell className="thead" align="left">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      className="tcell icon"
                      component="th"
                      scope="row"
                    >
                      <input type="checkbox" width={"200px"} />
                      <p> {row.profile}</p>
                      {row.name}
                    </TableCell>
                    <TableCell className="tcell" align="left">
                      {row.class}
                    </TableCell>
                    <TableCell className="tcell" align="left">
                      {row.email}
                    </TableCell>
                    <TableCell className="tcell" align="left">
                      <p className="subject"> {row.subject}</p>
                    </TableCell>
                    <TableCell className="tcell" align="left">
                      {row.gender}
                    </TableCell>
                    <TableCell className="tcell" align="left">
                      {row.action}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="table-pagination">
            <div>
              <p>page 1 0f 30</p>
            </div>
            <div className="btn-number">
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              ...
              <button>4</button>
            </div>
            <div className="btn-number">
              <button className="btn-prev">
                <HiOutlineArrowNarrowLeft /> Previous
              </button>
              <button className="btn-next">
                Next <HiOutlineArrowNarrowRight />
              </button>
            </div>
          </div>
        </section>
      )}
    </article>
  );
};
export default TeachersTable;
