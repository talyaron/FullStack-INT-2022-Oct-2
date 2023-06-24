import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteImage } from './imageSlice';

interface Image {
  id: string;
  title: string;
  url: string;
}

interface DeleteImageProps {
  image: Image;
}

const DeleteImage = ({ image }: DeleteImageProps) => {
  const dispatch = useDispatch();

  const handleDeleteImage = () => {
    dispatch(deleteImage(image));
  };

  return (
    <div>
      <button onClick={handleDeleteImage}>Delete Image</button>
    </div>
  );
};

export default DeleteImage;
