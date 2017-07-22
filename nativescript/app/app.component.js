"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataItem = (function () {
    function DataItem(itemDesc) {
        this.itemDesc = itemDesc;
    }
    return DataItem;
}());
exports.DataItem = DataItem;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Donna';
        this.tabSelectedIndex = 1;
        this.items = new Array();
        for (var i = 0; i < 5; i++) {
            this.items.push(new DataItem("item " + i));
        }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.mobile.html',
        styleUrls: ['./app.component.mobile.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFNMUM7SUFDSSxrQkFBbUIsUUFBZ0I7UUFBaEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtJQUFHLENBQUM7SUFDM0MsZUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksNEJBQVE7QUFTckIsSUFBYSxZQUFZO0lBS3JCO1FBSkEsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUtaLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNMLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksWUFBWTtJQUx4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUMxQyxDQUFDOztHQUNXLFlBQVksQ0FZeEI7QUFaWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlld0l0ZW0gfSBmcm9tIFwidWkvdGFiLXZpZXdcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGl0ZW1EZXNjOiBzdHJpbmcpIHt9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lm1vYmlsZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50Lm1vYmlsZS5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIHRpdGxlID0gJ0Rvbm5hJztcclxuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8RGF0YUl0ZW0+O1xyXG4gICAgcHVibGljIHRhYlNlbGVjdGVkSW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAxO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBuZXcgQXJyYXk8RGF0YUl0ZW0+KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5ldyBEYXRhSXRlbShcIml0ZW0gXCIgKyBpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==