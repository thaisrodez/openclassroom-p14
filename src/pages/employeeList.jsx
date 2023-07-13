import { useMemo } from "react";
import { Header } from "../components/header";
import { mockEmployees, tableHeaders } from "../data/mockData";
import { useSelector } from "react-redux";
import { Table } from "paginated-table-react-pkg";

export function EmployeeList() {
  const newEmployees = useSelector((state) => state.employees);
  const getEmployees = useMemo(
    () => newEmployees.concat(mockEmployees),
    [newEmployees],
  );
  return (
    <>
      <Header title="Current Employees" linkLabel="Home" linkPath="/" />
      <Table data={getEmployees} tableHeaders={tableHeaders} />
    </>
  );
}
