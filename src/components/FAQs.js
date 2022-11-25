import Question from "./Question";
import "./styles/FAQs.css";
const DefaultQuestions = () => {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <Question
        quest="1. HOW DO I ADD, SAVE OR DELETE A LOCATION?"
        ans="Weathery stores the last 5 locations you've searched for, and these locations will appear when you place your cursor over the drop-down arrow to the right of your most recently viewed location. They cannot be changed manually, but they will be replaced as you search for additional locations. Clearing your cookies will cause them all to be removed."
      />
      <Question
        quest="2. WHAT ARE YOU DOING WITH MY LOCATION DATA?"
        ans="Weathery stores the last 5 locations you've searched for, and these locations will appear when you place your cursor over the drop-down arrow to the right of your most recently viewed location. They cannot be changed manually, but they will be replaced as you search for additional locations. Clearing your cookies will cause them all to be removed."
      />
      <Question
        quest="3. HOW DO I VIEW THE RADAR MAP? "
        ans="Weathery stores the last 5 locations you've searched for, and these locations will appear when you place your cursor over the drop-down arrow to the right of your most recently viewed location. They cannot be changed manually, but they will be replaced as you search for additional locations. Clearing your cookies will cause them all to be removed."
      />
      <Question
        quest="4. HOW DO I MANAGE THE NOTIFICATION?"
        ans="Weathery stores the last 5 locations you've searched for, and these locations will appear when you place your cursor over the drop-down arrow to the right of your most recently viewed location. They cannot be changed manually, but they will be replaced as you search for additional locations. Clearing your cookies will cause them all to be removed."
      />
      <Question
        quest="5. WHERE IS THE WEATHER NEWS SECTION?"
        ans="Weathery stores the last 5 locations you've searched for, and these locations will appear when you place your cursor over the drop-down arrow to the right of your most recently viewed location. They cannot be changed manually, but they will be replaced as you search for additional locations. Clearing your cookies will cause them all to be removed."
      />
      <Question
        quest="6. DOES WEATHERY SELL THEIR CLIENT DATABASE TO THIRD PARTIES?"
        ans="Weathery stores the last 5 locations you've searched for, and these locations will appear when you place your cursor over the drop-down arrow to the right of your most recently viewed location. They cannot be changed manually, but they will be replaced as you search for additional locations. Clearing your cookies will cause them all to be removed."
      />
    </div>
  );
};

export default DefaultQuestions;
