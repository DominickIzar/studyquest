import {initialEcho} from './echo.js';
import {createGame} from './engine.js';
export const KEY='studyquest.echo.v1';
export function load(){try{const raw=JSON.parse(localStorage.getItem(KEY)||'null');if(!raw||raw.version!==1||!raw.game||typeof raw.game.node!=='string')return fresh();const initial=fresh();return {...initial,...raw,echo:raw.echo&&typeof raw.echo.node==='string'?raw.echo:initialEcho(),game:raw.game.version===2?{...initial.game,...raw.game,flags:{...initial.game.flags,...raw.game.flags},stats:{...initial.game.stats,...raw.game.stats},relationships:{...initial.game.relationships,...raw.game.relationships}}:createGame()}}catch{return fresh()}}
export const fresh=()=>({version:1,game:createGame(),echo:initialEcho(),notes:[],focusSessions:[],xp:0,settings:{sound:false,analyst:false},createdAt:new Date().toISOString()});
export function save(state){try{localStorage.setItem(KEY,JSON.stringify(state));return true}catch{return false}}
export function exportData(state){return JSON.stringify({...state,exportedAt:new Date().toISOString()},null,2)}
export function importData(txt){const obj=JSON.parse(txt);if(obj?.version!==1||!obj?.game||typeof obj.game.node!=='string'||!Array.isArray(obj.notes)||!Array.isArray(obj.focusSessions))throw Error('Backup incompatível ou inválido');return obj}
