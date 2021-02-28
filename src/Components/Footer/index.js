import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterWrap,FooterLinkTitle, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconsLink } from './FooterElements';
import {FaFacebook, FaLinkedin, FaYoutube, FaTwitter, FaInstagram} from "react-icons/fa"; 
import { animateScroll as scroll } from "react-scroll";
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to ='/signin'>How it works</FooterLink>
                            <FooterLink to ='/signin'>Testimoniols</FooterLink>
                            <FooterLink to ='/signin'>Carrers</FooterLink>
                            <FooterLink to ='/signin'>Investors</FooterLink>
                            <FooterLink to ='/signin'>Terms of Service</FooterLink>                     
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to ='/signin'>Contact</FooterLink>
                            <FooterLink to ='/signin'>Support</FooterLink>
                            <FooterLink to ='/signin'>Destination</FooterLink>
                            <FooterLink to ='/signin'>Sponserships</FooterLink>
                            <FooterLink to ='/signin'>Charities</FooterLink>                     
                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to ='/signin'>Submit Video</FooterLink>
                            <FooterLink to ='/signin'>Ambassadors</FooterLink>
                            <FooterLink to ='/signin'>Agency</FooterLink>
                            <FooterLink to ='/signin'>Influencer</FooterLink>
                            <FooterLink to ='/signin'>Sponsered Partners</FooterLink>                     
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to ='/signin'>Instagram</FooterLink>
                            <FooterLink to ='/signin'>Facebook</FooterLink>
                            <FooterLink to ='/signin'>Youtube</FooterLink>
                            <FooterLink to ='/signin'>Twitter</FooterLink>
                            <FooterLink to ='/signin'>LinkedIn</FooterLink>                     
                        </FooterLinkItems>
                        
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo onClick = {toggleHome} to ='/'
                            smooth = {true} 
                            duration = {500}
                            spy={true}
                            exact = "true"
                            offset = {-80}
                            >Intigo
                            </SocialLogo>
                            <WebsiteRights>Intigo © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconsLink href = "//www.facebook.com" target = "_blank" aria-label = "Facebook">
                                    <FaFacebook/>
                                </SocialIconsLink>
                                <SocialIconsLink href = "//www.instagram.com" target = "_blank" aria-label = "Instagram">
                                    <FaInstagram/>
                                </SocialIconsLink>
                                <SocialIconsLink href = "//www.youtube.com" target = "_blank" aria-label = "Youtube">
                                    <FaYoutube/>
                                </SocialIconsLink>
                                <SocialIconsLink href = "//www.twitter.com" target = "_blank" aria-label = "Twitter">
                                    <FaTwitter/>
                                </SocialIconsLink>
                                <SocialIconsLink href = "//www.linkedin.com" target = "_blank" aria-label = "LinkedIn">
                                    <FaLinkedin/>
                                </SocialIconsLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
