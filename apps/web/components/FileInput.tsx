// components/FileInput.tsx
import { Button, Input, useToast } from "@chakra-ui/react";
import { ChangeEvent, useRef } from "react";

interface FileInputProps {
  onFileSelected: (fileData: ArrayBuffer | null) => void;
  fileSelected?: ArrayBuffer | undefined;
  onFileType?: (type: string) => void;
  handleFileChangeVoid: (file: File) => void;
}

const FileInput: React.FC<FileInputProps> = ({
  onFileSelected,
  fileSelected,
  onFileType,
  handleFileChangeVoid,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const toast = useToast();
  // const fileInput = document.getElementById('fileInput') as HTMLInputElement;

  // fileInput.addEventListener('change', (event) => {
  //     const selectedFile = event.target.files[0];

  //     if (selectedFile) {
  //       console.log('File name:', selectedFile.name);
  //       console.log('File type:', selectedFile.type);
  //       console.log('File size:', selectedFile.size, 'bytes');
  //     } else {
  //       console.log('No file selected');
  //     }
  //   });
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const handleFileChange = () => {

    const fileInput = inputRef.current;
    const inputFiles = e.target;

    // if (!inputFiles.files) {
    //   alert("No file was chosen");
    //   return;
    // }

    // if (!inputFiles.files || inputFiles.files.length === 0) {
    //     alert("Files list is empty");
    //     toast({
    //         title:"File is empty",
    //         status:"warning",
    //         isClosable:true
    //     })
    //     return;
    // }

    const file = inputFiles.files[0];

    // /** File validation */
    // if (!file.type.startsWith("image")||!file?.type?.startsWith("video")) {
    //     alert("Please select a valide image");
    //     toast({
    //         title:"Please select a valide image or mp4",
    //         status:"warning",
    //         isClosable:true
    //     })
    //     return;
    // }

    if (onFileType) {
      onFileType(file.type);
    }
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      handleFileChangeVoid(selectedFile);
      const reader = new FileReader();

      reader.onload = (event) => {
        const result = event.target?.result;
        console.log("result", result);
        // event.target.
        const buffer = event.target?.result as ArrayBuffer;

        console.log("buffer", buffer);

        onFileSelected(buffer);
        console.log("fileSelected", fileSelected);
      };

      reader.readAsArrayBuffer(selectedFile);
    } else {
      onFileSelected(null);
    }
  };

  return (
    <>
      <Input
        type="file"
        placeholder="Upload your file"
        size="xl"
        // className="mt-4 max-w-[500px]"
        className="mt-4"
        // color='brand.primary'
        ref={inputRef}
        accept=".png,.jpg,.jpeg,.svg"
        // style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {/* <Button onClick={() => inputRef.current?.click()}>Upload File</Button> */}
    </>
  );
};

export default FileInput;
