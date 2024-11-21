import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Accordion from "react-bootstrap/Accordion";
import "../styels/userDetail.css";

const getData = async (url) => {
  try {
    let res = await axios.get(url);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

const UserDetail = () => {
  const { user_id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData(`https://jsonplaceholder.typicode.com/users/${user_id}`)
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [user_id]);

  if (loading) return <div style={{width:'100vw', height: '100vh', display:'flex', alignItems:'center', justifyContent:'center'}}><Loader /></div>;
  if (error) return <h3>Something went wrong....</h3>;

  if (!data) return null;

  return (
    <div className="main">
      {/* left */}
      <div className="left">
        <div>
          <img
            src="data:image/png;base64,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"
            alt="user"
          />
          <h5>
            <span>Name</span> : {data.name}
          </h5>
          <p>
            <span>Username</span> : {data.username}
          </p>
          <p>
            <span>Email</span> : {data.email}
          </p>
          <p>
            <span>Phone</span> : {data.phone}
          </p>
          <p>
            <span>Website</span> : {data.website}
          </p>
        </div>
      </div>
      <div className="right">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Address</Accordion.Header>
            <Accordion.Body>
              <p>
                <span>Street</span> :{data.address.street}
              </p>
              <p>
                <span>Suite</span> : {data.address.suite}
              </p>
              <p>
                <span>City</span> : {data.address.city}
              </p>
              <p>
                <span>Zipcode</span> : {data.address.zipcode}
              </p>
              <p>
                <span>Geo</span> : {data.address.geo.lat}
              </p>{" "}
              <p>
                <span>Geo</span> : {data.address.geo.lng}{" "}
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Company Details</Accordion.Header>
            <Accordion.Body>
              <p>
                <span>Company Name</span> : {data.company.name}
              </p>
              <p>
                <span>Phrase</span> : {data.company.catchPhrase}
              </p>
              <p>{data.company.bs}</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default UserDetail;
