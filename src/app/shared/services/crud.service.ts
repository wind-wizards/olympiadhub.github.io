import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private db: AngularFireDatabase) {}

  AddFireObject(path = 'papers-list', fireObject: any, $key: string) {
    this.db.list(path).push({ $key, ...fireObject });
  }
  // Fetch Single fireObject Object
  GetfireObject(path = 'papers-list/', id: string) {
    return this.db.object(path + id);
  }
  // Fetch fireObjects List
  GetfireObjectsList(path = 'papers-list') {
    return this.db.list(path);
  }
  // Update fireObject Object
  UpdatefireObject(
    path = 'papers-list/',
    id: string,
    fireObject: any,
    $key: string
  ) {
    this.db.object(path + id).update({ $key, ...fireObject });
  }
  // Delete Student Object
  DeleteFireObject(id: string, path = 'papers-list/') {
    this.db.object(path + id).remove();
  }
}
