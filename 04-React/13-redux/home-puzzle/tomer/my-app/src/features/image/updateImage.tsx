import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateImage } from './imageSlice';

interface Image {
  id: string;
  url: string;
  title: string;
}

interface UpdateImageComponentProps {
  image: Image;
}

const UpdateImageComponent = ({ image }: UpdateImageComponentProps) => {
  const [newUrl, setNewUrl] = useState(image.url);
  const [newTitle, setNewTitle] = useState(image.title);
  const dispatch = useDispatch();

  const handleUpdateImage = () => {
    const updatedImage: Image = {
      ...image,
      url: newUrl,
      title: newTitle,
    };

    // Dispatch the updateImage action
    dispatch(updateImage(updatedImage));
  };

  return (
    <div>
      <input
        type="text"
        value={newUrl}
        onChange={(e) => setNewUrl(e.target.value)}
      />
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      {/* Button to trigger the image update */}
      <button onClick={handleUpdateImage}>Update Image</button>
    </div>
  );
};

export default UpdateImageComponent;
