import React from "react";
import "./components/common.css";
import { CompA } from "./components/CompA";
import { CompB } from "./components/CompB";


function App() {
  return (
    <div>
    
      <table>
        <tr>
          <td>
            <CompA />
          </td>
          <td>
            <CompB />
          </td>
          <td>
            <CompA />
          </td>
          <td>
            <CompB />
          </td>
          <td>
            <CompA />
          </td>
        </tr>
        <tr>
          <td>
            <CompB />
          </td>
          <td>
            <CompA />
          </td>
          <td>
            <CompB />
          </td>
          <td>
            <CompA />
          </td>
          <td>
            <CompB />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
