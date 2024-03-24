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
              <ProcessCard
                title="THIẾT KẾ NỘI VÀ NGOẠI THẤT"
                description="This is the description of the first feature of our app. We are going to briefly outline what this feature does"
                icon={faPenRuler}
              />
            </td>
            <td>
              <ProcessCard
                title="THI CÔNG NỘI VÀ NGOẠI THẤT"
                description="This is the description of the first feature of our app. We are going to briefly outline what this feature does"
                icon={faHammer}
              />
            </td>

            <td>
              <ProcessCard
                title="THIẾT KẾ KIẾN TRÚC, KẾT CẤU"
                description="This is the description of the first feature of our app. We are going to briefly outline what this feature does"
                icon={faHouse}
              />
            </td>

            <td>
              <ProcessCard
                title="CUNG CẤP, THI CÔNG ĐÓNG, ÉP CỌC"
                description="This is the description of the first feature of our app. We are going to briefly outline what this feature does"
                icon={faBoreHole}
              />
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default Process;
