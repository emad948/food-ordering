import { SocialMediaContact, SocialMediaNetwork } from '@brockhaus/interfaces';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, SxProps } from '@mui/material';
import React from 'react';

export interface MuiSocialIconsProps {
  socialMedia: SocialMediaContact;
  sx?: SxProps;
}

const MuiSocialIcons: React.FC<MuiSocialIconsProps> = ({ socialMedia, sx }) => {
  const getSocialMediaIcon = () => {
    switch (socialMedia.network) {
      case SocialMediaNetwork.FACEBOOK:
        return (
          <Link href={socialMedia.url} target="_blank">
            <FacebookIcon sx={sx} />
          </Link>
        );
      case SocialMediaNetwork.INSTAGRAM:
        return (
          <Link href={socialMedia.url} target="_blank">
            <InstagramIcon sx={sx} />
          </Link>
        );
      case SocialMediaNetwork.TWITTER:
        return (
          <Link href={socialMedia.url} target="_blank">
            <TwitterIcon sx={sx} />
          </Link>
        );
      case SocialMediaNetwork.LINKEDIN:
        return (
          <Link href={socialMedia.url} target="_blank">
            <LinkedInIcon sx={sx} />
          </Link>
        );
      case SocialMediaNetwork.YOUTUBE:
        return (
          <Link href={socialMedia.url} target="_blank">
            <YouTubeIcon sx={sx} />
          </Link>
        );
      default:
        return null;
    }
  };

  return <>{getSocialMediaIcon()}</>;
};

export default MuiSocialIcons;
