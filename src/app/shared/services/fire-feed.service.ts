import { Injectable } from '@angular/core';
import { fireItem } from '../models/fireItem.model';
import { queryConfig } from '../models/queryConfig';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QueryDocumentSnapshot,
} from '@angular/fire/compat/firestore';
import {
  BehaviorSubject,
  Subscription,
  Observable,
  map,
  take,
  tap,
  throttleTime,
  mergeMap,
  scan,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireFeedService {
  constructor(private db: AngularFirestore) {
    const batchMap = this.offset.pipe(
      throttleTime(500),
      mergeMap((n) => this.getBatch(n)),
      scan((acc, batch) => {
        return { ...acc, ...batch };
      }, {})
    );

    this.infinite = batchMap.pipe(map((v) => Object.values(v)));
  }

  batch = 20;
  theEnd = false;
  offset: BehaviorSubject<any> = new BehaviorSubject(null);
  infinite?: Observable<any[]>;

  getBatch(offset: BehaviorSubject<any>) {
    console.log(offset);
    return this.db
      .collection('people', (ref) =>
        ref.orderBy('name').startAfter(offset).limit(this.batch)
      )
      .snapshotChanges()
      .pipe(
        tap((arr) => (arr.length ? null : (this.theEnd = true))),
        map((arr) => {
          return arr.reduce((acc, cur) => {
            const id = cur.payload.doc.id;
            const data = cur.payload.doc.data();
            return { ...acc, [id]: data };
          }, {});
        })
      );
  }

  nextBatch($event: any, offset: BehaviorSubject<any>, viewport: any) {
    if (this.theEnd) return;

    const end = viewport.getRenderedRange().end;
    const total = viewport.getDataLength();
    console.log(`${end}, '>=', ${total}`);
    if (end === total) {
      this.offset.next(offset);
    }
  }

  trackByIdx(i: any) {
    return i;
  }
}
