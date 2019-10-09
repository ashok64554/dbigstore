import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone
} from "@angular/core";
import { ActionSheetController, AlertController } from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import * as firebase from "firebase";
import {
  AngularFireStorage,
  AngularFireUploadTask
} from "@angular/fire/storage";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";

import { Router, NavigationExtras } from "@angular/router";
import { DataService } from "./../../services/data.service";
import { CrudService } from "./../../services/crud.service";

@Component({
  selector: "app-product-image",
  templateUrl: "./product-image.page.html",
  styleUrls: ["./product-image.page.scss"]
})
export class ProductImagePage implements OnInit {
  //@ViewChild('waterMarkedImage',{static:true}) waterMarkImage: ElementRef;
  originalImage = null;
  blobImage = null;
  locationCordinates: any;
  loadingLocation: boolean;
  images: any;
  allImageToNavigate: any = [];
  allImageToShow: any = [];
  constructor(
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private camera: Camera,
    private router: Router,
    private geolocation: Geolocation,
    private storage: AngularFireStorage,
    private database: AngularFirestore,
    //private file: File,
    private dataService: DataService,
    private crudService: CrudService,
    private zone: NgZone
  ) {
    this.getLatLong();
    //Set collection where our documents/ images info will save
  }

  ngOnInit() {}

  // removeFromArray(myArray, key) {
  //   const index = myArray.indexOf(key, 0);
  //   if (index > -1) {
  //     myArray.splice(index, 1);
  //   }
  // }

  openDetailsWithService() {
    this.dataService.setData("upload", this.images);
    this.router.navigateByUrl("/product-details/upload");
  }

  async storeImage(blob: any, latitude: any, longitude: any) {
    var storageRef = firebase.storage().ref(
      `productImages/${new Date().getTime()}_${Math.random()
        .toString(36)
        .substring(2)}`
    );
    return storageRef
      .put(blob)
      .then(snapshot => {
        return snapshot.ref.getDownloadURL();
      })
      .then(downloadURL => {
        const objectToNavigate: any = {
          lat: latitude,
          long: longitude,
          filePath: downloadURL
        };
        return objectToNavigate;
      })
      .catch(err => {
        console.log(err);
      });
  }

  // This function is used to get the current latitude and longitude in app
  async takeSnap() {
    if (window.navigator.onLine == true) {
      const actionsheet = await this.actionSheetCtrl.create({
        header: "Choose Album",
        buttons: [
          {
            text: "Camera",
            handler: () => {
              this.dataService.selectPictureCamera().then(resp => {
                var cameraByteString = atob((resp.replace(/\s/g, '')).split(",")[1]);
                var camAB = new ArrayBuffer(cameraByteString.length);
                var camIA = new Uint8Array(camAB);

                for (var i = 0; i < cameraByteString.length; i++) {
                  camIA[i] = cameraByteString.charCodeAt(i);
                }
                const camBlob: any = new Blob([camIA.buffer], { type: "image/jpeg" });
                const camLat: any = this.locationCordinates.latitude;
                const camLng: any = this.locationCordinates.longitude;
                this.storeImage(camBlob, camLat, camLng).then(ImageCData => {
                  this.dataService.allImageToNavigate.push(ImageCData);
                });
              });
            }
          },
          {
            text: "Gallery",
            handler: () => {
              this.dataService.selectPictureGallery().then(Gresp => {
                var byteString = atob((Gresp.replace(/\s/g, '')).split(",")[1]);
                var ab = new ArrayBuffer(byteString.length);
                var ia = new Uint8Array(ab);

                  for (var i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                  }
                    const blob: any = new Blob([ia.buffer], { type: "image/jpeg" });
                    const lat: any = this.locationCordinates.latitude;
                    const lng: any = this.locationCordinates.longitude;
                    this.storeImage(blob, lat, lng).then(ImageData => {
                       this.dataService.allImageToNavigate.push(ImageData);
                    });
              });
            }
          },
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            }
          }
        ]
      });
      await actionsheet.present();
    } else {
      this.checkNetwork();
    }
  }

  getLatLong() {
    this.loadingLocation = true;
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.locationCordinates = resp.coords;
        this.loadingLocation = false;
      })
      .catch(error => {
        this.loadingLocation = false;
      });
  }

  productDetails() {
    if (this.dataService.allImageToShow.length > 0) {
      const imageDataNav = this.dataService.allImageToNavigate;
      this.dataService.setData("upload", imageDataNav);
      this.router.navigateByUrl("/product-details/upload");
    } else {
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: "Add Product",
      subHeader: "Select product images",
      message: "Please select at least one Image",
      buttons: ["OK"]
    });
    await alert.present();
  }

  async checkNetwork() {
    const alert = await this.alertCtrl.create({
      header: "Internet connection",
      subHeader: "",
      message: "Please check your network",
      buttons: ["OK"]
    });
    await alert.present();
  }

  logout() {
    firebase.auth().signOut().then(resp=>{
        localStorage.removeItem("userdata");
        firebase.auth().signOut();
        this.router.navigate(["/login"]);
    }).catch(error=>{
        console.log(error);
    });
  }
}
