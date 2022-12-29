const CopyToClipboard = async (ref, text) => {
  let dataToCopy;
  if (ref?.current) {
    dataToCopy = ref.current.innerText;
  } else if (text) {
    dataToCopy = text;
  }
  if (!dataToCopy) {
    alert('Nothing to copy');
    return;
  }
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(dataToCopy);
    return;
  }
  console.log('fallbacking to document.execCommand("copy")');
  var textArea = document.createElement("textarea");
  textArea.value = dataToCopy;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.width = "10px";
  textArea.style.height = "10px";
  textArea.style.zIndex = "1000";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  let result;
  try {
    result = document.execCommand("copy");
  } catch (err) {
    console.error(err);
  }
  if (!result) {
    console.log("Unable to copy text");
  }
  textArea.remove();
};

export default CopyToClipboard;
