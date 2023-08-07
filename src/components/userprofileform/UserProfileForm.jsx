import React from 'react';

const UserProfileForm = () => {
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img className="rounded-circle mt-5" width="150" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
            <span className="font-weight-bold">Edogaru</span>
            <span className="text-black-50">edogaru@mail.com.my</span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input type="text" className="form-control" placeholder="First Name" value="" />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input type="text" className="form-control" placeholder="Surname" value="" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <input type="text" className="form-control" placeholder="Enter Phone Number" value="" />
              </div>
              <div className="col-md-12">
                <label className="labels">Address Line 1</label>
                <input type="text" className="form-control" placeholder="Enter Address Line 1" value="" />
              </div>
              <div className="col-md-12">
                <label className="labels">Address Line 2</label>
                <input type="text" className="form-control" placeholder="Enter Address Line 2" value="" />
              </div>
              <div className="col-md-12">
                <label className="labels">Postcode</label>
                <input type="text" className="form-control" placeholder="Enter Postcode" value="" />
              </div>
              <div className="col-md-12">
                <label className="labels">State</label>
                <input type="text" className="form-control" placeholder="Enter State" value="" />
              </div>
              <div className="col-md-12">
                <label className="labels">Area</label>
                <input type="text" className="form-control" placeholder="Enter Area" value="" />
              </div>
              <div className="col-md-12">
                <label className="labels">Email ID</label>
                <input type="text" className="form-control" placeholder="Enter Email ID" value="" />
              </div>
              <div className="col-md-12">
                <label className="labels">Education</label>
                <input type="text" className="form-control" placeholder="Enter Education" value="" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Country</label>
                <input type="text" className="form-control" placeholder="Enter Country" value="" />
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input type="text" className="form-control" placeholder="Enter State/Region" value="" />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">Save Profile</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <span>Edit Experience</span>
              <span className="border px-3 p-1 add-experience">
                <i className="fa fa-plus"></i>&nbsp;Experience
              </span>
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Experience in Designing</label>
              <input type="text" className="form-control" placeholder="Enter Experience" value="" />
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Additional Details</label>
              <input type="text" className="form-control" placeholder="Enter Additional Details" value="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileForm;
