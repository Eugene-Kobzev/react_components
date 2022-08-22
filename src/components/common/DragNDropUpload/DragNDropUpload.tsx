// import React, { useState } from 'react';
// import { Box, Button } from '@mui/material';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import './style.scss'

// interface callBack {
//   fn: ([key: string]: string): void
// }

// /**
//  *
//  * @param onFileChange - func that returns (event, arr (files) )
//  * @param areaClassName
//  * @param btnclassName
//  * @param btnText
//  * @param icon
//  * @param title
//  * @param description
//  * @returns
//  */
// export default function ({ onFileChange, areaClassName, btnclassName, btnText, icon, title, description }) {
//   const [drag, setDrag] = useState(false)

//   let areaClass = `upload-area ${areaClassName ? areaClassName : ''}`
//   let buttonClass = `upload-area__btn ${btnclassName ? btnclassName : ''}`

//   const handleDragOver = event => {
//     event.stopPropagation();
//     event.preventDefault();
//     setDrag(true)
//   }
//   const handleDragLeave = () => {
//     console.log('Leave')
//     setDrag(false)
//   }

//   const handleDrop = event => {
//     event.preventDefault();
//     let files = [...event.dataTransfer.files]
//     setDrag(false)

//     onFileChange(event, files)
//   }

//   const handleFileChange = event => {
//     let file = event.target.value
//     let files = [{
//       name: getFileNameFromPath(file),
//       path: file,
//     }]


//     onFileChange(event, files)
//   }


//   return (
//     <div className={`${areaClass} ${drag ? 'upload-area--drag-over' : ''}`}
//       onDragStart={handleDragOver}
//       onDragLeave={handleDragLeave}
//       onDragOver={handleDragOver}
//       onDrop={() => handleDrop(event)}
//     >
//       <div className='upload-area__icon-area'>
//         {
//           icon ? icon : <CloudUploadIcon sx={{ fontSize: '4em', color: '#7e7e7e' }} />
//         }
//       </div>
//       <h4 className='upload-area__title'>
//         {
//           title ? title : 'Перетащите файл для загрузки '
//         }
//       </h4>
//       {description
//         ? <div className='upload-area__description'> {description} </div>
//         : null
//       }

//       <div>
//         <Button variant="contained"
//           component="label"
//           sx={{
//             cursor: 'pointer'
//           }}
//           className={buttonClass}
//         >
//           {btnText ? btnText : 'Загрузить'}
//           <input type="file" hidden onChange={handleFileChange} />
//         </Button>
//       </div>


//     </div>

//   )
// }

export { }