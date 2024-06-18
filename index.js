
// select the button and the div
const button = document.getElementById('submitBtn');


// define the function to change the HTML content
function changeContent() 
{
  const div = document.getElementById("love-calculator");

  // Calculating love score
  var loveScore = Math.random();
  loveScore = loveScore * 100;
  loveScore = Math.floor(loveScore);

  // display love score
  div.innerHTML =
    "🎉Congratulations! " +
    "\n Your Love Score with your partner is: " +
    loveScore +
    "% 💖";

  // create paragraph element to display love score
  const element = document.createElement("p");

  // text to display for insights according to love score
  if (loveScore > 90) {
    element.innerHTML =
      "<strong>Insights:</strong> Congratulations! Your score indicates an exceptional level of compatibility. You and your partner are likely very well-matched, with a strong potential for a fulfilling and lasting relationship. Keep nurturing your bond and enjoy the journey together.";
  } else if (loveScore <= 90 && loveScore > 80) {
    element.innerHTML =
      "<strong>Insights:</strong> You and your partner are highly compatible, suggesting a deep understanding and alignment in many areas. Cherish your connection and enjoy the strong bond you share.";
  } else if (loveScore <= 80 && loveScore > 70) {
    element.innerHTML =
      "<strong>Insights:</strong> Your compatibility is quite strong, indicating many shared interests and values. This bodes well for a harmonious relationship. Keep building on this foundation with love and mutual support.";
  } else if (loveScore <= 70 && loveScore > 60) {
    element.innerHTML =
      "<strong>Insights:</strong> You have a solid foundation for a relationship with several compatible traits. Continue to nurture your connection and enjoy exploring your similarities.";
  } else if (loveScore <= 60 && loveScore > 50) {
    element.innerHTML =
      "<strong>Insights:</strong> Your compatibility is average, meaning there is potential for a good relationship. Focus on enhancing your strengths and working through differences with patience and communication.";
  } else if (loveScore <= 50 && loveScore > 40) {
    element.innerHTML =
      "<strong>Insights:</strong> You and your partner have a mix of similarities and differences. This balanced score suggests that while there are challenges, there are also opportunities for growth and connection.";
  } else if (loveScore <= 40 && loveScore > 30) {
    element.innerHTML =
      "<strong>Insights:</strong> Your score indicates a fair amount of differences. Building a successful relationship will likely depend on mutual respect and a strong desire to understand and support each other.";
  } else if (loveScore <= 30 && loveScore > 20) {
    element.innerHTML =
      "<strong>Insights:</strong> There are a few areas where you and your partner may not see eye to eye. This doesn't mean a relationship is impossible, but it will require open communication and a willingness to compromise.";
  } else if (loveScore <= 20 && loveScore > 10) {
    element.innerHTML =
      "<strong>Insights:</strong> Your compatibility score suggests that there are some notable differences between you. Consider exploring each other's interests and values to see if there are areas where you can connect more deeply.";
  } else if (loveScore <= 10 && loveScore >= 0) {
    element.innerHTML =
      "<strong>Insights:</strong> It seems there might be significant differences between you and your partner. While opposites can attract, building a strong relationship may require extra effort. Focus on understanding each other's perspectives and finding common ground.";
  }

  
  // append the html element created for displaying insight
  div.appendChild(element);

  // style for insight section
  div.style.height = "50vh";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
}

// event listener to the submit button
button.addEventListener('click', changeContent);
