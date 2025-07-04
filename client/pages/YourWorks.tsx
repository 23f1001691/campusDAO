import { ChevronDown, Bell } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Campus Sustainability Initiative",
    tags: "Sustainability, Environment, Campus Improvement",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d7bda7857d0616083d150230093908f8b4271d6f?width=640",
  },
  {
    id: 2,
    title: "Tech Innovation Hub",
    tags: "Technology, Innovation, Student Collaboration",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2620edfacdd1cb57935ec9687ce087cf4b1ffee8?width=640",
  },
  {
    id: 3,
    title: "Arts & Culture Festival",
    tags: "Arts, Culture, Community Engagement",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0e959d16ffa941706d6d176fd25bf87f0a82079d?width=640",
  },
];

const FilterDropdown = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-2xl cursor-pointer hover:bg-gray-200 transition-colors">
    <span className="text-sm font-medium text-gray-900">{label}</span>
    <ChevronDown className="w-5 h-5 text-gray-900" />
  </div>
);

const SortButton = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
    <span className="text-sm font-medium text-gray-900">{label}</span>
  </div>
);

const ProjectCard = ({ project }: { project: (typeof projectsData)[0] }) => {
  const handleProjectClick = () => {
    // Navigate to project detail page or handle project click
    console.log(`Navigating to project: ${project.title}`);
    // You can add navigation logic here, for example:
    // navigate(`/project/${project.id}`);
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the parent click
    handleProjectClick();
  };

  return (
    <div
      className="flex justify-between items-start rounded-xl overflow-hidden cursor-pointer hover:bg-gray-50 transition-all duration-200 p-2 -m-2"
      onClick={handleProjectClick}
    >
      <div className="flex-1 space-y-4 pr-4">
        <div className="space-y-1">
          <div className="text-sm text-campus-text">Project Title</div>
          <h3 className="text-base font-bold text-gray-900 leading-5 hover:text-campus-blue transition-colors">
            {project.title}
          </h3>
          <div className="text-sm text-campus-text">Tags: {project.tags}</div>
        </div>
        <button
          onClick={handleViewDetails}
          className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium rounded-2xl hover:bg-gray-200 transition-colors"
        >
          View Details
        </button>
      </div>
      <div className="flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-80 h-44 object-cover rounded-xl transition-transform duration-200 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default function YourWorks() {
  return (
    <div className="min-h-screen bg-campus-bg font-public-sans">
      {/* Header */}
      <header className="bg-campus-bg border-b border-gray-200">
        <div className="px-10 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Logo */}
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-bold text-gray-900">CampusDAO</h1>
            </div>

            {/* Right side - Navigation, Notifications, Profile */}
            <div className="flex items-center gap-8">
              <nav className="flex items-center gap-9">
                <a
                  href="#"
                  className="text-sm text-gray-900 hover:text-campus-blue transition-colors"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-900 hover:text-campus-blue transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-900 hover:text-campus-blue transition-colors"
                >
                  Community
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-900 hover:text-campus-blue transition-colors"
                >
                  Resources
                </a>
              </nav>

              {/* Notifications */}
              <div className="p-2 bg-gray-100 rounded-full">
                <Bell className="w-5 h-5 text-gray-900" />
              </div>

              {/* Profile Image */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/10d11efc068397fd82bc8a7354060b1411315022?width=80"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-8 md:px-40 py-5">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="flex justify-between items-start mb-6 px-4">
            <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
            <button className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium rounded-2xl hover:bg-gray-200 transition-colors">
              Start New Project
            </button>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="flex items-start gap-8 px-4 border-b border-gray-300">
              <div className="flex flex-col items-center py-4 border-b-3 border-gray-200">
                <span className="text-sm font-bold text-gray-900">
                  My Created Projects
                </span>
              </div>
              <div className="flex flex-col items-center py-4 border-b-3 border-gray-200">
                <span className="text-sm font-bold text-campus-text">
                  Participated Projects
                </span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6 px-3">
            <FilterDropdown label="All" />
            <FilterDropdown label="Draft" />
            <FilterDropdown label="Active" />
            <FilterDropdown label="Voting" />
            <FilterDropdown label="Completed" />
            <FilterDropdown label="Rejected" />
          </div>

          {/* Sort By Section */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 px-4">
              Sort by
            </h2>
            <div className="flex gap-3 px-4">
              <SortButton label="Date" />
              <SortButton label="Status" />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-4 px-4">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
