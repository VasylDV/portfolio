const isFunction = fn => typeof fn === 'function';

export function Unsubscribe() {
  return function(constructor: Function) {
    const original = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function() {
      for (const prop of Object.keys(this)) {
        const property = this[prop];
        if (property && isFunction(property.unsubscribe)) {
          property.unsubscribe();
        }
      }
    };
  };
}
