"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProducersModule = void 0;
var common_1 = require("@nestjs/common");
var producers_service_1 = require("./producers.service");
var producers_controller_1 = require("./producers.controller");
var producer_entity_1 = require("./entities/producer.entity");
var typeorm_1 = require("@nestjs/typeorm");
var drivers_service_1 = require("../drivers/drivers.service");
var driver_entity_1 = require("../drivers/entities/driver.entity");
var ProducersModule = /** @class */ (function () {
    function ProducersModule() {
    }
    ProducersModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([producer_entity_1.Producer, driver_entity_1.Driver])],
            controllers: [producers_controller_1.ProducersController],
            providers: [producers_service_1.ProducersService, drivers_service_1.DriversService],
            exports: [producers_service_1.ProducersService]
        })
    ], ProducersModule);
    return ProducersModule;
}());
exports.ProducersModule = ProducersModule;
