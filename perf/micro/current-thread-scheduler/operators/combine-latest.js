var RxOld = require("rx");
var RxNew = require("../../../../index");

module.exports = function (suite) {
    
    var oldCombineLatestWithCurrentThreadScheduler = RxOld.Observable.combineLatest(RxOld.Observable.range(0, 25, RxOld.Scheduler.currentThread), RxOld.Observable.range(0, 25, RxOld.Scheduler.currentThread), add);
    var newCombineLatestWithCurrentThreadScheduler = RxNew.Observable.combineLatest(RxNew.Observable.range(0, 25, RxNew.Scheduler.immediate), RxNew.Observable.range(0, 25, RxNew.Scheduler.immediate), add);

    return suite
        .add('old combineLatest with current thread scheduler', function () {
            oldCombineLatestWithCurrentThreadScheduler.subscribe(_next, _error, _complete);
        })
        .add('new combineLatest with current thread scheduler', function () {
            newCombineLatestWithCurrentThreadScheduler.subscribe(_next, _error, _complete);
        });
    
    function add(x, y) {
        return x + y;
    }
    function _next(x) { }
    function _error(e){ }
    function _complete(){ }
};