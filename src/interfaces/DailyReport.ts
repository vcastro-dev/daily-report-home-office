import { StatusDailyReport } from "../enums/StatusDailyReport";

export interface DailyReportDto {
    Id?: number;
    EmployeeId: number;
    ManagerId: number;
    Status: StatusDailyReport;
    JobDate: Date;
    ManagerUserProfileId: number;
    ObservacaoGestor: string;
}