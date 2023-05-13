// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    // Production
    // apiKey: "AIzaSyD9acGWMDPjhyFG2eKz0Hd8TgSSRuUlQVs",
    // authDomain: "oragonx-19744.firebaseapp.com",
    // projectId: "oragonx-19744",
    // storageBucket: "oragonx-19744.appspot.com",
    // messagingSenderId: "1036604830593",
    // appId: "1:1036604830593:web:c954871ef393453cd6ae80",
    // measurementId: "${config.measurementId}",
    // vapidKey: "BH7Dmk7pcc69ah-AYrnp5VlzRc3zBmy9VFHtCFJ25_20rpKaasc-avWh6CF85g_QgV3C7xfRPxuFTOsVTj_Bs28"
    
    // Staging
    apiKey: "AIzaSyDA_nhLRt9466wGY5ywZtcXWdOtbPas_xU",
    authDomain: "oragonx-staging.firebaseapp.com",
    projectId: "oragonx-staging",
    storageBucket: "oragonx-staging.appspot.com",
    messagingSenderId: "292415733843",
    appId: "1:292415733843:web:1f06b3e1b5d11fd3bf86a6",
    measurementId: "${config.measurementId}",
    vapidKey: "BH7Dmk7pcc69ah-AYrnp5VlzRc3zBmy9VFHtCFJ25_20rpKaasc-avWh6CF85g_QgV3C7xfRPxuFTOsVTj_Bs28"

    // Development
    // apiKey: "AIzaSyBaoejxFFUKF73iJ2KuqsJajbi7VJ6FSxQ",
    // authDomain: "oragonx-development.firebaseapp.com",
    // databaseURL: "https://oragonx-development-default-rtdb.asia-southeast1.firebasedatabase.app",
    // projectId: "oragonx-development",
    // storageBucket: "oragonx-development.appspot.com",
    // messagingSenderId: "891862595791",
    // appId: "1:891862595791:web:fff8fa1e870e1521395fba",
    // measurementId: "${config.measurementId}",
    // vapidKey: "BH7Dmk7pcc69ah-AYrnp5VlzRc3zBmy9VFHtCFJ25_20rpKaasc-avWh6CF85g_QgV3C7xfRPxuFTOsVTj_Bs28"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
