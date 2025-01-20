import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./styles/supporters.css"; // Import your styles

// Define the GraphQL query to fetch supporters data
const GET_HISTORY_QUERY = gql`
  query GetHistory {
    allHistory {
      _id
      caption
      image {
        asset {
          url
        }
      }
    }
  }
`;

function History() {
  // Use Apollo's useQuery hook to fetch the data
  const { loading, error, data } = useQuery(GET_HISTORY_QUERY);

  // Loading state
  if (loading) return <p>Loading...</p>;

  // Error state
  if (error) return <p>Error: {error.message}</p>;

  // Assuming you want to show the first supporter image for this example
  const history = data?.allHistory[0]; // Get the first supporter

  return (
    <div className="background-test-supporters">
      <div className="image-container-supporters">
        {history ? (
          <img
            src={history.image.asset.url} // Fetch image URL from query
            alt={history.caption || "About the station"}
            id="supporterImg"
          />
        ) : (
          <p>This page is currently being worked on please check back later</p>
        )}
      </div>
    </div>
  );
}

export default History;