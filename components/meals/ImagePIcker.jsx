"use client";
import React, { useRef, useState } from "react";

import style from "./image-picker.module.css";
import Image from "next/image";

const ImagePIcker = ({ labe, name }) => {
  const imageInputRef = useRef();
  const [pickImage, setPickImage] = useState();
  function handelPickClick() {
    imageInputRef.current.click();
  }
  function handelImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickImage(null);
      return null;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={style.picker}>
      <label htmlFor={name}>{labe}</label>
      <div className={style.controls}>
        <div className={style.preview}>
          {!pickImage && <p>No Image Picked yet.</p>}
          {pickImage && (
            <Image src={pickImage} alt="image selected by user." fill />
          )}
        </div>
        <input
          className={style.input}
          type="file"
          name={name}
          id={name}
          accept="image/png,image/jpeg "
          ref={imageInputRef}
          onChange={handelImageChange}
        />
        <button
          className={style.button}
          type="button"
          onClick={handelPickClick}
        >
          Pick An Image
        </button>
      </div>
    </div>
  );
};

export default ImagePIcker;
