document.addEventListener("DOMContentLoaded", function() {
    const lifeCounterElement = document.getElementById("life-counter");
    const decreaseLifeButton = document.querySelectorAll('decrease-life');
    const increaseLifeButton = document.getElementById("increase-life");
  
    let lifeCount = 3; // Initial life count
  
    // Function to update the life count display
    function updateLifeCount() {
      lifeCounterElement.textContent = lifeCount;
    }
  
    // Function to decrease life
    function decreaseLife() {
      if (lifeCount > 0) {
        lifeCount--;
        updateLifeCount();
      }
    }
  
    // Function to increase life
    function increaseLife() {
      lifeCount++;
      updateLifeCount();
    }
  
    // Event listeners for the buttons
    decreaseLifeButton.addEventListener("click", decreaseLife);
    increaseLifeButton.addEventListener("click", increaseLife);
  
    // Initialize the life count display
    updateLifeCount();
  });
  