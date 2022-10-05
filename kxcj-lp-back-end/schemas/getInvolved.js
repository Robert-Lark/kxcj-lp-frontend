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
            title: 'Images (limit 6)',
            type: 'array',
            of: [
              {
                type: 'images'
              },
            ]
          },
    ],
}