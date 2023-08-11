document.addEventListener('DOMContentLoaded', function () {
  var noteInput = document.getElementById('note');
  var saveButton = document.getElementById('saveButton');

  // Load saved note on popup open
  chrome.storage.sync.get(['note'], function (result) {
    if (result.note) {
      noteInput.value = result.note;
    }
  });

  // Save note when save button is clicked
  saveButton.addEventListener('click', function () {
    var note = noteInput.value;
    chrome.storage.sync.set({ 'note': note }, function () {
      alert('Note saved!');
    });
  });

  // Reset note when reset button is clicked
  resetButton.addEventListener('click', function () {
    chrome.storage.sync.remove('note', function () {
      noteInput.value = '';
      alert('Note reset!');
    });
  });
});
