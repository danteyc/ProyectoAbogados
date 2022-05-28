import React, { useState, useEffect } from "react";
import { Form, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { postImage } from "../../api/postImage";
import "./UploadImage.scss";

export function UploadImage({ type, name, defaultImage }) {
  const [stateImage, setStateImage] = useState({ loading: false });
  const [image, setImage] = useState("");

  useEffect(() => {
    defaultImage &&
      setStateImage({
        imageUrl: `${process.env.REACT_APP_PATH_FILES}/${defaultImage}`,
        loading: false,
      });
  }, [defaultImage]);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e.file.response;
    }
    return e && e.fileList;
  };

  function beforeUpload(file) {
    const isJpgOrPng = ["image/jpeg", "image/jpg", "image/png"].includes(
      file.type
    );
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setStateImage({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      setStateImage({
        imageUrl: `${process.env.REACT_APP_PATH_FILES}/${image}`,
        loading: false,
      });
    }
  };

  const { loading, imageUrl } = stateImage;
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Subir imagen</div>
    </div>
  );
  return (
    <Form.Item
      name={name}
      label="Foto de Perfil"
      valuePropName="fileList"
      initialValue={
        defaultImage
          ? [
              {
                uid: "1",
                name: "Imagen",
                status: "done",
                response: defaultImage,
                url: `${process.env.REACT_APP_PATH_IMAGE}/${defaultImage}`,
              },
            ]
          : []
      }
      getValueFromEvent={normFile}
    >
      <Upload
        name="file"
        listType="picture-card"
        className="avatar-uploader"
        maxCount={1}
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        customRequest={(options) => {
          const data = new FormData();
          data.append("imagen", options.file);
          const config = {
            headers: {
              "content-type":
                "multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          };
          postImage(data, config)
            .then((res) => {
              setImage(res.data.file);
              options.onSuccess(res.data.file);
              options.file.response = res.data.file;
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </Form.Item>
  );
}
