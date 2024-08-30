export class ProjShape {
  app_proj_id: number;
  app_proj_code: string ='';
  project_name: string;
  create_date: Date;
  status: string;
  regulator_code: string;
  manager: string;
  
    constructor(app_proj_id: number, app_proj_code:string, project_name: string, create_date: Date, status: string, regulator_code: string, manager: string) {
      this.app_proj_id = app_proj_id;
      this.project_name = project_name;
      this.create_date = create_date;
      this.status = status;
      this.regulator_code = regulator_code;
      this.manager = manager;
      // 其他屬性...
    }
  }
