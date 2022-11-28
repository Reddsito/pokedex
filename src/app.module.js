"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var path_1 = require("path");
var common_1 = require("@nestjs/common");
var serve_static_1 = require("@nestjs/serve-static");
var pokemon_module_1 = require("./pokemon/pokemon.module");
var mongoose_1 = require("@nestjs/mongoose");
var common_module_1 = require("./common/common.module");
var seed_module_1 = require("./seed/seed.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                //Modulo para los archivos en public.
                serve_static_1.ServeStaticModule.forRoot({
                    rootPath: (0, path_1.join)(__dirname, '..', 'public')
                }),
                //Modulo para vincular nuestra base de datos.
                mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
                pokemon_module_1.PokemonModule,
                common_module_1.CommonModule,
                seed_module_1.SeedModule
            ],
            controllers: [],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
