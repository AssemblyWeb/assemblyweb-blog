import dotenv from 'dotenv';

dotenv.config({ path: '.env'});

console.log(process.env.SANITY_TOKEN)

export default {
    siteMetadata:{
        title: `AssemblyWeb Blog`,
        siteUrl: 'https://assemblyweb.net',
        description: 'Assembling the web thorugh design',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'zjkzyqe6',
                dataset: 'production',
                watchMode: true,
                token: process.env.SANITY_TOKEN,
            }
        }
    ]
};