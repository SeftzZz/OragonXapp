import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProviderService } from './provider.service';

@Injectable({
    providedIn: 'root'
})

export class SendData {
    webfolder : string = "services"
    webfolderjs : string = "js-services"
    server : string = "https://oragonbsc.io"
    controller : string = this.server + "/" + this.webfolder + "/"
    controllerjs : string = this.server + "/" + this.webfolderjs + "/"
    api_key : string = 'XASDKJKANVK239493FJEJG2JV9EVODKSVNKKNV009QASXLXXAA'


    // serverapi : string = "https://oragonbsc.io/kelolaisi/api"
    serverapi : string = "http://localhost/oragonnew/kelolaisi/api"
    controllerapi : string = this.serverapi + "/"
    //Manual State
    //End Manual State

    constructor(private httpClient: HttpClient,public global : ProviderService){}

    gettokenbalance() : Observable<any>{
        let header = new HttpHeaders()
        header.append('Accept', 'application/json')
        header.append('Content-Type', 'application/x-www-form-urlencoded')
        header.append( 'No-Auth', 'True')
          
        return this.httpClient.get(this.controller + "get_token_balance" +
                                    "?uc=" + this.global.getWALLET_ADDRESS()
                                    ,{headers : header}
                                  )
    }

    getcurrentoragon() : Observable<any>{
        let header = new HttpHeaders()
        header.append('Accept', 'application/json')
        header.append('Content-Type', 'application/x-www-form-urlencoded')
        header.append( 'No-Auth', 'True')
          
        return this.httpClient.get(this.controller + "get_current_oragon"
                                    ,{headers : header}
                                  )
    }

    getitemhistory(itemid : string) : Observable<any>{
        let header = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set( 'X-Api-Key', this.api_key)
        let body = new HttpParams()
        .set('itemid', itemid)
          
        return this.httpClient.post(this.controller + "get_item_history",body
                                    ,{headers : header}
                                  )
    }

    getdragoncount(times : string,kind : string) : Observable<any>{
        let header = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set( 'X-Api-Key', this.api_key)
        let body = new HttpParams()
        .set('kind', kind)
        .set('times', times)
          
        return this.httpClient.post(this.controller + "get_dragon_count",body
                                    ,{headers : header}
                                  )
    }

    getbnbcount(times : string,kind : string) : Observable<any>{
        let header = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set( 'X-Api-Key', this.api_key)
        let body = new HttpParams()
        .set('kind', kind)
        .set('times', times)
          
        return this.httpClient.post(this.controller + "get_bnb_count",body
                                    ,{headers : header}
                                  )
    }

    getorgncount(times : string,kind : string) : Observable<any>{
        let header = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set( 'X-Api-Key', this.api_key)
        let body = new HttpParams()
        .set('kind', kind)
        .set('times', times)
          
        return this.httpClient.post(this.controller + "get_orgn_count",body
                                    ,{headers : header}
                                  )
    }

    setitemhistory(itemid : string,userid : string, remark : string, data_item : string) : Observable<any>{
        let header = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set( 'X-Api-Key', this.api_key)
        let body = new HttpParams()
        .set('itemid', itemid)
        .set('userid', userid)
        .set('remark', remark)
        .set('item', data_item)
          
        return this.httpClient.post(this.controller + "item_history",body
                                    ,{headers : header}
                                  )
    }

    settrxhistory(userid : string,itemid : string, amount : string,tx_hash : string,tx_type : string, data_item : string) : Observable<any>{
        let header = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set( 'X-Api-Key', this.api_key)
        let body = new HttpParams()
        .set('itemid', itemid)
        .set('userid', userid)
        .set('amount', amount)
        .set('tx_hash', tx_hash)
        .set('tx_type', tx_type)
        .set('item', data_item)
          
        return this.httpClient.post(this.controller + "trx_history",body
                                    ,{headers : header}
                                  )
    }

    gettrxhistory(userid : string) : Observable<any>{
        let header = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set( 'X-Api-Key', this.api_key)
        let body = new HttpParams()
        .set('userid', userid)
          
        return this.httpClient.post(this.controller + "get_trx_history",body
                                    ,{headers : header}
                                  )
    }

    gettrxhistoryall() : Observable<any>{
        let header = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set( 'X-Api-Key', this.api_key)
        let body = new HttpParams()
          
        return this.httpClient.post(this.controller + "get_trx_history_all",body
                                    ,{headers : header}
                                  )
    }

    //get_history_item_all

    gettrxhistoryitem() : Observable<any>{
        let header = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set( 'X-Api-Key', this.api_key)
        let body = new HttpParams()
          
        return this.httpClient.post(this.controller + "get_history_item_all",body
                                    ,{headers : header}
                                  )
    }

    get_bnb_balance(address : string = "",provider : any) : Observable<any>{
        let header = new HttpHeaders()
        header.append('Accept', 'application/json')
        header.append('Content-Type', 'application/x-www-form-urlencoded')
        header.append( 'No-Auth', 'True')
        
        let body = new HttpParams()
        .set('address', address)
        .set('provider', provider)

        return this.httpClient.post(this.controllerjs + "get_bnb_balances", body, {headers : header})
    }

    login(email : string = "",password : string = "") : Observable<any>{
        let header = new HttpHeaders()
        header.append('Accept', 'application/json')
        header.append('Content-Type', 'application/x-www-form-urlencoded')
        header.append( 'No-Auth', 'True')
        
        let body = new HttpParams()
        .set('email', email)
        .set('password', password)

        return this.httpClient.post(this.controller + "login", body, {headers : header})
    }

    register(username : string = "",email : string = "",wallet_address = "",password : string = "") : Observable<any>{
        let header = new HttpHeaders()
        header.append('Accept', 'plain/text')
        header.append('Content-Type', 'application/x-www-form-urlencoded')
        header.append('enctype', 'multipart/form-data')
        header.append( 'No-Auth', 'True')
        let body = new FormData()
            body.append('username', username)
            body.append('email', email)
            body.append('wallet_address', wallet_address)
            body.append('password', password)
          
        return this.httpClient.post(this.controller + "register", body, {headers : header,responseType: 'text'})
    }

    item_back() : Observable<any>{
        let header = new HttpHeaders()
        header.append('Accept', 'application/json')
        header.append('Content-Type', 'application/x-www-form-urlencoded')
        // header.append( 'No-Auth', 'True')
        .set( 'X-Api-Key', this.api_key)
        let body = new HttpParams()
        // .set('userid', userid)
        
        return this.httpClient.post(this.controllerapi + "item_back", {headers : header}
                                  )
    }
}


