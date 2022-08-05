export interface Papers {
  id: number;
  name: string;
  image: string;
  stack: {
    categories: {
      subject: string;
      level?: string;
      competition?: string;
    };
    iconClasses: string;
    nameColor: string;
  };
  problems: {
    theoretical: [
      {
        description: string;
        subBranches: string[];
        links: string[];
      }
    ];
    experimental?: [
      {
        description: string;
        subBranches: string[];
        links: string[];
      }
    ];
  };
  statistics?: {
    participants: number | string;
    cuts: {
      gold: string;
      silver: string;
      bronze: string;
      honorable: string;
    };
    topCountries: string[];
  };
  information?: {
    host: string;
    website: string;
    date: string;
    commitee: string[];
  };
  generalDescription: string;
  featured: boolean;
  uploaded: string;
}
