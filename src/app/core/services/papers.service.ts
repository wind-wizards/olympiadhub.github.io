import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, mergeAll, toArray } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Papers } from '../models/papers';

@Injectable({
  providedIn: 'root',
})
export class PapersService {
  getPaperById(id: number | string): Observable<Papers> {
    return this.getPapers(false).pipe(
      map((papers) => papers.find((paper) => paper.id === +id)!)
    );
  }
  constructor(private http: HttpClient) {}

  getPapers(featured?: boolean): Observable<Papers[]> {
    let papers$ = this.http.get<Papers[]>('assets/json/papers.json');

    if (featured) {
      return papers$.pipe(
        mergeAll(),
        filter((project) => project.featured || false),
        toArray()
      );
    }

    return papers$;
  }

  getPaperCategories() {}

  getPapersByCategory(category: string) {
    return;
  }
}
