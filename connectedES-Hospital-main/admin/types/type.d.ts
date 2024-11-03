

export interface Case {
    id: number;
    patientName: string;
    priorityLevel: 'Low' | 'Medium' | 'High';
    status: 'New' | 'In Progress' | 'Completed';
  }
  