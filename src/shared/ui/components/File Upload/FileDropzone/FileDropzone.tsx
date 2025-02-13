"use client"

import { FC, useState } from 'react'
import "./fileDropzone.css"
import FileDropzoneSvg from './assets/FileDropzoneSvg'
import Button from '../../Button/Button'

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
      className={`
        dropzone-wrapper 
        ${size}-dropzone-wrapper 
        ${isError && 'dropzone-error-wrapper'} 
        ${isClicked && 'dropzone-active-wrapper'}
        ${disabled && 'dropzone-disabled-wrapper'}
      `}
    >
      <section className='dropzone-container' onDrop={handleDrop}>
        <input 
          type="file" 
          className={[
            'dropzone-input'
          ].join(' ')}
          accept="image/png, image/jpeg, image/gif, image/webp, image/svg+xml"
          onChange={handleFileChange}
          onClick={handleClicked}
          disabled={disabled}
        />
        <FileDropzoneSvg 
          className={`dropzone-svg ${size}-dropzone-svg`} 
          isClicked={isClicked} 
          isDisabled={disabled} 
        />

        <div className='dropzone-insider'>
          <span 
            className={`
              dropzone-text 
              ${size}-dropzone-text 
              ${disabled && 'dropzone-disabled-text'}
            `}
          >
            {file ? file.name : 'Перетащите файл сюда или'}
          </span>
          <Button 
            size={size}
            mode={'clear'}
            isIconsNeeded={false}
            isDisabled={disabled}
            text={`${size} button`}
            className={`dropzone-button ${size}-dropzone-button ${isError && 'error-dropzone-button'}`}
          />
        </div>
      </section>
    </div>
  )
}

export default FileDropzone
