const joinRequestsData = [
  {
    id: 1,
    name: "Ethan Carter",
    role: "Frontend Developer",
    status: "Pending",
  },
  {
    id: 2,
    name: "Olivia Harper",
    role: "Backend Developer",
    status: "Pending",
  },
  {
    id: 3,
    name: "Liam Bennett",
    role: "UI/UX Designer",
    status: "Pending",
  },
];

const governanceVotingData = [
  {
    id: 1,
    proposal: "Approve Ethan Carter",
    status: "Open",
    votingWeight: "NFT Count: 3",
    action: "Vote",
  },
  {
    id: 2,
    proposal: "Approve Olivia Harper",
    status: "Closed",
    votingWeight: "NFT Count: 2",
    action: "View Results",
  },
];

const votingHistoryData = [
  {
    id: 1,
    proposal: "Approve Liam Bennett",
    vote: "Yes",
    date: "2024-07-26",
  },
  {
    id: 2,
    proposal: "Approve Noah Thompson",
    vote: "No",
    date: "2024-07-20",
  },
];

const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center bg-campus-bg border-b border-gray-200">
    {children}
  </div>
);

const TableCell = ({
  children,
  width,
  isHeader = false,
  className = "",
}: {
  children: React.ReactNode;
  width: string;
  isHeader?: boolean;
  className?: string;
}) => (
  <div
    className={`px-4 py-3 flex flex-col justify-center items-center ${className}`}
    style={{ width }}
  >
    <div
      className={`w-full ${isHeader ? "text-sm font-medium text-gray-900" : "text-sm text-gray-900"}`}
    >
      {children}
    </div>
  </div>
);

const StatusBadge = ({ status }: { status: string }) => (
  <div className="inline-flex items-center justify-center px-4 py-1 bg-gray-100 rounded-2xl">
    <span className="text-sm font-medium text-gray-900">{status}</span>
  </div>
);

const ActionButton = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="text-sm font-bold text-campus-text hover:text-campus-blue transition-colors cursor-pointer"
  >
    {children}
  </button>
);

export default function DAOManagement() {
  return (
    <div className="min-h-screen bg-campus-bg font-public-sans">
      {/* Header */}
      <header className="bg-campus-bg border-b border-gray-200">
        <div className="px-10 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-bold text-gray-900">CampusDAO</h1>
            </div>

            {/* Right side - Navigation and Profile */}
            <div className="flex items-center gap-9">
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
                  Contributions
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-900 hover:text-campus-blue transition-colors"
                >
                  DAO
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-900 hover:text-campus-blue transition-colors"
                >
                  Profile
                </a>
              </nav>

              {/* Profile Image */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/224ae32d1a0fc745d65a6738ec6cd7d6eb770ed5?width=80"
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
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              DAO Management
            </h1>
          </div>

          {/* Join Requests Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3 px-4">
              Join Requests
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <TableHeader>
                <TableCell width="267px" isHeader>
                  Name
                </TableCell>
                <TableCell width="273px" isHeader>
                  Role
                </TableCell>
                <TableCell width="189px" isHeader>
                  Status
                </TableCell>
                <TableCell width="198px" isHeader className="text-campus-text">
                  Actions
                </TableCell>
              </TableHeader>

              {/* Table Rows */}
              {joinRequestsData.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center border-t border-gray-200 h-18"
                >
                  <TableCell width="267px">{request.name}</TableCell>
                  <TableCell width="273px" className="text-campus-text">
                    {request.role}
                  </TableCell>
                  <TableCell width="189px">
                    <StatusBadge status={request.status} />
                  </TableCell>
                  <TableCell width="198px">
                    <ActionButton>Approve/Reject</ActionButton>
                  </TableCell>
                </div>
              ))}
            </div>
          </div>

          {/* Governance Voting Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3 px-4">
              Governance Voting
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <TableHeader>
                <TableCell width="280px" isHeader>
                  Proposal
                </TableCell>
                <TableCell width="192px" isHeader>
                  Status
                </TableCell>
                <TableCell width="275px" isHeader>
                  Voting Weight
                </TableCell>
                <TableCell width="179px" isHeader className="text-campus-text">
                  Vote
                </TableCell>
              </TableHeader>

              {/* Table Rows */}
              {governanceVotingData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border-t border-gray-200 h-18"
                >
                  <TableCell width="280px">{item.proposal}</TableCell>
                  <TableCell width="192px">
                    <StatusBadge status={item.status} />
                  </TableCell>
                  <TableCell width="275px" className="text-campus-text">
                    {item.votingWeight}
                  </TableCell>
                  <TableCell width="179px">
                    <ActionButton>{item.action}</ActionButton>
                  </TableCell>
                </div>
              ))}
            </div>
          </div>

          {/* Voting History Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3 px-4">
              Voting History
            </h2>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <TableHeader>
                <TableCell width="315px" isHeader>
                  Proposal
                </TableCell>
                <TableCell width="304px" isHeader>
                  Vote
                </TableCell>
                <TableCell width="307px" isHeader>
                  Date
                </TableCell>
              </TableHeader>

              {/* Table Rows */}
              {votingHistoryData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border-t border-gray-200 h-18"
                >
                  <TableCell width="315px">{item.proposal}</TableCell>
                  <TableCell width="304px" className="text-campus-text">
                    {item.vote}
                  </TableCell>
                  <TableCell width="307px" className="text-campus-text">
                    {item.date}
                  </TableCell>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
