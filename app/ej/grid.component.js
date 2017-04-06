System.register(['./core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var CommandDirective, CommandsDirective, ColumnDirective, ColumnsDirective, SummaryColumnDirective, SummaryColumnsDirective, SummaryRowDirective, SummaryRowsDirective, StackedHeaderColumnDirective, StackedHeaderColumnsDirective, StackedHeaderRowDirective, StackedHeaderRowsDirective, Outputs, ComplexProperties, Inputs, GridComponent, EJ_GRID_COMPONENTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("CommandDirective", CommandDirective = core_1.CreateComplexDirective({
                selector: "e-commands>e-command",
                inputs: ["buttonOptions", "type"],
                queries: {}
            }, {
                tags: [],
                type: core_1.forwardRef(function () { return GridComponent; })
            }));
            exports_1("CommandsDirective", CommandsDirective = core_1.CreateArrayTagDirective("commands", 'e-columns>e-commands', CommandDirective));
            exports_1("ColumnDirective", ColumnDirective = core_1.CreateComplexDirective({
                selector: "e-columns>e-column",
                inputs: ["clipMode", "allowEditing", "allowFiltering", "allowGrouping", "allowSorting", "allowResizing", "commands", "cssClass", "customAttributes", "dataSource", "defaultValue", "disableHtmlEncode", "displayAsCheckBox", "editParams", "editTemplate", "editType", "field", "foreignKeyField", "foreignKeyValue", "format", "headerTemplateID", "headerText", "headerTextAlign", "isFrozen", "isIdentity", "isPrimaryKey", "priority", "showInColumnChooser", "template", "textAlign", "tooltip", "type", "validationRules", "visible", "width"],
                queries: {
                    _commands: new core_1.ContentChild(CommandsDirective),
                }
            }, {
                tags: ["commands"],
                type: core_1.forwardRef(function () { return GridComponent; })
            }));
            exports_1("ColumnsDirective", ColumnsDirective = core_1.CreateArrayTagDirective("columns", 'ej-grid>e-columns', ColumnDirective));
            exports_1("SummaryColumnDirective", SummaryColumnDirective = core_1.CreateComplexDirective({
                selector: "e-summarycolumns>e-summarycolumn",
                inputs: ["customSummaryValue", "dataMember", "displayColumn", "format", "prefix", "suffix", "summaryType", "template"],
                queries: {}
            }, {
                tags: [],
                type: core_1.forwardRef(function () { return GridComponent; })
            }));
            exports_1("SummaryColumnsDirective", SummaryColumnsDirective = core_1.CreateArrayTagDirective("summaryColumns", 'e-summaryrows>e-summarycolumns', SummaryColumnDirective));
            exports_1("SummaryRowDirective", SummaryRowDirective = core_1.CreateComplexDirective({
                selector: "e-summaryrows>e-summaryrow",
                inputs: ["showCaptionSummary", "showGroupSummary", "showTotalSummary", "summaryColumns", "title", "titleColumn"],
                queries: {
                    _summaryColumns: new core_1.ContentChild(SummaryColumnsDirective),
                }
            }, {
                tags: ["summaryColumns"],
                type: core_1.forwardRef(function () { return GridComponent; })
            }));
            exports_1("SummaryRowsDirective", SummaryRowsDirective = core_1.CreateArrayTagDirective("summaryRows", 'ej-grid>e-summaryrows', SummaryRowDirective));
            exports_1("StackedHeaderColumnDirective", StackedHeaderColumnDirective = core_1.CreateComplexDirective({
                selector: "e-stackedheadercolumns>e-stackedheadercolumn",
                inputs: ["column", "cssClass", "headerText", "textAlign"],
                queries: {}
            }, {
                tags: [],
                type: core_1.forwardRef(function () { return GridComponent; })
            }));
            exports_1("StackedHeaderColumnsDirective", StackedHeaderColumnsDirective = core_1.CreateArrayTagDirective("stackedHeaderColumns", 'e-stackedheaderrows>e-stackedheadercolumns', StackedHeaderColumnDirective));
            exports_1("StackedHeaderRowDirective", StackedHeaderRowDirective = core_1.CreateComplexDirective({
                selector: "e-stackedheaderrows>e-stackedheaderrow",
                inputs: ["stackedHeaderColumns"],
                queries: {
                    _stackedHeaderColumns: new core_1.ContentChild(StackedHeaderColumnsDirective),
                }
            }, {
                tags: ["stackedHeaderColumns"],
                type: core_1.forwardRef(function () { return GridComponent; })
            }));
            exports_1("StackedHeaderRowsDirective", StackedHeaderRowsDirective = core_1.CreateArrayTagDirective("stackedHeaderRows", 'ej-grid>e-stackedheaderrows', StackedHeaderRowDirective));
            Outputs = ["actionBegin", "actionComplete", "actionFailure", "batchAdd", "batchDelete", "beforeBatchAdd", "beforeBatchDelete", "beforeBatchSave", "beginEdit", "cellEdit", "cellSave", "cellSelected", "cellSelecting", "columnDrag", "columnDragStart", "columnDrop", "rowDrag", "rowDragStart", "rowDrop", "columnSelected", "columnSelecting", "contextClick", "contextOpen", "create", "dataBound", "destroy", "detailsCollapse", "detailsDataBound", "detailsExpand", "endAdd", "endDelete", "endEdit", "load", "mergeCellInfo", "queryCellInfo", "recordClick", "recordDoubleClick", "resized", "resizeEnd", "resizeStart", "rightClick", "rowDataBound", "rowSelected", "rowSelecting", "templateRefresh", "toolBarClick", "model.dataSourceChange: dataSourceChange", "model.pageSettings.currentPageChange: pageSettings.currentPageChange"];
            ComplexProperties = ["contextMenuSettings", "editSettings", "filterSettings", "groupSettings", "pageSettings", "resizeSettings", "rowDropSettings", "searchSettings", "selectionSettings", "scrollSettings", "sortSettings", "textWrapSettings", "toolbarSettings"];
            Inputs = core_1.Utils.AngularizeInputs(["allowCellMerging", "allowGrouping", "allowKeyboardNavigation", "allowFiltering", "allowSorting", "allowMultiSorting", "allowPaging", "allowReordering", "allowResizeToFit", "allowResizing", "allowRowDragAndDrop", "allowScrolling", "allowSearching", "allowSelection", "allowTextWrap", "allowMultipleExporting", "commonWidth", "gridLines", "childGrid", "columnLayout", "contextMenuSettings", "cssClass", "detailsTemplate", "editSettings", "enableAltRow", "enableAutoSaveOnSelectionChange", "enableHeaderHover", "enablePersistence", "enableResponsiveRow", "enableRowHover", "enableRTL", "enableTouch", "filterSettings", "groupSettings", "isResponsive", "keySettings", "locale", "minWidth", "pageSettings", "query", "resizeSettings", "rowTemplate", "rowDropSettings", "searchSettings", "selectedRecords", "selectedRowIndex", "selectionSettings", "selectionType", "scrollSettings", "showColumnChooser", "showStackedHeader", "showSummary", "sortSettings", "textWrapSettings", "toolbarSettings", "contextMenuSettings.contextMenuItems", "contextMenuSettings.customContextMenuItems", "contextMenuSettings.enableContextMenu", "contextMenuSettings.disableDefaultItems", "editSettings.allowAdding", "editSettings.allowDeleting", "editSettings.allowEditing", "editSettings.allowEditOnDblClick", "editSettings.dialogEditorTemplateID", "editSettings.editMode", "editSettings.externalFormTemplateID", "editSettings.formPosition", "editSettings.inlineFormTemplateID", "editSettings.rowPosition", "editSettings.showConfirmDialog", "editSettings.showDeleteConfirmDialog", "editSettings.titleColumn", "editSettings.showAddNewRow", "filterSettings.enableCaseSensitivity", "filterSettings.filterBarMode", "filterSettings.filterType", "filterSettings.maxFilterChoices", "filterSettings.showFilterBarMessage", "filterSettings.showPredicate", "groupSettings.captionFormat", "groupSettings.enableDropAreaAutoSizing", "groupSettings.groupedColumns", "groupSettings.showDropArea", "groupSettings.showGroupedColumn", "groupSettings.showToggleButton", "groupSettings.showUngroupButton", "pageSettings.enableQueryString", "pageSettings.enableTemplates", "pageSettings.pageCount", "pageSettings.pageSize", "pageSettings.showDefaults", "pageSettings.template", "pageSettings.totalPages", "pageSettings.totalRecordsCount", "pageSettings.printMode", "resizeSettings.resizeMode", "rowDropSettings.dropTargetID", "rowDropSettings.dragMapper", "rowDropSettings.dropMapper", "searchSettings.fields", "searchSettings.key", "searchSettings.operator", "searchSettings.ignoreCase", "selectionSettings.enableToggle", "selectionSettings.selectionMode", "scrollSettings.allowVirtualScrolling", "scrollSettings.enableTouchScroll", "scrollSettings.frozenColumns", "scrollSettings.frozenRows", "scrollSettings.height", "scrollSettings.virtualScrollMode", "scrollSettings.enableVirtualization", "scrollSettings.width", "scrollSettings.scrollOneStepBy", "textWrapSettings.wrapMode", "toolbarSettings.customToolbarItems", "toolbarSettings.showToolbar", "toolbarSettings.toolbarItems", "columns", "stackedHeaderRows", "summaryRows", "contextMenuSettings.subContextMenu", "filterSettings.filteredColumns", "sortSettings.sortedColumns"], ["dataSource", "pageSettings.currentPage"]);
            exports_1("GridComponent", GridComponent = core_1.CreateComponent("Grid", {
                selector: 'ej-grid',
                inputs: Inputs,
                outputs: Outputs,
                template: "",
                queries: {
                    _columns: new core_1.ContentChild(ColumnsDirective),
                    _summaryRows: new core_1.ContentChild(SummaryRowsDirective),
                    _stackedHeaderRows: new core_1.ContentChild(StackedHeaderRowsDirective),
                }
            }, {
                tags: ["columns", "summaryRows", "stackedHeaderRows"],
                twoways: ["dataSource", "pageSettings.currentPage"],
                complexes: ComplexProperties,
            }));
            exports_1("EJ_GRID_COMPONENTS", EJ_GRID_COMPONENTS = [GridComponent, CommandsDirective, ColumnsDirective, SummaryColumnsDirective, SummaryRowsDirective, StackedHeaderColumnsDirective, StackedHeaderRowsDirective, CommandDirective, ColumnDirective, SummaryColumnDirective, SummaryRowDirective, StackedHeaderColumnDirective, StackedHeaderRowDirective]);
        }
    }
});
//# sourceMappingURL=grid.component.js.map