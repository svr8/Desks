$(document).ready(function() {
  
  $('.settings-content').hide();
  $('#edit-build').hide();

  
  $("#extension-chooser-trigger").on('click', () => {
    $("#edit-build").hide();

    let displayState = $("#extension-chooser-list").css('display');
    console.log(displayState)
    displayState = displayState=='block' ? 'none' : 'block';
    $("#extension-chooser-list").css('display', displayState);

    if(displayState == 'block') {
      let html = '';
      for(let extensionName in languageExtensionMap)
        html += `<div class="setting-card-dropdown-list-item">${extensionName}</div>`;
      console.log(html);
      $("#extension-chooser-list").html(html);

      $("#update-build .setting-card-dropdown-list-item").click( function(event) {
        let ext = $(this).html()
        onExtensionSelect(ext);
      });
    }
  });

  $("#update-build .setting-card-dropdown-list-item").click( function(event) {
    let ext = $(this).html()
    onExtensionSelect(ext);
  });


});

const onExtensionSelect = (ext) => {
  const lang = getLanguage(ext);

  console.log(lang);
  
  $("#extension-chooser-trigger").html(ext);
  $("#extension-chooser-list").css('display', 'none');

  $("#input-editorRes").val(lang.editorRes);
  $("#input-compileCommand").val(lang.compileCommand);
  $("#input-runCommand").val(lang.runCommand);
  $("#input-stopCommand").val(lang.stopCommand);
  
  $("#edit-build").show();
}

// TODO
const updateExtension = function() {

  const ext = $("#extension-chooser-trigger").html();
  const resource = $("#input-editorRes").val();
  const compileCommand = $("#input-compileCommand").val();
  const runCommand = $("#input-runCommand").val();
  const stopCommand = $("#input-stopCommand").val();

  config.languageExtensionMap[ext] = {
    editorRes: resource,
    compileCommand: compileCommand,
    runCommand: runCommand,
    stopCommand: stopCommand
  }

  updateSessionData(true);
  alert('Language configurations have been updated.');


}
const showSetting = (settingID) => {
  console.log(settingID);
  $('.settings-content').hide();
  $(`#${settingID}`).show();
}

const showSubContent = (contentID) => {
  $(".setting-sub-content").hide();
  $(`#${contentID}`).show();
}