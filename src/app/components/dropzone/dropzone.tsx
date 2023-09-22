import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './dropzone.styles.module.css';
import Image from 'next/image';

export const Dropzone = () => {
  const [paths, setPaths] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setPaths(acceptedFiles.map((file: any) => URL.createObjectURL(file)));
    },
    [setPaths],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={styles.imageDropDown}>
          <FontAwesomeIcon icon={faImage} color="#909192" size="5x" />
        </div>
      </div>
      {paths.map((path) => (
        <Image key={path} src={path} alt="" fill={true} />
      ))}
    </div>
  );
};
