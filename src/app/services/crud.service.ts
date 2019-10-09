import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private database: AngularFirestore,
  ) { }

  create_NewProduct(record:any) {
    return this.firestore.collection('Products').add(record);
  }

  add_subcollection(recordID:any,record:any){
    return this.firestore.collection('Products').doc(recordID).collection('Images').add(record);
  }

}