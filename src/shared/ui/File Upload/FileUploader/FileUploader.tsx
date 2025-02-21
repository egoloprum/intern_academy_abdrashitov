"use client"

import { FC, useRef, useState } from 'react'
import FileUploaderSvg from './assets/FileUploaderSvg'
import FileCancelSvg from './assets/FileCancelSvg'
import styles from './fileUploader.module.scss'

interface FileUploaderProps {
  size?: 'large' | 'medium' | 'small'
  disabled?: boolean
}

const FileUploader: FC<FileUploaderProps> = ({
  size='medium',
  disabled=false
}) => {
  const [fileName, setFileName] = useState<string | null>(null)
  const [fileSize, setFileSize] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [isRotated, setIsRotated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      setFileSize(file.size)
      setIsLoading(true)

      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    } else {
      setFileName(null)
      setFileSize(null)
    }
  }

  const formatFileSize = (size: number) => {
    if (size < 1024) {
      return `${size} bytes`
    } else if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`
    } else {
      return `${(size / (1024 * 1024)).toFixed(2)} MB`
    }
  }

  const handleRemoveFile = () => {
    setIsRotated(true)
    setTimeout(() => {
      setFileName(null)
      setFileSize(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      setIsRotated(false)
    }, 300)
  }

  return (
    <div className={styles['file-uploader-wrapper']}>
      <section 
        id='file-uploader-container'
        className={[
          styles[`file-uploader-container`],
          styles[`${disabled && 'file-disabled-container'}`],
        ].join(' ')}
      >
        <input 
          className={styles['file-input']} 
          type="file" 
          onChange={handleFileChange} 
          ref={fileInputRef}
          disabled={disabled}
        />
        <div className={[
          styles[`loading-bar`],
          styles[`${isLoading ? 'loading-start' : 'loading-end'}`],
        ].join(' ')} />
        <FileUploaderSvg className={styles[`${size}-file-svg`]} disabled={disabled} />
        <span 
          className={[
            styles[`file-text`],
            styles[`${size}-file-font`],
            styles[`${disabled && 'file-disabled-text'}`],            
          ].join(' ')}
        >
          {fileName ? fileName : 'File Upload'}
        </span>
        <span 
          className={[
            styles[`file-text`],
            styles[`${size}-file-font`],
            styles[`${disabled && 'file-disabled-text'}`],    
          ].join(' ')}
        >
          {fileSize ? formatFileSize(fileSize) : '3.32 MB'}
        </span>
        <FileCancelSvg
          onClick={handleRemoveFile}
          className={[
            styles[`${size}-file-svg`],
            styles[`${!disabled && 'file-cancel-svg'}`],
            styles[`${!disabled && isRotated ? 'rotate' : ''}`],
          ].join(' ')}
          disabled={disabled}
        />

      </section>
      <label 
        htmlFor='#file-uploader-container'
        className={[styles[`file-label`], styles[`${size}-file-label`]].join(' ')}
      >
        This is a helper text
      </label>
    </div>
  )
}

export default FileUploader
