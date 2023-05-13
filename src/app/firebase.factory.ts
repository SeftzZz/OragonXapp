import { NgZone } from '@angular/core';

import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { environment } from '../environments/environment';

export function AngularFirestoreProject1(
  platformId: string, 
  zone: boolean, 
  name: null,
  shouldEnablePresistence: boolean, 
  settings: null, 
  schedulers: null, 
  presistenceSettings: null, 
  _useEmulator: any, 
  auth: null, 
  useAuthEmulator: any, 
  authSettings: null, 
  tenantId: string, 
  languageCode: string, 
  useDeviceLanguage: true, 
  presistence: null, 
  _appCheckInstances: null) {
  return new AngularFirestore(
    environment.firebase, 
    platformId, 
    zone, 
    name, 
    shouldEnablePresistence, 
    settings, 
    schedulers, 
    presistenceSettings, 
    _useEmulator, 
    auth, 
    useAuthEmulator, 
    authSettings, 
    tenantId, 
    languageCode, 
    useDeviceLanguage, 
    presistence, 
    _appCheckInstances);
}

export function AngularFirestoreProject2(
  platformId: string, 
  zone: boolean, 
  name: null,
  shouldEnablePresistence: boolean, 
  settings: null, 
  schedulers: null, 
  presistenceSettings: null, 
  _useEmulator: any, 
  auth: null, 
  useAuthEmulator: any, 
  authSettings: null, 
  tenantId: string, 
  languageCode: string, 
  useDeviceLanguage: true, 
  presistence: null, 
  _appCheckInstances: null) {
  return new AngularFirestore(
    environment.firebaseNew, 
    platformId, 
    zone, 
    name, 
    shouldEnablePresistence, 
    settings, 
    schedulers, 
    presistenceSettings, 
    _useEmulator, 
    auth, 
    useAuthEmulator, 
    authSettings, 
    tenantId, 
    languageCode, 
    useDeviceLanguage, 
    presistence, 
    _appCheckInstances);
}