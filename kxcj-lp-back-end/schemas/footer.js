export default {
    title: 'Footer',
    name: 'footer',
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