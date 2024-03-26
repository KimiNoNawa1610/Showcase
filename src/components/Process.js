import React from "react";
import { faPenRuler, faHammer, faHouse, faBoreHole } from "@fortawesome/free-solid-svg-icons";
import ProcessCard from "../components/ProcessCard";

function Process() {
  return (
    <div className="services">
      <h3 className="services-title">
        <span>Quy Trình Xử Lý</span>
      </h3>
      <table className="services-table">
        <tbody>
          <tr>
            <td>
              <ProcessCard/>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default Process;
