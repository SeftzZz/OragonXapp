import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oragon-adm';
  // items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    // this.items = firestore.collection('Players').valueChanges({ idField: 'id' });
    // this.items.subscribe((data : any) => {
    //   console.log(data)
    // });
  }

  ngOnInit(){
    
  }
}
