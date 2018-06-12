import React from 'react'; 
import {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    RedditShareCount,
    TumblrShareCount,
  
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    TumblrShareButton,
  
    FacebookIcon,
    TwitterIcon,
    GooglePlusIcon,
    LinkedinIcon,
    TelegramIcon,
    WhatsappIcon,
    RedditIcon,
    TumblrIcon,
  } from 'react-share';

  import Typography from '@material-ui/core/Typography';
  import './Footer.css';

const Footer = () => {

    const shareUrl = "http://kakidoro.s3-website-sa-east-1.amazonaws.com";
    const title = 'Kakidoro';
    const iconSize = 32;

    return (
        <footer>
        <div className="Footer">
          <div className="ShareRoot">
            <FacebookShareButton url={shareUrl} quote={title}
              className="ShareButton">
              <FacebookIcon
                size={iconSize}
                round />
            </FacebookShareButton>
  
            <FacebookShareCount
              url={shareUrl}
              className="ShareCount">
              {count => <Typography variant="button" color="secondary">{count}</Typography> }
            </FacebookShareCount>
          </div>
  
          <div className="ShareRoot">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="ShareButton">
              <TwitterIcon
                size={iconSize}
                round />
            </TwitterShareButton>
  
            <div className="ShareCount">
              &nbsp;
            </div>
          </div>
  
          <div className="ShareRoot">
            <TelegramShareButton
              url={shareUrl}
              title={title}
              className="ShareButton">
              <TelegramIcon size={iconSize} round />
            </TelegramShareButton>
  
            <div className="ShareCount">
              &nbsp;
            </div>
          </div>
  
          <div className="ShareRoot">
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
              className="ShareButton">
              <WhatsappIcon size={iconSize} round />
            </WhatsappShareButton>
  
            <div className="ShareCount">
              &nbsp;
            </div>
          </div>
  
          <div className="ShareRoot">
            <GooglePlusShareButton
              url={shareUrl}
              className="ShareButton">
              <GooglePlusIcon
                size={iconSize}
                round />
            </GooglePlusShareButton>
  
            <GooglePlusShareCount
              url={shareUrl}
              className="ShareCount">
              {count => <Typography variant="button" color="secondary">{count}</Typography> }
            </GooglePlusShareCount>
          </div>
  
          <div className="ShareRoot">
            <LinkedinShareButton
              url={shareUrl}
              title={title}
              windowWidth={750}
              windowHeight={600}
              className="ShareButton">
              <LinkedinIcon
                size={iconSize}
                round />
            </LinkedinShareButton>
  
            <LinkedinShareCount
              url={shareUrl}
              className="ShareCount">
             {count => <Typography variant="button" color="secondary">{count}</Typography> }
            </LinkedinShareCount>
          </div>
  
          <div className="ShareRoot">
            <RedditShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
              className="ShareButton">
              <RedditIcon
                size={iconSize}
                round />
            </RedditShareButton>
  
            <RedditShareCount url={shareUrl} className="ShareCount">
              {count => <Typography variant="button" color="secondary">{count}</Typography> }
            </RedditShareCount>
          </div>
  
          <div className="ShareRoot">
            <TumblrShareButton
              url={shareUrl}
              title={title}
              windowWidth={660}
              windowHeight={460}
              className="ShareButton">
              <TumblrIcon
                size={iconSize}
                round />
            </TumblrShareButton>
  
            <TumblrShareCount url={shareUrl} className="ShareCount">
              {count => <Typography variant="button" color="secondary">{count}</Typography> }
            </TumblrShareCount>
          </div>
        </div>
        </footer>
      );
}
 
export default Footer;