import React from 'react';
import UploadButton from './components/UploadButton';

function App() { 
  const handleFileSelect = (file) => {
    console.log('Ausgewählte Datei:', file);
    // Hier können Sie die Datei weiterverarbeiten
};

  return (
    <div>
            <h1>Ihre App</h1>
            <UploadButton onFileSelect={handleFileSelect} />
        </div>
  );
}

export default App;
