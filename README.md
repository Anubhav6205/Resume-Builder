<!DOCTYPE html>
<html>
<head>

</head>
<body>
  <h1>Resumify - Resume Builder</h1>

  <h2>Overview</h2>
  <p>
    Resumify is a resume builder web application that allows users to create professional resumes using customizable templates. It is built with Next.js, Framer Motion, SCSS, and html2pdf library to provide a seamless and visually appealing user experience. Resumify offers two templates with more under development, allowing users to choose the one that best suits their preferences.
  </p>

  <h2>Tech Stacks</h2>
  <ul>
    <li><strong>Next.js:</strong> Next.js is a powerful React framework that enables server-side rendering, static site generation, and other performance optimizations. It provides a smooth user experience and better SEO for the application.</li>
    <li><strong>Framer Motion:</strong> Framer Motion is a popular animation library for React applications. It adds fluid animations and transitions, enhancing the UI's interactivity and aesthetics.</li>
    <li><strong>SCSS:</strong> SCSS (Sass) is used for styling the application, allowing for easy and organized management of CSS styles with features like variables, nesting, and mixins.</li>
    <li><strong>html2pdf Library:</strong> The html2pdf library is used to convert the resume's HTML representation into a downloadable PDF format, enabling users to download their created resume seamlessly.</li>
  </ul>

  <h2>UI</h2>
  <p>
    Resumify offers an amazing and intuitive user interface, designed to provide a hassle-free experience for users. The UI consists of the following sections:
  </p>
  <ol>
    <li><strong>Home:</strong> The home page introduces the application and provides an option to start building the resume. It showcases a preview of the available templates and encourages users to get started.</li>
    <li><strong>Template Selection:</strong> Upon clicking the "Get Started" button, users are directed to the template selection page, where they can choose from the available resume templates. Each template is visually presented with a thumbnail and essential details.</li>
    <li><strong>Customization:</strong> Once the template is chosen, users are directed to the customization page. Here, they can add their projects, education details, skills, and work experience using a user-friendly form. The Framer Motion library is used here to add subtle animations, making the customization process engaging.</li>
    <li><strong>Preview:</strong> After customization, users can preview their resume with all the provided details. They can review the layout, formatting, and content to ensure everything looks perfect.</li>
    <li><strong>Download:</strong> When satisfied with the resume, users can click the "Download PDF" button to convert the resume into a downloadable PDF format. The html2pdf library takes care of this conversion process, and users can seamlessly download their finished resume.</li>
  </ol>

  <h2>Installation Guide</h2>
  <p>
    To clone and run the Resumify application on your local machine, follow these steps:
  </p>
  <ol>
    <li><strong>Clone the Repository:</strong></li>
    <code>git clone https://github.com/yourusername/resumify.git</code>
    <code>cd resumify</code>

    <li><strong>Install Dependencies:</strong></li>
    <code>npm install</code>

    <li><strong>Start the Development Server:</strong></li>
    <code>npm run dev</code>

    <li><strong>Access the Application:</strong></li>
    <p>Open your web browser and go to <a href="http://localhost:3000">http://localhost:3000</a>. The Resumify application should now be up and running, allowing you to create professional resumes with ease.</p>
  </ol>

  <p>
    Feel free to explore, customize, and enhance the application further as per your needs. If you encounter any issues or have any feedback, don't hesitate to report them on the GitHub repository.
  </p>

  <p>
    Happy resume building with Resumify! 😊
  </p>
</body>
</html>
