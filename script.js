// wait for the DOM to be fully loaded before changes
document.addEventListener("DOMContentLoaded", function () {
  // creating the H1 element
  const h1 = document.createElement("h1");
  h1.textContent = "Visszajelzés";

  // creating the Input for Subject
  const inputSubject = document.createElement("input");
  inputSubject.type = "text";
  inputSubject.placeholder = "Tárgy";

  // creating the Textarea for Notes
  const textareaNotes = document.createElement("textarea");
  textareaNotes.placeholder = "Megjegyzés";

  // creating the Checkbox for Data Agreement
  const checkboxData = document.createElement("input");
  checkboxData.type = "checkbox";

  //  creating the Checkbox for Newsletter
  const checkboxNewsletter = document.createElement("input");
  checkboxNewsletter.type = "checkbox";

  //  creating the Save Button
  const buttonSave = document.createElement("button");
  buttonSave.textContent = "MENTÉS";

  // appending all elements to the root div
  const root = document.getElementById("root");
  root.appendChild(h1);
  root.appendChild(inputSubject);
  root.appendChild(textareaNotes);

  // creating the the label elements for checkboxes
  const labelData = document.createElement("label");
  const labelTextData = document.createTextNode(
    "Elolvastam és elfogadom az Adatkezelési Tájékoztatót."
  );
  labelData.appendChild(checkboxData);
  labelData.appendChild(labelTextData);

  const labelNewsletter = document.createElement("label");
  const labelTextNewsletter = document.createTextNode(
    "Szeretnék hírlevelet kapni."
  );
  labelNewsletter.appendChild(checkboxNewsletter);
  labelNewsletter.appendChild(labelTextNewsletter);

  // appending labels instead of checkboxes
  root.appendChild(labelData);
  root.appendChild(labelNewsletter);
  root.appendChild(buttonSave);
});
