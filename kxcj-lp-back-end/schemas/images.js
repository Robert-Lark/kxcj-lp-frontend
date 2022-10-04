export default {
    title: 'Images',
    name: 'images',
    type: 'image',
    options: {
      hotspot: true
    },
    fields: [
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
        options: {
          isHighlighted: true // <-- make this field easily accessible
        }
      },
    ]
  }