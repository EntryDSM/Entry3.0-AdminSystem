// Action's object
interface ApplicantsData {
  data: { 
    name: string;
    payment: boolean;
    receipt: boolean;
    receiptCode: string;
    region: string;
    type: string;
    userId: string;
  }[];
}

// Action
interface Action {
  type: string;
}

interface UpdateApplicantsDataAction extends Action {
  data: ApplicantsData;
}

// Image load
declare module '*.png' {
  const value: any;
  export = value;
}