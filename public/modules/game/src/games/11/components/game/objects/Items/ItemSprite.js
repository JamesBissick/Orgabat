"use strict";
import BasicGameSprite from "system/phaser/BasicGameSprite";

export default class ItemSprite extends BasicGameSprite {
    constructor(game, x, y, key, buttonObj) {
        super(game, x, y, `jeu11/items/${key}`, buttonObj);
        this.anchor.setTo(0.5);
        this.inputEnabled = true;
        this.input.useHandCursor = true;
    }
};