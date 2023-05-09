import React from "react";
import { Card } from "react-bootstrap";
import "../styles/blogpost.css";
const UserProfile = () => {
  return (
    <div style={{ width: "100%", height: "100%", marginTop: "6rem" }}>
      <Card
        style={{
          border: "5px solid black",
          width: "60%",
          height: "60%",
          margin: "auto",
        }}
      >
        <div>
          <div className="mt-5 p-3">
            <h1>Welcome , Rehnuma </h1>
            <div className="row">
              <div
                className="col-md-6 user_profile_image"

                style={{
                  border: "5px solid red",
                }}
              >
                <input type="file" />
              </div>
              <div className="col-md-6"
               style={{
                border: "5px solid green",
              }}>
                <form className="user_form ">
                  <div>
                    <label>First Name</label>
                    <input
                      type="text"
                      name="Fname"
                      placeholder="Enter your First Name"
                    />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="Lname"
                      placeholder="Enter your Last  Name"
                    />
                  </div>

                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div>
                    <button>Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserProfile;
