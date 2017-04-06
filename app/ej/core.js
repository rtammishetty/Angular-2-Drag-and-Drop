System.register(['@angular/core', '@angular/forms'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1;
    var firstVal, Utils, EJComponents, ComplexTagElement, ArrayTagElement;
    function CreateComplexDirective(args, ejArgs) {
        return core_1.Directive(args).Class({
            extends: ComplexTagElement,
            constructor: [ejArgs.type, function (widget) {
                    this.tags = ejArgs.tags;
                    this.complexProperties = ejArgs.complexes;
                    this.__parent = widget;
                    ComplexTagElement.call(this);
                }]
        });
    }
    exports_1("CreateComplexDirective", CreateComplexDirective);
    function CreateArrayTagDirective(property, selector, type) {
        return core_1.Directive({
            selector: selector,
            queries: {
                children: new core_1.ContentChildren(type)
            }
        }).Class({
            extends: ArrayTagElement,
            constructor: function () {
                ArrayTagElement.call(this, property);
            }
        });
    }
    exports_1("CreateArrayTagDirective", CreateArrayTagDirective);
    function CreateComponent(name, componentArgs, ejArgs) {
        componentArgs.changeDetection = core_1.ChangeDetectionStrategy.OnPush;
        var comp = core_1.Component(componentArgs);
        return comp.Class({
            extends: EJComponents,
            constructor: [core_1.ElementRef, core_1.ChangeDetectorRef, function (el, cdRef) {
                    this.tags = ejArgs.tags;
                    this.outputs = componentArgs.outputs;
                    this.twoways = ejArgs.twoways;
                    this.complexProperties = ejArgs.complexes;
                    EJComponents.call(this, name, el, cdRef);
                }]
        });
    }
    exports_1("CreateComponent", CreateComponent);
    function CreateControlValueAccessor(selector, component) {
        var EJDefaultValueAccessor;
        var constAccessor = { provide: forms_1.NG_VALUE_ACCESSOR,
            useExisting: core_1.forwardRef(function () { return EJDefaultValueAccessor; }), multi: true
        };
        var valDirective = core_1.Directive({ selector: selector,
            host: { '(change)': 'onChange($event.value)', '(focusOut)': 'onTouched()' },
            providers: [constAccessor]
        });
        EJDefaultValueAccessor = valDirective.Class({
            constructor: [component, function (host) {
                    this.host = host;
                }],
            onChange: function (_) { },
            onTouched: function () { },
            writeValue: function (value) {
                if (this.host.widget)
                    this.host.widget.option("model.value", value);
                else
                    this.host.model.value = value;
            },
            registerOnChange: function (fn) {
                this.onChange = fn;
            },
            registerOnTouched: function (fn) {
                this.onTouched = fn;
            }
        });
        return EJDefaultValueAccessor;
    }
    exports_1("CreateControlValueAccessor", CreateControlValueAccessor);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                exports_1({
                    "ContentChild": core_1_1["ContentChild"],
                    "Type": core_1_1["Type"],
                    "forwardRef": core_1_1["forwardRef"]
                });
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            firstVal = {};
            /** Internal Helpers */
            Utils = (function () {
                function Utils() {
                }
                Utils.IterateAndGetChanges = function (obj) {
                    if (ej.isNullOrUndefined(obj.tags) || obj.tags.length === 0)
                        return null;
                    var changes, res = {};
                    for (var i = 0, tags = obj.tags; i < tags.length; i++) {
                        var tag = tags[i], tagElement = obj["_" + tag.replace(/\./g, '_')];
                        if (!ej.isNullOrUndefined(tagElement) && tagElement.hasChanges) {
                            res[tag] = tagElement.getChangesAndReset();
                        }
                    }
                    return res;
                };
                Utils.AngularizeInputs = function (inputs, twoways) {
                    for (var i = 0, len = inputs.length; i < len; i++) {
                        var element = inputs[i];
                        inputs[i] = "model." + element + ": " + element;
                    }
                    for (var i = 0; i < twoways.length; i++) {
                        var element = twoways[i];
                        element = "model." + element + "_two:" + element;
                        inputs.push(element);
                    }
                    return inputs;
                };
                return Utils;
            }());
            exports_1("Utils", Utils);
            EJComponents = (function () {
                function EJComponents(name, el, cdRef) {
                    this.name = name;
                    this.el = el;
                    this.cdRef = cdRef;
                    this.model = {};
                    this._firstCheck = true;
                    //        this.__shadow = this.dom.getShadowRoot(this.el.nativeElement);
                    this.createEvents(this.outputs);
                    this.createTwoways(this.twoways);
                }
                EJComponents.prototype.createEvents = function (events) {
                    var model = this.model, self = this;
                    if (events && events.length) {
                        for (var i = 0; i < events.length; i++) {
                            var event = events[i];
                            if (event.startsWith("model."))
                                continue;
                            self[event] = new core_1.EventEmitter(false);
                        }
                    }
                    var complex = this.complexProperties;
                    if (complex && complex.length) {
                        for (var i = 0; i < complex.length; i++) {
                            var element = complex[i];
                            ej.createObject(element, {}, model);
                        }
                    }
                };
                EJComponents.prototype.createTwoways = function (twoways) {
                    if (!twoways)
                        return;
                    var model = this.model;
                    for (var i = 0; i < twoways.length; i++) {
                        var element = twoways[i];
                        if (element.indexOf(":") !== -1) {
                            element = element.replace(/:.+/g, "");
                        }
                        ej.createObject(element + "Change", new core_1.EventEmitter(), model);
                        ej.createObject(element, this.addTwoways(element), model);
                    }
                };
                EJComponents.prototype.addTwoways = function (prop) {
                    var self = this, model = this.model, value = firstVal; //, originalProp = prop.replace(/-/g, ".");
                    return function (newVal, isApp) {
                        if (value === firstVal) {
                            value = ej.getObject(prop + "_two", model);
                            if (value === undefined)
                                value = ej.getObject(prop, this === undefined || this.defaults === undefined ? {} : this.defaults);
                        }
                        if (newVal === undefined) {
                            return value;
                        }
                        if (value === newVal)
                            return;
                        value = newVal;
                        if (!isApp) {
                            ej.createObject(prop + "_two", newVal, model);
                            ej.getObject(prop + "Change", model).emit(newVal);
                        }
                    };
                };
                EJComponents.prototype.ngAfterContentInit = function () {
                    this._firstCheck = false;
                    for (var i = 0; i < this.tags.length; i++) {
                        var element = this.tags[i], item = this["_" + element.replace(/\./g, '_')];
                        if (!ej.isNullOrUndefined(item))
                            ej.createObject(element, item.getList(), this.model);
                    }
                    var model = this.model, self = this, events = this.outputs;
                    if (events) {
                        for (var i = 0; i < events.length; i++) {
                            var event = events[i];
                            EJComponents.bindAndRaiseEvent(this, model, event);
                        }
                    }
                    this.widget = $(this.el.nativeElement)["ej" + this.name](this.model)["ej" + this.name]("instance");
                };
                EJComponents.bindAndRaiseEvent = function (instance, model, event) {
                    if (!event.startsWith("model.")) {
                        model[event] = function (params) {
                            instance[event]["emit"](params);
                        };
                    }
                };
                EJComponents.prototype.ngOnChanges = function (changes) {
                    if (this._firstCheck)
                        return;
                    var ngChanges = {};
                    for (var key in changes) {
                        var element = changes[key];
                        if (element.previousValue === element.currentValue)
                            break;
                        key = key.replace("model.", "");
                        if (key.endsWith("_two")) {
                            var oKey = key.replace("_two", ""), valFn = ej.getObject(oKey, this.widget["model"]);
                            valFn(element.currentValue, true);
                            ej.createObject(oKey, valFn, ngChanges);
                        }
                        ej.createObject(key, element.currentValue, ngChanges);
                    }
                    this.widget["setModel"](ngChanges, $.isPlainObject(ngChanges));
                };
                EJComponents.prototype.ngAfterContentChecked = function () {
                    /// TODO: ChangeDetection Third/Multi level
                    var changes = Utils.IterateAndGetChanges(this);
                    for (var key in changes) {
                        if (changes.hasOwnProperty(key)) {
                            var element = changes[key];
                            this.widget["_" + key](element);
                        }
                    }
                };
                EJComponents.prototype.ngOnDestroy = function () {
                    this.widget['destroy']();
                };
                return EJComponents;
            }());
            exports_1("EJComponents", EJComponents);
            ComplexTagElement = (function () {
                function ComplexTagElement() {
                    this.hasChanges = false;
                    this.__firstChange = true;
                    this.__valueChange = new core_1.EventEmitter();
                    var complexes = this.complexProperties;
                    for (var i = 0; complexes !== undefined && i < complexes.length; i++) {
                        var element = complexes[i];
                        ej.createObject(element, {}, this);
                    }
                }
                ComplexTagElement.prototype.ngOnInit = function () {
                    this.__firstChange = false;
                };
                ComplexTagElement.prototype.ensureCleanObject = function () {
                    var tags = this.tags;
                    for (var i = 0; i < tags.length; i++) {
                        var element = tags[i], tagElement = this["_" + element.replace(/\./g, '_')];
                        if (i === 0 && this[element])
                            return;
                        if (ej.isNullOrUndefined(tagElement))
                            continue;
                        ej.createObject(element, tagElement.getList(), this);
                    }
                };
                ComplexTagElement.prototype.ngOnChanges = function (changes) {
                    if (this.__firstChange)
                        return;
                    this.recentChanges = changes;
                    this.hasChanges = true;
                };
                ComplexTagElement.prototype.getChangesAndReset = function () {
                    if (this.hasChanges === false)
                        return;
                    var changes = this.recentChanges || {};
                    for (var key in changes) {
                        if (changes.hasOwnProperty(key)) {
                            changes[key] = changes[key].currentValue;
                        }
                    }
                    var contentChanges = Utils.IterateAndGetChanges(this);
                    if (!$.isEmptyObject(contentChanges)) {
                        for (var key in contentChanges) {
                            if (contentChanges.hasOwnProperty(key)) {
                                var element = contentChanges[key];
                                //this.el.nativeElement.
                                this.__parent.widget["_" + this.property.replace(/\./g, '_') + "_" + key](element);
                            }
                        }
                    }
                    this.hasChanges = false;
                    return changes;
                };
                ComplexTagElement.prototype.ngAfterContentChecked = function () {
                    var tags = this.tags;
                    for (var i = 0, len = tags.length; i < len; i++) {
                        var element = tags[i], tagElement = this["_" + element.replace(/\./g, '_')];
                        if (tagElement && tagElement.hasChanges)
                            this.hasChanges = true;
                    }
                };
                return ComplexTagElement;
            }());
            exports_1("ComplexTagElement", ComplexTagElement);
            ArrayTagElement = (function () {
                function ArrayTagElement(propertyName) {
                    this.propertyName = propertyName;
                    this.hasChanges = false;
                }
                // TODO: Need to consider dynamic child change
                ArrayTagElement.prototype.ngAfterContentInit = function () {
                    var _this = this;
                    var index = 0;
                    this.list = this.children.map(function (child) {
                        child.__index = index++;
                        child.property = _this.propertyName;
                        return child;
                    });
                };
                ArrayTagElement.prototype.ngOnChanges = function (changes) {
                };
                ArrayTagElement.prototype.getList = function () {
                    var list = this.list;
                    for (var i = 0; i < list.length; i++) {
                        list[i].ensureCleanObject();
                    }
                    return list;
                };
                ArrayTagElement.prototype.getChangesAndReset = function () {
                    this.hasChanges = false;
                    return this.recentChanges;
                };
                ArrayTagElement.prototype.ngAfterContentChecked = function () {
                    var changes = {}, res = changes[this.propertyName] = [], childChange;
                    for (var i = 0, list = this.list; i < list.length; i++) {
                        var child = list[i];
                        if (child.hasChanges) {
                            childChange = child.getChangesAndReset();
                            if (!ej.isNullOrUndefined(childChange)) {
                                res.push({
                                    index: child.__index,
                                    change: childChange
                                });
                            }
                        }
                    }
                    if (res.length > 0) {
                        this.recentChanges = res;
                        this.hasChanges = true;
                    }
                };
                return ArrayTagElement;
            }());
            exports_1("ArrayTagElement", ArrayTagElement);
        }
    }
});
//# sourceMappingURL=core.js.map