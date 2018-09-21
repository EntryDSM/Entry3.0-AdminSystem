// Action's object
interface ApplicantsData {
  applicantsData: { 
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

// Event target
interface Target {
  target: HTMLInputElement;
}

// Image load
declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}