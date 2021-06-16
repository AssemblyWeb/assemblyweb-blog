import React from 'react'
import Layout from './src/components/Layout'
import "@popperjs/core/dist/umd/popper.min"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"

export function wrapPageElement({element, props}){
    return <Layout {...props}>{element}</Layout>
}