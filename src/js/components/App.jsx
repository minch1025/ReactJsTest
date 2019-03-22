import React from 'react';
//import axios from 'axios';
import Device from './Device';






//const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';
const jsonSample = [{ "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData: [{ "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }, { "deviceId": 1, "demandTime": "201903051930", "address": 3801, "version": 13, "type": "130", "enabledCH1": true, "enabledCH2": true, "enabledCH3": true, "enabledCH4": true, "controlRateCH1": 17, "controlRateCH2": 17, "controlRateCH3": 17, "controlRateCH4": 17, "calculateTime": 461, "avgVoltage": 109, "avgPower": 0, "avgCurrent1": 0, "avgCurrent2": 0, "avgCurrent3": 0, "avgCurrent4": 0, "avgCurrent5": 0, "avgCurrent6": 0, "avgCurrent7": 0, "avgCurrent8": 273, "avgReducedCH1": 0, "avgReducedCH2": 0, "avgReducedCH3": 0, "avgReducedCH4": 0, "controNumCH1": 0, "controNumCH2": 0, "controNumCH3": 0, "controNumCH4": 0, "offNumCH1": 0, "offNumCH2": 0, "offNumCH3": 0, "offNumCH4": 0, "worktimeCH1": 1, "worktimeCH2": 1, "worktimeCH3": 1, "worktimeCH4": 0, "controlTimeCH1": 0, "controlTimeCH2": 0, "controlTimeCH3": 0, "controlTimeCH4": 0, "stopTimeCH1": 0, "stopTimeCH2": 0, "stopTimeCH3": 0, "stopTimeCH4": 0, "valid": true }],
            place: '通天閣', //ここに好きな場所を指定。
        };
    }
    handleGetNewSIMData() {
        // Google Maps APIが指定した必須パラメータ(この場合はaddress)をparamsに渡す。
        // axios
        //   .get(GEOCODE_ENDPOINT, { params: { address: this.state.place } })
        //   .then((results) => {
        //   // 以下のGoogle API のレスポンスの例を元に欲しいデータを取得
        //     const data = results.data;
        //     const result = data.results[0];
        //     const location = result.geometry.location;
        //     this.setState({
        //       address: result.formatted_address,
        //       lat: location.lat,
        //       lng: location.lng,
        //     });
        //   },
        //   )
        //   .catch(() => {
        //     console.log('通信に失敗しました。');
        //   });
        this.setState({
            deviceId: jsonSample.deviceId,
            message: "Hello New SIM!"
        });
    }
    handleGetReloadData(){
        this.setState({
            deviceId: jsonSample.deviceId,
            message: "reload it!"
        });
    }

    render() {
        var tableRow = this.state.contactData.filter(d=>d.valid).map(function(d,i){
            return (<tr key={d.i}>
                            <td> {d.deviceId} </td>
                            <td> {d.demandTime}</td>
                            <td>  {d.address}</td>
                            <td>  {d.version}</td>
                            <td> {d.type}</td>
                            <td> {d.controlRateCH1}</td>
                            <td> {d.controlRateCH2}</td>
                            <td> {d.controlRateCH3}</td>
                            <td> {d.controlRateCH4}</td>
                            <td>  {d.calculateTime}</td>
                            <td> {d.avgVoltage}</td>
                            <td>  {d.avgPower}</td>
                            <td>  {d.avgCurrent1}</td>
                            <td> {d.avgCurrent2}</td>
                            <td> {d.avgCurrent3}</td>
                            <td>  {d.avgCurrent4}</td>
                            <td> {d.avgCurrent5}</td>               
                            <td> {d.avgCurrent6}</td>
                            <td>  {d.avgCurrent7}</td>
                            <td>  {d.avgCurrent8}</td>
                            <td>  {d.avgReducedCH1}</td>
                            <td> {d.avgReducedCH2}</td>
                            <td> {d.avgReducedCH3}</td>
                            <td>  {d.avgReducedCH4}</td>
                            <td>  {d.controNumCH1}</td>
                            <td>  {d.controNumCH2}</td>
                            <td>  {d.controNumCH3}</td>
                            <td>  {d.controNumCH4}</td>
                            <td> {d.offNumCH1}</td>
                            <td>  {d.offNumCH2}</td>
                            <td>  {d.offNumCH3}</td>
                            <td>  {d.offNumCH4}</td>
                            <td> {d.worktimeCH1}</td>
                            <td>  {d.worktimeCH2}</td>
                            <td>  {d.worktimeCH3}</td>
                            <td> {d.worktimeCH4}</td>
                            <td>  {d.controlTimeCH1}</td>
                            <td>  {d.controlTimeCH2}</td>
                            <td>  {d.controlTimeCH3}</td>
                            <td>  {d.controlTimeCH4}</td>
                            <td> {d.stopTimeCH1}</td>
                            <td> {d.stopTimeCH2}</td>
                            <td>  {d.stopTimeCH3}</td>
                            <td>  {d.stopTimeCH4}</td>
            </tr>);
        });
        return (
            <div className="app">
                <h1 className="app-title">iz-seacs Data</h1>
                <h2>memochou</h2>
                <textarea name="add device" id="" cols="20" rows="10"></textarea>
                <input
                    type="button"
                    
                    value="New SIM"
                    onClick={() => this.handleGetNewSIMData()}
                />
                <input
                    type="button"
                    value="Reload"
                    onClick={() => this.handleGetReloadData()}
                />
                <table>
                    <thead>
                        <tr>
                            <th>deviceId</th>
                            <th>demandTime</th>
                            <th>address</th>
                            <th>version</th>
                            <th>type</th>
                            <th>controlRateCH1</th>
                            <th>controlRateCH2</th>
                            <th>controlRateCH3</th>
                            <th>controlRateCH4</th>
                            <th>calculateTime</th>
                            <th>avgVoltage</th>
                            <th>avgPower</th>
                            <th>avgCurrent1</th>
                            <th>avgCurrent2</th>
                            <th>avgCurrent3</th>
                            <th>avgCurrent4</th>
                            <th>avgCurrent5</th>
                            <th>avgCurrent6</th>
                            <th>avgCurrent7</th>
                            <th>avgCurrent8</th>
                            <th>avgReducedCH1</th>
                            <th>avgReducedCH2</th>
                            <th>avgReducedCH3</th>
                            <th>avgReducedCH4</th>
                            <th>controNumCH1</th>
                            <th>controNumCH2</th>
                            <th>controNumCH3</th>
                            <th>controNumCH4</th>
                            <th>offNumCH1</th>
                            <th>offNumCH2</th>
                            <th>offNumCH3</th>
                            <th>offNumCH4</th>
                            <th>worktimeCH1</th>
                            <th>worktimeCH2</th>
                            <th>worktimeCH3</th>
                            <th>worktimeCH4</th>
                            <th>controlTimeCH1</th>
                            <th>controlTimeCH2</th>
                            <th>controlTimeCH3</th>
                            <th>controlTimeCH4</th>
                            <th>stopTimeCH1</th>
                            <th>stopTimeCH2</th>
                            <th>stopTimeCH3</th>
                            <th>stopTimeCH4</th>                  
                        </tr>
                    </thead>
                    <tbody>
                       {tableRow}
                    </tbody>
                </table>

            </div>
        );
    }
}


export default App;

