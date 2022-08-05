import { DocumentReference } from '@angular/fire/firestore';

export interface fireItem {
  id: string;
  ref: DocumentReference;
  data: any;
}
