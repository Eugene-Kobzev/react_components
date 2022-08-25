import { useState } from 'react';
import { Button } from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useTheme } from '@mui/material/styles'
import './style.scss'

const getFileNameFromPath = (str: string): string | null => {
  const strMatches = str.match(/\\[^\\]+$/)
  return strMatches![0].replace('\\', '') ?? null
}

interface IDnDProps {
  title?: string,
  areaClassName?: string,
  btnclassName?: string,
  btnText?: string,
  icon?: JSX.Element,
  description?: string,
  onFileChange?: any,
}

/**
 *
 * @param onFileChange - func that returns (event, arr (files) )
 * @param areaClassName
 * @param btnclassName
 * @param btnText
 * @param icon
 * @param title
 * @param description
 * @returns
 */
export default ({ onFileChange, areaClassName, btnclassName, btnText, icon, title, description }: IDnDProps): JSX.Element => {
  const [drag, setDrag] = useState(false)
  const theme = useTheme()

  const primaryMainClr = theme.palette.primary.main

  const areaClass = `upload-area ${areaClassName ? areaClassName : ''}`
  const buttonClass = `upload-area__btn ${btnclassName ? btnclassName : ''}`

  const handleDragOver = event => {
    event.stopPropagation();
    event.preventDefault();
    setDrag(true)
  }
  const handleDragLeave = () => {
    setDrag(false)
  }

  const handleDrop = event => {
    event.preventDefault();
    const files = [...event.dataTransfer.files]
    setDrag(false)

    onFileChange && onFileChange(event, files)
  }

  const handleFileChange = (event): void => {
    const filePath = event!.target!.value
    const files = [{
      name: getFileNameFromPath(filePath),
      path: filePath
    }]

    onFileChange && onFileChange(event, files)
  }


  return (
    <div className={`${areaClass} ${drag ? 'upload-area--drag-over' : ''}`}
      onDragStart={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={() => handleDrop(event)}
    >
      <div className='upload-area__icon-area'>
        {
          icon ? icon : <CloudUploadOutlinedIcon sx={{ fontSize: '4em', color: primaryMainClr }} />
        }
      </div>
      <h4 className='upload-area__title'>
        {
          title ? title : 'Перетащите файл для загрузки '
        }
      </h4>
      {description
        ? <div className='upload-area__description'> {description} </div>
        : null
      }

      <div>
        <Button variant="contained"
          component="label"
          sx={{
            cursor: 'pointer',
          }}
          className={buttonClass}
        >
          {btnText ? btnText : 'Загрузить'}
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
      </div>


    </div>

  )
}