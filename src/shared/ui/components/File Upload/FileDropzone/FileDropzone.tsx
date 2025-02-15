"use client"

import { FC, useState } from 'react'
import FileDropzoneSvg from './assets/FileDropzoneSvg'
import Button from '../../Button/Button'
import styles from './fileDropzone.module.scss'

interface FileDropzoneProps {
  size?: 'large' | 'medium' | 'small' | 'xs'
  error?: boolean
  disabled?: boolean
}

const FileDropzone: FC<FileDropzoneProps> = ({
  size="medium",
  error=false,
  disabled=false
}) => {
  const [file, setFile] = useState<File | null>(null)
  const [isError, setIsError] = useState<boolean>(error)
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()

    const droppedFiles = event.dataTransfer.files
    if (droppedFiles.length > 0) {
      validateFile(droppedFiles[0])
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
    if (selectedFiles && selectedFiles.length > 0) {
      validateFile(selectedFiles[0])
    }
  }

  const validateFile = (file: File) => {
    const validTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/webp', 'image/svg+xml']
    if (validTypes.includes(file.type)) {
      setFile(file)
      setIsError(false)
    } else {
      setFile(null)
      setIsError(true)
    }
  }

  const handleClicked = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 100)
  }

  return (
    <div 
      className={[
        styles[`dropzone-wrapper`],
        styles[`${size}-dropzone-wrapper`],
        styles[`${isError && 'dropzone-error-wrapper'}`],
        styles[`${isClicked && 'dropzone-active-wrapper'}`],
        styles[`${disabled && 'dropzone-disabled-wrapper'}`],
      ].join(' ')}
    >
      <section className={styles['dropzone-container']} onDrop={handleDrop}>
        <input 
          type="file" 
          className={styles['dropzone-input']}
          accept="image/png, image/jpeg, image/gif, image/webp, image/svg+xml"
          onChange={handleFileChange}
          onClick={handleClicked}
          disabled={disabled}
        />
        <FileDropzoneSvg 
          className={[styles[`dropzone-svg`], styles[`${size}-dropzone-svg`]].join(' ')} 
          isClicked={isClicked} 
          isDisabled={disabled} 
        />

        <div className={styles['dropzone-insider']}>
          <span 
            className={[
              styles[`dropzone-text`],
              styles[`${size}-dropzone-text`],
              styles[`${disabled && 'dropzone-disabled-text'}`],
            ].join(' ')}
          >
            {file ? file.name : 'Перетащите файл сюда или'}
          </span>
          <Button 
            size={size}
            mode={'clear'}
            isIconsNeeded={false}
            isDisabled={disabled}
            text={`${size} button`}
            className={[
              styles[`dropzone-button`],
              styles[`${size}-dropzone-button`],
              styles[`${isError && 'error-dropzone-button'}`]
            ].join(' ')}
          />
        </div>
      </section>
    </div>
  )
}

export default FileDropzone
