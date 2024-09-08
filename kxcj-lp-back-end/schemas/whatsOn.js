export default {
    name: "whatsOn",
    title: "What's On",
    type: "document",
    fields: [
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true, // Enable image hotspot
        },
      },
      {
        name: "caption",
        type: "string",
        title: "Caption (Optional)",
        options: {
          isHighlighted: true, // Make this field easily accessible
        },
      },
      {
        name: "orientation",
        title: "Image Orientation (Required)",
        type: "string",
        description: "Select whether the image is vertical or horizontal",
        options: {
          list: [
            { title: "Vertical", value: "vertical" },
            { title: "Horizontal", value: "horizontal" },
          ], // Radio button choices
          layout: "radio", // Renders as radio buttons
        },
        validation: Rule => Rule.required().error('You must select an image orientation (Vertical or Horizontal)'),
      },
    ],
  };