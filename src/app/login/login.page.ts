import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController, AlertController } from "@ionic/angular";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  loading: any;
  userdata: any;
  constructor(
    private router: Router,
    private fb: Facebook,
    public loadingController: LoadingController,
    private fireAuth: AngularFireAuth,
    private alertCtrl: AlertController
  ) {}

  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: "Connecting ..."
    });
  }

  async presentLoading(loading) {
    await loading.present();
  }

  async login() {
    if (window.navigator.onLine == true) {
      this.fb
        .login(["email",'public_profile'])
        .then((response: FacebookLoginResponse) => {
          console.log("Logged into Facebook!", response);
          console.log("Facebook login response");
          this.onLoginSuccess(response);
          console.log(response.authResponse.accessToken);
        })
        .catch(error => {
          console.log("Error logging into Facebook", error);
        });
    } else {
      this.checkNetwork();
    }
  }

  onLoginSuccess(res: FacebookLoginResponse) {
    const credential = firebase.auth.FacebookAuthProvider.credential(
      res.authResponse.accessToken
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(response => {
        console.log("response after firebase auth", response);
        this.fb.api('me?fields=id,email,last_name,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
          this.userdata = {
            email: profile["email"],
            id: profile["id"],
            last_name: profile["last_name"],
            first_name: profile['first_name'],
            picture: profile['picture_large']['data']['url']
          };
          localStorage.setItem('userdata',this.userdata);
        });

        this.router.navigate(["/product-image"]);
        this.loading.dismiss();
      });
  }

  onLoginError(err) {
    console.log(err);
  }

  onLogin() {
    this.router.navigate(["/product-image"]);
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
}
