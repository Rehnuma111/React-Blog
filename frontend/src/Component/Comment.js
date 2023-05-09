import React from "react";
import { Card } from "react-bootstrap";

const Comment = () => {
  return (
    <React.Fragment>
      <Card style={{marginTop:"2rem"}}>
        <div
          style={{
            width: "100%",
            height: "30% ",
            marginTop: "1rem",
          }}
        >
          <div style={{ padding: "3rem" }}>
            <div>
              <h1>Comments</h1>
            </div>
            <div>
              <textarea
                rows="7"
                cols="50"
                style={{ width: "100% " }}
                placeholder="write your comments......"
              />
            </div>
            <div>
              <button
                style={{
                  border: "none",
                  width: "20%",
                  backgroundColor: "#d808f6",
                  borderRadius: "0.5rem",
                  padding: "0.2rem",
                  color:"white"
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default Comment;
