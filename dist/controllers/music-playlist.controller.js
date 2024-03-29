"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MusicPlaylistController = class MusicPlaylistController {
    constructor(musicPlaylistRepository) {
        this.musicPlaylistRepository = musicPlaylistRepository;
    }
    async create(musicPlaylist) {
        return await this.musicPlaylistRepository.create(musicPlaylist);
    }
    async count(where) {
        return await this.musicPlaylistRepository.count(where);
    }
    async find(filter) {
        return await this.musicPlaylistRepository.find(filter);
    }
    async updateAll(musicPlaylist, where) {
        return await this.musicPlaylistRepository.updateAll(musicPlaylist, where);
    }
    async findById(id) {
        return await this.musicPlaylistRepository.findById(id);
    }
    async updateById(id, musicPlaylist) {
        await this.musicPlaylistRepository.updateById(id, musicPlaylist);
    }
    async replaceById(id, musicPlaylist) {
        await this.musicPlaylistRepository.replaceById(id, musicPlaylist);
    }
    async deleteById(id) {
        await this.musicPlaylistRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/music-playlists', {
        responses: {
            '200': {
                description: 'MusicPlaylist model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.MusicPlaylist } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.MusicPlaylist]),
    __metadata("design:returntype", Promise)
], MusicPlaylistController.prototype, "create", null);
__decorate([
    rest_1.get('/music-playlists/count', {
        responses: {
            '200': {
                description: 'MusicPlaylist model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.MusicPlaylist))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MusicPlaylistController.prototype, "count", null);
__decorate([
    rest_1.get('/music-playlists', {
        responses: {
            '200': {
                description: 'Array of MusicPlaylist model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.MusicPlaylist } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.MusicPlaylist))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MusicPlaylistController.prototype, "find", null);
__decorate([
    rest_1.patch('/music-playlists', {
        responses: {
            '200': {
                description: 'MusicPlaylist PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.MusicPlaylist))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.MusicPlaylist, Object]),
    __metadata("design:returntype", Promise)
], MusicPlaylistController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/music-playlists/{id}', {
        responses: {
            '200': {
                description: 'MusicPlaylist model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.MusicPlaylist } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MusicPlaylistController.prototype, "findById", null);
__decorate([
    rest_1.patch('/music-playlists/{id}', {
        responses: {
            '204': {
                description: 'MusicPlaylist PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.MusicPlaylist]),
    __metadata("design:returntype", Promise)
], MusicPlaylistController.prototype, "updateById", null);
__decorate([
    rest_1.put('/music-playlists/{id}', {
        responses: {
            '204': {
                description: 'MusicPlaylist PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.MusicPlaylist]),
    __metadata("design:returntype", Promise)
], MusicPlaylistController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/music-playlists/{id}', {
        responses: {
            '204': {
                description: 'MusicPlaylist DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MusicPlaylistController.prototype, "deleteById", null);
MusicPlaylistController = __decorate([
    __param(0, repository_1.repository(repositories_1.MusicPlaylistRepository)),
    __metadata("design:paramtypes", [repositories_1.MusicPlaylistRepository])
], MusicPlaylistController);
exports.MusicPlaylistController = MusicPlaylistController;
//# sourceMappingURL=music-playlist.controller.js.map