import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LabseqResult {
  index: number;
  value: number;
}

@Injectable({ providedIn: 'root' })
export class LabseqService {
  private apiUrl = 'http://localhost:8080/labseq'; 

  constructor(private http: HttpClient) {}

  getLabseqValue(n: number): Observable<LabseqResult> {
    return this.http.get<LabseqResult>(`${this.apiUrl}/${n}`);
  }
}
