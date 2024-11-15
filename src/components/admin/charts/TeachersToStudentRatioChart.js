import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { GoDotFill } from "react-icons/go";

const TeachersToStudentRatioChart = ({ data }) => {
  return (
    <section>
      <div className="chart students-teachers-ratio-rating">
        <div>
          <h2>Teachers to students ratio</h2>
        </div>

        <div className="students-teachers-ratio">
          <div className="labels">
            <div>
              <GoDotFill style={{ color: "#4A3AFF", fontSize: "px" }} />
              <h6>Teachers</h6>
            </div>
            <div>
              <GoDotFill style={{ color: "#B062FF", fontSize: "px" }} />
              <h6>Students</h6>
            </div>
          </div>
          <div>
            <ResponsiveContainer width="99%" height={160}>
              <PieChart width={400} height={250}>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label={{ fontSize: 12 }}
                >
                  <Cell name="Teachers" fill="#B062FF" />
                  <Cell name="Students" fill="#4A3AFF" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersToStudentRatioChart;
