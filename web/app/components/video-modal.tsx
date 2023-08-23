import { Close } from '@mui/icons-material';
import React from 'react';
import Modal from 'react-modal';

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
}

const VideoModal = ({ isOpen, onClose, videoId }: VideoModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Popup"
    >
      <div className="p-4 flex justify-end" onClick={onClose}>
        <Close className='cursor-pointer hover:cursor-pointer' />
      </div>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Video"
      ></iframe>
    </Modal>
  );
};

export default VideoModal