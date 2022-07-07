import React ,{ useState } from 'react';
import '../App.css';

const ImageUpload = ({ newUser, setNewUser }) => {
    const [setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setNewUser({...newUser, photoId: e.target.files[0].name});
        setSelectedFile(e.target.files[0]);
    };

    return (
        <div className="ImageUpload">
            <p className="photo-label">Photo:</p>
            <input type="file" className="file-input" onChange={(e) => handleFileInput(e)} />
        </div>
    );
}

export default ImageUpload;
