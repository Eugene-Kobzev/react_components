import { useState } from 'react'
import DragNDropUpload from 'components/common/DragNDropUpload/DragNDropUpload'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

interface IFile {
  name: string,
  type?: string,
  path?: string,
}

const FileComponent = ({ file }): JSX.Element => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <InsertDriveFileIcon /> {file.name}
    </div>
  )
}

export default function () {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const handleUpload = (event: Event, files) => {
    setUploadedFiles(files)
  }

  return (
    <>
      <DragNDropUpload
        onFileChange={handleUpload}
      />
      <div>
        {uploadedFiles.length
          ? uploadedFiles.map((el: IFile, i: number) => <FileComponent file={el} key={`${el.name}-${i}`} />)
          : null
        }
      </div>
    </>
  )
}