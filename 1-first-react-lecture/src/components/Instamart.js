import React, { useState } from "react";

const Section = ({ name, content, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-5 m-5">
      <h1 className="font-bold text-2xl">{name}</h1>
      {isVisible ? (
        <button
          className="border border-black p-2 font-bold"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className="border border-black p-2 font-bold"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}

      {isVisible && <p>{content}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeams: false,
    showCareers: false,
  });
  return (
    <div>
      <Section
        name={"About Us"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus quidem eveniet deserunt recusandae eos mollitia voluptatibus quo, quas, eligendi nulla harum quis sunt vel totam natus qui laudantium officia similique id molestias impedit non obcaecati. Minus dolorem nihil quidem odio saepe, ratione necessitatibus at suscipit. Molestias eius culpa minima!"
        }
        isVisible={sectionConfig.showAbout}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: true,
            showTeams: false,
            showCareers: false,
          })
        }
      />
      <Section
        name={"Team"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus quidem eveniet deserunt recusandae eos mollitia voluptatibus quo, quas, eligendi nulla harum quis sunt vel totam natus qui laudantium officia similique id molestias impedit non obcaecati. Minus dolorem nihil quidem odio saepe, ratione necessitatibus at suscipit. Molestias eius culpa minima!"
        }
        isVisible={sectionConfig.showTeams}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeams: true,
            showCareers: false,
          })
        }
      />
      <Section
        name={"Careers"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus quidem eveniet deserunt recusandae eos mollitia voluptatibus quo, quas, eligendi nulla harum quis sunt vel totam natus qui laudantium officia similique id molestias impedit non obcaecati. Minus dolorem nihil quidem odio saepe, ratione necessitatibus at suscipit. Molestias eius culpa minima!"
        }
        isVisible={sectionConfig.showCareers}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeams: false,
            showCareers: true,
          })
        }
      />
    </div>
  );
};

export default Instamart;
