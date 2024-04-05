import { StatusDailyReport } from "../enums/StatusDailyReport";
import { Profile } from "./Profile";

export type DailyReport = {
  Id: number;
  Employee: Profile;
  Status: StatusDailyReport;
  JobDate: Date;
};

export type DailyReportCreate = {
  EmployeeId: number;
  Status: StatusDailyReport;
  JobDate: string;
};

export type DailyReportUpdate = {
  Status: StatusDailyReport;
};

export type DailyReportResponse = {
  Id: number;
  EmployeeId: number;
  Status: StatusDailyReport;
  JobDate: string;
};
