
export default class Resource {
    static selectAllCheckbox(rows_ClassName, header_Check_box_className) {
      let checkboxes, header_Check_box = null;
       checkboxes = document.getElementsByClassName(rows_ClassName);
       header_Check_box = document.getElementsByClassName(header_Check_box_className);
      for (var i = 0; i < checkboxes.length; i++) {
        (header_Check_box[0].checked === true) ? checkboxes[i].checked = true : checkboxes[i].checked = false;
      }
    }
  
    static ResetHeaderCheckBox(rows_ClassName, header_Check_box_className){
      var IsAnyChecked = true;
      var checkboxes = document.getElementsByClassName(rows_ClassName);
      var header_Check_box = document.getElementsByClassName(header_Check_box_className);
      for (var i = 0; i < checkboxes.length; i++) {
        if(!checkboxes[i].checked)
          IsAnyChecked = false;
      }
      IsAnyChecked ? header_Check_box[0].checked = true : header_Check_box[0].checked = false;
    }
  
  }
  