import { useState } from "react";
import { AddressForm } from "./addressForm";
import { Select } from "./UI/select";
import { departments } from "../data/selectData";
import { Modal } from "./UI/modal";
import { CustomDatePicker } from "./UI/datePicker";
import { addEmployee } from "../features/employees";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

export function EmployeeForm() {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [formInputs, setFormsInputs] = useState({
    firstname: "",
    lastname: "",
    dateOfBirth: new Date(),
    startDate: new Date(),
    street: "",
    city: "",
    zipCode: "",
    state: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormsInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    setFormsInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const handleDateChange = (name, date) => {
    setFormsInputs({ ...formInputs, [name]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addEmployee({
        ...formInputs,
        id: (Math.random() * 100).toString(),
        dateOfBirth: format(formInputs.dateOfBirth, "dd/MM/yyyy"),
        startDate: format(formInputs.startDate, "dd/MM/yyyy"),
      }),
    );
    setOpenModal(true);
    setFormsInputs({
      firstname: "",
      lastname: "",
      dateOfBirth: new Date(),
      startDate: new Date(),
      street: "",
      city: "",
      zipCode: "",
      state: "",
      department: "",
    });
  };

  return (
    <>
      <div className="mx-auto w-1/2">
        <h2 className="h2">Create Employee</h2>
        <form className="flex flex-col space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="first-name" className="label">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="firstname"
                value={formInputs.firstname}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="label">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="lastname"
                value={formInputs.lastname}
                onChange={handleChange}
                className="input"
              />
            </div>
            <div>
              <label htmlFor="date-of-birth" className="label">
                Date of Birth
              </label>
              <CustomDatePicker
                id="date-of-birth"
                name="dateOfBirth"
                startDate={formInputs.dateOfBirth}
                handleDateChange={handleDateChange}
              />
            </div>
            <div>
              <label htmlFor="start-date" className="label">
                Start Date
              </label>
              <CustomDatePicker
                id="start-date"
                name="startDate"
                startDate={formInputs.startDate}
                handleDateChange={handleDateChange}
              />
            </div>

            <AddressForm
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              formInputs={formInputs}
            />

            <div>
              <Select
                label="Deparment"
                name="department"
                id="department"
                options={departments}
                onChange={handleSelectChange}
              />
            </div>
          </div>

          <button className="btn">Save</button>
        </form>
      </div>
      <Modal
        open={openModal}
        setOpenModal={setOpenModal}
        content="Employee Created!"
      />
    </>
  );
}
