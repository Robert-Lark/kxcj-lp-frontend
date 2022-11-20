export default {
    name: 'becomeDJ',
    title: 'Become A DJ',
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
            name: 'formHeading',
            title: 'Form Heading',
            type: 'string',
            description: 'The heading atop the form'
        },
    ],
}