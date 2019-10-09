import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [];
  public allImageToNavigate=[];
  public allImageToShow=[];
  originalImage: any = '';
  constructor(private camera: Camera) { }

  async setData(id:any, data:any) {
    this.data[id] = data;
  }

  async getData(id:any) {
    return this.data[id];
  }

  async selectPictureCamera() {
    const sourceType: any = 1;
    const options: CameraOptions = {
      quality: 20,
      sourceType: 1,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    return this.camera.getPicture(options).then((imageUri) => {
      this.originalImage = '';
      this.allImageToShow.push('data:image/jpeg;base64,' + imageUri);
      return this.originalImage = 'data:image/jpeg;base64,' + imageUri;
      });
  }

  async selectPictureGallery() {
    const sourceType: any = 0;
    const options: CameraOptions = {
      quality: 20,
      sourceType: 0,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    return this.camera.getPicture(options).then((imageGUri) => {
      this.originalImage = '';
      this.allImageToShow.push('data:image/jpeg;base64,' + imageGUri);
      return this.originalImage = 'data:image/jpeg;base64,' + imageGUri;
    });
  }

}
