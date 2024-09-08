import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./styles/supporters.css"; // Import your styles

// Define the GraphQL query to fetch supporters data
const GET_SUPPORTERS_QUERY = gql`
  query GetSupporters {
    allSupporters {
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

function Supporters() {
  // Use Apollo's useQuery hook to fetch the data
  const { loading, error, data } = useQuery(GET_SUPPORTERS_QUERY);

  // Loading state
  if (loading) return <p>Loading...</p>;

  // Error state
  if (error) return <p>Error: {error.message}</p>;

  // Assuming you want to show the first supporter image for this example
  const supporter = data?.allSupporters[0]; // Get the first supporter

  return (
    <div className="background-test-supporters">
      <div className="image-container-supporters">
        {supporter ? (
          <img
            src={supporter.image.asset.url} // Fetch image URL from query
            alt={supporter.caption || "Supporter Image"}
            id="supporterImg"
          />
        ) : (
          <p>No supporter image found</p>
        )}
      </div>
    </div>
  );
}

export default Supporters;