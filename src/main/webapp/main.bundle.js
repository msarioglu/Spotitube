webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span class=\"title\">\n      <md-icon>queue_music</md-icon>DEA Spotitube\n  </span>\n  <div *ngIf=\"user && serverUrl\"\n       class=\"mat-body-2\">\n    {{user}}@{{serverUrl}}\n  </div>\n  <button md-icon-button [md-menu-trigger-for]=\"settings\">\n    <md-icon>more_vert</md-icon>\n  </button>\n  <md-menu x-position=\"before\" y-position=\"below\" #settings=\"mdMenu\">\n    <button [disabled]=\"!serverUrl && !user\" md-menu-item (click)=\"logout()\">\n      <span>Logout</span>\n    </button>\n  </md-menu>\n</md-toolbar>\n\n<app-playlists-overview\n  class=\"content\"\n  *ngIf=\"user && serverUrl\">\n</app-playlists-overview>\n<div *ngIf=\"!user || !serverUrl\"\n     class=\"content flex-container\"\n     fxLayout=\"row\"\n     fxLayoutAlign=\"center\">\n  <app-login\n    class=\"flex-item\"\n    fxFlexAlign=\"center\">\n  </app-login>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.content {\n  height: calc(100% - 64px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_playlist_playlist_service__ = __webpack_require__("../../../../../src/app/services/playlist/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_track_track_service__ = __webpack_require__("../../../../../src/app/services/track/track.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(loginService, playlistService, trackService, snackBar) {
        this.loginService = loginService;
        this.playlistService = playlistService;
        this.trackService = trackService;
        this.snackBar = snackBar;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initSettings();
        this.initErrorSnackbar();
    };
    /**
     * Logout of the application.
     */
    AppComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    AppComponent.prototype.initErrorSnackbar = function () {
        var _this = this;
        this.loginService.restError$.subscribe(function (error) { return _this.showError(error); });
        this.playlistService.restError$.subscribe(function (error) { return _this.showError(error); });
        this.trackService.restError$.subscribe(function (error) { return _this.showError(error); });
    };
    AppComponent.prototype.initSettings = function () {
        var _this = this;
        this.loginService.getSettings()
            .then(function (settings) { return _this.setSettings(settings); })
            .catch(function (any) { return _this.setSettings(undefined); });
        this.loginService.settingsChanged$.subscribe(function (settings) { return _this.setSettings(settings); });
    };
    AppComponent.prototype.setSettings = function (settings) {
        if (settings) {
            this.serverUrl = settings.server;
            this.user = settings.user;
        }
        else {
            this.serverUrl = undefined;
            this.user = undefined;
        }
    };
    AppComponent.prototype.showError = function (error) {
        this.snackBar.open('Http status code ' + error, 'close');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_playlist_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_playlist_playlist_service__["a" /* PlaylistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_track_track_service__["a" /* TrackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_track_track_service__["a" /* TrackService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSnackBar */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstants; });
var AppConstants = (function () {
    function AppConstants() {
    }
    return AppConstants;
}());

AppConstants.LOCAL_STORAGE_BASE_KEY = 'spotitube';
AppConstants.LOCAL_STORAGE_KEY_SETTINGS = AppConstants.LOCAL_STORAGE_BASE_KEY + '.settings';
AppConstants.STORAGE_EVENT_LISTENER_KEY = 'storage';
AppConstants.DIALOG_WIDTH = '300px';
AppConstants.API_LOGIN = '/login';
AppConstants.API_PLAYLISTS = '/playlists';
AppConstants.API_TRACKS = '/tracks';
//# sourceMappingURL=app.constants.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_angular_module__ = __webpack_require__("../../../../../src/app/modules/angular.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_material_module__ = __webpack_require__("../../../../../src/app/modules/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_logging_logging_service__ = __webpack_require__("../../../../../src/app/services/logging/logging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_playlists_overview_playlists_overview_component__ = __webpack_require__("../../../../../src/app/components/playlists-overview/playlists-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_playlist_playlist_component__ = __webpack_require__("../../../../../src/app/components/playlist/playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_playlists_playlists_component__ = __webpack_require__("../../../../../src/app/components/playlists/playlists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_playlist_playlist_service__ = __webpack_require__("../../../../../src/app/services/playlist/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_minutes_pipe__ = __webpack_require__("../../../../../src/app/pipes/minutes.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dialogs_edit_playlist_dialog_edit_playlist_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/edit-playlist.dialog/edit-playlist.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dialogs_new_playlist_dialog_new_playlist_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/new-playlist.dialog/new-playlist.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_track_track_service__ = __webpack_require__("../../../../../src/app/services/track/track.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dialogs_add_track_dialog_add_track_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/add-track.dialog/add-track.dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__dialogs_add_track_dialog_add_track_dialog_component__["a" /* AddTrackDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dialogs_edit_playlist_dialog_edit_playlist_dialog_component__["a" /* EditPlaylistDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_minutes_pipe__["a" /* MinutesPipe */],
            __WEBPACK_IMPORTED_MODULE_14__dialogs_new_playlist_dialog_new_playlist_dialog_component__["a" /* NewPlaylistDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_playlists_overview_playlists_overview_component__["a" /* PlaylistOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_playlist_playlist_component__["a" /* PlaylistComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_playlists_playlists_component__["a" /* PlaylistsComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_16__dialogs_add_track_dialog_add_track_dialog_component__["a" /* AddTrackDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dialogs_edit_playlist_dialog_edit_playlist_dialog_component__["a" /* EditPlaylistDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__dialogs_new_playlist_dialog_new_playlist_dialog_component__["a" /* NewPlaylistDialogComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__modules_angular_module__["a" /* SpotitubeAngularModule */],
            __WEBPACK_IMPORTED_MODULE_4__modules_material_module__["a" /* SpotitubeMaterialModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_logging_logging_service__["a" /* LoggingService */],
            __WEBPACK_IMPORTED_MODULE_6__services_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_11__services_playlist_playlist_service__["a" /* PlaylistService */],
            __WEBPACK_IMPORTED_MODULE_15__services_track_track_service__["a" /* TrackService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  width: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-title>\n    Welcome to Spotitube\n  </md-card-title>\n  <md-card-content class=\"flex-container\"\n                   fxLayout=\"column\">\n    <md-input-container class=\"flex-item\">\n      <input id=\"urlInput\"\n             mdInput\n             placeholder=\"Server URL\"\n             [(ngModel)]=\"serverUrl\"\n             pattern=\"http://[a-zA-Z0-9:/.\\-]+\"\n             required>\n      <md-error>Please provide a server url, including the substring http://</md-error>\n    </md-input-container>\n\n    <md-input-container class=\"flex-item\">\n      <input mdInput\n             placeholder=\"User\"\n             [(ngModel)]=\"user\"\n             required>\n      <md-error>Please provide an user</md-error>\n    </md-input-container>\n\n    <md-input-container class=\"flex-item\">\n      <input type=\"password\" mdInput placeholder=\"Password\" [(ngModel)]=\"password\" required>\n      <md-error>Please provide a password</md-error>\n    </md-input-container>\n  </md-card-content>\n\n  <md-card-actions align=\"end\">\n    <button md-button [disabled]=\"!user || user.trim() === '' || !serverUrl || serverUrl.trim() === ''\"\n            (click)=\"login()\"> Login\n    </button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__ = __webpack_require__("../../../../../src/app/services/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getSettings()
            .then(function (settings) { return _this.serverUrl = settings.server; })
            .catch(function (any) { return _this.serverUrl = ''; });
        this.loginService.settingsChanged$.subscribe(function (settings) { return _this.setServer(settings); });
    };
    LoginComponent.prototype.login = function () {
        this.loginService.login(this.user, this.password, this.serverUrl);
    };
    LoginComponent.prototype.setServer = function (settings) {
        if (settings) {
            this.serverUrl = settings.server;
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"details\"\n     *ngIf=\"playlist\">\n\n  <div class=\"flex-container header\"\n       fxLayout=\"row\"\n       fxLayoutAlign=\"space-between stretch\"\n       fxLayoutWrap=\"nowrap\">\n    <h1 class=\"flex-item playlistHeader mat-display-1\" fxFlexAlign=\"center\">\n      {{playlist.name}}\n    </h1>\n    <button md-button\n            *ngIf=\"playlist.owner\"\n            (click)=\"onAddTrack()\"\n            class=\"flex-item\"\n            md-tooltip=\"Add tracks to this playlist\">\n      <md-icon>playlist_add</md-icon>\n    </button>\n  </div>\n\n  <md-table #table\n            *ngIf=\"tracks.tracks.length > 0\"\n            [dataSource]=\"dataSource\">\n    <ng-container mdColumnDef=\"title\">\n      <md-header-cell *mdHeaderCellDef> Title</md-header-cell>\n      <md-cell *mdCellDef=\"let track\"> {{track.title}}</md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"performer\">\n      <md-header-cell *mdHeaderCellDef> Performer</md-header-cell>\n      <md-cell *mdCellDef=\"let track\"> {{track.performer}}</md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"duration\">\n      <md-header-cell *mdHeaderCellDef fxFlex=\"70px\"> Duration</md-header-cell>\n      <md-cell *mdCellDef=\"let track\" fxFlex=\"70px\"> {{track.duration | minutes}}</md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"album\">\n      <md-header-cell *mdHeaderCellDef> Album</md-header-cell>\n      <md-cell *mdCellDef=\"let track\"> {{track.album}}</md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"playcount\">\n      <md-header-cell *mdHeaderCellDef fxFlex=\"70px\"> Play count</md-header-cell>\n      <md-cell *mdCellDef=\"let track\" fxFlex=\"70px\"> {{track.playcount}}</md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"publicationDate\">\n      <md-header-cell *mdHeaderCellDef> Publication date</md-header-cell>\n      <md-cell *mdCellDef=\"let track\"> {{track.publicationDate}}</md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"description\">\n      <md-header-cell *mdHeaderCellDef> Description</md-header-cell>\n      <md-cell *mdCellDef=\"let track\"> {{track.description}}</md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"offlineAvailable\">\n      <md-header-cell *mdHeaderCellDef fxFlex=\"50px\"> Offline</md-header-cell>\n      <md-cell *mdCellDef=\"let track\" fxFlex=\"50px\">\n        <md-icon *ngIf=\"track.offlineAvailable\">done</md-icon>\n      </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"delete\">\n      <md-header-cell *mdHeaderCellDef fxFlex=\"40px\"></md-header-cell>\n      <md-cell *mdCellDef=\"let track\" fxFlex=\"40px\">\n        <button md-icon-button\n          [disabled]=\"!playlist.owner\"\n          class=\"deleteButton\"\n          (click)=\"onRemoveTrack(track)\"\n          md-tooltip=\"Remove track from list\">\n          <md-icon>delete</md-icon>\n        </button>\n      </md-cell>\n    </ng-container>\n\n    <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\n    <md-row *mdRowDef=\"let row; columns: displayedColumns;\"></md-row>\n  </md-table>\n\n  <div class='mat-body' *ngIf=\"tracks.tracks.length == 0\">\n    This playlist is still empty. <span *ngIf=\"playlist.owner\">Use the button on the top-right to add tracks.</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".details {\n  padding: 24px; }\n  .details .header {\n    margin-bottom: 16px; }\n    .details .header .playlistHeader {\n      margin: 0; }\n  .details .mat-table {\n    overflow: auto; }\n  .details .deleteButton {\n    min-width: inherit;\n    padding: 0 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlist/playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_track_track_service__ = __webpack_require__("../../../../../src/app/services/track/track.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tracks_tracks_model__ = __webpack_require__("../../../../../src/app/models/tracks/tracks.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogs_add_track_dialog_add_track_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/add-track.dialog/add-track.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_sources_tracks_tracks_datasource__ = __webpack_require__("../../../../../src/app/data-sources/tracks/tracks.datasource.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlaylistComponent = (function () {
    function PlaylistComponent(dialog, trackService) {
        this.dialog = dialog;
        this.trackService = trackService;
        this.displayedColumns = ['title', 'performer', 'duration', 'album', 'playcount',
            'publicationDate', 'description', 'offlineAvailable', 'delete'];
        this.dataSource = undefined;
        this.setEmptyTracklists();
    }
    PlaylistComponent.prototype.onAddTrack = function () {
        var _this = this;
        this.addTrackDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogs_add_track_dialog_add_track_dialog_component__["a" /* AddTrackDialogComponent */], {
            disableClose: false,
        });
        this.addTrackDialogRef.componentInstance.setPlaylist(this.playlist);
        this.addTrackDialogRef.afterClosed().subscribe(function (track) {
            if (track) {
                console.log('Adding this track: ', track);
                _this.trackService.addTrackToPlaylist(_this.playlist, track)
                    .then(function (tracks) { return _this.setTracks(tracks); })
                    .catch(function (any) {
                });
            }
            _this.addTrackDialogRef = null;
        });
    };
    PlaylistComponent.prototype.onRemoveTrack = function (track) {
        var _this = this;
        this.trackService.removeTracksFromPlaylist(this.playlist, track)
            .then(function (tracks) { return _this.setTracks(tracks); })
            .catch(function (any) {
        });
    };
    PlaylistComponent.prototype.setPlaylist = function (playlist) {
        var _this = this;
        this.playlist = playlist;
        this.trackService.getTracksForPlaylist(this.playlist)
            .then(function (tracks) { return _this.setTracks(tracks); })
            .catch(function (any) { return _this.setEmptyTracklists(); });
    };
    PlaylistComponent.prototype.setTracks = function (tracks) {
        if (tracks) {
            this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__data_sources_tracks_tracks_datasource__["a" /* TracksDataSource */](tracks);
            this.tracks = tracks;
        }
        else {
        }
    };
    PlaylistComponent.prototype.setEmptyTracklists = function () {
        this.tracks = new __WEBPACK_IMPORTED_MODULE_2__models_tracks_tracks_model__["a" /* TracksImpl */]();
    };
    return PlaylistComponent;
}());
PlaylistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-playlist',
        template: __webpack_require__("../../../../../src/app/components/playlist/playlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/playlist/playlist.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_track_track_service__["a" /* TrackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_track_track_service__["a" /* TrackService */]) === "function" && _b || Object])
], PlaylistComponent);

var _a, _b;
//# sourceMappingURL=playlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/playlists-overview/playlists-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overview flex-container\"\n     fxLayout=\"row\"\n     fxLayoutAlign=\"start stretch\">\n  <app-playlists\n    class=\"flex-item playlists\"\n    fxFlex=\"25%\"\n    (selectedPlaylistChange)=\"playlist.setPlaylist($event)\">\n  </app-playlists>\n  <app-playlist\n    #playlist\n    class=\"flex-item\"\n    fxFlex=\"75%\">\n  </app-playlist>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/playlists-overview/playlists-overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overview {\n  height: calc(100% - 64px); }\n  .overview .playlists {\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlists-overview/playlists-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaylistOverviewComponent = (function () {
    function PlaylistOverviewComponent() {
    }
    return PlaylistOverviewComponent;
}());
PlaylistOverviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-playlists-overview',
        template: __webpack_require__("../../../../../src/app/components/playlists-overview/playlists-overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/playlists-overview/playlists-overview.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PlaylistOverviewComponent);

//# sourceMappingURL=playlists-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/playlists/playlists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"playlists flex-container\"\n     fxLayout=\"column\">\n  <md-card class=\"flex-item\"\n           fxFlex=\"100%\">\n    <div *ngFor=\"let playlist of playlists.playlists;\"\n         class=\"flex-container playlist\"\n         [ngClass]=\"{'selected': playlist.id === selectedPlayistId}\"\n         fxLayout=\"row\"\n         fxLayoutAlign=\"space-between stretch\"\n         fxLayoutWrap=\"nowrap\">\n      <div\n        class=\"name flex-item\"\n        fxFlex=\"100%\"\n        (click)=\"onPlaylistSelected(playlist)\"\n        md-tooltip=\"{{playlist.name}}\">\n        {{playlist.name}}\n      </div>\n      <button md-button\n              *ngIf=\"playlist.owner\"\n              class=\"flex-item\"\n              (click)=\"onEditName(playlist)\"\n              md-tooltip=\"Edit the name of this playlist\">\n        <md-icon>edit</md-icon>\n      </button>\n      <button md-button\n              *ngIf=\"playlist.owner\"\n              class=\"flex-item\"\n              (click)=\"onDelete(playlist)\"\n              md-tooltip=\"Delete this playlist\">\n        <md-icon>delete</md-icon>\n      </button>\n    </div>\n  </md-card>\n\n  <md-card class=\"flex-item\">\n    <md-card-content class=\"flex-container\"\n                     fxLayout=\"row\"\n                     fxLayoutAlign=\"space-between stretch\">\n      <span class=\"flex-item length\" fxFlexAlign=\"center\">\n        Total length: {{playlists.length | minutes}}\n      </span>\n      <button md-button\n              class=\"flex-item\" (click)=\"onNewPlaylist()\">\n        <md-icon>playlist_add</md-icon>\n      </button>\n    </md-card-content>\n  </md-card>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/playlists/playlists.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  padding: 0; }\n  md-card .length {\n    padding-left: 10px; }\n\n.playlists {\n  height: 100%; }\n  .playlists .playlist:hover {\n    background: #ff4081; }\n  .playlists .playlist.selected {\n    background: lightgrey; }\n  .playlists .playlist {\n    padding-top: 4px;\n    padding-bottom: 4px;\n    border-bottom: 1px lightgray solid;\n    height: 45px; }\n    .playlists .playlist .name {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      cursor: pointer;\n      padding: 10px 8px 0px 8px; }\n    .playlists .playlist md-icon {\n      color: gray; }\n    .playlists .playlist button {\n      min-width: inherit;\n      padding: 0 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/playlists/playlists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_playlist_playlist_service__ = __webpack_require__("../../../../../src/app/services/playlist/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_edit_playlist_dialog_edit_playlist_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/edit-playlist.dialog/edit-playlist.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialogs_new_playlist_dialog_new_playlist_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/new-playlist.dialog/new-playlist.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_playlist_playlist_model__ = __webpack_require__("../../../../../src/app/models/playlist/playlist.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_playlists_playlists_model__ = __webpack_require__("../../../../../src/app/models/playlists/playlists.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_track_track_service__ = __webpack_require__("../../../../../src/app/services/track/track.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PlaylistsComponent = (function () {
    function PlaylistsComponent(playlistService, tracksService, dialog) {
        this.playlistService = playlistService;
        this.tracksService = tracksService;
        this.dialog = dialog;
        this.selectedPlaylistChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.setEmptyPlaylists();
    }
    PlaylistsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updatePlaylists();
        this.tracksService.tracksUpdated$.subscribe(function (tracks) { return _this.updatePlaylists(); });
    };
    /**
     * Change the name of a playlist.
     *
     * @param {Playlist} playlist
     */
    PlaylistsComponent.prototype.onEditName = function (playlist) {
        var _this = this;
        this.editPlaylistDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialogs_edit_playlist_dialog_edit_playlist_dialog_component__["a" /* EditPlaylistDialogComponent */], {
            disableClose: false,
            width: __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* AppConstants */].DIALOG_WIDTH
        });
        this.editPlaylistDialogRef.componentInstance.name = playlist.name;
        this.editPlaylistDialogRef.afterClosed().subscribe(function (name) {
            if (name) {
                playlist.name = name;
                _this.playlistService.updatePlaylist(playlist)
                    .then(function (playlists) { return _this.setPlaylists(playlists); })
                    .catch(function (any) {
                });
            }
            _this.editPlaylistDialogRef = null;
        });
    };
    /**
     * Delete a playlist.
     *
     * @param {Playlist} playlist
     */
    PlaylistsComponent.prototype.onDelete = function (playlist) {
        var _this = this;
        this.playlistService.deletePlaylist(playlist).then(function (playlists) { return _this.setPlaylists(playlists); })
            .catch(function (any) {
        });
    };
    /**
     * Create a new playlist.
     */
    PlaylistsComponent.prototype.onNewPlaylist = function () {
        var _this = this;
        this.newPlaylistDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__dialogs_new_playlist_dialog_new_playlist_dialog_component__["a" /* NewPlaylistDialogComponent */], {
            disableClose: false,
            width: __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* AppConstants */].DIALOG_WIDTH
        });
        this.newPlaylistDialogRef.afterClosed().subscribe(function (name) {
            if (name) {
                var playlist = new __WEBPACK_IMPORTED_MODULE_6__models_playlist_playlist_model__["a" /* PlaylistImpl */](name);
                _this.playlistService.newPlaylist(playlist)
                    .then(function (playlists) { return _this.setPlaylists(playlists); })
                    .catch(function (any) {
                });
            }
            _this.newPlaylistDialogRef = null;
        });
    };
    PlaylistsComponent.prototype.updatePlaylists = function () {
        var _this = this;
        this.playlistService.getPlaylists().then(function (playlists) { return _this.setPlaylists(playlists); })
            .catch(function (any) { return _this.setEmptyPlaylists(); });
    };
    /**
     * Select a playlist from the list.
     *
     * @param {Playlist} playlist
     */
    PlaylistsComponent.prototype.onPlaylistSelected = function (playlist) {
        this.selectedPlaylistChange.emit(playlist);
        if (playlist) {
            this.selectedPlayistId = playlist.id;
        }
        else {
            this.selectedPlayistId = undefined;
        }
    };
    PlaylistsComponent.prototype.setPlaylists = function (playlists) {
        this.playlists = playlists;
        if (playlists.playlists.length > 0) {
            var playlistToSelect = playlists.playlists[0];
            if (this.selectedPlayistId) {
                for (var _i = 0, _a = this.playlists.playlists; _i < _a.length; _i++) {
                    var playlist = _a[_i];
                    if (playlist.id === this.selectedPlayistId) {
                        playlistToSelect = playlist;
                        break;
                    }
                }
            }
            this.onPlaylistSelected(playlistToSelect);
        }
        else {
            this.onPlaylistSelected(undefined);
        }
    };
    PlaylistsComponent.prototype.setEmptyPlaylists = function () {
        this.playlists = new __WEBPACK_IMPORTED_MODULE_7__models_playlists_playlists_model__["a" /* PlaylistsImpl */]();
    };
    return PlaylistsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], PlaylistsComponent.prototype, "selectedPlaylistChange", void 0);
PlaylistsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-playlists',
        template: __webpack_require__("../../../../../src/app/components/playlists/playlists.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/playlists/playlists.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_playlist_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_playlist_playlist_service__["a" /* PlaylistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_track_track_service__["a" /* TrackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_track_track_service__["a" /* TrackService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialog */]) === "function" && _c || Object])
], PlaylistsComponent);

var _a, _b, _c;
//# sourceMappingURL=playlists.component.js.map

/***/ }),

/***/ "../../../../../src/app/data-sources/tracks/tracks.datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracksDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var TracksDataSource = (function (_super) {
    __extends(TracksDataSource, _super);
    function TracksDataSource(tracks) {
        var _this = _super.call(this) || this;
        _this.tracks = tracks;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    TracksDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.tracks.tracks);
    };
    TracksDataSource.prototype.disconnect = function () {
    };
    return TracksDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__["a" /* DataSource */]));

//# sourceMappingURL=tracks.datasource.js.map

/***/ }),

/***/ "../../../../../src/app/dialogs/add-track.dialog/add-track.dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>\n  Add Track\n</h1>\n\n<md-dialog-content>\n  <md-card *ngIf=\"track\">\n    <span class=\"mat-body\">\n      {{track.performer}} - {{track.title}}\n    </span> <br>\n    <md-checkbox [checked]=\"track.offlineAvailable\" [(ngModel)]=\"track.offlineAvailable\">\n      Make this track offline available\n    </md-checkbox>\n  </md-card>\n\n  <md-table #table [dataSource]=\"dataSource\">\n    <ng-container mdColumnDef=\"title\">\n      <md-header-cell *mdHeaderCellDef> Title</md-header-cell>\n      <md-cell *mdCellDef=\"let track\"> {{track.title}}</md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"performer\">\n      <md-header-cell *mdHeaderCellDef> Performer</md-header-cell>\n      <md-cell *mdCellDef=\"let track\"> {{track.performer}}</md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"album\">\n      <md-header-cell *mdHeaderCellDef> Album</md-header-cell>\n      <md-cell *mdCellDef=\"let track\"> {{track.album}}</md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"description\">\n      <md-header-cell *mdHeaderCellDef> Description</md-header-cell>\n      <md-cell *mdCellDef=\"let track\"> {{track.description}}</md-cell>\n    </ng-container>\n\n    <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\n    <md-row *mdRowDef=\"let row; columns: displayedColumns;\" (click)=\"onSelectTrack(row)\"></md-row>\n  </md-table>\n</md-dialog-content>\n\n<md-dialog-actions align=\"end\">\n  <button md-button color=\"primary\" [disabled]=\"!track\" (click)=\"onOk()\"> Ok</button>\n  <button md-button color=\"primary\" md-dialog-close> Cancel</button>\n</md-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/add-track.dialog/add-track.dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-table {\n  overflow: auto; }\n  .mat-table md-row {\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/add-track.dialog/add-track.dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTrackDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_track_track_service__ = __webpack_require__("../../../../../src/app/services/track/track.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_tracks_tracks_model__ = __webpack_require__("../../../../../src/app/models/tracks/tracks.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_sources_tracks_tracks_datasource__ = __webpack_require__("../../../../../src/app/data-sources/tracks/tracks.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_track_track_model__ = __webpack_require__("../../../../../src/app/models/track/track.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddTrackDialogComponent = (function () {
    function AddTrackDialogComponent(dialogRef, trackService) {
        this.dialogRef = dialogRef;
        this.trackService = trackService;
        this.displayedColumns = ['title', 'performer', 'album', 'description'];
        this.dataSource = undefined;
        this.setEmptyTracklists();
    }
    AddTrackDialogComponent.prototype.onOk = function () {
        this.dialogRef.close(this.track);
    };
    AddTrackDialogComponent.prototype.setPlaylist = function (playlist) {
        var _this = this;
        this.playlist = playlist;
        this.trackService.getAllTracks(playlist).then(function (tracks) { return _this.setTracks(tracks); })
            .catch(function (any) { return _this.setEmptyTracklists(); });
    };
    AddTrackDialogComponent.prototype.onSelectTrack = function (track) {
        var selectedTrack = new __WEBPACK_IMPORTED_MODULE_5__models_track_track_model__["a" /* TrackImpl */]();
        selectedTrack.id = track.id;
        selectedTrack.title = track.title;
        selectedTrack.performer = track.performer;
        this.track = selectedTrack;
    };
    AddTrackDialogComponent.prototype.setTracks = function (tracks) {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__data_sources_tracks_tracks_datasource__["a" /* TracksDataSource */](tracks);
        this.tracks = tracks;
    };
    AddTrackDialogComponent.prototype.setEmptyTracklists = function () {
        this.tracks = new __WEBPACK_IMPORTED_MODULE_3__models_tracks_tracks_model__["a" /* TracksImpl */]();
    };
    return AddTrackDialogComponent;
}());
AddTrackDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: __webpack_require__("../../../../../src/app/dialogs/add-track.dialog/add-track.dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dialogs/add-track.dialog/add-track.dialog.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_track_track_service__["a" /* TrackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_track_track_service__["a" /* TrackService */]) === "function" && _b || Object])
], AddTrackDialogComponent);

var _a, _b;
//# sourceMappingURL=add-track.dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dialogs/edit-playlist.dialog/edit-playlist.dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>\n  Edit Playlist\n</h1>\n\n<md-dialog-content>\n  <md-input-container>\n    <input mdInput\n           placeholder=\"Name\"\n           required\n           [(ngModel)]=\"name\">\n    <md-error>Please provide a name for the playlist</md-error>\n  </md-input-container>\n</md-dialog-content>\n\n<md-dialog-actions align=\"end\">\n  <button md-button color=\"primary\" [disabled]=\"!name || name.trim() === ''\" (click)=\"onOk()\"> Ok</button>\n  <button md-button color=\"primary\" md-dialog-close> Cancel</button>\n</md-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/edit-playlist.dialog/edit-playlist.dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPlaylistDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditPlaylistDialogComponent = (function () {
    function EditPlaylistDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    EditPlaylistDialogComponent.prototype.onOk = function () {
        this.dialogRef.close(this.name);
    };
    return EditPlaylistDialogComponent;
}());
EditPlaylistDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: __webpack_require__("../../../../../src/app/dialogs/edit-playlist.dialog/edit-playlist.dialog.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */]) === "function" && _a || Object])
], EditPlaylistDialogComponent);

var _a;
//# sourceMappingURL=edit-playlist.dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/dialogs/new-playlist.dialog/new-playlist.dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>\n  Create Playlist\n</h1>\n\n<md-dialog-content>\n  <md-input-container>\n    <input mdInput\n           placeholder=\"Name\"\n           required\n           [(ngModel)]=\"name\">\n    <md-error>Please provide a name for the playlist</md-error>\n  </md-input-container>\n</md-dialog-content>\n\n<md-dialog-actions align=\"end\">\n  <button md-button color=\"primary\" [disabled]=\"!name || name.trim() === ''\" (click)=\"onOk()\"> Ok</button>\n  <button md-button color=\"primary\" md-dialog-close> Cancel</button>\n</md-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/new-playlist.dialog/new-playlist.dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPlaylistDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewPlaylistDialogComponent = (function () {
    function NewPlaylistDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    NewPlaylistDialogComponent.prototype.onOk = function () {
        this.dialogRef.close(this.name);
    };
    return NewPlaylistDialogComponent;
}());
NewPlaylistDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: __webpack_require__("../../../../../src/app/dialogs/new-playlist.dialog/new-playlist.dialog.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialogRef */]) === "function" && _a || Object])
], NewPlaylistDialogComponent);

var _a;
//# sourceMappingURL=new-playlist.dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/login-request/login-request.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRequest; });
var LoginRequest = (function () {
    function LoginRequest(user, password) {
        this.user = user;
        this.password = password;
    }
    return LoginRequest;
}());

//# sourceMappingURL=login-request.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/playlist/playlist.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistImpl; });
var PlaylistImpl = (function () {
    function PlaylistImpl(name) {
        this.id = -1;
        this.name = name;
        this.owner = false;
    }
    return PlaylistImpl;
}());

//# sourceMappingURL=playlist.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/playlists/playlists.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistsImpl; });
var PlaylistsImpl = (function () {
    function PlaylistsImpl() {
        this.playlists = [];
        this.length = 0;
    }
    return PlaylistsImpl;
}());

//# sourceMappingURL=playlists.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/settings/settings.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsImpl; });
var SettingsImpl = (function () {
    function SettingsImpl() {
        this.server = '';
        this.user = '';
        this.token = '';
    }
    return SettingsImpl;
}());

//# sourceMappingURL=settings.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/track/track.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackImpl; });
var TrackImpl = (function () {
    function TrackImpl() {
        this.id = -1;
        this.title = '';
        this.performer = '';
        this.duration = 0;
        this.album = undefined;
        this.playcount = undefined;
        this.publicationDate = undefined;
        this.description = undefined;
        this.offlineAvailable = false;
    }
    return TrackImpl;
}());

//# sourceMappingURL=track.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/tracks/tracks.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TracksImpl; });
var TracksImpl = (function () {
    function TracksImpl() {
        this.tracks = [];
    }
    return TracksImpl;
}());

//# sourceMappingURL=tracks.model.js.map

/***/ }),

/***/ "../../../../../src/app/modules/angular.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotitubeAngularModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SpotitubeAngularModule = (function () {
    function SpotitubeAngularModule() {
    }
    return SpotitubeAngularModule;
}());
SpotitubeAngularModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
        ]
    })
], SpotitubeAngularModule);

//# sourceMappingURL=angular.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotitubeMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpotitubeMaterialModule = (function () {
    function SpotitubeMaterialModule() {
    }
    return SpotitubeMaterialModule;
}());
SpotitubeMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdTooltipModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdTableModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdTooltipModule */]
        ]
    })
], SpotitubeMaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/minutes.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinutesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MinutesPipe = (function () {
    function MinutesPipe() {
    }
    MinutesPipe.prototype.transform = function (value, args) {
        var date = new Date(null);
        date.setSeconds(value);
        var minutes = date.toISOString().substr(11, 8);
        return minutes;
    };
    return MinutesPipe;
}());
MinutesPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'minutes'
    })
], MinutesPipe);

//# sourceMappingURL=minutes.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/logging/logging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggingService = LoggingService_1 = (function () {
    function LoggingService() {
    }
    /**
     * Print a warning message to the console
     *
     * @param {string} message
     * @param {any} object? An extra object to give additional information.
     */
    LoggingService.prototype.warn = function (message, object) {
        this.consoleLog(LoggingService_1.WARNING, message, object);
    };
    /**
     * Print a error message to the console
     *
     * @param {string} message
     * @param {any} object? An extra object to give additional information.
     */
    LoggingService.prototype.error = function (message, object) {
        this.consoleLog(LoggingService_1.ERROR, message, object);
    };
    /**
     * Print a info message to the console
     *
     * @param {string} message
     * @param {any} object? An extra object to give additional information.
     */
    LoggingService.prototype.info = function (message, object) {
        this.consoleLog(LoggingService_1.INFO, message, object);
    };
    LoggingService.prototype.consoleLog = function (level, message, object) {
        if (object) {
            console.log(level + message, object);
        }
        else {
            console.log(level + message);
        }
    };
    return LoggingService;
}());
LoggingService.ERROR = 'ERROR - ';
LoggingService.INFO = 'INFO - ';
LoggingService.WARNING = 'WARNING - ';
LoggingService = LoggingService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], LoggingService);

var LoggingService_1;
//# sourceMappingURL=logging.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_login_request_login_request_model__ = __webpack_require__("../../../../../src/app/models/login-request/login-request.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restful_spotitube_client_restful_spotitube_client_service__ = __webpack_require__("../../../../../src/app/services/restful-spotitube-client/restful-spotitube-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logging_logging_service__ = __webpack_require__("../../../../../src/app/services/logging/logging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__playlist_playlist_service__ = __webpack_require__("../../../../../src/app/services/playlist/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__track_track_service__ = __webpack_require__("../../../../../src/app/services/track/track.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginService = (function (_super) {
    __extends(LoginService, _super);
    /**
     * Create a new LoginService
     *
     * @param {HttpClient} httpClient
     * @param {LoggingService} loggingService
     */
    function LoginService(httpClient, playlistService, trackService, loggingService) {
        var _this = _super.call(this, loggingService) || this;
        _this.httpClient = httpClient;
        _this.playlistService = playlistService;
        _this.trackService = trackService;
        _this.initAuthorizationErrorHandling();
        return _this;
    }
    /**
     * Login to the application
     *
     * @param {string} user
     * @param {string} password
     * @param {string} serverUrl
     */
    LoginService.prototype.login = function (user, password, serverUrl) {
        this.setNewSettings(serverUrl);
        this.handleLoginRequest(user, password);
    };
    /**
     * Logout of the application
     */
    LoginService.prototype.logout = function () {
        this.clearStorage();
    };
    LoginService.prototype.handleLoginRequest = function (user, password) {
        var _this = this;
        var loginRequestBody = JSON.stringify(new __WEBPACK_IMPORTED_MODULE_3__models_login_request_login_request_model__["a" /* LoginRequest */](user, password));
        var endpointUrl = this.createEndpointUrl(__WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* AppConstants */].API_LOGIN);
        this.httpClient.post(endpointUrl, loginRequestBody, { headers: this.headers })
            .subscribe(function (data) { return _this.handleLoginResponse(data); }, function (err) { return _this.handleLoginErrors(err); });
    };
    LoginService.prototype.handleLoginResponse = function (response) {
        if (response) {
            this.updateSettings(response.user, response.token);
        }
        else {
            this.loggingService.error('Something wrong happened with the server response. ' +
                'Did your server respond with valid json?');
            this.clearStorage();
        }
    };
    LoginService.prototype.handleLoginErrors = function (error) {
        this.handleErrors(error);
        this.clearStorage();
    };
    LoginService.prototype.initAuthorizationErrorHandling = function () {
        var _this = this;
        this.trackService.restError$.subscribe(function (error) { return _this.handleAuthorizationError(error); });
        this.playlistService.restError$.subscribe(function (error) { return _this.handleAuthorizationError(error); });
        this.restError$.subscribe(function (error) { return _this.handleAuthorizationError(error); });
    };
    LoginService.prototype.handleAuthorizationError = function (error) {
        if (error === 403 || error === 401) {
            this.loggingService.info('An authorization or Authentication error has occured. User is logged out.');
            this.logout();
        }
    };
    return LoginService;
}(__WEBPACK_IMPORTED_MODULE_4__restful_spotitube_client_restful_spotitube_client_service__["a" /* RestfulSpotitubeClientService */]));
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__playlist_playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__playlist_playlist_service__["a" /* PlaylistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__track_track_service__["a" /* TrackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__track_track_service__["a" /* TrackService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__logging_logging_service__["a" /* LoggingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__logging_logging_service__["a" /* LoggingService */]) === "function" && _d || Object])
], LoginService);

var _a, _b, _c, _d;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/playlist/playlist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restful_spotitube_client_restful_spotitube_client_service__ = __webpack_require__("../../../../../src/app/services/restful-spotitube-client/restful-spotitube-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logging_logging_service__ = __webpack_require__("../../../../../src/app/services/logging/logging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var PlaylistService = (function (_super) {
    __extends(PlaylistService, _super);
    /**
     * Create a new PlaylistService
     *
     * @param {HttpClient} httpClient
     * @param {LoggingService} loggingService
     */
    function PlaylistService(httpClient, loggingService) {
        var _this = _super.call(this, loggingService) || this;
        _this.httpClient = httpClient;
        return _this;
    }
    /**
     * Return a complete list of playlists.
     *
     * @return {Promise<Playlists>} The complete list of playlists
     */
    PlaylistService.prototype.getPlaylists = function () {
        return __awaiter(this, void 0, void 0, function () {
            var endpointUrl, params, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpointUrl = this.getPlaylistEndpoint(undefined);
                        params = this.createtokenParam();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.get(endpointUrl, { params: params }).toPromise()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        err_1 = _a.sent();
                        this.handleErrors(err_1);
                        return [2 /*return*/, Promise.reject(err_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create a new Playlist.
     *
     * @param {Playlist} playlist
     * @return {Promise<Playlists>} The complete and updated list of playlists
     */
    PlaylistService.prototype.newPlaylist = function (playlist) {
        return __awaiter(this, void 0, void 0, function () {
            var endpointUrl, params, data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpointUrl = this.getPlaylistEndpoint(undefined);
                        params = this.createtokenParam();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.post(endpointUrl, JSON.stringify(playlist), {
                                headers: this.headers,
                                params: params
                            }).toPromise()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        err_2 = _a.sent();
                        this.handleErrors(err_2);
                        return [2 /*return*/, Promise.reject(err_2)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Update the given playlist.
     *
     * @param {Playlist} playlist
     * @return {Promise<Playlists>} The complete and updated list of playlists
     */
    PlaylistService.prototype.updatePlaylist = function (playlist) {
        return __awaiter(this, void 0, void 0, function () {
            var endpointUrl, params, data, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpointUrl = this.getPlaylistEndpoint(playlist);
                        params = this.createtokenParam();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.put(endpointUrl, JSON.stringify(playlist), {
                                headers: this.headers,
                                params: params
                            }).toPromise()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        err_3 = _a.sent();
                        this.handleErrors(err_3);
                        return [2 /*return*/, Promise.reject(err_3)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete the given playlist
     *
     * @param {Playlist} playlist
     * @return {Promise<Playlists>} The complete and updated list of playlists
     */
    PlaylistService.prototype.deletePlaylist = function (playlist) {
        return __awaiter(this, void 0, void 0, function () {
            var endpointUrl, params, data, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpointUrl = this.getPlaylistEndpoint(playlist);
                        params = this.createtokenParam();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.delete(endpointUrl, { params: params }).toPromise()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        err_4 = _a.sent();
                        this.handleErrors(err_4);
                        return [2 /*return*/, Promise.reject(err_4)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PlaylistService.prototype.getPlaylistEndpoint = function (playlist) {
        var baseEndpointUrl = this.createEndpointUrl(__WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* AppConstants */].API_PLAYLISTS);
        if (playlist) {
            return (baseEndpointUrl.concat('/')).concat(playlist.id.toString());
        }
        else {
            return baseEndpointUrl;
        }
    };
    return PlaylistService;
}(__WEBPACK_IMPORTED_MODULE_1__restful_spotitube_client_restful_spotitube_client_service__["a" /* RestfulSpotitubeClientService */]));
PlaylistService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__logging_logging_service__["a" /* LoggingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__logging_logging_service__["a" /* LoggingService */]) === "function" && _b || Object])
], PlaylistService);

var _a, _b;
//# sourceMappingURL=playlist.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/restful-spotitube-client/restful-spotitube-client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestfulSpotitubeClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logging_logging_service__ = __webpack_require__("../../../../../src/app/services/logging/logging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_settings_settings_model__ = __webpack_require__("../../../../../src/app/models/settings/settings.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestfulSpotitubeClientService = (function () {
    function RestfulSpotitubeClientService(loggingService) {
        this.loggingService = loggingService;
        this.settingsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.restError = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        /**
         * Register to this observable to be notified when the settings change.
         *
         * @type {Observable<Settings>}
         */
        this.settingsChanged$ = this.settingsChanged.asObservable();
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        /**
         * Register to this observer to be notified if any Errors occur.
         *
         * @type {Observable<string>}
         */
        this.restError$ = this.restError.asObservable();
        this.initLocalStorageListeners();
    }
    /**
     * Get the current SettingsImpl.
     *
     * @return {Promise<Settings>}
     */
    RestfulSpotitubeClientService.prototype.getSettings = function () {
        return Promise.resolve(this.retrieve());
    };
    /**
     * Call this method when an error occurs. Consequently, all observers will be notified.
     *
     * @param {HttpErrorResponse} error
     */
    RestfulSpotitubeClientService.prototype.handleErrors = function (error) {
        this.loggingService.info('A http error has occured: ', error);
        this.restError.next(error.status);
    };
    RestfulSpotitubeClientService.prototype.createEndpointUrl = function (path) {
        return this.retrieve().server + path;
    };
    /**
     * Call this method to clear LocalStorage. Consequently, all observers will be notified.
     */
    RestfulSpotitubeClientService.prototype.clearStorage = function () {
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* AppConstants */].LOCAL_STORAGE_KEY_SETTINGS);
        this.settingsChanged.next(undefined);
    };
    /**
     * Create HttpParams that contain the token used for authentication.
     * @return {HttpParams}
     */
    RestfulSpotitubeClientService.prototype.createtokenParam = function () {
        var token = this.retrieve().token;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */]().set('token', token);
        return params;
    };
    RestfulSpotitubeClientService.prototype.setNewSettings = function (serverUrl) {
        var settings = new __WEBPACK_IMPORTED_MODULE_5__models_settings_settings_model__["a" /* SettingsImpl */]();
        settings.server = serverUrl;
        this.persist(settings);
    };
    RestfulSpotitubeClientService.prototype.updateSettings = function (user, token) {
        var settings = this.retrieve();
        settings.user = user;
        settings.token = token;
        this.persist(settings);
    };
    RestfulSpotitubeClientService.prototype.initLocalStorageListeners = function () {
        var _this = this;
        window.addEventListener(__WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* AppConstants */].STORAGE_EVENT_LISTENER_KEY, function (event) { return _this.handleStorageChange(event); });
    };
    RestfulSpotitubeClientService.prototype.handleStorageChange = function (event) {
        if (event.key === __WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* AppConstants */].LOCAL_STORAGE_KEY_SETTINGS) {
            this.settingsChanged.next(JSON.parse(event.newValue));
        }
    };
    RestfulSpotitubeClientService.prototype.persist = function (settings) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* AppConstants */].LOCAL_STORAGE_KEY_SETTINGS, JSON.stringify(settings));
        this.settingsChanged.next(settings);
    };
    RestfulSpotitubeClientService.prototype.retrieve = function () {
        var json = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* AppConstants */].LOCAL_STORAGE_KEY_SETTINGS);
        if (json) {
            return JSON.parse(json);
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_5__models_settings_settings_model__["a" /* SettingsImpl */]();
        }
    };
    return RestfulSpotitubeClientService;
}());
RestfulSpotitubeClientService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__logging_logging_service__["a" /* LoggingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__logging_logging_service__["a" /* LoggingService */]) === "function" && _a || Object])
], RestfulSpotitubeClientService);

var _a;
//# sourceMappingURL=restful-spotitube-client.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/track/track.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restful_spotitube_client_restful_spotitube_client_service__ = __webpack_require__("../../../../../src/app/services/restful-spotitube-client/restful-spotitube-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logging_logging_service__ = __webpack_require__("../../../../../src/app/services/logging/logging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var TrackService = (function (_super) {
    __extends(TrackService, _super);
    /**
     * Create a new TrackService
     *
     * @param {HttpClient} httpClient
     * @param {LoggingService} loggingService
     */
    function TrackService(httpClient, loggingService) {
        var _this = _super.call(this, loggingService) || this;
        _this.httpClient = httpClient;
        _this.tracksUpdated = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        /**
         * Register to this observable to be notified when the tracks have changed.
         *
         * @type {Observable<Tracks>}
         */
        _this.tracksUpdated$ = _this.tracksUpdated.asObservable();
        return _this;
    }
    /**
     * Add a Track to a Playlist
     *
     * @param {Playlist} playlist
     * @param {Track} track
     * @return {Promise<Playlists>} The complete and updated list of playlists
     */
    TrackService.prototype.addTrackToPlaylist = function (playlist, track) {
        return __awaiter(this, void 0, void 0, function () {
            var endpointUrl, params, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpointUrl = this.getTracksEndpoint(playlist);
                        params = this.createtokenParam();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.post(endpointUrl, JSON.stringify(track), {
                                headers: this.headers,
                                params: params
                            }).toPromise()];
                    case 2:
                        data = _a.sent();
                        this.tracksUpdated.next();
                        return [2 /*return*/, data];
                    case 3:
                        err_1 = _a.sent();
                        this.handleErrors(err_1);
                        return [2 /*return*/, Promise.reject(err_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Remove a track from the playlist.
     *
     * @param {Playlist} playlist
     * @param {Track} track
     * @return {Promise<Track[]>} The complete and updated list of tracks belonging to the given playlist
     */
    TrackService.prototype.removeTracksFromPlaylist = function (playlist, track) {
        return __awaiter(this, void 0, void 0, function () {
            var endpointUrl, params, data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpointUrl = this.getTrackEndpoint(playlist, track);
                        params = this.createtokenParam();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.delete(endpointUrl, { params: params }).toPromise()];
                    case 2:
                        data = _a.sent();
                        this.tracksUpdated.next();
                        return [2 /*return*/, data];
                    case 3:
                        err_2 = _a.sent();
                        this.handleErrors(err_2);
                        return [2 /*return*/, Promise.reject(err_2)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Return all Tracks
     *
     * @return {Promise<Track[]>} An array of Tracks.
     */
    TrackService.prototype.getAllTracks = function (playlist) {
        return __awaiter(this, void 0, void 0, function () {
            var params, data, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = this.createtokenParam();
                        if (playlist) {
                            params = params.append('forPlaylist', playlist.id.toString());
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.get(this.createEndpointUrl(__WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* AppConstants */].API_TRACKS), { params: params }).toPromise()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        err_3 = _a.sent();
                        this.handleErrors(err_3);
                        return [2 /*return*/, Promise.reject(err_3)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Return all Tracks for the given playlist.
     *
     * @return {Promise<Track[]>} An array of Tracks.
     */
    TrackService.prototype.getTracksForPlaylist = function (playlist) {
        return __awaiter(this, void 0, void 0, function () {
            var endpointUrl, params, data, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpointUrl = this.getTracksEndpoint(playlist);
                        params = this.createtokenParam();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient.get(endpointUrl, { params: params }).toPromise()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 3:
                        err_4 = _a.sent();
                        this.handleErrors(err_4);
                        return [2 /*return*/, Promise.reject(err_4)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TrackService.prototype.getTrackEndpoint = function (playlist, track) {
        var trackEndpoints = this.getTracksEndpoint(playlist)
            .concat('/' + track.id);
        return trackEndpoints;
    };
    TrackService.prototype.getTracksEndpoint = function (playlist) {
        var baseEndpointUrl = this.createEndpointUrl(__WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* AppConstants */].API_PLAYLISTS);
        var tracksEndpoints = ((baseEndpointUrl.concat('/'))
            .concat(playlist.id.toString()))
            .concat(__WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* AppConstants */].API_TRACKS);
        return tracksEndpoints;
    };
    return TrackService;
}(__WEBPACK_IMPORTED_MODULE_1__restful_spotitube_client_restful_spotitube_client_service__["a" /* RestfulSpotitubeClientService */]));
TrackService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__logging_logging_service__["a" /* LoggingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__logging_logging_service__["a" /* LoggingService */]) === "function" && _b || Object])
], TrackService);

var _a, _b;
//# sourceMappingURL=track.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map