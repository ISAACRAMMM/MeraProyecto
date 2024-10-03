
import { useState } from 'react';

export function UploadImg() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Por favor selecciona un archivo.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`http://localhost:3300/uploadImg`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert('Imagen subida con éxito: ' + data.url);
      } else {
        alert('Error al subir la imagen: ' + data.message);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='file' accept="image/*" onChange={handleFileChange} />
        <button type="submit">Subir Imagen</button>
      </form>
    </div>
  );
}
