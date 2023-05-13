import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  states : string
  states_test : string
  status_test : string

  id : string
  email : string
  username : string
  r_txhash : string
  wallet_address : string
  web3js : any
  datax : any

  constructor() { 
    this.states = "";
    this.id = ""
    this.email = ""
    this.username = ""
    this.wallet_address = ""
    this.r_txhash = ""
    this.states_test = ""
    this.status_test = ""
    this.datax = {}
  }

  setDataX(value : any) { 
    this.datax = value; 
  }

  getDataX() { 
    return this.datax; 
  }

  setTXH(value : any) { 
    this.r_txhash = value; 
  }

  getTXH() { 
    return this.r_txhash; 
  }

  setWEB3(value : any) { 
    this.web3js = value; 
  }

  getWEB3() { 
    return this.web3js; 
  }

  setID(value : string) { 
    this.id = value; 
  }
    
  getID() { 
    return this.id; 
  }

  setEMAIL(value : string) { 
    this.email = value; 
  }
    
  getEMAIL() { 
    return this.email;
  } 

  setUSERNAME(value : string) { 
    this.username = value; 
  }
    
  getUSERNAME() { 
    return this.username; 
  } 

  setWALLET_ADDRESS(value : string) { 
    this.wallet_address = value; 
  }
    
  getWALLET_ADDRESS() { 
    return this.wallet_address;
  } 

  setStates(value : string) { 
    this.states = value; 
  }
    
  getStates() { 
    return this.states; 
  }

  setTestStates(value : string) { 
    this.states_test = value; 
  }
    
  getTestStates() { 
    return this.states_test; 
  } 

  setTestStatus(value : string) { 
    this.status_test = value; 
  }
    
  getTestStatus() { 
    return this.status_test; 
  } 
}
