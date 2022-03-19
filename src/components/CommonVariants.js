export const titleVariants = {
  visibleTitle: (delayAnim) => ({
    opacity: 1,
    transition: { duration: 1, delay: delayAnim },
  }),
  hiddenTitle: { opacity: 0 },
};

export const projectDescriptions = (projectName) => {
  const VisualStudio = "Visual Studio";
  const CPP = "C++";
  const OpenGL = "OpenGL";
  const UnrealEngine = "Unreal Engine";
  const Unity = "Unity";
  const CSharp = "C#";
  const HLSL = "HLSL";
  const CustomEngine = "Custom Engine";
  const HTML = "HTML";
  const CSS = "CSS";
  const JavaScript = "JavaScript";
  const ReactString = "React/JSX";
  const VSCode = "VSCode";

  const getTags = (tags) => {
    let some = 0;
    const toReturn = tags.map((element) => {
      some++;
      return (
        <li key={some} className="tag">
          {element}
        </li>
      );
    });

    return toReturn;
  };

  if (projectName === "Hyper Dot") {
    return (
      <div className="project-description">
        <ul className="project-tags">
          {getTags([`${VisualStudio}`, `${CPP}`, `${OpenGL}`])}
        </ul>
        <p>Welcome to Hyper Dot!</p> <br />
        <p>Setup:</p>
        <ul>
          <li style={{ marginLeft: "1.2rem" }}> You are a Circle.</li>
          <li style={{ marginLeft: "1.2rem" }}>
            {" "}
            Avoid the Red Triangles taking away your sides.{" "}
          </li>
          <li style={{ marginLeft: "1.2rem" }}>
            Use the Green Poly to gain a side and the Blue Poly to turn short
            for 5 seconds.
          </li>
        </ul>
        <br />
        <p>
          This game was made in a Custom Engine made using OpenGL and the shapes
          are rendered using only code. <br />
          The exercise was done in order to use custom collision.
        </p>
        <br />
        <p>
          This was my first big project in a fully custom engine which helped me
          learn Object Oriented Programming in depth and really understand its
          benefits and how it works.
        </p>
      </div>
    );
  } else if (projectName === "Grapple Hook") {
    return (
      <div className="project-description">
        <ul className="project-tags">
          {getTags([`${UnrealEngine}`, `${CPP}`, `${VisualStudio}`])}
        </ul>
        <p>Grapple Hook is one of the Heirloom abilities for Steelwalker.</p>
        <br />
        <p>
          This mechanic is built using custom physics and Unreal Engine's Cable
          Component to attach the player to the Grappling Points. Each Grappling
          Point has a minimum and maximum distance from it. The grapple pulls
          the player into its ideal distance while the player is swinging from
          it.
        </p>
        <br />
        <p>
          Steelwalker is the Capstone Project I've been working on with a group
          of 10 talented students from Algonquin College. You can learn more
          about the project{" "}
          <a
            href="https://particleinteractive.netlify.app/"
            onClick={(e) => {
              e.preventDefault();
              window.open(`https://particleinteractive.netlify.app/`, "_blank");
            }}
            style={{ fontWeight: "300", color: "rgb(0,200,255)" }}
          >
            here
          </a>
          .
        </p>
        <br />
        <p>
          My other responsibilities for Steelwalker include AI (Enemies &
          Friendlies), multiple gameplay elements and mechanics. Safe to say,
          this was my favourite mechanic I worked on in this project.
        </p>
      </div>
    );
  } else if (projectName === "Donkey Kong") {
    return (
      <div className="project-description">
        <ul className="project-tags">
          {getTags([
            `${CustomEngine}`,
            `${VisualStudio}`,
            `${CPP}`,
            `${OpenGL}`,
          ])}
        </ul>
        <p>
          A Donkey Kong clone made in a custom engine using 3rd party physics
          engine.
        </p>
        <br />
        <p>
          The barrels were used to learn the concept of Object Pooling. This
          helps with consistency in frame rates and optimization. Parts of the
          custom engine were made by students of a section and brought together
          by the project manager. This was the biggest team I have worked with
          consisting of over 20 programmers.
        </p>
        <br />
        <p>Assets belong to Nintendo.</p>
      </div>
    );
  } else if (projectName === "Asteroids") {
    return (
      <div className="project-description">
        <ul className="project-tags">
          {getTags([`${CustomEngine}`, `${VisualStudio}`, `${CPP}`])}
        </ul>
        <p>My best work of first year, this is Asteroids!</p>
        <br />
        <p>
          An arcade style game with 2 controls, this is an endless runner
          featuring 3 levels. Meteors get larger every level. Green Orbs heal
          the ship according to size. The ship is shielded for 1 second after
          being hit.
        </p>
        <br />
        <p>
          My first big introduction to Object Oriented Programming, working with
          controller class, gameplay logic, timers and much more.
        </p>
        <br />
        <p>Biggest take away from this project was code organization.</p>
      </div>
    );
  } else if (projectName === "Surface Shader") {
    return (
      <div className="project-description">
        <ul className="project-tags">
          {getTags([`${Unity}`, `${CSharp}`, `${HLSL}`])}
        </ul>
        <p>
          FOV cones of Enemy Guards are drawn using a surface shader. When the
          player is caught the shader's radius interpolates from maximum to a
          small value and increases its range to create a sniped-like image.
        </p>
        <br />
        <p>
          I really like the way player getting caught looks on the minimap.
          Shaders are used in games to create graphics that are modifiable and
          more optimized.
        </p>
        <br />
        <p>
          In this project, I learned about AI Navigation, making a minimap, and
          general UI in Unity.
        </p>
      </div>
    );
  } else if (projectName === "Bomberman AI") {
    return (
      <div className="project-description">
        <ul className="project-tags">
          {getTags([`${VisualStudio}`, `${CPP}`, `${OpenGL}`])}
        </ul>
        <p>
          My first go at building an AI, this project got me super interested on
          working with AIs.
        </p>
        <br />
        <p>
          The AI (Bottom Left) looks for walls to blow and place to be safe
          sequentially and tries surviving to its best.
        </p>
        <br />
        <p>
          This was also made in a custom engine. The game was made using a
          spritesheet for all its assets and animation poses.
        </p>
        <br />
        <p>Assets belong to Nintendo.</p>
      </div>
    );
  } else if (projectName === "Particle Interactive") {
    return (
      <div className="project-description">
        <ul className="project-tags">
          {getTags([`${ReactString}`, `${CSS}`, `${VSCode}`])}
        </ul>
        <p>
          Company Website for Particle Interactive (A group of game development
          students from Algonquin College).
        </p>
        <br />
        <p>
          The website features an About Us section for the team and a Dev Log
          for blog posts and updates on the game.
        </p>
        <br />
        <p>
          It's also completely responsive and my first try at building a
          Single-Page App (SPA).
        </p>
        <br />
      </div>
    );
  } else if (projectName === "Soda Bottles E-Shop") {
    return (
      <div className="project-description">
        <ul className="project-tags">
          {getTags([`${HTML}`, `${CSS}`, `${JavaScript}`])}
        </ul>
        <p>My first front-end project. Made using HTML, CSS and JavaScript.</p>
        <br />
        <p>
          This website serves as a E-Shop prototype. The goal was to learn and
          practice HTML, CSS by using it and add some dynamic behaviour with
          JavaScript.
        </p>
        <br />
        <br />
      </div>
    );
  }
};
