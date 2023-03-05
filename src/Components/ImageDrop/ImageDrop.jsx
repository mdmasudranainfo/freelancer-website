import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";

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
                  "dropzone border-dotted border border-primary w-[300px] flex justify-center p-5 rounded-lg mt-3",
              })}>
              <input {...getInputProps()} />
              <p className=" flex items-center gap-3 text-primary  ">
                <FaCloudUploadAlt className="text-5xl " />
                <span>Upload File</span>
              </p>
            </div>
            <aside className="rounded-lg border border-primary w-[300px] flex justify-center p-5 mt-3">
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default ImageDrop;
