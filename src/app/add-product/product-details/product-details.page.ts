import { Component, OnInit, NgZone } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { CrudService } from "./../../services/crud.service";
import { DataService } from "./../../services/data.service";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.page.html",
  styleUrls: ["./product-details.page.scss"]
})
export class ProductDetailsPage implements OnInit {
  data: any = [];
  productNumber: string;
  productTitle: string;
  productPrice: string;
  productCategory: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private zone: NgZone,
    private alertCtrl: AlertController,
    private crudService: CrudService,
    private dataService: DataService,
  ) {}

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
              this.dataService.allImageToNavigate=[];
              this.dataService.allImageToShow=[];
              this.callAlertAfterLoop();
            }
            this.crudService
              .add_subcollection(resp.id, this.data[i])
              .then(imagesresp => {});
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.checkNetwork();
    }
  }

  async callAlertAfterLoop() {
    const alert = await this.alertCtrl.create({
      header: "Add Product",
      subHeader: "Product Details",
      message: "All Information added successfully",
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.zone.run(async () => {
              await this.router.navigate(["/product-image"]);
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async backButton(){
    this.zone.run(async () => {
      await this.router.navigate(["/product-image"]);
    });
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

  codeSelected() {
   console.dir(this.productCategory);
  }
}
