export default {
    name: 'getInvolved',
    title: 'Get Involved',
    type: 'document',
    fields: [
        {
            name: 'url',
            title: 'Page URL',
            type: 'string',
            description: 'What page does this content connect to'
        },
        {
            name: 'heading',
            title: 'Page Heading',
            type: 'string',
            description: 'Name of the Section'
        },
        {
            name: 'content',
            title: 'Page text content',
            type: 'array', 
            of: [{type: 'block'}],
            description: 'Write the body text here'
        },
        {
            name: 'referenceList',
            title: 'Images (limit 4, small file size, keep the captions the same, make sure action is in center of image )',
            type: 'array',
            of: [
              {
                type: 'images'
              },
            ]
        },
        {
          name: 'imageOverlayOne',
          title: 'Image on hover text one',
          type: 'string',
          description: 'Text that will overlay the first image'
        },
        {
          name: 'imageOverlayTwo',
          title: 'Image on hover text two',
          type: 'string',
          description: 'Text that will overlay the second image'
        },
        {
          name: 'imageOverlayThree',
          title: 'Image on hover text three',
          type: 'string',
          description: 'Text that will overlay the third image'
        },
        {
          name: 'imageOverlayFour',
          title: 'Image on hover text four',
          type: 'string',
          description: 'Text that will overlay the fourth image'
        },
    ],
}