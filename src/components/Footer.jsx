import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {
  return (
    <div className='footer'>
      <p>© 2021 Gonzalo Pereira</p>
      <LinkedInIcon onClick={() => window.open('www.linkedin.com/in/shiva-singhal-b89202227')} />
      <GitHubIcon onClick={() => window.open('https://github.com/Harshsinghal2415')} />
    </div>
  );
}
