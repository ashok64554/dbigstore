(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-product-product-image-product-image-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-product/product-image/product-image.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-product/product-image/product-image.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Firestore Image Upload\n      </ion-title>\n    </ion-toolbar>\n</ion-header>\n   \n  <ion-content padding>\n      <div class=\"full-screen\">\n          <div class=\"title\">Add Product</div>\n          <div class=\"sub-title\">Select Product Images</div>\n          <div class=\"photos\">\n              <div class=\"add-photo\" (click)=\"takeSnap()\">\n                  <div class=\"add-photo-frame\">\n                    \n                  </div>\n              </div>\n              <!-- <div class=\"loadSelectedPhotos\" *ngIf=\"dataService?.allImageToShow?.length > 0\">\n                <div class=\"photo\" *ngFor=\"let item of dataService?.allImageToShow\">\n                    <img\n                        [src]=\"item\"\n                        alt\n                    >\n                </div>\n              </div> -->\n          </div>\n          <div class=\"gridAlign\">\n          <ion-grid class=\"grid-categories\" *ngIf=\"dataService?.allImageToShow?.length>0\">\n            <ion-row *ngFor=\"let item of dataService?.allImageToShow; let i = index\">\n              <ion-col *ngIf=\"i % 2 == 0\">\n                <img [src]=\"item\" />\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        \n          <ion-grid class=\"grid-categories\" *ngIf=\"dataService?.allImageToShow?.length>0\">\n            <ion-row *ngFor=\"let item of dataService?.allImageToShow; let i = index\" >\n              <ion-col *ngIf=\"i % 2 != 0\">\n                <img [src]=\"item\" />\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <div class=\"logoutAlign\">\n          <ion-grid>\n                <ion-row>\n                  <ion-col size=\"12\">\n                        <ion-button shape=\"round\" (click)=\"logout()\" >Logout</ion-button>\n                  </ion-col>\n                </ion-row>\n           </ion-grid>\n        </div>\n        <ion-button expand=\"block\" class=\"login-button\" (click)=\"productDetails()\"> Next </ion-button>\n      </div>\n      \n  </ion-content>"

/***/ }),

/***/ "./src/app/add-product/product-image/product-image.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/add-product/product-image/product-image.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProductImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductImagePageModule", function() { return ProductImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-image.page */ "./src/app/add-product/product-image/product-image.page.ts");
/* harmony import */ var _file_size_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../file-size-format.pipe */ "./src/app/file-size-format.pipe.ts");








const routes = [
    {
        path: '',
        component: _product_image_page__WEBPACK_IMPORTED_MODULE_6__["ProductImagePage"]
    }
];
let ProductImagePageModule = class ProductImagePageModule {
};
ProductImagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_product_image_page__WEBPACK_IMPORTED_MODULE_6__["ProductImagePage"], _file_size_format_pipe__WEBPACK_IMPORTED_MODULE_7__["FileSizeFormatPipe"]]
    })
], ProductImagePageModule);



/***/ }),

/***/ "./src/app/add-product/product-image/product-image.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/add-product/product-image/product-image.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-button {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n}\n.back-button i {\n  font-size: 1.5em;\n}\n.full-screen {\n  padding: 15px;\n}\n.title {\n  text-align: center;\n  font-weight: bolder;\n  font-size: 2em;\n}\n.sub-title {\n  margin-top: 10px;\n  text-align: center;\n}\n.grid-categories {\n  width: 47%;\n  float: left;\n  border: #3880FF 1px;\n}\n.gridAlign {\n  float: left;\n}\n.logoutAlign {\n  float: left;\n}\n.photos {\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: 50% 50%;\n}\n.photos .loadSelectedPhotos .photo {\n  padding: 10px;\n}\n.photos .loadSelectedPhotos .photo img {\n  width: 100%;\n}\n.photos .add-photo {\n  margin: 10px;\n  border: 1px dashed #3880FF;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2R1Y3QvcHJvZHVjdC1pbWFnZS9EOlxcbmV3cmlzZV9pb25pY19wcm9qZWN0c1xcbW9iaWxlLWFwcC9zcmNcXGFwcFxcYWRkLXByb2R1Y3RcXHByb2R1Y3QtaW1hZ2VcXHByb2R1Y3QtaW1hZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9hZGQtcHJvZHVjdC9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NKO0FEQ0k7RUFDSSxnQkFBQTtBQ0NSO0FER0E7RUFDSSxhQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUo7QURHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0E7RUFDSSxXQUFBO0FDQUo7QURHQTtFQUNJLFdBQUE7QUNBSjtBREdBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNBSjtBREVRO0VBQ0ksYUFBQTtBQ0FaO0FEQ1k7RUFDSSxXQUFBO0FDQ2hCO0FER0s7RUFDRyxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9hZGQtcHJvZHVjdC9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG5cbiAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB9XG59XG5cbi5mdWxsLXNjcmVlbiB7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuLnN1Yi10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmlkLWNhdGVnb3JpZXMge1xuICAgIHdpZHRoOiA0NyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyOiAjMzg4MEZGIDFweDtcbn1cblxuLmdyaWRBbGlnbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5sb2dvdXRBbGlnbiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5waG90b3Mge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgLmxvYWRTZWxlY3RlZFBob3RvcyB7XG4gICAgICAgIC5waG90byB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAgLmFkZC1waG90byB7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICMzODgwRkY7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxufSIsIi5iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAyMHB4O1xufVxuLmJhY2stYnV0dG9uIGkge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uZnVsbC1zY3JlZW4ge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JpZC1jYXRlZ29yaWVzIHtcbiAgd2lkdGg6IDQ3JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogIzM4ODBGRiAxcHg7XG59XG5cbi5ncmlkQWxpZ24ge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxvZ291dEFsaWduIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5waG90b3Mge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG59XG4ucGhvdG9zIC5sb2FkU2VsZWN0ZWRQaG90b3MgLnBob3RvIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5waG90b3MgLmxvYWRTZWxlY3RlZFBob3RvcyAucGhvdG8gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGhvdG9zIC5hZGQtcGhvdG8ge1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjMzg4MEZGO1xuICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-product/product-image/product-image.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/add-product/product-image/product-image.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProductImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductImagePage", function() { return ProductImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/crud.service */ "./src/app/services/crud.service.ts");











let ProductImagePage = class ProductImagePage {
    constructor(actionSheetCtrl, alertCtrl, camera, router, geolocation, storage, database, 
    //private file: File,
    dataService, crudService, zone) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.router = router;
        this.geolocation = geolocation;
        this.storage = storage;
        this.database = database;
        this.dataService = dataService;
        this.crudService = crudService;
        this.zone = zone;
        //@ViewChild('waterMarkedImage',{static:true}) waterMarkImage: ElementRef;
        this.originalImage = null;
        this.blobImage = null;
        this.allImageToNavigate = [];
        this.allImageToShow = [];
        this.getLatLong();
        //Set collection where our documents/ images info will save
    }
    ngOnInit() { }
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
    storeImage(blob, latitude, longitude) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var storageRef = firebase__WEBPACK_IMPORTED_MODULE_5__["storage"]().ref(`productImages/${new Date().getTime()}_${Math.random()
                .toString(36)
                .substring(2)}`);
            return storageRef
                .put(blob)
                .then(snapshot => {
                return snapshot.ref.getDownloadURL();
            })
                .then(downloadURL => {
                const objectToNavigate = {
                    lat: latitude,
                    long: longitude,
                    filePath: downloadURL
                };
                return objectToNavigate;
            })
                .catch(err => {
                console.log(err);
            });
        });
    }
    // This function is used to get the current latitude and longitude in app
    takeSnap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (window.navigator.onLine == true) {
                const actionsheet = yield this.actionSheetCtrl.create({
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
                                    const camBlob = new Blob([camIA.buffer], { type: "image/jpeg" });
                                    const camLat = this.locationCordinates.latitude;
                                    const camLng = this.locationCordinates.longitude;
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
                                    const blob = new Blob([ia.buffer], { type: "image/jpeg" });
                                    const lat = this.locationCordinates.latitude;
                                    const lng = this.locationCordinates.longitude;
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
                yield actionsheet.present();
            }
            else {
                this.checkNetwork();
            }
        });
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
        }
        else {
            this.presentAlert();
        }
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Add Product",
                subHeader: "Select product images",
                message: "Please select at least one Image",
                buttons: ["OK"]
            });
            yield alert.present();
        });
    }
    checkNetwork() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Internet connection",
                subHeader: "",
                message: "Please check your network",
                buttons: ["OK"]
            });
            yield alert.present();
        });
    }
    logout() {
        firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().signOut().then(resp => {
            localStorage.removeItem("userdata");
            firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().signOut();
            this.router.navigate(["/login"]);
        }).catch(error => {
            console.log(error);
        });
    }
};
ProductImagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_10__["CrudService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
ProductImagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-product-image",
        template: __webpack_require__(/*! raw-loader!./product-image.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-product/product-image/product-image.page.html"),
        styles: [__webpack_require__(/*! ./product-image.page.scss */ "./src/app/add-product/product-image/product-image.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"],
        _services_crud_service__WEBPACK_IMPORTED_MODULE_10__["CrudService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], ProductImagePage);



/***/ }),

/***/ "./src/app/file-size-format.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/file-size-format.pipe.ts ***!
  \******************************************/
/*! exports provided: FileSizeFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizeFormatPipe", function() { return FileSizeFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const FILE_SIZE_UNITS_LONG = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];
let FileSizeFormatPipe = class FileSizeFormatPipe {
    static forRoot() {
        throw new Error("Method not implemented.");
    }
    transform(sizeInBytes, longForm) {
        const units = longForm
            ? FILE_SIZE_UNITS_LONG
            : FILE_SIZE_UNITS;
        let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        const size = sizeInBytes / Math.pow(1024, power); // size in new units
        const formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
        const unit = units[power];
        return `${formattedSize} ${unit}`;
    }
};
FileSizeFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'fileSizePipe'
    })
], FileSizeFormatPipe);



/***/ })

}]);
//# sourceMappingURL=add-product-product-image-product-image-module-es2015.js.map