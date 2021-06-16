import dotenv from 'dotenv'

dotenv.config({ path: '.env'})

// console.log(process.env.SANITY_TOKEN)

export default {
    siteMetadata:{
        title: `AssemblyWeb Blog`,
        siteUrl: 'https://assemblyweb.net',
        description: 'Assembling the web thorugh design',
    },
    plugins: [
        'gatsby-plugin-sanity',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'zjkzyqe6',
                daetaset: 'production',
                watchMode: true,
                token: process.env.SANITY_TOKEN,
            }
        }
    ]
}