"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _es6Promise = require('es6-promise');

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) {
            return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) {
                resolve(value);
            });
        }
        function onfulfill(value) {
            try {
                step("next", value);
            } catch (e) {
                reject(e);
            }
        }
        function onreject(value) {
            try {
                step("throw", value);
            } catch (e) {
                reject(e);
            }
        }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};

function getTimeFromTheFutureAsync(msInFuture) {
    return __awaiter(this, void 0, _es6Promise.Promise, _regeneratorRuntime.mark(function callee$1$0() {
        return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    console.log("Started at " + new Date().toLocaleString());
                    return context$2$0.abrupt("return", new _es6Promise.Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve(new Date().toLocaleString());
                        }, msInFuture);
                    }));

                case 2:
                case "end":
                    return context$2$0.stop();
            }
        }, callee$1$0, this);
    }));
}
function doWork() {
    return __awaiter(this, void 0, _es6Promise.Promise, _regeneratorRuntime.mark(function callee$1$0() {
        var result;
        return _regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    context$2$0.next = 2;
                    return getTimeFromTheFutureAsync(5000);

                case 2:
                    result = context$2$0.sent;

                    console.log(result);

                case 4:
                case "end":
                    return context$2$0.stop();
            }
        }, callee$1$0, this);
    }));
}
doWork();