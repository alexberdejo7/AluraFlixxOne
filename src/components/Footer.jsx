import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterStyle>
            <img src="./logo-alura.png" alt="" />
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
    display: flex;
    justify-content: center;
    padding: 40px;
    background: #000;
    border-top: 2px solid orange;
    > img {
        width: 170px;
        filter: invert(75%) sepia(1000%) saturate(1000%) hue-rotate(0deg) brightness(100%) contrast(100%);
    }
`

export default Footer