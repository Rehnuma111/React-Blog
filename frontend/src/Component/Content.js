import React from "react";
import { Card } from "react-bootstrap";

const Content = (props) => {
  console.log(props);

  return (
    <div>
      <Card style={{ width: "100%", height: "100%" }}>
        <div>
          <img
            style={{ backgroundRepeat: "no-repeat", width: "100%" }}
            src={props.blogData.file}
          />
        </div>
        <div className="content" style={{ padding: "1rem" }}>
          <div>
            <h1>{props?.blogData?.title} </h1>
          </div>
          <div className="para">
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: props?.blogData?.content,
                }}
              ></div>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Content;
