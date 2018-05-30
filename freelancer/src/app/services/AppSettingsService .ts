import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


export class AppSettingsService {
   constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            console.log(data)
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/config.json")
    }
}