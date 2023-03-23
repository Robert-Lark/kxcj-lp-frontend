import React from "react";
import {useLocation} from 'react-router-dom';
import "../src/styles/innerPages.css";
import "../src/styles/volunteer.css";
import { useQuery, gql } from "@apollo/client";
import ErrorState from "./lib/ErrorState";
import TemplateFormPage from "./TemplateFormPage";
import Scroll from "./assets/Scrolls/Scroll_v.png";
import SideButtons from "./lib/SideButtons";
import Form from "./lib/Form";
import { VolunteerForm } from "./lib/VolunteerForm";

const VOLUNTEER_QUERY = gql`
  query GetAllVolunteer {
    allVolunteer {
      heading
      contentRaw
      formHeading
    }
  }
`;

function Volunteer() {
  const location = useLocation();
  const { loading, error } = useQuery(VOLUNTEER_QUERY);
  if (loading) return <p>loading...</p>;
  if (error) return <ErrorState error={error} />;

  return (
    <div className='container'>
            <div className="box1">
                <img src={Scroll} alt='scroll'/>
            </div>
            <div className='box2'>
              <span>
              <SideButtons back currentPage={location.pathname}/>  
              </span>
                <span className='form-container'>
                    <VolunteerForm Name={""} Email={""} Reason={""} Phone={""} updateFields={function (fields: Partial<{ Name: string; Email: string; Reason: string; Phone: string; }>): void {
            throw new Error("Function not implemented.");
          } } />
                </span>
            </div>
        </div>
  );
}

export default Volunteer;
