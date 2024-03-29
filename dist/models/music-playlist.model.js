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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const playlist_model_1 = require("./playlist.model");
let MusicPlaylist = class MusicPlaylist extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
    }),
    __metadata("design:type", Number)
], MusicPlaylist.prototype, "id", void 0);
__decorate([
    repository_1.hasMany(() => playlist_model_1.Playlist),
    __metadata("design:type", Array)
], MusicPlaylist.prototype, "playlists", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], MusicPlaylist.prototype, "playlistId", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], MusicPlaylist.prototype, "musicId", void 0);
MusicPlaylist = __decorate([
    repository_1.model({ settings: {} }),
    __metadata("design:paramtypes", [Object])
], MusicPlaylist);
exports.MusicPlaylist = MusicPlaylist;
//# sourceMappingURL=music-playlist.model.js.map