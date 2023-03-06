import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { FaCloudUploadAlt, FaFile, FaTimesCircle } from "react-icons/fa";

class ImageDrop extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({ files });
    };
    this.state = {
      files: [],
    };
  }

  render() {
    const files = this.state.files.map((file) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className="container xl:flex lg:block  gap-5">
            <div
              {...getRootProps({
                className:
                  "dropzone border-dotted border border-primary w-[300px] flex justify-center p-5 rounded-lg mt-3 bg-[#F5F5F5]",
              })}>
              <input {...getInputProps()} />
              <p className=" flex items-center gap-3 text-primary  ">
                <FaCloudUploadAlt className="text-5xl " />
                <div className=" flex flex-col ">
                  <span>Upload File</span>
                  <span className="text-sm text-[#A5A5A5]">
                    PDF, DOC, PPT, JPG, PNG
                  </span>
                </div>
              </p>
            </div>
            <aside className="rounded-lg border border-primary w-[300px] flex justify-center p-5 mt-3 relative">
              <div className="flex justify-center items-center">
                <FaFile className="text-primary text-3xl m-2" />
                <ul>{files}</ul>
              </div>

              <div className="absolute top-[-10px] right-[-10px] overflow-hidden">
                <FaTimesCircle className="text-3xl text-[#FF4A55] bg-white" />
              </div>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default ImageDrop;
