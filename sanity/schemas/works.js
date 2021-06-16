export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    icon: ()=> '🔨',
    fields:[
        {
            name: 'name',
            title: 'Work name',
            type: 'string',
            description: 'Name of the client'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options:{
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'image',
            title: 'image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }

    ]
}