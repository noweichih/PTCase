export class CaseShape {
  casetype: string ='';
  pat: string;
  birthdate: Date;
  gender: string;
  startdate: Date;
  manager: string;
  caseid: number;
  
    constructor(casetype:string, pat: string, birthdate: Date, gender: string,startdate: Date, manager: string, caseid: number) {
      this.casetype = casetype;
      this.pat = pat;
      this.birthdate = birthdate;
      this.gender = gender;
      this.startdate = startdate;
      this.manager = manager;
      this.caseid = caseid;
      // 其他屬性...
    }
  }
