"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DriversModule = void 0;
var common_1 = require("@nestjs/common");
var drivers_service_1 = require("./drivers.service");
var drivers_controller_1 = require("./drivers.controller");
var typeorm_1 = require("@nestjs/typeorm");
var driver_entity_1 = require("./entities/driver.entity");
var producers_service_1 = require("../producers/producers.service");
var producer_entity_1 = require("../producers/entities/producer.entity");
var DriversModule = /** @class */ (function () {
    function DriversModule() {
    }
    DriversModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([driver_entity_1.Driver, producer_entity_1.Producer])],
            controllers: [drivers_controller_1.DriversController],
            providers: [drivers_service_1.DriversService, producers_service_1.ProducersService],
            exports: [drivers_service_1.DriversService]
        })
    ], DriversModule);
    return DriversModule;
}());
exports.DriversModule = DriversModule;
