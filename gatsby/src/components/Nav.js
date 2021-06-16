import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavStyles = styled.nav`
    // background-color: red !important;
    a{
        background: red;
    }
`

export default function Nav(){
    return <NavStyles className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Assembly</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto mb-2 mb-lg-0">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/work">Work</Link>
        <Link className="nav-link" to="/contact">Contact me</Link>
        <Link className="nav-link" to="/blog">blog</Link>
        <Link className="nav-link" to="/about-me">About me</Link>
      </div>
    </div>
  </div>
</NavStyles>
}