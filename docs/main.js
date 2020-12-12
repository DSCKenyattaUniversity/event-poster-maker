(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wycliffwasonga/Desktop/event-poster-maker/src/main.ts */"zUnb");


/***/ }),

/***/ "2DkG":
/*!***************************************************************************!*\
  !*** ./src/app/components/poster-templates/poster-templates.component.ts ***!
  \***************************************************************************/
/*! exports provided: PosterTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterTemplatesComponent", function() { return PosterTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_poster_templates_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/poster-templates.service */ "l3LM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _poster_templates_item_poster_templates_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../poster-templates-item/poster-templates-item.component */ "PiUM");





function PosterTemplatesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-poster-templates-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PosterTemplatesComponent_div_10_Template_app_poster_templates_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const template_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeSelection(template_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const template_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", template_r1)("selected", ctx_r0.selected == template_r1);
} }
class PosterTemplatesComponent {
    constructor(posterTemplateService) {
        this.posterTemplateService = posterTemplateService;
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._templates = [];
    }
    ngOnInit() {
        this.orientation = 1 /* PORTRAIT */;
        this.posterTemplateService.allTemplates().subscribe(templates => {
            this._templates = templates;
            this.changeSelection(this.templates[0]);
        });
    }
    get templates() {
        return this._templates.filter(({ orientation }) => orientation == this.orientation);
    }
    changeSelection(template) {
        if (this.selected == template) {
            return;
        }
        this.selected = template;
        this.onSelectionChange.emit(template);
    }
}
PosterTemplatesComponent.ɵfac = function PosterTemplatesComponent_Factory(t) { return new (t || PosterTemplatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_poster_templates_service__WEBPACK_IMPORTED_MODULE_1__["PosterTemplatesService"])); };
PosterTemplatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PosterTemplatesComponent, selectors: [["app-poster-templates"]], outputs: { onSelectionChange: "onSelectionChange" }, decls: 11, vars: 3, consts: [[1, "d-flex", "justify-content-center"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "orientationRadios1", "value", "1", 1, "form-check-input", 3, "checked", "change"], ["for", "orientationRadios1", 1, "form-check-label"], ["type", "radio", "id", "orientationRadios2", "value", "2", 1, "form-check-input", 3, "checked", "change"], ["for", "orientationRadios2", 1, "form-check-label"], ["class", "list-group p-2", 4, "ngFor", "ngForOf"], [1, "list-group", "p-2"], [3, "template", "selected", "click"]], template: function PosterTemplatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PosterTemplatesComponent_Template_input_change_3_listener() { return ctx.orientation = 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portrait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PosterTemplatesComponent_Template_input_change_7_listener() { return ctx.orientation = 2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Landscape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PosterTemplatesComponent_div_10_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.orientation == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.orientation == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.templates);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _poster_templates_item_poster_templates_item_component__WEBPACK_IMPORTED_MODULE_3__["PosterTemplatesItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdGVyLXRlbXBsYXRlcy9wb3N0ZXItdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PosterTemplatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-poster-templates',
                templateUrl: './poster-templates.component.html',
                styleUrls: ['./poster-templates.component.scss']
            }]
    }], function () { return [{ type: _services_poster_templates_service__WEBPACK_IMPORTED_MODULE_1__["PosterTemplatesService"] }]; }, { onSelectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "2Hlj":
/*!***********************************!*\
  !*** ./src/app/models/speaker.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Speaker; });
class Speaker {
    constructor(id, name, role, company, thumbnailUrl) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.company = company;
        this.thumbnailUrl = thumbnailUrl;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PLpS":
/*!*********************************************************************!*\
  !*** ./src/app/components/event-details/event-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: EventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return EventDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_models_speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/speaker */ "2Hlj");
/* harmony import */ var _models_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/event */ "Zgh0");
/* harmony import */ var _add_speaker_dialog_add_speaker_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-speaker-dialog/add-speaker-dialog.component */ "XejR");
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chance */ "nmfD");
/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["dialog"];
function EventDetailsComponent_a_37_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_a_37_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const speaker_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.editSpeaker(speaker_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const speaker_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", speaker_r2.thumbnailUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](speaker_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](speaker_r2.company);
} }
class EventDetailsComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.model = new _models_event__WEBPACK_IMPORTED_MODULE_3__["default"]('Event Title', moment__WEBPACK_IMPORTED_MODULE_1__(), '', []);
        this.chance = Object(chance__WEBPACK_IMPORTED_MODULE_5__["Chance"])();
    }
    ngOnInit() {
    }
    onDateChange(event) {
        this.model.date = moment__WEBPACK_IMPORTED_MODULE_1__(String(event.target.value));
    }
    onStartTimeChange(event) {
        this.model.startTime = moment__WEBPACK_IMPORTED_MODULE_1__(String(event.target.value), 'HH:mm');
    }
    onEndTimeChange(event) {
        this.model.endTime = moment__WEBPACK_IMPORTED_MODULE_1__(String(event.target.value), 'HH:mm');
    }
    addSpeaker() {
        const factory = this.componentFactoryResolver.resolveComponentFactory(_add_speaker_dialog_add_speaker_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddSpeakerDialogComponent"]);
        this.container.clear();
        const component = this.container.createComponent(factory);
        const speaker = new src_app_models_speaker__WEBPACK_IMPORTED_MODULE_2__["default"](this.chance.guid(), '', '', '');
        component.instance.model.speaker = speaker;
        component.instance.onSave.subscribe(evt => {
            this.model.speakers.push(speaker);
            this.container.clear();
        });
        component.instance.onCancel.subscribe(evt => {
            this.container.clear();
        });
    }
    deleteSpeaker(speaker) {
        this.model.speakers = this.model.speakers.filter(it => it.id !== speaker.id);
    }
    editSpeaker(speaker) {
        const index = this.model.speakers.findIndex(it => it.id === speaker.id);
        const factory = this.componentFactoryResolver.resolveComponentFactory(_add_speaker_dialog_add_speaker_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddSpeakerDialogComponent"]);
        this.container.clear();
        const component = this.container.createComponent(factory).instance;
        const s = Object.assign({}, speaker);
        component.title = "Edit Speaker";
        component.model.speaker = s;
        component.onSave.subscribe(evt => {
            this.model.speakers[index] = s;
            this.container.clear();
        });
        component.onCancel.subscribe(evt => {
            this.container.clear();
        });
    }
}
EventDetailsComponent.ɵfac = function EventDetailsComponent_Factory(t) { return new (t || EventDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
EventDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventDetailsComponent, selectors: [["app-event-details"]], viewQuery: function EventDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, inputs: { model: ["event", "model"] }, decls: 40, vars: 8, consts: [[1, "form-group"], ["for", "eventCommunityNameInput"], ["type", "text", "id", "eventCommunityNameInput", "name", "communityName", "placeholder", "Kenyatta University", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "eventTitleInput"], ["type", "text", "id", "eventTitleInput", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "eventSubtitleInput"], ["type", "text", "id", "eventSubtitleInput", "name", "subtitle", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "eventVenueInput"], ["id", "eventVenueInput", "name", "venue", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "eventDateInput"], ["type", "date", "id", "eventDateInput", "name", "date", 1, "form-control", 3, "value", "change"], [1, "form-row"], [1, "form-group", "col"], ["for", "eventStartTimeInput"], ["type", "time", "id", "eventStartTimeInput", "name", "startTime", 1, "form-control", 3, "value", "change"], ["for", "eventEndTimeInput"], ["type", "time", "id", "eventEndTimeInput", "name", "endTime", 1, "form-control", 3, "value", "change"], [1, "form-group", "pb-1", "mb-0", "border-bottom"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "float-right", "mr-2", 3, "click"], [1, "list-group"], ["class", "list-group-item list-group-item-action p-2 border-0", 3, "click", 4, "ngFor", "ngForOf"], ["dialog", ""], [1, "list-group-item", "list-group-item-action", "p-2", "border-0", 3, "click"], [1, "d-flex", "align-items-center"], ["width", "50px", "height", "50px", 1, "border", "rounded-circle", 3, "src"], [1, "pl-2", "noselect"], [1, "text-primary"], [1, "text-muted"]], template: function EventDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Community Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventDetailsComponent_Template_input_ngModelChange_5_listener($event) { return ctx.model.communityName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventDetailsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.model.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventDetailsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.model.subtitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Venue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventDetailsComponent_Template_input_ngModelChange_17_listener($event) { return ctx.model.venue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventDetailsComponent_Template_input_change_21_listener($event) { return ctx.onDateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventDetailsComponent_Template_input_change_26_listener($event) { return ctx.onStartTimeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EventDetailsComponent_Template_input_change_30_listener($event) { return ctx.onEndTimeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Speakers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_button_click_34_listener() { return ctx.addSpeaker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EventDetailsComponent_a_37_Template, 8, 3, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](38, null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.communityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.venue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.model.date.format("YYYY-MM-DD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.model.startTime.format("HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.model.endTime.format("HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.model.speakers);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlscy9ldmVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-details',
                templateUrl: './event-details.component.html',
                styleUrls: ['./event-details.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["event"]
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dialog', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ "PiUM":
/*!*************************************************************************************!*\
  !*** ./src/app/components/poster-templates-item/poster-templates-item.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PosterTemplatesItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterTemplatesItemComponent", function() { return PosterTemplatesItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "active": a0 }; };
class PosterTemplatesItemComponent {
    constructor() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClick() {
        this.click.emit();
    }
}
PosterTemplatesItemComponent.ɵfac = function PosterTemplatesItemComponent_Factory(t) { return new (t || PosterTemplatesItemComponent)(); };
PosterTemplatesItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PosterTemplatesItemComponent, selectors: [["app-poster-templates-item"]], inputs: { template: "template", selected: "selected" }, outputs: { click: "click" }, decls: 2, vars: 4, consts: [["data-toggle", "list", 1, "list-group-item", "list-group-item-action", "p-1", "border-0", 3, "ngClass", "click"], [1, "w-100", "border", 3, "src"]], template: function PosterTemplatesItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PosterTemplatesItemComponent_Template_a_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.selected));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "templates/" + ctx.template.id + "/" + ctx.template.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdGVyLXRlbXBsYXRlcy1pdGVtL3Bvc3Rlci10ZW1wbGF0ZXMtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PosterTemplatesItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-poster-templates-item',
                templateUrl: './poster-templates-item.component.html',
                styleUrls: ['./poster-templates-item.component.scss']
            }]
    }], function () { return []; }, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/event */ "Zgh0");
/* harmony import */ var _services_imaging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/imaging.service */ "VRpG");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _components_poster_templates_poster_templates_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/poster-templates/poster-templates.component */ "2DkG");
/* harmony import */ var _components_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/event-details/event-details.component */ "PLpS");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














const _c0 = ["preview"];
function AppComponent_mat_sidenav_1_2_ng_template_0_Template(rf, ctx) { }
function AppComponent_mat_sidenav_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_mat_sidenav_1_2_ng_template_0_Template, 0, 0, "ng-template", 13);
} }
const _c1 = function (a0) { return { active: a0 }; };
function AppComponent_mat_sidenav_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_mat_sidenav_1_2_Template, 1, 0, undefined, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_mat_sidenav_1_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.model.selected = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Templates");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_mat_sidenav_1_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.model.selected = 2; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_mat_sidenav_1_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.model.selected = 3; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, ctx_r0.model.selected == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx_r0.model.selected == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c1, ctx_r0.model.selected == 3));
} }
function AppComponent_3_ng_template_0_Template(rf, ctx) { }
function AppComponent_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_3_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function AppComponent_4_ng_template_0_Template(rf, ctx) { }
function AppComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_4_ng_template_0_Template, 0, 0, "ng-template", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function AppComponent_ng_template_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_5_3_ng_template_0_Template(rf, ctx) { }
function AppComponent_ng_template_5_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AppComponent_ng_template_5_3_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function AppComponent_ng_template_5_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "perm_media");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_5_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_5_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "invisible-tabs": a0 }; };
function AppComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_ng_template_5_ng_template_2_Template, 2, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_ng_template_5_3_Template, 1, 1, undefined, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_ng_template_5_ng_template_5_Template, 2, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "app-poster-templates", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelectionChange", function AppComponent_ng_template_5_Template_app_poster_templates_onSelectionChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.onTemplateChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppComponent_ng_template_5_ng_template_8_Template, 2, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-event-details", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AppComponent_ng_template_5_ng_template_11_Template, 2, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, !ctx_r4.model.isHandset))("selectedIndex", ctx_r4.model.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.model.isHandset);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("event", ctx_r4.model.event);
} }
function AppComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.downloadPoster(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var Tabs;
(function (Tabs) {
    Tabs[Tabs["TEMPLATES"] = 1] = "TEMPLATES";
    Tabs[Tabs["EVENT_DETAILS"] = 2] = "EVENT_DETAILS";
    Tabs[Tabs["STYLES"] = 3] = "STYLES";
    Tabs[Tabs["PREVIEW"] = 0] = "PREVIEW"; /* Handset only */
})(Tabs || (Tabs = {}));
;
class AppComponent {
    constructor(breakpointObserver, compiler, imagingService) {
        this.breakpointObserver = breakpointObserver;
        this.compiler = compiler;
        this.imagingService = imagingService;
        this.model = {
            event: new _models_event__WEBPACK_IMPORTED_MODULE_4__["default"]('Title', moment__WEBPACK_IMPORTED_MODULE_3__(), 'Venue', []),
            loading: false,
            selected: Tabs.TEMPLATES,
            isHandset: false
        };
        this.model.event.subtitle = 'Subtitle';
    }
    ngOnInit() {
        this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .subscribe((state) => {
            this.model.isHandset = state.matches;
            if (state.matches) {
                // Show preview
                this.model.selected = Tabs.PREVIEW;
            }
        });
    }
    ngOnDestroy() {
        this.destroyContainerRef();
    }
    onTemplateChanged(template) {
        this.destroyContainerRef();
        if (this.container) {
            this.container.clear();
        }
        this.model.loading = true;
        fetch(`templates/${template.id}/poster.svg`)
            .then(response => response.text())
            .then(svg => {
            const previewComponent = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                template: svg
            })(class {
                constructor() { }
            });
            const previewComponentModule = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [previewComponent]
            })(class {
            });
            const module = this.compiler.compileModuleAndAllComponentsSync(previewComponentModule);
            const factory = module.componentFactories.find(componentFactory => componentFactory.componentType === previewComponent);
            const component = this.container.createComponent(factory);
            component.instance.event = this.model.event;
            this.componentRef = component;
            this.model.loading = false;
        });
    }
    downloadPoster() {
        const svg = this.container.element.nativeElement.parentElement.querySelector('svg');
        this.imagingService.domToImage(svg, 'poster.png');
    }
    destroyContainerRef() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Compiler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_imaging_service__WEBPACK_IMPORTED_MODULE_5__["ImagingService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 9, vars: 3, consts: [[1, "app-container"], ["opened", "", "mode", "side", "position", "end", "class", "h-100", "style", "width: 360px", 4, "ngIf"], [1, "h-100"], [4, "ngIf"], ["template1", ""], ["posterPreview", ""], ["opened", "", "mode", "side", "position", "end", 1, "h-100", 2, "width", "360px"], [1, "h-100", "d-flex"], [4, "ngTemplateOutlet"], [1, "border-left", 2, "width", "45px"], [1, "nav", "sideways-tabs", "nav-tabs", "right-tabs", 2, "right", "1.95rem"], [1, "nav-item"], [1, "nav-link", 3, "ngClass", "click"], ["class", "flex-grow-1"], [3, "ngTemplateOutlet"], ["class", "h-100", 3, "ngTemplateOutlet"], ["mat-stretch-tabs", "", "headerPosition", "below", "animationDuration", "0ms", 1, "h-100", "w-100", 3, "ngClass", "selectedIndex"], ["mat-tab-label", ""], [3, "onSelectionChange"], [3, "event"], [1, "h-100", "canvas"], ["preview", ""], ["id", "btnDownload", "type", "button", 1, "btn", "btn-primary", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-download"], ["fill-rule", "evenodd", "d", "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_mat_sidenav_1_Template, 14, 10, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-sidenav-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_3_Template, 1, 1, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AppComponent_4_Template, 1, 1, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_ng_template_5_Template, 12, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_ng_template_7_Template, 7, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.model.isHandset);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.model.isHandset);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.model.isHandset);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabLabel"], _components_poster_templates_poster_templates_component__WEBPACK_IMPORTED_MODULE_8__["PosterTemplatesComponent"], _components_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_9__["EventDetailsComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: ["/*\n * Responsive vertical tabs for Bootstrap 4\n *\n * Copyright (c) 2020 Tromgy (tromgy@yahoo.com)\n *\n * Custom variable definitions. You can change these variables\n * to suit your needs without messing with the main stylesheet.\n *\n * This software is supplied under the terms of the MIT License, a\n * copy of which should be located in the distribution where this\n * file was obtained (LICENSE.txt). A copy of the license may also be\n * found online at https://opensource.org/licenses/MIT.\n *\n */\n/*\n * Responsive vertical tabs for Bootstrap 4\n *\n * Main stylesheet. @import \"custom-variables.sccss\" before\n * this file to compile into final CSS\n *\n * Copyright (c) 2020 Tromgy (tromgy@yahoo.com)\n *\n * This software is supplied under the terms of the MIT License, a\n * copy of which should be located in the distribution where this\n * file was obtained (LICENSE.txt). A copy of the license may also be\n * found online at https://opensource.org/licenses/MIT.\n *\n */\n.right-tabs.sideways-tabs, .left-tabs.sideways-tabs {\n  margin-top: 5rem;\n  border: none;\n  position: relative;\n  margin-bottom: 0;\n}\n.right-tabs.sideways-tabs, .left-tabs.sideways-tabs, .right-tabs.nav-tabs, .left-tabs.nav-tabs {\n  height: 100%;\n  flex-direction: column;\n}\n.left-tabs.nav-tabs {\n  border-right: 1px solid #dee2e6;\n  border-bottom: none;\n}\n.left-tabs .nav-link {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  margin-right: -1px;\n  text-align: left;\n}\n.left-tabs .nav-link:hover {\n  border-right: 1px solid transparent;\n}\n.left-tabs .nav-link.active {\n  border-top: 1px solid #dee2e6;\n  border-right: 1px solid transparent;\n  border-bottom: 1px solid #dee2e6;\n  border-left: 1px solid #dee2e6;\n}\n.right-tabs.nav-tabs {\n  border-left: 1px solid #dee2e6;\n  border-bottom: none;\n}\n.right-tabs .nav-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  margin-left: -1px;\n  text-align: right;\n}\n.right-tabs .nav-link:hover {\n  border-left: 1px solid transparent;\n}\n.right-tabs .nav-link.active {\n  border-top: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n  border-left: 1px solid transparent;\n}\n.left-tabs.sideways-tabs {\n  border-right: none;\n  left: -3.2rem;\n}\n.sideways-tabs.left-tabs .nav-item {\n  transform: rotate(-90deg);\n  height: 1rem;\n  margin-bottom: calc(8rem - 1rem);\n}\n.sideways-tabs.left-tabs .nav-link {\n  width: 8rem;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom: 1px solid #dee2e6;\n}\n.sideways-tabs.left-tabs .nav-link:hover {\n  border-right: 1px solid #e9ecef;\n}\n.sideways-tabs.left-tabs .nav-link.active {\n  border-top: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid transparent;\n  border-left: 1px solid #dee2e6;\n}\n.right-tabs.sideways-tabs {\n  border-left: none;\n  right: 3.2rem;\n}\n.sideways-tabs.right-tabs .nav-item {\n  transform: rotate(90deg);\n  height: 1rem;\n  margin-bottom: calc(8rem - 1rem);\n}\n.sideways-tabs.right-tabs .nav-link {\n  width: 8rem;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom: 1px solid #dee2e6;\n}\n.sideways-tabs.right-tabs .nav-link:hover {\n  border-left: 1px solid #e9ecef;\n}\n.sideways-tabs.right-tabs .nav-link.active {\n  border-top: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid transparent;\n  border-left: 1px solid #dee2e6;\n}\n@media (min-width: 26em) and (max-width: 48em) {\n  .left-tabs.nav-tabs {\n    flex-direction: row;\n    border-right: none;\n    border-left: none;\n    min-width: 100%;\n    border-bottom: 1px solid #dee2e6;\n    left: auto;\n    margin-top: auto;\n  }\n\n  .left-tabs .nav-link {\n    width: 8rem;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0.25rem;\n    margin-right: 0;\n    margin-bottom: -1px;\n  }\n\n  .left-tabs .nav-link.nav-link:hover {\n    border-right-color: #dee2e6;\n    border-bottom-color: transparent;\n  }\n\n  .left-tabs .nav-link.active {\n    border-top-color: #dee2e6;\n    border-right-color: #dee2e6;\n    border-bottom-color: transparent;\n    border-left-color: #dee2e6;\n  }\n\n  .sideways-tabs.left-tabs .nav-item,\n.sideways-tabs.right-tabs .nav-item {\n    transform: none;\n    height: auto;\n    width: auto;\n    margin-bottom: 0;\n  }\n\n  .right-tabs.nav-tabs {\n    flex-direction: row;\n    border-right: none;\n    border-left: none;\n    min-width: 100%;\n    border-top: 1px solid #dee2e6;\n    right: auto;\n    margin-top: auto;\n  }\n\n  .sideways-tabs.right-tabs .nav-link,\n.right-tabs .nav-link {\n    width: 8rem;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    border-top-left-radius: 0;\n    margin-left: 0;\n    margin-top: -1px;\n    border-bottom-color: transparent;\n  }\n\n  .right-tabs .nav-link:hover {\n    border-top-color: transparent;\n    border-left-color: #dee2e6;\n    border-bottom-color: #e9ecef;\n  }\n\n  .sideways-tabs.right-tabs .nav-link.active,\n.right-tabs .nav-link.active {\n    border-top-color: transparent;\n    border-right-color: #dee2e6;\n    border-bottom-color: #dee2e6;\n    border-left-color: #dee2e6;\n  }\n}\n@media (max-width: 26em) {\n  .left-tabs.nav-tabs {\n    flex-direction: row;\n    border-right: none;\n    border-left: none;\n    min-width: 100%;\n    border-bottom: 1px solid #dee2e6;\n    left: auto;\n    margin-top: auto;\n    padding-bottom: 0.25rem;\n  }\n\n  .right-tabs.nav-tabs {\n    flex-direction: row;\n    border-right: none;\n    border-left: none;\n    min-width: 100%;\n    border-top: 1px solid #dee2e6;\n    right: auto;\n    margin-top: auto;\n    padding-top: 0.25rem;\n  }\n\n  .sideways-tabs.left-tabs .nav-item,\n.sideways-tabs.right-tabs .nav-item {\n    transform: none;\n    height: auto;\n    width: auto;\n    margin-bottom: 0;\n  }\n\n  .sideways-tabs.left-tabs .nav-link,\n.sideways-tabs.right-tabs .nav-link,\n.nav-tabs .nav-link {\n    width: 8rem;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-radius: 0.25rem;\n    margin: 0.25rem;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    border-left-color: transparent;\n  }\n\n  .sideways-tabs.nav-tabs .nav-link:hover,\n.nav-tabs .nav-link:hover {\n    border: 1px solid #e9ecef;\n    border-top-color: #e9ecef;\n    border-right-color: #e9ecef;\n    border-bottom-color: #e9ecef;\n    border-left-color: #e9ecef;\n  }\n\n  .sideways-tabs.nav-tabs .nav-link.active,\n.left-tabs .nav-link.active,\n.right-tabs .nav-link.active {\n    border-top-color: #dee2e6;\n    border-right-color: #dee2e6;\n    border-bottom-color: #dee2e6;\n    border-left-color: #dee2e6;\n  }\n}\n:host {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  /* Old versions of Firefox */\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n     supported by Chrome, Edge, Opera and Firefox */\n}\n.app-container {\n  height: 100vh;\n}\n.canvas {\n  background-image: url('canvas.png');\n  padding: 50px;\n}\n.canvas #btnDownload {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n}\n.invisible-tabs .mat-tab-header {\n  display: none;\n}\n.mat-tab-group .mat-tab-body-wrapper {\n  flex-grow: 1;\n}\n.mat-tab-group .mat-tab-body-wrapper .mat-tab-body .mat-tab-body-content {\n  padding: 8px;\n}\n.mat-tab-group .mat-tab-body-wrapper .mat-tab-body:nth-child(1) .mat-tab-body-content {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ib290c3RyYXAtNC12ZXJ0aWNhbC10YWJzL3Njc3MvY3VzdG9tLXZhcmlhYmxlcy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC00LXZlcnRpY2FsLXRhYnMvc2Nzcy9yZXNwb25zaXZlLXZlcnRpY2FsLXRhYnMuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztFQUFBO0FDQUE7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQXdCQTtFQUNFLGdCQUxxQjtFQU1yQixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0tGO0FEREE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUNJRjtBRGlCQTtFQUVFLCtCQUFBO0VBQ0EsbUJBQUE7QUNmRjtBRGtCQTtFQUNFLCtCRWlMNEI7RUZoTDVCLGtDRWdMNEI7RUYvSzVCLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCRHJDcUI7QUVzQnZCO0FEa0JBO0VBQ0UsbUNBQUE7QUNmRjtBRGtCQTtFQUNFLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FDZkY7QURtQkE7RUFFRSw4QkFBQTtFQUNBLG1CQUFBO0FDakJGO0FEb0JBO0VBQ0UsZ0NFc0o0QjtFRnJKNUIsbUNFcUo0QjtFRnBKNUIsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJEL0RzQjtBRThDeEI7QURvQkE7RUFDRSxrQ0FBQTtBQ2pCRjtBRG9CQTtFQUNFLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0FDakJGO0FEcUJBO0VBR0Usa0JBQUE7RUFDQSxhQUFBO0FDcEJGO0FEdUJBO0VBQ0UseUJBQUE7RUFDQSxZQWpHcUI7RUFrR3JCLGdDQUFBO0FDcEJGO0FEd0JBO0VBcEZFLFdEYmU7RUNjZixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQWtGQSxnQ0VrSDRCO0VGakg1Qiw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JFK0c0QjtFRjlHNUIsZ0NBQUE7QUNqQkY7QURvQkE7RUFDRSwrQkFBQTtBQ2pCRjtBRG9CQTtFQUNFLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0FDakJGO0FEcUJBO0VBR0UsaUJBQUE7RUFDQSxhQWpJdUI7QUM2R3pCO0FEdUJBO0VBQ0Usd0JBQUE7RUFDQSxZQXBJcUI7RUFxSXJCLGdDQUFBO0FDcEJGO0FEd0JBO0VBdkhFLFdEYmU7RUNjZixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQXFIQSxnQ0UrRTRCO0VGOUU1Qiw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JFNEU0QjtFRjNFNUIsZ0NBQUE7QUNqQkY7QURvQkE7RUFDRSw4QkFBQTtBQ2pCRjtBRG9CQTtFQUNFLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0FDakJGO0FEcUJBO0VBQ0U7SUFwSUEsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQW1JRSxnQ0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFQ2ZGOztFRGtCQTtJQXBKQSxXRGJlO0lDY2Ysa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7SUFrSkUsZ0NFa0QwQjtJRmpEMUIsNkJBQUE7SUFDQSw0QkFBQTtJQUNBLCtCRStDMEI7SUY5QzFCLGVBQUE7SUFDQSxtQkFBQTtFQ1hGOztFRGNBO0lBQ0UsMkJFNUxPO0lGNkxQLGdDQUFBO0VDWEY7O0VEY0E7SUFDRSx5QkVqTU87SUZrTVAsMkJFbE1PO0lGbU1QLGdDQUFBO0lBQ0EsMEJFcE1PO0VEeUxUOztFRGNBOztJQUVFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VDWEY7O0VEZUE7SUExS0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQXlLRSw2QkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQ1RGOztFRFlBOztJQTFMQSxXRGJlO0lDY2Ysa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7SUF5TEUsMEJBQUE7SUFDQSxtQ0VVMEI7SUZUMUIsa0NFUzBCO0lGUjFCLHlCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0NBQUE7RUNMRjs7RURRQTtJQUNFLDZCQUFBO0lBQ0EsMEJFck9PO0lGc09QLDRCRXZPTztFRGtPVDs7RURRQTs7SUFFRSw2QkFBQTtJQUNBLDJCRTVPTztJRjZPUCw0QkU3T087SUY4T1AsMEJFOU9PO0VEeU9UO0FBQ0Y7QURTQTtFQUNFO0lBOU1BLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUE2TUUsZ0NBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkVwQjBCO0VEZ0I1Qjs7RURPQTtJQXROQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBcU5FLDZCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0Esb0JFNUIwQjtFRDJCNUI7O0VESUE7O0lBRUUsZUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUNERjs7RURJQTs7O0lBL09BLFdEYmU7SUNjZixrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtJQStPRSxzQkUzQzBCO0lGNEMxQixlRTVDMEI7SUY2QzFCLDZCQUFBO0lBQ0EsK0JBQUE7SUFDQSxnQ0FBQTtJQUNBLDhCQUFBO0VDR0Y7O0VEQUE7O0lBRUUseUJBQUE7SUFDQSx5QkU1Uk87SUY2UlAsMkJFN1JPO0lGOFJQLDRCRTlSTztJRitSUCwwQkUvUk87RURrU1Q7O0VEQUE7OztJQUdFLHlCRXBTTztJRnFTUCwyQkVyU087SUZzU1AsNEJFdFNPO0lGdVNQLDBCRXZTTztFRDBTVDtBQUNGO0FBbFRBO0VBQ0ksMkJBQUE7RUFBNkIsZUFBQTtFQUMzQix5QkFBQTtFQUEyQixXQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ25CLGlCQUFBO0VBQW1CO21EQUFBO0FBMlRqQztBQXZUQTtFQUNJLGFBQUE7QUEwVEo7QUF2VEE7RUFDSSxtQ0FBQTtFQUNBLGFBQUE7QUEwVEo7QUF4VEk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBMFRSO0FBclRJO0VBQ0ksYUFBQTtBQXdUUjtBQW5USTtFQUNJLFlBQUE7QUFzVFI7QUFwVFE7RUFDSSxZQUFBO0FBc1RaO0FBblRRO0VBQ0ksWUFBQTtBQXFUWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBSZXNwb25zaXZlIHZlcnRpY2FsIHRhYnMgZm9yIEJvb3RzdHJhcCA0XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRyb21neSAodHJvbWd5QHlhaG9vLmNvbSlcbiAqXG4gKiBDdXN0b20gdmFyaWFibGUgZGVmaW5pdGlvbnMuIFlvdSBjYW4gY2hhbmdlIHRoZXNlIHZhcmlhYmxlc1xuICogdG8gc3VpdCB5b3VyIG5lZWRzIHdpdGhvdXQgbWVzc2luZyB3aXRoIHRoZSBtYWluIHN0eWxlc2hlZXQuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBzdXBwbGllZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBMaWNlbnNlLCBhXG4gKiBjb3B5IG9mIHdoaWNoIHNob3VsZCBiZSBsb2NhdGVkIGluIHRoZSBkaXN0cmlidXRpb24gd2hlcmUgdGhpc1xuICogZmlsZSB3YXMgb2J0YWluZWQgKExJQ0VOU0UudHh0KS4gQSBjb3B5IG9mIHRoZSBsaWNlbnNlIG1heSBhbHNvIGJlXG4gKiBmb3VuZCBvbmxpbmUgYXQgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4gKlxuICovXG5cbi8vIFdoZW4gdGhlIHZpZXcgaXMgbmFycm93ZXIgdGhhbiB0aGlzIG5hdnBpbGwtbGlrZSBidXR0b25zIGFyZSB1c2VkLFxuLy8gb3RoZXJ3aXNlIGhvcml6b250YWwgdGFicyBhcmUgdXNlZCB1cCB1bnRpbCAkdmVydGljYWwtdGFicy1taW4gd2lkdGhcbiRob3Jpem9udGFsLXRhYnMtbWluOiAyNmVtO1xuXG4vLyBXaGVuIHRoZSB2aWV3IGlzIHdpZGVyIHRoYW4gdGhpcywgdmVydGljYWwgdGFicyBhcmUgdXNlZFxuJHZlcnRpY2FsLXRhYnMtbWluOiA0OGVtO1xuXG4vLyBTZXQgdGhpcyBkZXBlbmRpbmcgb24gdGhlIGxvbmdlc3QgY2FwdGlvbiB0ZXh0IG9mIHRoZSB0YWJzXG4vLyBJZiB0aGUgdGV4dCBpcyBzdGlsbCBsb25nZXIgdGhhbiB0aGF0LCBpdCB3aWxsIGJlIHRydW5jYXRlZCB3aXRoIGVsbGlwc2lzXG4vLyBOT1RFOiB0aGVyZSBhcmUgcHJhY3RpY2FsIGxpbWl0cyBvbiB0aGlzIHZhbHVlLCB0aGUgXCJnb29kXCIgdmFsdWVzXG4vLyBzZWVtIHRvIGJlIHNvbWV3aGVyZSBiZWV0d2VlbiA0IGFuZCAxMnJlbTtcbiRmaXhlZC10YWItc2l6ZTogOHJlbTtcblxuLy8gVGhlc2Ugb25seSBhcHBseSB0byByZWd1bGFyIChub3Qgc2lkZXdheXMpIHZlcnRpY2FsIHRhYnNcbi8vIEluIGFsbCBvdGhlciBjYXNlcyB0aGUgdGV4dCBpcyBjZW50ZXItYWxpZ25lZFxuJGxlZnQtdGFicy10ZXh0LWFsaWduOiBsZWZ0O1xuJHJpZ2h0LXRhYnMtdGV4dC1hbGlnbjogcmlnaHQ7XG4iLCIvKlxuICogUmVzcG9uc2l2ZSB2ZXJ0aWNhbCB0YWJzIGZvciBCb290c3RyYXAgNFxuICpcbiAqIE1haW4gc3R5bGVzaGVldC4gQGltcG9ydCBcImN1c3RvbS12YXJpYWJsZXMuc2Njc3NcIiBiZWZvcmVcbiAqIHRoaXMgZmlsZSB0byBjb21waWxlIGludG8gZmluYWwgQ1NTXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDIwIFRyb21neSAodHJvbWd5QHlhaG9vLmNvbSlcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHN1cHBsaWVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIExpY2Vuc2UsIGFcbiAqIGNvcHkgb2Ygd2hpY2ggc2hvdWxkIGJlIGxvY2F0ZWQgaW4gdGhlIGRpc3RyaWJ1dGlvbiB3aGVyZSB0aGlzXG4gKiBmaWxlIHdhcyBvYnRhaW5lZCAoTElDRU5TRS50eHQpLiBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgbWF5IGFsc28gYmVcbiAqIGZvdW5kIG9ubGluZSBhdCBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiAqXG4gKi9cblxuQGltcG9ydCBcImJvb3RzdHJhcC9zY3NzL19mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzXCI7XG5cbi8vIE1hZ2ljIG51bWJlcnNcbiRtYWdpYy1ob3Jpem9udGFsLXZhbHVlOiAzLjJyZW07XG4kbWFnaWMtdmVydGljYWwtdmFsdWU6IDVyZW07XG4kc2lkZXdheXMtdGFicy1oZWlnaHQ6IDFyZW07XG5cbi8vIFBsYWNlaG9sZGVyc1xuJXNpZGV3YXlzLXRhYnMge1xuICBtYXJnaW4tdG9wOiAkbWFnaWMtdmVydGljYWwtdmFsdWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4vLyBVc2VkIGluIHZlcnRpY2FsIHRhYiBjb25maWd1cmF0aW9uICh3aWRlIHZpZXcpXG4lZmxleC10YWJzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vLyBNaXhpbnMgKGNhbiBiZSByZXVzZWQgaW5zaWRlIEBtZWRpYSBzY29wZSlcbkBtaXhpbiBmaXhlZC10YWIoJHNpemU6ICRmaXhlZC10YWItc2l6ZSkge1xuICB3aWR0aDogJHNpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8vIFVzZWQgaW4gaG9yaXpvbnRhbCB0YWIgY29uZmlndXJhdGlvbiAobmFycm93IHZpZXdzKVxuQG1peGluIGZsZXgtdGFicy1oIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4vLyBMZWZ0IHZlcnRpY2FsIHRhYnNcbi5sZWZ0LXRhYnMubmF2LXRhYnMge1xuICBAZXh0ZW5kICVmbGV4LXRhYnM7XG4gIGJvcmRlci1yaWdodDogJG5hdi10YWJzLWJvcmRlci13aWR0aCBzb2xpZCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubGVmdC10YWJzIC5uYXYtbGluayB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRuYXYtdGFicy1ib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkbmF2LXRhYnMtYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBtYXJnaW4tcmlnaHQ6IC0kbmF2LXRhYnMtYm9yZGVyLXdpZHRoO1xuICB0ZXh0LWFsaWduOiAkbGVmdC10YWJzLXRleHQtYWxpZ247XG59XG5cbi5sZWZ0LXRhYnMgLm5hdi1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLXJpZ2h0OiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubGVmdC10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBib3JkZXItdG9wOiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1yaWdodDogJG5hdi10YWJzLWJvcmRlci13aWR0aCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogJG5hdi10YWJzLWJvcmRlci13aWR0aCBzb2xpZCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xuICBib3JkZXItbGVmdDogJG5hdi10YWJzLWJvcmRlci13aWR0aCBzb2xpZCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xufVxuXG4vLyBSaWdodCB2ZXJ0aWNhbCB0YWJzXG4ucmlnaHQtdGFicy5uYXYtdGFicyB7XG4gIEBleHRlbmQgJWZsZXgtdGFicztcbiAgYm9yZGVyLWxlZnQ6ICRuYXYtdGFicy1ib3JkZXItd2lkdGggc29saWQgJG5hdi10YWJzLWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnJpZ2h0LXRhYnMgLm5hdi1saW5rIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRuYXYtdGFicy1ib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJG5hdi10YWJzLWJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtJG5hdi10YWJzLWJvcmRlci13aWR0aDtcbiAgdGV4dC1hbGlnbjogJHJpZ2h0LXRhYnMtdGV4dC1hbGlnbjtcbn1cblxuLnJpZ2h0LXRhYnMgLm5hdi1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6ICRuYXYtdGFicy1ib3JkZXItd2lkdGggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5yaWdodC10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBib3JkZXItdG9wOiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1yaWdodDogJG5hdi10YWJzLWJvcmRlci13aWR0aCBzb2xpZCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xuICBib3JkZXItYm90dG9tOiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1sZWZ0OiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4vLyBTaWRld2F5cyBsZWZ0IHZlcnRpY2FsIHRhYnNcbi5sZWZ0LXRhYnMuc2lkZXdheXMtdGFicyB7XG4gIEBleHRlbmQgJXNpZGV3YXlzLXRhYnM7XG4gIEBleHRlbmQgJWZsZXgtdGFicztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBsZWZ0OiAtJG1hZ2ljLWhvcml6b250YWwtdmFsdWU7XG59XG5cbi5zaWRld2F5cy10YWJzLmxlZnQtdGFicyAubmF2LWl0ZW0ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyAvLyBjY3dcbiAgaGVpZ2h0OiAkc2lkZXdheXMtdGFicy1oZWlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IGNhbGMoI3skZml4ZWQtdGFiLXNpemV9IC0gI3skc2lkZXdheXMtdGFicy1oZWlnaHR9KTtcbn1cblxuLy8gTk9URTogYWxsIHRvcC1ib3R0b20tbGVmdC1yaWdodCBhcmUgYmVmb3JlIHRoZSByb3RhdGlvbiB0cmFuc2Zvcm1cbi5zaWRld2F5cy10YWJzLmxlZnQtdGFicyAubmF2LWxpbmsge1xuICBAaW5jbHVkZSBmaXhlZC10YWI7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkbmF2LXRhYnMtYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRuYXYtdGFicy1ib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tOiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG59XG5cbi5zaWRld2F5cy10YWJzLmxlZnQtdGFicyAubmF2LWxpbms6aG92ZXIge1xuICBib3JkZXItcmlnaHQ6ICRuYXYtdGFicy1ib3JkZXItd2lkdGggc29saWQgJGdyYXktMjAwO1xufVxuXG4uc2lkZXdheXMtdGFicy5sZWZ0LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGJvcmRlci10b3A6ICRuYXYtdGFicy1ib3JkZXItd2lkdGggc29saWQgJG5hdi10YWJzLWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1ib3R0b206ICRuYXYtdGFicy1ib3JkZXItd2lkdGggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG59XG5cbi8vIFNpZGV3YXlzIHJpZ2h0IHZlcnRpY2FsIHRhYnNcbi5yaWdodC10YWJzLnNpZGV3YXlzLXRhYnMge1xuICBAZXh0ZW5kICVzaWRld2F5cy10YWJzO1xuICBAZXh0ZW5kICVmbGV4LXRhYnM7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICByaWdodDogJG1hZ2ljLWhvcml6b250YWwtdmFsdWU7XG59XG5cbi5zaWRld2F5cy10YWJzLnJpZ2h0LXRhYnMgLm5hdi1pdGVtIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAvLyBjd1xuICBoZWlnaHQ6ICRzaWRld2F5cy10YWJzLWhlaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYygjeyRmaXhlZC10YWItc2l6ZX0gLSAjeyRzaWRld2F5cy10YWJzLWhlaWdodH0pO1xufVxuXG4vLyBOT1RFOiBhbGwgdG9wLWJvdHRvbS1sZWZ0LXJpZ2h0IGFyZSBiZWZvcmUgdGhlIHJvdGF0aW9uIHRyYW5zZm9ybVxuLnNpZGV3YXlzLXRhYnMucmlnaHQtdGFicyAubmF2LWxpbmsge1xuICBAaW5jbHVkZSBmaXhlZC10YWI7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkbmF2LXRhYnMtYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRuYXYtdGFicy1ib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tOiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG59XG5cbi5zaWRld2F5cy10YWJzLnJpZ2h0LXRhYnMgLm5hdi1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6ICRuYXYtdGFicy1ib3JkZXItd2lkdGggc29saWQgJGdyYXktMjAwO1xufVxuXG4uc2lkZXdheXMtdGFicy5yaWdodC10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBib3JkZXItdG9wOiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1yaWdodDogJG5hdi10YWJzLWJvcmRlci13aWR0aCBzb2xpZCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xuICBib3JkZXItYm90dG9tOiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogJG5hdi10YWJzLWJvcmRlci13aWR0aCBzb2xpZCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xufVxuXG4vLyBVc2UgaG9yaXpvbnRhbCB0YWJzIHdoZW4gdGhlIHZpZXcgaXMgdG9vIG5hcnJvdyBmb3IgdGhlIHZlcnRpY2FsIHRhYnMgb24gdGhlIHNpZGVcbkBtZWRpYSAobWluLXdpZHRoOiAkaG9yaXpvbnRhbC10YWJzLW1pbikgYW5kIChtYXgtd2lkdGg6ICR2ZXJ0aWNhbC10YWJzLW1pbikge1xuICAubGVmdC10YWJzLm5hdi10YWJzIHtcbiAgICBAaW5jbHVkZSBmbGV4LXRhYnMtaDtcbiAgICBib3JkZXItYm90dG9tOiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gICAgbGVmdDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICB9XG5cbiAgLmxlZnQtdGFicyAubmF2LWxpbmsge1xuICAgIEBpbmNsdWRlIGZpeGVkLXRhYjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJG5hdi10YWJzLWJvcmRlci1yYWRpdXM7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkbmF2LXRhYnMtYm9yZGVyLXJhZGl1cztcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogLSRuYXYtdGFicy1ib3JkZXItd2lkdGg7XG4gIH1cblxuICAubGVmdC10YWJzIC5uYXYtbGluay5uYXYtbGluazpob3ZlciB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLmxlZnQtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJG5hdi10YWJzLWJvcmRlci1jb2xvcjtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJG5hdi10YWJzLWJvcmRlci1jb2xvcjtcbiAgfVxuXG4gIC5zaWRld2F5cy10YWJzLmxlZnQtdGFicyAubmF2LWl0ZW0sXG4gIC5zaWRld2F5cy10YWJzLnJpZ2h0LXRhYnMgLm5hdi1pdGVtIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICAvLyBSaWdodCB0YWJzIHdyYXAgaW50byB0aGUgYm90dG9tICh1cHNpZGUtZG93bikgdGFic1xuICAucmlnaHQtdGFicy5uYXYtdGFicyB7XG4gICAgQGluY2x1ZGUgZmxleC10YWJzLWg7XG4gICAgYm9yZGVyLXRvcDogJG5hdi10YWJzLWJvcmRlci13aWR0aCBzb2xpZCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gIH1cblxuICAuc2lkZXdheXMtdGFicy5yaWdodC10YWJzIC5uYXYtbGluayxcbiAgLnJpZ2h0LXRhYnMgLm5hdi1saW5rIHtcbiAgICBAaW5jbHVkZSBmaXhlZC10YWI7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRuYXYtdGFicy1ib3JkZXItcmFkaXVzO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRuYXYtdGFicy1ib3JkZXItcmFkaXVzO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogLSRuYXYtdGFicy1ib3JkZXItd2lkdGg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAucmlnaHQtdGFicyAubmF2LWxpbms6aG92ZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRncmF5LTIwMDtcbiAgfVxuXG4gIC5zaWRld2F5cy10YWJzLnJpZ2h0LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSxcbiAgLnJpZ2h0LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gIH1cbn1cblxuLy8gVHVybiB0YWJzIGludG8gbmF2LXBpbGwtbGlrZSBidXR0b25zIHdoZW4gdGhlIHZpZXcgaXMgdmVyeSBuYXJyb3dcbkBtZWRpYSAobWF4LXdpZHRoOiAkaG9yaXpvbnRhbC10YWJzLW1pbikge1xuICAubGVmdC10YWJzLm5hdi10YWJzIHtcbiAgICBAaW5jbHVkZSBmbGV4LXRhYnMtaDtcbiAgICBib3JkZXItYm90dG9tOiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gICAgbGVmdDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbmF2LXRhYnMtYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gIC5yaWdodC10YWJzLm5hdi10YWJzIHtcbiAgICBAaW5jbHVkZSBmbGV4LXRhYnMtaDtcbiAgICBib3JkZXItdG9wOiAkbmF2LXRhYnMtYm9yZGVyLXdpZHRoIHNvbGlkICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogJG5hdi10YWJzLWJvcmRlci1yYWRpdXM7XG4gIH1cblxuICAuc2lkZXdheXMtdGFicy5sZWZ0LXRhYnMgLm5hdi1pdGVtLFxuICAuc2lkZXdheXMtdGFicy5yaWdodC10YWJzIC5uYXYtaXRlbSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLnNpZGV3YXlzLXRhYnMubGVmdC10YWJzIC5uYXYtbGluayxcbiAgLnNpZGV3YXlzLXRhYnMucmlnaHQtdGFicyAubmF2LWxpbmssXG4gIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICAgIEBpbmNsdWRlIGZpeGVkLXRhYjtcbiAgICBib3JkZXItcmFkaXVzOiAkbmF2LXRhYnMtYm9yZGVyLXJhZGl1cztcbiAgICBtYXJnaW46ICRuYXYtdGFicy1ib3JkZXItcmFkaXVzO1xuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLnNpZGV3YXlzLXRhYnMubmF2LXRhYnMgLm5hdi1saW5rOmhvdmVyLFxuICAubmF2LXRhYnMgLm5hdi1saW5rOmhvdmVyIHtcbiAgICBib3JkZXI6ICRuYXYtdGFicy1ib3JkZXItd2lkdGggc29saWQgJGdyYXktMjAwO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICRncmF5LTIwMDtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICRncmF5LTIwMDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkZ3JheS0yMDA7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICRncmF5LTIwMDtcbiAgfVxuXG4gIC5zaWRld2F5cy10YWJzLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUsXG4gIC5sZWZ0LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSxcbiAgLnJpZ2h0LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJG5hdi10YWJzLWJvcmRlci1jb2xvcjtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICRuYXYtdGFicy1ib3JkZXItY29sb3I7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJG5hdi10YWJzLWJvcmRlci1jb2xvcjtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJG5hdi10YWJzLWJvcmRlci1jb2xvcjtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAtNC12ZXJ0aWNhbC10YWJzL3Njc3MvY3VzdG9tLXZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAtNC12ZXJ0aWNhbC10YWJzL3Njc3MvcmVzcG9uc2l2ZS12ZXJ0aWNhbC10YWJzXCI7XG5cbjpob3N0IHtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xufVxuXG4uYXBwLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNhbnZhcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvY2FudmFzLnBuZycpO1xuICAgIHBhZGRpbmc6IDUwcHg7XG5cbiAgICAjYnRuRG93bmxvYWQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogOHB4O1xuICAgICAgICByaWdodDogOHB4O1xuICAgIH1cbn1cblxuLmludmlzaWJsZS10YWJzIHtcbiAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLm1hdC10YWItZ3JvdXAge1xuICAgIC5tYXQtdGFiLWJvZHktd3JhcHBlciB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICBcbiAgICAgICAgLm1hdC10YWItYm9keSAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1hdC10YWItYm9keTpudGgtY2hpbGQoMSkgLm1hdC10YWItYm9keS1jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIiwiLy8gVmFyaWFibGVzXG4vL1xuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cblxuLy8gQ29sb3Igc3lzdGVtXG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuJGdyYXlzOiAoKSAhZGVmYXVsdDtcbiRncmF5czogbWFwLW1lcmdlKFxuICAoXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcbiAgKSxcbiAgJGdyYXlzXG4pO1xuXG4kYmx1ZTogICAgIzAwN2JmZiAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjZGMzNTQ1ICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI2ZmYzEwNyAhZGVmYXVsdDtcbiRncmVlbjogICAjMjhhNzQ1ICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzE3YTJiOCAhZGVmYXVsdDtcblxuJGNvbG9yczogKCkgIWRlZmF1bHQ7XG4kY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcImJsdWVcIjogICAgICAgJGJsdWUsXG4gICAgXCJpbmRpZ29cIjogICAgICRpbmRpZ28sXG4gICAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXG4gICAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxuICAgIFwicmVkXCI6ICAgICAgICAkcmVkLFxuICAgIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxuICAgIFwiZ3JlZW5cIjogICAgICAkZ3JlZW4sXG4gICAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxuICAgIFwiY3lhblwiOiAgICAgICAkY3lhbixcbiAgICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxuICAgIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXG4gICAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxuICApLFxuICAkY29sb3JzXG4pO1xuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgKSxcbiAgJHRoZW1lLWNvbG9yc1xuKTtcblxuLy8gU2V0IGEgc3BlY2lmaWMganVtcCBwb2ludCBmb3IgcmVxdWVzdGluZyBjb2xvciBqdW1wc1xuJHRoZW1lLWNvbG9yLWludGVydmFsOiAgICAgIDglICFkZWZhdWx0O1xuXG4vLyBUaGUgeWlxIGxpZ2h0bmVzcyB2YWx1ZSB0aGF0IGRldGVybWluZXMgd2hlbiB0aGUgbGlnaHRuZXNzIG9mIGNvbG9yIGNoYW5nZXMgZnJvbSBcImRhcmtcIiB0byBcImxpZ2h0XCIuIEFjY2VwdGFibGUgdmFsdWVzIGFyZSBiZXR3ZWVuIDAgYW5kIDI1NS5cbiR5aXEtY29udHJhc3RlZC10aHJlc2hvbGQ6ICAxNTAgIWRlZmF1bHQ7XG5cbi8vIEN1c3RvbWl6ZSB0aGUgbGlnaHQgYW5kIGRhcmsgdGV4dCBjb2xvcnMgZm9yIHVzZSBpbiBvdXIgWUlRIGNvbG9yIGNvbnRyYXN0IGZ1bmN0aW9uLlxuJHlpcS10ZXh0LWRhcms6ICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiR5aXEtdGV4dC1saWdodDogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIENoYXJhY3RlcnMgd2hpY2ggYXJlIGVzY2FwZWQgYnkgdGhlIGVzY2FwZS1zdmcgZnVuY3Rpb25cbiRlc2NhcGVkLWNoYXJhY3RlcnM6IChcbiAgKFwiPFwiLCBcIiUzY1wiKSxcbiAgKFwiPlwiLCBcIiUzZVwiKSxcbiAgKFwiI1wiLCBcIiUyM1wiKSxcbiAgKFwiKFwiLCBcIiUyOFwiKSxcbiAgKFwiKVwiLCBcIiUyOVwiKSxcbikgIWRlZmF1bHQ7XG5cblxuLy8gT3B0aW9uc1xuLy9cbi8vIFF1aWNrbHkgbW9kaWZ5IGdsb2JhbCBzdHlsaW5nIGJ5IGVuYWJsaW5nIG9yIGRpc2FibGluZyBvcHRpb25hbCBmZWF0dXJlcy5cblxuJGVuYWJsZS1jYXJldDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJvdW5kZWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JhZGllbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdHJhbnNpdGlvbnM6ICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmVmZXJzLXJlZHVjZWQtbW90aW9uLW1lZGlhLXF1ZXJ5OiAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5OiAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQsIG5vIGxvbmdlciBhZmZlY3RzIGFueSBjb21waWxlZCBDU1NcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4kc3BhY2VyczogbWFwLW1lcmdlKFxuICAoXG4gICAgMDogMCxcbiAgICAxOiAoJHNwYWNlciAqIC4yNSksXG4gICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgMzogJHNwYWNlcixcbiAgICA0OiAoJHNwYWNlciAqIDEuNSksXG4gICAgNTogKCRzcGFjZXIgKiAzKVxuICApLFxuICAkc3BhY2Vyc1xuKTtcblxuLy8gVGhpcyB2YXJpYWJsZSBhZmZlY3RzIHRoZSBgLmgtKmAgYW5kIGAudy0qYCBjbGFzc2VzLlxuJHNpemVzOiAoKSAhZGVmYXVsdDtcbiRzaXplczogbWFwLW1lcmdlKFxuICAoXG4gICAgMjU6IDI1JSxcbiAgICA1MDogNTAlLFxuICAgIDc1OiA3NSUsXG4gICAgMTAwOiAxMDAlLFxuICAgIGF1dG86IGF1dG9cbiAgKSxcbiAgJHNpemVzXG4pO1xuXG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgZGFya2VuKCRsaW5rLWNvbG9yLCAxNSUpICFkZWZhdWx0O1xuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lICFkZWZhdWx0O1xuLy8gRGFya2VuIHBlcmNlbnRhZ2UgZm9yIGxpbmtzIHdpdGggYC50ZXh0LSpgIGNsYXNzIChlLmcuIGAudGV4dC1zdWNjZXNzYClcbiRlbXBoYXNpemVkLWxpbmstaG92ZXItZGFya2VuLXBlcmNlbnRhZ2U6IDE1JSAhZGVmYXVsdDtcblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAgIDFyZW0gIWRlZmF1bHQ7XG5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgc206IDU3NnB4LFxuICBtZDogNzY4cHgsXG4gIGxnOiA5OTJweCxcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5AaW5jbHVkZSBfYXNzZXJ0LXN0YXJ0cy1hdC16ZXJvKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuXG5cbi8vIEdyaWQgY29udGFpbmVyc1xuLy9cbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXG5cbiRjb250YWluZXItbWF4LXdpZHRoczogKFxuICBzbTogNTQwcHgsXG4gIG1kOiA3MjBweCxcbiAgbGc6IDk2MHB4LFxuICB4bDogMTE0MHB4XG4pICFkZWZhdWx0O1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkY29udGFpbmVyLW1heC13aWR0aHMsIFwiJGNvbnRhaW5lci1tYXgtd2lkdGhzXCIpO1xuXG5cbi8vIEdyaWQgY29sdW1uc1xuLy9cbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxuXG4kZ3JpZC1jb2x1bW5zOiAgICAgICAgICAgICAgICAxMiAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kZ3JpZC1yb3ctY29sdW1uczogICAgICAgICAgICA2ICFkZWZhdWx0O1xuXG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuXG4kcm91bmRlZC1waWxsOiAgICAgICAgICAgICAgICA1MHJlbSAhZGVmYXVsdDtcblxuJGJveC1zaGFkb3ctc206ICAgICAgICAgICAgICAgMCAuMTI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogICAgICAgICAgICAgICAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcblxuJGNhcmV0LXdpZHRoOiAgICAgICAgICAgICAgICAgLjNlbSAhZGVmYXVsdDtcbiRjYXJldC12ZXJ0aWNhbC1hbGlnbjogICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcbiRjYXJldC1zcGFjaW5nOiAgICAgICAgICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcblxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1jb2xsYXBzZTogICAgICAgICBoZWlnaHQgLjM1cyBlYXNlICFkZWZhdWx0O1xuXG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiAoKSAhZGVmYXVsdDtcbiRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3M6IGpvaW4oXG4gIChcbiAgICAoMjEgOSksXG4gICAgKDE2IDkpLFxuICAgICg0IDMpLFxuICAgICgxIDEpLFxuICApLFxuICAkZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zXG4pO1xuXG4vLyBUeXBvZ3JhcGh5XG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjg3NSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6ICAgICAgICAgbGlnaHRlciAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgIDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgIDcwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkZXI6ICAgICAgICAgIGJvbGRlciAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAxLjIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtc2l6ZTogICAgICAgICAgICAgICA2cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkyLXNpemU6ICAgICAgICAgICAgICAgNS41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkzLXNpemU6ICAgICAgICAgICAgICAgNC41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXk0LXNpemU6ICAgICAgICAgICAgICAgMy41cmVtICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTItd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTMtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTQtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheS1saW5lLWhlaWdodDogICAgICAgICAkaGVhZGluZ3MtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgIDgwJSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1zbWFsbC1mb250LXNpemU6ICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcblxuJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4yZW0gIWRlZmF1bHQ7XG5cbiRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4ka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xuJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuXG4kaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgJHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xuXG4kdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJHRhYmxlLXRoLWZvbnQtd2VpZ2h0OiAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICAgICAgcmdiYSgkd2hpdGUsIC4wNSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ob3Zlci1jb2xvcjogICAgICAkdGFibGUtZGFyay1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIGxpZ2h0ZW4oJHRhYmxlLWRhcmstYmcsIDcuNSUpICFkZWZhdWx0O1xuXG4kdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kdGFibGUtYmctbGV2ZWw6ICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItbGV2ZWw6ICAgICAgICAgIC02ICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LWZhbWlseTogICAgICAgbnVsbCAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICAgICAgIHJnYmEoJGNvbXBvbmVudC1hY3RpdmUtYmcsIC4yNSkgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAwIDAgMCAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICAgICRsaW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogICAgICAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICAgICRsaW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tcGFkZGluZy15OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYnRuLWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemU6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGJ0bi13aGl0ZS1zcGFjZTogICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDsgLy8gU2V0IHRvIGBub3dyYXBgIHRvIHByZXZlbnQgdGV4dCB3cmFwcGluZ1xuXG4kYnRuLXBhZGRpbmcteS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kYnRuLWJvcmRlci13aWR0aDogICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRidG4tYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgkd2hpdGUsIC4xNSksIDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgLjY1ICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgaW5zZXQgMCAzcHggNXB4IHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcblxuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYnRuLWJsb2NrLXNwYWNpbmcteTogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kYnRuLXRyYW5zaXRpb246ICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybXNcblxuJGxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1mYW1pbHk6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1iZzogICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMjUlKSAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1pbm5lcjogICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAyKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjogICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjVlbSwgJGlucHV0LXBhZGRpbmcteSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC4yNWVtLCAkaW5wdXQtcGFkZGluZy15IC8gMikgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtc20gKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LXNtICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcblxuJGlucHV0LXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6ICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtY3Vyc29yOiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNTAlIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWxhYmVsLWNvbG9yOiAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogIHJnYmEodGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpLCAuNSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBudWxsICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgIG51bGwgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2bDIuOTc0IDIuOTlMOCAyLjE5M3onLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc0JyB2aWV3Qm94PScwIDAgNCA0Jz48cGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm94LXNoYWRvdzogICBudWxsICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgKiAxLjc1ICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplIC8gMiAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAgICAgICAgICAgICAgICAgIHN1YnRyYWN0KCRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSwgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGggKiA0KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LWZhbWlseTogICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemU6ICAgICAgICAgICAkaW5wdXQtZm9udC1zaXplICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0OiAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAgIDFyZW0gIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxuJGN1c3RvbS1zZWxlY3QtZm9udC13ZWlnaHQ6ICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtbGluZS1oZWlnaHQ6ICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgOHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNScgdmlld0JveD0nMCAwIDQgNSc+PHBhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmFja2dyb3VuZDogICAgICAgICAgZXNjYXBlLXN2ZygkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3IpIG5vLXJlcGVhdCByaWdodCAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyIC8gJGN1c3RvbS1zZWxlY3QtYmctc2l6ZSAhZGVmYXVsdDsgLy8gVXNlZCBzbyB3ZSBjYW4gaGF2ZSBtdWx0aXBsZSBiYWNrZ3JvdW5kIGVsZW1lbnRzIChlLmcuLCBhcnJvdyBhbmQgZmVlZGJhY2sgaWNvbilcblxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLXJpZ2h0OiBhZGQoMWVtICogLjc1LCAoMiAqICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteSAqIC43NSkgKyAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiAgICAgIGNlbnRlciByaWdodCAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm94LXNoYWRvdzogICAgICAgICAgaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoOiAgICAgICAgICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICAgIDAgMCAwICRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICAgICAgICAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogICAgICAgICAgICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogICAgICAgICAgICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWhlaWdodDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6ICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgaW5zZXQgMCAuMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlcjogICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBJRS9FZGdlXG4kY3VzdG9tLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3JkZXItY29sb3I6ICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1kaXNhYmxlZC1iZzogICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJveC1zaGFkb3c6ICAgICAgICAgICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYnV0dG9uLWNvbG9yOiAgICAgICAgICAkY3VzdG9tLWZpbGUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtdGV4dDogKFxuICBlbjogXCJCcm93c2VcIlxuKSAhZGVmYXVsdDtcblxuXG4vLyBGb3JtIHZhbGlkYXRpb25cblxuJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xuXG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHZpZXdCb3g9JzAgMCAxMiAxMic+PGNpcmNsZSBjeD0nNicgY3k9JzYnIHI9JzQuNScvPjxwYXRoIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J001LjggMy42aC40TDYgNi41eicvPjxjaXJjbGUgY3g9JzYnIGN5PSc4LjInIHI9Jy42JyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHN0cm9rZT0nbm9uZScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6ICgpICFkZWZhdWx0O1xuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwidmFsaWRcIjogKFxuICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXG4gICAgKSxcbiAgICBcImludmFsaWRcIjogKFxuICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxuICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZFxuICAgICksXG4gICksXG4gICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzXG4pO1xuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG5cblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICRncmF5LTIwMCAkZ3JheS0yMDAgJG5hdi10YWJzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktMzAwICRncmF5LTMwMCAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJG5hdi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG5cblxuLy8gTmF2YmFyXG5cbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4vLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcbiRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLWhlaWdodDogICAgICAgICAgICAgICAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgLyAyICFkZWZhdWx0O1xuXG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6ICAgICAgJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC43NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWhvdmVyLWNvbG9yOiAgICAgICAgICByZ2JhKCRibGFjaywgLjcpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6ICAgICAgIHJnYmEoJGJsYWNrLCAuMykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJG5hdmJhci1saWdodC1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLW1pbi13aWR0aDogICAgICAgICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tcGFkZGluZy14OiAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tc3BhY2VyOiAgICAgICAgICAgICAgICAgICAuMTI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjE1KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRkcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgIHN1YnRyYWN0KCRkcm9wZG93bi1ib3JkZXItcmFkaXVzLCAkZHJvcGRvd24tYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICRuYXYtZGl2aWRlci1tYXJnaW4teSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgIGRhcmtlbigkZ3JheS05MDAsIDUlKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1oZWFkZXItcGFkZGluZzogICAgICAgICAgICRkcm9wZG93bi1wYWRkaW5nLXkgJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14ICFkZWZhdWx0O1xuXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkcGFnaW5hdGlvbi1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICRncmF5LTMwMCAhZGVmYXVsdDtcblxuXG4vLyBKdW1ib3Ryb25cblxuJGp1bWJvdHJvbi1wYWRkaW5nOiAgICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tY29sb3I6ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gQ2FyZHNcblxuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIHN1YnRyYWN0KCRjYXJkLWJvcmRlci1yYWRpdXMsICRjYXJkLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcbiRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcblxuJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcbiRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLW1hcmdpbjogICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAhZGVmYXVsdDtcblxuXG4vLyBUb29sdGlwc1xuXG4kdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmcgIWRlZmF1bHQ7XG5cbi8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy15OiAgICAgJHRvb2x0aXAtcGFkZGluZy15ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogICAgICR0b29sdGlwLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtbGluZS1oZWlnaHQ6ICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHk6ICAgICAgICR0b29sdGlwLW9wYWNpdHkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cblxuLy8gUG9wb3ZlcnNcblxuJHBvcG92ZXItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDI3NnB4ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRwb3BvdmVyLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgIHN1YnRyYWN0KCRwb3BvdmVyLWJvcmRlci1yYWRpdXMsICRwb3BvdmVyLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gVG9hc3RzXG5cbiR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjEpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuMjVyZW0gLjc1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiR0b2FzdC1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMDUpICFkZWZhdWx0O1xuXG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICA3NSUgIWRlZmF1bHQ7XG4kYmFkZ2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNWVtICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjRlbSAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kYmFkZ2UtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAkYnRuLXRyYW5zaXRpb24gIWRlZmF1bHQ7XG4kYmFkZ2UtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuXG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNmVtICFkZWZhdWx0O1xuLy8gVXNlIGEgaGlnaGVyIHRoYW4gbm9ybWFsIHZhbHVlIHRvIGVuc3VyZSBjb21wbGV0ZWx5IHJvdW5kZWQgZWRnZXMgd2hlblxuLy8gY3VzdG9taXppbmcgcGFkZGluZyBvciBmb250LXNpemUgb24gbGFiZWxzLlxuJGJhZGdlLXBpbGwtYm9yZGVyLXJhZGl1czogICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuLy8gTWFyZ2luIGJldHdlZW4gZWxlbWVudHMgaW4gZm9vdGVyLCBtdXN0IGJlIGxvd2VyIHRoYW4gb3IgZXF1YWwgdG8gMiAqICRtb2RhbC1pbm5lci1wYWRkaW5nXG4kbW9kYWwtZm9vdGVyLW1hcmdpbi1iZXR3ZWVuOiAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJG1vZGFsLWNvbnRlbnQtY29sb3I6ICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6ICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdCgkbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzLCAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAgICAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gS2VlcCB0aGlzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG4kbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICA4MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XG5cbiRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XG4kbW9kYWwtc2hvdy10cmFuc2Zvcm06ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcbiRtb2RhbC1zY2FsZS10cmFuc2Zvcm06ICAgICAgICAgICAgIHNjYWxlKDEuMDIpICFkZWZhdWx0O1xuXG5cbi8vIEFsZXJ0c1xuLy9cbi8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4kYWxlcnQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYWxlcnQtYmctbGV2ZWw6ICAgICAgICAgICAgICAgICAgICAtMTAgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLWxldmVsOiAgICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcbiRhbGVydC1jb2xvci1sZXZlbDogICAgICAgICAgICAgICAgIDYgIWRlZmF1bHQ7XG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjc1ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcblxuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWNvbG9yOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6ICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3IgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIEltYWdlIHRodW1ibmFpbHNcblxuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG5cbi8vIEZpZ3VyZXNcblxuJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgOTAlICFkZWZhdWx0O1xuJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG5cbi8vIEJyZWFkY3J1bWJzXG5cbiRicmVhZGNydW1iLWZvbnQtc2l6ZTogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgcXVvdGUoXCIvXCIpICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBDYXJvdXNlbFxuXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLWhvdmVyLW9wYWNpdHk6ICAgICAuOSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xNXMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWluZGljYXRvci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQ6IDEwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY2FwdGlvbi13aWR0aDogICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDogICAgICAgIDIwcHggIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjVMNC4yNSA0bDIuNS0yLjVMNS4yNSAweicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBkPSdNMi43NSAwbC0xLjUgMS41TDMuNzUgNGwtMi41IDIuNUwyLjc1IDhsNC00LTQtNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgICAuNnMgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxuXG5cbi8vIFNwaW5uZXJzXG5cbiRzcGlubmVyLXdpZHRoOiAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aDogIC4yNWVtICFkZWZhdWx0O1xuXG4kc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQtc206ICAgICAgICRzcGlubmVyLXdpZHRoLXNtICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoLXNtOiAuMmVtICFkZWZhdWx0O1xuXG5cbi8vIENsb3NlXG5cbiRjbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgMCAxcHggMCAkd2hpdGUgIWRlZmF1bHQ7XG5cblxuLy8gQ29kZVxuXG4kY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICA4Ny41JSAhZGVmYXVsdDtcbiRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICRwaW5rICFkZWZhdWx0O1xuXG4ka2JkLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRrYmQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuJGtiZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgJGNvZGUtZm9udC1zaXplICFkZWZhdWx0O1xuJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG4kcHJlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAgICAgICAzNDBweCAhZGVmYXVsdDtcblxuXG4vLyBVdGlsaXRpZXNcblxuJGRpc3BsYXlzOiBub25lLCBpbmxpbmUsIGlubGluZS1ibG9jaywgYmxvY2ssIHRhYmxlLCB0YWJsZS1yb3csIHRhYmxlLWNlbGwsIGZsZXgsIGlubGluZS1mbGV4ICFkZWZhdWx0O1xuJG92ZXJmbG93czogYXV0bywgaGlkZGVuICFkZWZhdWx0O1xuJHBvc2l0aW9uczogc3RhdGljLCByZWxhdGl2ZSwgYWJzb2x1dGUsIGZpeGVkLCBzdGlja3kgIWRlZmF1bHQ7XG4kdXNlci1zZWxlY3RzOiBhbGwsIGF1dG8sIG5vbmUgIWRlZmF1bHQ7XG5cblxuLy8gUHJpbnRpbmdcblxuJHByaW50LXBhZ2Utc2l6ZTogICAgICAgICAgICAgICAgICAgYTMgIWRlZmF1bHQ7XG4kcHJpbnQtYm9keS1taW4td2lkdGg6ICAgICAgICAgICAgICBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpICFkZWZhdWx0O1xuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Compiler"] }, { type: _services_imaging_service__WEBPACK_IMPORTED_MODULE_5__["ImagingService"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['preview', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ "VRpG":
/*!*********************************************!*\
  !*** ./src/app/services/imaging.service.ts ***!
  \*********************************************/
/*! exports provided: ImagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagingService", function() { return ImagingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-to-image */ "cLAn");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_1__);



class ImagingService {
    constructor() { }
    domToImage(element, filename) {
        const div = document.createElement('div');
        div.innerHTML = element.outerHTML;
        document.body.appendChild(div);
        dom_to_image__WEBPACK_IMPORTED_MODULE_1___default.a.toBlob(div)
            .then((blob) => {
            saveAs(blob, filename);
        })
            .catch((error) => {
            console.error('oops, something went wrong!', error);
        })
            .finally(() => {
            div.parentNode.removeChild(div);
        });
    }
}
ImagingService.ɵfac = function ImagingService_Factory(t) { return new (t || ImagingService)(); };
ImagingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImagingService, factory: ImagingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XejR":
/*!*******************************************************************************!*\
  !*** ./src/app/components/add-speaker-dialog/add-speaker-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddSpeakerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSpeakerDialogComponent", function() { return AddSpeakerDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/speaker */ "2Hlj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _wycliffewasonga_image_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wycliffewasonga/image-picker */ "9RTM");





class AddSpeakerDialogComponent {
    constructor() {
        this.model = {
            speaker: new src_app_models_speaker__WEBPACK_IMPORTED_MODULE_1__["default"](1, '', '', '')
        };
        this.title = "Add Speaker";
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    save() {
        this.onSave.emit(this.model.speaker);
    }
    close() {
        this.onCancel.emit();
    }
}
AddSpeakerDialogComponent.ɵfac = function AddSpeakerDialogComponent_Factory(t) { return new (t || AddSpeakerDialogComponent)(); };
AddSpeakerDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddSpeakerDialogComponent, selectors: [["app-add-speaker-dialog"]], inputs: { title: "title" }, outputs: { onSave: "onSave", onCancel: "onCancel" }, decls: 31, vars: 5, consts: [[1, "modal", 2, "display", "inherit"], [1, "back", 3, "click"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "d-flex", "flex-column", "justify-content-center"], [1, "mx-auto", 3, "value", "onChange"], [1, "form-group"], ["for", "speakerNameInput"], ["id", "speakerNameInput", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "speakerCompanyInput"], ["id", "speakerCompanyInput", "name", "company", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "speakerCompanyRoleInput"], ["id", "speakerCompanyRoleInput", "name", "role", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AddSpeakerDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSpeakerDialogComponent_Template_div_click_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSpeakerDialogComponent_Template_button_click_7_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ws-image-picker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function AddSpeakerDialogComponent_Template_ws_image_picker_onChange_13_listener($event) { return ctx.model.speaker.thumbnailUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSpeakerDialogComponent_Template_input_ngModelChange_17_listener($event) { return ctx.model.speaker.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSpeakerDialogComponent_Template_input_ngModelChange_21_listener($event) { return ctx.model.speaker.company = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddSpeakerDialogComponent_Template_input_ngModelChange_25_listener($event) { return ctx.model.speaker.role = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSpeakerDialogComponent_Template_button_click_27_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddSpeakerDialogComponent_Template_button_click_29_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.model.speaker.thumbnailUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.speaker.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.speaker.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.speaker.role);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _wycliffewasonga_image_picker__WEBPACK_IMPORTED_MODULE_3__["ImagePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".back[_ngcontent-%COMP%] {\n  background: lightgrey;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtc3BlYWtlci1kaWFsb2cvYWRkLXNwZWFrZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXNwZWFrZXItZGlhbG9nL2FkZC1zcGVha2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwLjU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddSpeakerDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-speaker-dialog',
                templateUrl: './add-speaker-dialog.component.html',
                styleUrls: ['./add-speaker-dialog.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onSave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createCompiler, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompiler", function() { return createCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _wycliffewasonga_image_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wycliffewasonga/image-picker */ "9RTM");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components */ "lbq7");















function createCompiler(compilerFactory) {
    return compilerFactory.createCompiler();
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["COMPILER_OPTIONS"], useValue: { useJit: true }, multi: true },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["CompilerFactory"], useClass: _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["JitCompilerFactory"], deps: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["COMPILER_OPTIONS"]] },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Compiler"], useFactory: createCompiler, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["CompilerFactory"]] }
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _wycliffewasonga_image_picker__WEBPACK_IMPORTED_MODULE_10__["ImagePickerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
        _components__WEBPACK_IMPORTED_MODULE_13__["PosterTemplatesComponent"],
        _components__WEBPACK_IMPORTED_MODULE_13__["PosterTemplatesItemComponent"],
        _components__WEBPACK_IMPORTED_MODULE_13__["EventDetailsComponent"],
        _components__WEBPACK_IMPORTED_MODULE_13__["AddSpeakerDialogComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
        _wycliffewasonga_image_picker__WEBPACK_IMPORTED_MODULE_10__["ImagePickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_13__["PosterTemplatesComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_13__["PosterTemplatesItemComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_13__["EventDetailsComponent"],
                    _components__WEBPACK_IMPORTED_MODULE_13__["AddSpeakerDialogComponent"]
                ],
                imports: [
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                    _wycliffewasonga_image_picker__WEBPACK_IMPORTED_MODULE_10__["ImagePickerModule"]
                ],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["COMPILER_OPTIONS"], useValue: { useJit: true }, multi: true },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["CompilerFactory"], useClass: _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["JitCompilerFactory"], deps: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["COMPILER_OPTIONS"]] },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Compiler"], useFactory: createCompiler, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["CompilerFactory"]] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zgh0":
/*!*********************************!*\
  !*** ./src/app/models/event.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Event; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

class Event {
    constructor(title, date, venue, speakers) {
        this.title = title;
        this.date = date;
        this.venue = venue;
        this.speakers = speakers;
        this.subtitle = '';
        this.startTime = moment__WEBPACK_IMPORTED_MODULE_0__();
        this.endTime = moment__WEBPACK_IMPORTED_MODULE_0__();
    }
}


/***/ }),

/***/ "l3LM":
/*!******************************************************!*\
  !*** ./src/app/services/poster-templates.service.ts ***!
  \******************************************************/
/*! exports provided: PosterTemplatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterTemplatesService", function() { return PosterTemplatesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PosterTemplatesService {
    constructor(http) {
        this.http = http;
    }
    allTemplates() {
        return this.http.get('templates/meta.json');
    }
}
PosterTemplatesService.ɵfac = function PosterTemplatesService_Factory(t) { return new (t || PosterTemplatesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PosterTemplatesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PosterTemplatesService, factory: PosterTemplatesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PosterTemplatesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "lbq7":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: AddSpeakerDialogComponent, EventDetailsComponent, PosterTemplatesComponent, PosterTemplatesItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_speaker_dialog_add_speaker_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-speaker-dialog/add-speaker-dialog.component */ "XejR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddSpeakerDialogComponent", function() { return _add_speaker_dialog_add_speaker_dialog_component__WEBPACK_IMPORTED_MODULE_0__["AddSpeakerDialogComponent"]; });

/* harmony import */ var _event_details_event_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-details/event-details.component */ "PLpS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return _event_details_event_details_component__WEBPACK_IMPORTED_MODULE_1__["EventDetailsComponent"]; });

/* harmony import */ var _poster_templates_poster_templates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poster-templates/poster-templates.component */ "2DkG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PosterTemplatesComponent", function() { return _poster_templates_poster_templates_component__WEBPACK_IMPORTED_MODULE_2__["PosterTemplatesComponent"]; });

/* harmony import */ var _poster_templates_item_poster_templates_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poster-templates-item/poster-templates-item.component */ "PiUM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PosterTemplatesItemComponent", function() { return _poster_templates_item_poster_templates_item_component__WEBPACK_IMPORTED_MODULE_3__["PosterTemplatesItemComponent"]; });







/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map