(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-product-product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-product/product-details/product-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-product/product-details/product-details.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n<div class=\"full-screen\">\n    <div class=\"back-button\" (click)=\"backButton()\">\n        <i class=\"fas fa-arrow-left\"></i>\n    </div>\n\n    <div class=\"title\">Add Product</div>\n    <div class=\"sub-title\">Product Details</div>\n\n    <div class=\"form\">\n        <ion-item>\n            <ion-label position=\"stacked\">Product Number</ion-label>\n            <ion-input\n                required\n                type=\"tel\"\n                [(ngModel)]=\"productNumber\"\n            ></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"stacked\">Product Title</ion-label>\n            <ion-input\n                required\n                type=\"text\"\n                [(ngModel)]=\"productTitle\"\n            ></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"stacked\">Product Price</ion-label>\n            <ion-input\n                required\n                type=\"number\"\n                [(ngModel)]=\"productPrice\"\n            ></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"stacked\">Categories</ion-label>\n            <ion-select placeholder=\"Select Category\" name=\"language\" [selectedText]=\"productCategory\"\n                (ionChange)=\"codeSelected()\" [(ngModel)]=\"productCategory\">\n                <ion-select-option value=\"Womens fashion\">Womens fashion</ion-select-option>\n                <ion-select-option value=\"Phones & Telecommunications\">Phones & Telecommunications</ion-select-option>\n                <ion-select-option value=\"Computer, Office, Security\">Computer, Office, Security</ion-select-option>\n                <ion-select-option value=\"Consumer Electronics\">Consumer Electronics</ion-select-option>\n                <ion-select-option value=\"Jewellery & Watches\">Jewellery & Watches</ion-select-option>\n                <ion-select-option value=\"Home, Pet & Appliances\">Home, Pet & Appliances</ion-select-option>\n                <ion-select-option value=\"Bags & Shoes\">Bags & Shoes</ion-select-option>\n                <ion-select-option value=\"Toys, Kids & Babies\">Toys, Kids & Babies</ion-select-option>\n                <ion-select-option value=\"Outdoor Fun & Sports\">Outdoor Fun & Sports</ion-select-option>\n                <ion-select-option value=\"Beauty, Health & Hair\">Beauty, Health & Hair</ion-select-option>\n                <ion-select-option value=\"Automobiles & Motorcycles\">Automobiles & Motorcycles</ion-select-option>\n                <ion-select-option value=\"Home Improvement & Tools\">Home Improvement & Tools</ion-select-option>\n              </ion-select>\n        </ion-item>\n    </div>\n\n    <div class=\"actions\">\n            <ion-button\n            expand=\"block\"\n            class=\"login-button\"\n            (click)=\"addProductDetails()\"\n        >\n            Submit\n        </ion-button>\n    </div>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/add-product/product-details/product-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/add-product/product-details/product-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.page */ "./src/app/add-product/product-details/product-details.page.ts");







const routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]
    }
];
let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]]
    })
], ProductDetailsPageModule);



/***/ }),

/***/ "./src/app/add-product/product-details/product-details.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/add-product/product-details/product-details.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-button {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n}\n.back-button i {\n  font-size: 1.5em;\n}\n.full-screen {\n  padding: 15px;\n}\n.title {\n  text-align: center;\n  font-weight: bolder;\n  font-size: 2em;\n}\n.sub-title {\n  margin-top: 10px;\n  text-align: center;\n}\n.form {\n  margin-top: 40px;\n}\n.actions {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL0Q6XFxuZXdyaXNlX2lvbmljX3Byb2plY3RzXFxtb2JpbGUtYXBwL3NyY1xcYXBwXFxhZGQtcHJvZHVjdFxccHJvZHVjdC1kZXRhaWxzXFxwcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9hZGQtcHJvZHVjdC9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDSjtBRENJO0VBQ0ksZ0JBQUE7QUNDUjtBREdBO0VBQ0ksYUFBQTtBQ0FKO0FER0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKO0FER0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURHQTtFQUNJLGdCQUFBO0FDQUo7QURHQTtFQUNJLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hZGQtcHJvZHVjdC9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAyMHB4O1xuXG4gICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxufVxuXG4uZnVsbC1zY3JlZW4ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG5cbi5zdWItdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmFjdGlvbnMge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59IiwiLmJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDIwcHg7XG59XG4uYmFjay1idXR0b24gaSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5mdWxsLXNjcmVlbiB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5zdWItdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-product/product-details/product-details.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/add-product/product-details/product-details.page.ts ***!
  \*********************************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");






let ProductDetailsPage = class ProductDetailsPage {
    constructor(route, router, zone, alertCtrl, crudService, dataService) {
        this.route = route;
        this.router = router;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.crudService = crudService;
        this.dataService = dataService;
        this.data = [];
    }
    ngOnInit() {
        if (this.route.snapshot.data["special"]) {
            this.data = this.route.snapshot.data["special"];
        }
    }
    addProductDetails() {
        if (window.navigator.onLine == true) {
            let record = {};
            record["Number"] = this.productNumber;
            record["Title"] = this.productTitle;
            record["Price"] = this.productPrice;
            record["Category"] = this.productCategory;
            this.crudService
                .create_NewProduct(record)
                .then(resp => {
                this.productNumber = "";
                this.productTitle = "";
                this.productPrice = "";
                this.productCategory = "";
                for (let i = 0; i < this.data.length; i++) {
                    if (i == this.data.length - 1) {
                        this.dataService.allImageToNavigate = [];
                        this.dataService.allImageToShow = [];
                        this.callAlertAfterLoop();
                    }
                    this.crudService
                        .add_subcollection(resp.id, this.data[i])
                        .then(imagesresp => { });
                }
            })
                .catch(error => {
                console.log(error);
            });
        }
        else {
            this.checkNetwork();
        }
    }
    callAlertAfterLoop() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Add Product",
                subHeader: "Product Details",
                message: "All Information added successfully",
                buttons: [
                    {
                        text: "OK",
                        handler: () => {
                            this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                yield this.router.navigate(["/product-image"]);
                            }));
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    backButton() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.zone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.router.navigate(["/product-image"]);
            }));
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
    codeSelected() {
        console.dir(this.productCategory);
    }
};
ProductDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-product-details",
        template: __webpack_require__(/*! raw-loader!./product-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-product/product-details/product-details.page.html"),
        styles: [__webpack_require__(/*! ./product-details.page.scss */ "./src/app/add-product/product-details/product-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
], ProductDetailsPage);



/***/ })

}]);
//# sourceMappingURL=add-product-product-details-product-details-module-es2015.js.map