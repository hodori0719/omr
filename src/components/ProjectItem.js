import React from 'react';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Devicon from './Devicon'
import '../styles/ProjectItem.css';

function ProjectItem({ image, title, description, longDescription, images}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="projectItem" onClick={handleOpen}>
          <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
          <h1> {title} </h1>
          <p> {description}</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modalContainer">
          <div className="carousel">
            
          </div>
            
          <div className="modal-text">
            <p className="modal-title">
              {title} 
              <CloseIcon 
                className="closeIcon"
                onClick={handleClose}
              /> 
            </p>
            <div className="icons">
              <Devicon img='devicon-javascript-plain' tooltip='JavaScript'/>
              <Devicon img='devicon-discordjs-plain' tooltip='DiscordJS'/>
              <Devicon img='devicon-nodejs-plain' tooltip='NodeJS'/>
            </div>
            <p className="modal-description">
              {longDescription}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectItem;