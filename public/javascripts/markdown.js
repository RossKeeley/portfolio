<script type="text/javascript">
  const exampleText = "";

  marked.setOptions({breaks: true});
  var input = document.getElementById("editor");
  var preview = document.getElementById("preview");

  preview.innerHTML = marked(input.value);

  input.addEventListener("keyup", () => {
    preview.innerHTML = marked(input.value);
  });

  // Clear button
  document.getElementById("clearButton").addEventListener("click", () => {
    input.value = "";
    preview.innerHTML = "";
  });
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/1.2.7/marked.min.js"></script>
