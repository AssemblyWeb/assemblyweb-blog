export default {
    name: 'aboutIt',
    title: 'aboutIt',
    type: 'document',
    // icon: ()=> '⭐️',
    fields:[
        {
            name: 'name',
            title: 'about name',
            type: 'string',
            description: 'my name'
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