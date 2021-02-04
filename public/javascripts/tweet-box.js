<script type="text/javascript">
  // The input in the text box
  var input = document.getElementById("string");
  // The character counter
  var characterCount = document.getElementById("counterFooter");
  // The button
  var tweetButton = document.getElementById("btn");
  // Event is every time a pressed key is lifted up
  input.addEventListener("keyup", () => {
      // The string in the input text box
      var text = input.value;
      var countDown = 140 - (input.value.length);
      // Changes the color of the character count if the remaining number of characters is 20 or less
      countDown <= 20 ? document.getElementById("counterFooter").style.color = "red" : document.getElementById("counterFooter").style.color = "white";
      // Sets the new character count after each keyup event
      characterCount.innerHTML = countDown + "/140";
      // Disables the tweet button if character limit is exceeded
      countDown < 0 ? document.getElementById("btn").disabled = true : document.getElementById("btn").disabled = false;
  });
  // Resets the input value to an empty string, resets the character count, and changes the character count color back to white
  tweetButton.addEventListener("click", () => {
      input.value = '';
      characterCount.innerHTML = "140/140";
      document.getElementById("counterFooter").style.color = "white";
  });
</script>
