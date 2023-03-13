import React, { useState } from "react";

const Section = ({ name, content, isVisible, setIsVisible }) => {
  console.log(setIsVisible); // this is a function
  return (
    <div className="border border-black p-5 m-5">
      <h1 className="font-bold text-2xl">{name}</h1>
      {
        <div>
          <button
            className="border border-black p-2 font-bold"
            onClick={() => {
              // isVisible ? setIsVisible(false) : setIsVisible(true);
              setIsVisible(); // this is a function, we just need to call it and all logic will be done
            }}
          >
            {isVisible ? "Hide" : "Show"}
          </button>
          <p>{isVisible && content}</p>
        </div>
      }
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div>
      <Section
        name={"About Us"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus quidem eveniet deserunt recusandae eos mollitia voluptatibus quo, quas, eligendi nulla harum quis sunt vel totam natus qui laudantium officia similique id molestias impedit non obcaecati. Minus dolorem nihil quidem odio saepe, ratione necessitatibus at suscipit. Molestias eius culpa minima!"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />

      <Section
        name={"Team"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus quidem eveniet deserunt recusandae eos mollitia voluptatibus quo, quas, eligendi nulla harum quis sunt vel totam natus qui laudantium officia similique id molestias impedit non obcaecati. Minus dolorem nihil quidem odio saepe, ratione necessitatibus at suscipit. Molestias eius culpa minima!"
        }
        isVisible={visibleSection === "teams"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "teams" ? "" : "teams")
        }
      />
      <Section
        name={"Careers"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus quidem eveniet deserunt recusandae eos mollitia voluptatibus quo, quas, eligendi nulla harum quis sunt vel totam natus qui laudantium officia similique id molestias impedit non obcaecati. Minus dolorem nihil quidem odio saepe, ratione necessitatibus at suscipit. Molestias eius culpa minima!"
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "careers" ? "" : "careers")
        }
      />
    </div>
  );
};

export default Instamart;
