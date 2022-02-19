import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/8044c585-5907-40ad-8b40-e3a3b4957b13',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export function PageEditarPerfil(){
    return(
        <div className="container">
            Pagina editar perfil
            <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        </div>
    )
}