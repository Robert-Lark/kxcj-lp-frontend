export default {
    name: "history",
    title: "History",
    type: "document", // Use 'document' or 'object' to define the schema
    fields: [
      {
        name: "image",
        title: "Image",
        type: "image", // Define the image field
        options: {
          hotspot: true, // Enable image hotspot
        },
      },
      {
        name: "caption",
        type: "string",
        title: "Caption",
        options: {
          isHighlighted: true, // Make this field easily accessible
        },
      },
    ],
  };