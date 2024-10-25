import "../../../assets/css/admin/teachersPage.css";
import { useState } from "react";
import Wrapper from "../../../assets/css/admin/AddTeachers";

import {
  AiOutlineCloudDownload,
  AiOutlinePlusCircle,
  AiOutlineClose,
  AiOutlineCloudUpload,
} from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { GoPencil } from "react-icons/go";

const AddTeachers = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addTeachers, setAddTeachers] = useState(true);

  function showModal() {
    setIsModalOpen(true);
  }

  function closeAddTeachers() {
    setAddTeachers(false);
  }
  function openAddTeachers() {
    setAddTeachers(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <article className="admin-dashboard teachers-page">
      <section className="admin-dashboard-heading">
        <div>
          <h1>Add Staff</h1>
          <p>Fill in the details of staff below.</p>
        </div>

        <p>
          <span className="gray">Teachers</span>/ <span>Add Teachers</span>
        </p>
      </section>

      <div className="teachers-select-file">
        <div className="custom-file-label">
          <input
            type="file"
            id="customFileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <AiOutlineCloudDownload className="import-icon" />
          <label htmlFor="customFileInput">
            {selectedFile ? selectedFile.name : "Import CVS"}
          </label>
        </div>
        <button onClick={openAddTeachers} className="import-btn">
          <AiOutlinePlusCircle className="add-icon" />
          Add Staff
        </button>
      </div>
      {addTeachers && (
        <Wrapper>
          <section className="modal">
            <section className="modal-header-container">
              <div className="modal-header">
                <h1>UpdateTeachers profile details</h1>
                <AiOutlineClose className="icon" onClick={closeAddTeachers} />
              </div>

              <RxAvatar className="teacher-avatar" />

              <div className="update-btns">
                <div className="import-btn">
                  <input
                    type="file"
                    id="customFileInput"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />

                  <GoPencil className="import-icon" />
                  <label htmlFor="customFileInput">Upload Photo</label>
                </div>
                <div className="update-btns">
                  <div className="custom-file-label">
                    <input
                      type="file"
                      id="customFileInput"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />

                    <AiOutlineCloudDownload className="import-icon" />
                    <label htmlFor="customFileInput">Import CVS</label>
                  </div>
                  <div>
                    <button onClick={showModal} className="import-btn">
                      Manually
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="content">
              <section className="details">
                <h3>School Details</h3>
                <div>
                  <label>Class</label>
                  <input type="text" placeholder="#234456" />
                </div>
                <div>
                  <label>Staff ID</label>
                  <input type="text" placeholder="#1234456" />
                </div>
                <div>
                  <label>Password</label>
                  <input type="password" />
                </div>
                <div>
                  <label>Confirm Password</label>
                  <input type="password" />
                </div>
                <div>
                  <label>Year of Enrollement</label>
                  <input type="date" />
                </div>
              </section>

              <section>
                <h3>Personal Information</h3>
                <div className="personal-details">
                  <div>
                    <label>First name</label>
                    <input type="text" placeholder="Olamide" />
                  </div>
                  <div>
                    <label>Midlle name</label>
                    <input type="text" placeholder="Emmanuel" />
                  </div>
                  <div>
                    <label>Last name</label>
                    <input type="text" placeholder="Akinton" />
                  </div>
                </div>
                <div className="personal-details">
                  <div>
                    <label>Date of birth</label>
                    <input type="date" />
                  </div>
                  <div>
                    <label>Gender</label>
                    <select name="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="personal-details">
                  <div>
                    <label>State of origin</label>
                    <input type="text" placeholder="Ondo" />
                  </div>
                  <div>
                    <label>LGA of origin</label>
                    <input type="text" placeholder="Ifedore" />
                  </div>
                </div>

                <div>
                  <div className="select-number">
                    <label>Phone number</label>
                    <div>
                      <select name="country-code">
                        <option value="code">+234</option>
                      </select>

                      <input type="text" placeholder="9123434123" />
                    </div>
                  </div>

                  <div>
                    <label>Email</label>
                    <input type="text" placeholder="Johndoe@gmail.com" />
                  </div>
                  <div>
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="04, Gwari avenue barnawa estate."
                    />
                  </div>
                </div>
                <div className="personal-details">
                  <div>
                    <label>City</label>
                    <select className="city" name="city">
                      <option>Enter city</option>
                      <option>Maiduguri</option>
                    </select>
                  </div>
                  <div>
                    <label>Zip code</label>
                    <select className="zip-code" name="city">
                      <option>Enter city</option>
                      <option>Maiduguri</option>
                    </select>
                  </div>
                </div>
              </section>
              <section>
                <h3>Other details</h3>

                <div className="certificates">
                  <label>Birth certificate</label>
                  <div className="custom-file-label uploads">
                    <input
                      type="file"
                      id="customFileInput"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />

                    <AiOutlineCloudUpload className="import-icon" />
                    <label htmlFor="customFileInput">
                      Upload Birth certificate
                    </label>
                  </div>
                </div>
                <div className="certificates">
                  <label>
                    Medical report <span>(Optional)</span>
                  </label>
                  <div className="custom-file-label uploads">
                    <input
                      type="file"
                      id="customFileInput"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />

                    <AiOutlineCloudUpload className="import-icon" />
                    <label htmlFor="customFileInput">
                      Upload medical document
                    </label>
                  </div>
                </div>
                <div className="certificates">
                  <label>
                    Picture <span>(Passport photographs)</span>
                  </label>
                  <div className="custom-file-label uploads">
                    <input
                      type="file"
                      id="customFileInput"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />

                    <AiOutlineCloudUpload className="import-icon" />
                    <label htmlFor="customFileInput">
                      Upload Passport photograph
                    </label>
                  </div>
                </div>
              </section>
              <div className="add-staff">
                <button className="import-btn">Add Staff</button>
              </div>
            </section>
          </section>
        </Wrapper>
      )}
    </article>
  );
};

export default AddTeachers;
