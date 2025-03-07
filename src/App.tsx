import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  // ChevronDown,
} from "lucide-react";

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-gray-800">
              Olabiyi Olaleye
            </span>
            <div className="space-x-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-600 hover:text-gray-900"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-600 hover:text-gray-900"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-600 hover:text-gray-900"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-gray-900"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <img
                // src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop"
                src="/assets/OLABIYI.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Data Analyst & Insights Specialist
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Hello, I'm Olabiyi Olaleye, a data analyst with a background in
                Economics, Mathematics, and Statistics. My passion lies in
                transforming raw data into meaningful insights using tools like
                SQL, Excel, and Power BI. I thrive on analyzing complex datasets
                to uncover patterns, trends, and trends. With a years of
                experience in the field of data analysis, and over 4 years of
                experience in software development, I specialize in creating
                clear, impactful visualizations and developing data-driven
                solutions.
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://medium.com/@olabiyi/my-journey-into-data-analysis-cbe88c28c210",
                    "_blank"
                  )
                }
                className="flex items-center gap-2 text-blue-600 hover:text-blue-900"
              >
                About Me
                {/* <ChevronDown size={20} /> */}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-200 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "E-commerce Analysis",
                description:
                  "This project analyzes sales data from a Brazilian e-commerce company using SQL to uncover key insights into customer behavior, sales trends, and product performance. By cleaning and querying over 100,000 records, I identified high-demand product categories, regional sales distribution, and delivery efficiency across states. The analysis highlights opportunities for optimizing logistics, enhancing customer retention, and leveraging seasonal sales patterns. These insights can help businesses refine their strategies for growth and operational efficiency.",
                tools: "SQL",
                link: "https://github.com/DataByOlabiyi/SQL_Project_Ecommerce_Analysis",
              },
              {
                title:
                  "Vintage Couture: Data-Driven Strategies for Sustainable Growth",
                description:
                  "Vintage Couture is a boutique retailer specializing in unique vintage fashion. This project analyzes sales data to optimize inventory, enhance customer engagement, and refine marketing strategies. Using Power BI, key insights reveal trends in demographics, sales channels, and regional performance. The findings provide data-driven recommendations to drive sustainable growth in the competitive vintage fashion market.",
                tools: "Power BI",
                link: "https://github.com/DataByOlabiyi/PowerBI_Project_Vintage_Couture",
              },
              {
                title: "Global Data Science Salaries During the COVID-19 Era",
                description:
                  "This project analyzes global data science salaries during the COVID-19 era, highlighting key trends across regions, experience levels, and job roles. Using Microsoft Excel for data cleaning, transformation, and visualization, it uncovers salary disparities influenced by remote work, company size, and industry demand. The interactive dashboard enables users to explore salary trends and gain actionable insights for career and hiring decisions. This study provides a comprehensive view of how the pandemic reshaped data science compensation worldwide.",
                tools: "Microsoft Excel",
                link: "https://github.com/DataByOlabiyi/Excel_Project_Global_Data_Science_Salaries",
              },
              // {
              //   title: "Customer Churn Prediction",
              //   description:
              //     "Built a machine learning model to predict customer churn with 85% accuracy, helping the company retain at-risk customers through targeted interventions.",
              //   tools: "Python, TensorFlow, SQL",
              //   link: "https://github.com/example/churn-prediction",
              // },
              // {
              //   title: "Supply Chain Optimization",
              //   description:
              //     "Created an automated reporting system that reduced manual reporting time by 70% and improved inventory management efficiency.",
              //   tools: "SQL, Excel, Power BI",
              //   link: "https://github.com/example/supply-chain",
              // },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  {project.tools}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Data Analysis
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>SQL (PostgreSQL, MySQL)</li>
                {/* <li>Python (Pandas, NumPy)</li> */}
                <li>R Programming (In Progress)</li>
                <li>Excel (Advanced)</li>
                <li>Statistical Analysis</li>
                <li>Data Modeling</li>
                <li>ETL Processes</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Visualization
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>Power BI</li>
                <li>Excel</li>
                {/* <li>Tableau</li> */}
                {/* <li>Matplotlib</li> */}
                {/* <li>Seaborn</li> */}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Other Skills
              </h3>
              <ul className="space-y-2 text-gray-600">
                {/* <li>Machine Learning</li> */}
                <li>Team Work, Communication and Time Management</li>
                <li>Critical Thinking</li>
                <li>Leadership</li>
                <li>Problem Solving</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-200 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get in Touch
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="text-gray-600 mb-6">
                I'm always interested in new opportunities and collaborations.
                Feel free to reach out through any of the following channels:
              </p>
              <div className="space-y-4">
                <a
                  href="https://linkedin.com/in/olabiyi-olaleye-94b896128"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-800"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a
                  href="https://github.com/DataByOlabiyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-800"
                >
                  <Github size={20} /> GitHub
                </a>
                <a
                  href="mailto:olabiyi.olaleye03@gmail.com"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-800"
                >
                  <Mail size={20} /> olabiyi.olaleye03@gmail.com
                </a>
              </div>
            </div>
            <div className="flex-1">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 border-t">
        <p>© 2025 Olabiyi Olaleye. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
