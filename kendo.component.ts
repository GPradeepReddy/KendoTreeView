import { Component } from "@angular/core";
import { CheckableSettings } from '@progress/kendo-angular-treeview';
@Component({
  selector: "my-app",
  template: `
    <kendo-treeview
      [nodes]="data"
      textField="text"
      kendoTreeViewExpandable
      kendoTreeViewSelectable
      kendoTreeViewHierarchyBinding
      childrenField="items"
      [kendoTreeViewCheckable]="checkableSettings"
      [(checkedKeys)]="checkedKeys"
    >
    </kendo-treeview>
  `
})
export class AppComponent {
  checkedKeys: any[] = ['0'];
  public data: any[] = [
    {
      text: "Furniture",
      items: [
        { text: "Tables & Chairs" },
        { text: "Sofas" },
        { text: "Occasional Furniture" }
      ]
    },
    {
      text: "Decor",
      items: [
        { text: "Bed Linen" },
        { text: "Curtains & Blinds" },
        { text: "Carpets" }
      ]
    }
  ];
  get checkableSettings(): CheckableSettings {
    return {
      checkChildren: true,
      checkParents: true,
      enabled: true,
      mode: "multiple",
      checkOnClick: true
    };
  }
}
